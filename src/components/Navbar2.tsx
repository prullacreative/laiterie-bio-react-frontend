import React from 'react';
import { Link } from 'react-router-dom';
import { Milk, ShoppingCart, User } from 'lucide-react';

export const Navbar2 = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Milk className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">LaitierPro</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/products" className="text-gray-700 hover:text-blue-600">
              Produits
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600">
              À Propos
            </Link>
            <Link to="/cart" className="text-gray-700 hover:text-blue-600">
              <ShoppingCart className="h-6 w-6" />
            </Link>
            <Link to="/admin" className="text-gray-700 hover:text-blue-600">
              <User className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};