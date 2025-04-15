import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Milk, ShoppingCart, User, Menu, X } from 'lucide-react';

export  function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Milk className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">Laiterie Bio</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600">Accueil</Link>
            <Link to="/produits" className="text-gray-700 hover:text-blue-600">Produits</Link>
            <Link to="/a-propos" className="text-gray-700 hover:text-blue-600">À Propos</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
            <Link to="/panier" className="text-gray-700 hover:text-blue-600">
              <ShoppingCart className="h-6 w-6" />
            </Link>
            <Link to="/compte" className="text-gray-700 hover:text-blue-600">
              <User className="h-6 w-6" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link
                to="/produits"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Produits
              </Link>
              <Link
                to="/a-propos"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                onClick={() => setIsMenuOpen(false)}
              >
                À Propos
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/panier"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Panier
              </Link>
              <Link
                to="/compte"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Mon Compte
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}