import React from 'react';
import { Milk, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Milk className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-semibold">Laiterie Bio</span>
            </div>
            <p className="text-gray-400">
              Des produits laitiers frais et locaux, 
              faits avec amour au cœur du Bénin.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Produits</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Lait</a></li>
              <li><a href="#" className="hover:text-white">Yaourts</a></li>
              <li><a href="#" className="hover:text-white">Fromages</a></li>
              <li><a href="#" className="hover:text-white">Crème</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Informations</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">À propos</a></li>
              <li><a href="#" className="hover:text-white">Livraison</a></li>
              <li><a href="#" className="hover:text-white">Conditions Générales</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Quartier Zogbo</li>
              <li>Cotonou, Bénin</li>
              <li>+229 01 51 86 83 42</li>
              <li>prullacreative@gmail.com</li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {year} Laiterie Bio. Tous droits réservés. Créé par <a href="mailto:prullacreative@gmail.com" className="hover:text-white">prullacreative@gmail.com</a></p>
        </div>
      </div>
    </footer>
  );
}
