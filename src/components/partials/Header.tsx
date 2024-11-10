import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Welcome to my Cafe */}
        <h1 className="text-3xl font-bold text-brown-800">
          <Link href="/" className="hover:text-gray-300">
            “Experience the Art of Coffee.”
          </Link>
        </h1>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-lg hover:text-gray-300 transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-lg hover:text-gray-300 transition duration-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-lg hover:text-gray-300 transition duration-300">
                Contact Us
              </Link>
            </li>
            {/* Sign Up link */}
            <li>
              <Link href="/sign_up" className="text-lg hover:text-gray-300 transition duration-300">
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
