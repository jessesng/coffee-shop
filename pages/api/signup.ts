import { NextApiRequest, NextApiResponse } from 'next';
import mysql from 'mysql2/promise';

const dbConfig = {
  host: 'localhost', 
  user: 'root', 
  password: '', 
  database: 'my_db', 
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { fullName, username, password } = req.body;


  if (!fullName || !username || !password) {
    return res.status(400).json({ error: 'Please fill out all fields' });
  }

  try {
    const connection = await mysql.createConnection(dbConfig);

   
    const [existingUser] = await connection.query(
      'SELECT * FROM user WHERE username = ?',
      [username]
    );

    if ((existingUser as any[]).length > 0) {
      return res.status(400).json({ error: 'Username is already taken' });
    }

    const [result] = await connection.query(
      'INSERT INTO user (fullname, username, password) VALUES (?, ?, ?)',
      [fullName, username, password] 
    );

    const insertResult = result as mysql.ResultSetHeader;

    connection.end();

    if (insertResult.affectedRows > 0) {
      res.status(201).json({ message: 'User registered successfully' });
    } else {
      res.status(500).json({ error: 'Failed to insert user into database' });
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error during signup:', error.message);
      res.status(500).json({ error: `Database connection error: ${error.message}` });
    } else {
      console.error('Unknown error during signup');
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
}
