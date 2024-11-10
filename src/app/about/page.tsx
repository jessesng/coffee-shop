import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';

const AboutPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="relative bg-[#f5f5dc] min-h-screen flex items-center justify-center p-8">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/premium-photo/blurred-soft-people-meeting-table-business-people-talking-modern-office-ar-169-style-raw-v-6-job-id-f4feca836edb44bcaf44a2d03c0f9526_997534-32856.jpg?ga=GA1.1.310383273.1728267951&semt=ais_hybrid')", // Replace with your actual background image URL
          }}
        />

        {/* Content Container */}
        <div className="relative z-10 max-w-3xl mx-auto text-gray-800 text-center">
          <h1 className="text-4xl font-bold text-brown-800 mb-6">About Us</h1>

          <p className="text-lg mb-4">
            Welcome to <strong>Dream Bean Coffee Shop</strong>, your cozy escape from the everyday hustle. Established in 2020, we are dedicated to crafting memorable coffee experiences for our community.
          </p>

          <h2 className="text-2xl font-semibold text-brown-800 mt-6 mb-4">Our Mission</h2>
          <p className="text-lg mb-4">
            Our mission is to provide a warm and inviting space where customers can enjoy the finest coffee and pastries while fostering connections with friends, family, and the community.
          </p>

          <h2 className="text-2xl font-semibold text-brown-800 mt-6 mb-4">Our Values</h2>
          <p className="text-lg mb-4">
            We believe in quality, sustainability, and community. We source our coffee beans from ethical farms and ensure our pastries are made with the freshest ingredients. Every cup we serve is brewed with care, aiming to bring joy to your day.
          </p>

          <h2 className="text-2xl font-semibold text-brown-800 mt-6 mb-4">Community Involvement</h2>
          <p className="text-lg mb-4">
            At Dream Bean, we are committed to giving back. We regularly host community events, support local artists by showcasing their work, and donate a portion of our profits to local charities. We believe in creating a positive impact in our community.
          </p>

          <h2 className="text-2xl font-semibold text-brown-800 mt-6 mb-4">What Makes Us Special</h2>
          <p className="text-lg mb-4">
            Our café is more than just a place to grab a coffee; it’s a space for inspiration and creativity. With cozy seating, free Wi-Fi, and an inviting atmosphere, we encourage our customers to relax, work, or socialize. Our friendly baristas are always eager to recommend a new drink or pastry, ensuring that every visit feels personalized.
          </p>

          <p className="text-lg mb-4">
            Come visit us at Dream Bean Coffee Shop and let us make your day a little brighter, one cup at a time. We can’t wait to welcome you!
          </p>

          {/* Call to Action Button */}
          <a
            href="/contact"
            className="mt-6 inline-block bg-brown-800 text-white text-lg font-semibold py-2 px-4 rounded transition duration-300 hover:bg-brown-600"
          >
            
          </a>
        </div>
      </div>
    </MainLayout>
  );
}

export default AboutPage;
