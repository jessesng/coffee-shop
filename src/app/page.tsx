import React from "react";
import MainLayout from "@/components/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div className="bg-[#f5f5dc] min-h-screen relative p-8 flex flex-col">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-left opacity-50"
          style={{
            backgroundImage:
              "url('https://mir-s3-cdn-cf.behance.net/project_modules/fs/e43650135373233.61e6de7f34b59.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "left",
          }}
        />

        {/* Content Container */}
        <div className="relative z-10 flex-grow flex flex-col justify-center">  
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-georgia text-brown-800 mb-4">Dream Bean Coffee Shop</h1>
            <p className="text-lg text-gray-600">
              Enjoy a cozy atmosphere with the finest coffee and pastries.
            </p>
          </div>

          {/* Menu Section */}
          <div className="mt-12 w-full flex flex-col items-center">
            {/* Menu Title */}
            <h2 className="text-2xl font-bold text-brown-800 mb-8">Special Menu:</h2>

            <div className="flex flex-wrap justify-center items-start gap-4">
              {/* Espresso Item */}
              <div className="bg-white rounded-lg shadow-md p-6 w-72 text-center flex flex-col transition-transform transform hover:scale-105">
                <img
                  src="https://img.freepik.com/free-photo/brown-gold-double-bar-steel_1172-321.jpg?ga=GA1.1.310383273.1728267951&semt=ais_hybrid"
                  alt="Espresso"
                  className="w-full h-40 object-cover rounded mb-4"
                />
                <h3 className="text-xl font-semibold text-brown-800">Espresso</h3>
                <p className="text-gray-600 mt-2">
                  Experience the rich, bold flavors of our expertly crafted espresso.
                </p>
                <span className="text-gray-800 font-bold mt-4 block">120.00</span>
              </div>

              {/* Cappuccino Item */}
              <div className="bg-white rounded-lg shadow-md p-6 w-72 text-center flex flex-col transition-transform transform hover:scale-105">
                <img
                  src="https://img.freepik.com/free-photo/cup-coffee-latte-wood-table-coffee-shop-cafe_1150-12750.jpg?ga=GA1.1.310383273.1728267951&semt=ais_hybrid"
                  alt="Cappuccino"
                  className="w-full h-40 object-cover rounded mb-4"
                />
                <h3 className="text-xl font-semibold text-brown-800">Cappuccino</h3>
                <p className="text-gray-600 mt-2">
                  Our signature cappuccino is rich and creamy, topped with frothy milk.
                </p>
                <span className="text-gray-800 font-bold mt-4 block">140.00</span>
              </div>

              {/* Croissant Item */}
              <div className="bg-white rounded-lg shadow-md p-6 w-72 text-center flex flex-col transition-transform transform hover:scale-105">
                <img
                  src="https://img.freepik.com/free-photo/croissants-old-wood-table_1150-12247.jpg?ga=GA1.1.310383273.1728267951&semt=ais_hybrid"
                  alt="Croissant"
                  className="w-full h-40 object-cover rounded mb-4"
                />
                <h3 className="text-xl font-semibold text-brown-800">Croissant</h3>
                <p className="text-gray-600 mt-2">
                  Flaky and buttery croissants, perfect for a morning treat.
                </p>
                <span className="text-gray-800 font-bold mt-4 block">89.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
