import React from 'react';

export  function About ()  {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
        
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6">
            Welcome to our store! We're passionate about delivering quality products
            and exceptional service to our customers.
          </p>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To provide our customers with the highest quality products while maintaining
              excellent customer service and competitive prices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Quality First</h3>
              <p className="text-gray-600">
                We carefully select and verify all our products to ensure they meet
                our high standards of quality and durability.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Customer Focus</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We're here to help you find
                exactly what you need and provide support every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};