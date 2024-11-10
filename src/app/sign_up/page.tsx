"use client";

import React, { useState } from 'react';
import MainLayout from '@/components/layouts/MainLayout';

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    password: '',
  });
  const [message, setMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage(result.message);
        setFormData({ fullName: '', username: '', password: '' });
      } else {
        setMessage(result.error || 'An error occurred');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setMessage('An error occurred during sign up. Please try again.');
    }
  };

  return (
    <MainLayout>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
          {message && <p className="text-center text-red-500">{message}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-gray-400"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-gray-400"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-gray-400"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default SignUp;
