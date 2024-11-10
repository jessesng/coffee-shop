import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';

const Contact: React.FC = () => {
  return (
    <MainLayout>
      <div className="bg-[#f5f5dc] min-h-screen relative p-8 flex flex-col">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-photo/hot-latte-coffee-white-cup-table_74190-6237.jpg?ga=GA1.1.310383273.1728267951&semt=ais_hybrid')", // Replace with your actual background image URL
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Content Container */}
        <div className="relative z-10 max-w-2xl mx-auto p-4 bg-white bg-opacity-80 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-center my-8">Contact Us</h1>

          {/* Additional Information Section */}
          <h2 className="text-2xl font-bold text-brown-800 mb-4">Information:</h2>
          <p className="mb-4">
            Address: <strong>123 Coffee Lane, Brewtown, CA 90210</strong>
          </p>
          <p className="mb-4">
            Phone: <strong>(123) 456-7890</strong>
          </p>
          <p className="mb-4">
            Email: <strong>info@dreambeancoffee.com</strong>
          </p>
          <h3 className="text-xl font-semibold text-brown-800 mt-6 mb-2">Follow Us</h3>
          <p className="mb-4">
            Stay connected with us on social media for the latest updates and promotions!
          </p>
          <ul className="list-disc list-inside">
            <li>
              <a href="https://www.facebook.com/DreamBeanCoffee" className="text-brown-800 hover:underline">Facebook</a>
            </li>
            <li>
              <a href="https://www.instagram.com/DreamBeanCoffee" className="text-brown-800 hover:underline">Instagram</a>
            </li>
            <li>
              <a href="https://www.twitter.com/DreamBeanCoffee" className="text-brown-800 hover:underline">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
    </MainLayout>
  );
}

export default Contact;
