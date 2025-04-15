import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { produits } from '../data/produits';
import {
  ShoppingCart,
  Heart,
  Share2,
  Star,
  Truck,
  Clock,
  Leaf,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { FaCow } from 'react-icons/fa6';

export function ProductDetail() {
  const { id } = useParams();
  const produit = produits.find(p => p.id === Number(id));

  if (!produit) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p>Produit non trouvé</p>
      </div>
    );
  }

  return (
    <div className="bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-2xl p-8 shadow-lg">
          {/* Colonne images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <img
                src={produit.image}
                alt={produit.nom}
                className="w-full h-96 object-cover rounded-lg"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full flex items-center text-sm">
                  <Leaf className="h-4 w-4 mr-1" />
                  Bio
                </div>
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center text-sm">
                  <FaCow className="h-4 w-4 mr-1" />
                  Local
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mt-4">
              {[1, 2, 3, 4].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  className="relative cursor-pointer"
                >
                  <img 
                    src={produit.image}
                    alt=""
                    className="w-full h-24 object-cover rounded-lg"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Colonne informations */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              {produit.nom}
              <span className="block text-xl text-gray-500 mt-2">
                Ferme de la Vallée Heureuse
              </span>
            </h1>

            {/* Notation */}
            <div className="flex items-center mb-4">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-6 w-6 fill-current"
                    fill={i < 4 ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
              <span className="ml-2 text-gray-600">4.8 (248 avis)</span>
            </div>

            {/* Bloc prix */}
            <div className="bg-blue-100 p-4 rounded-xl mb-6 border border-blue-200">
              <p className="text-4xl font-bold text-blue-800">
                {produit.prix.toLocaleString()} CFA
                <span className="text-lg ml-2 text-gray-600">/ Litre</span>
              </p>
              <div className="flex items-center gap-2 mt-2 text-blue-700">
                <Clock className="h-5 w-5" />
                <span className="text-sm">Livré en 24h maximum</span>
              </div>
            </div>

            {/* Description produit */}
            <div className="prose max-w-none text-gray-700 mb-8">
              <p>
                {produit.description}
                <br /><br />
                <span className="font-semibold">Caractéristiques :</span>
                <ul className="list-disc pl-6 mt-2">
                  <li>100% lait cru transformé à la ferme</li>
                  <li>Pasteurisé à 72°C pendant 20 secondes</li>
                  <li>Conditionné en bouteille verre consignée</li>
                  <li>Certifié agriculture biologique (ECOCERT)</li>
                </ul>
              </p>
            </div>

            {/* Format disponible */}
            <div className="mb-8">
              <h3 className="font-semibold mb-3 text-gray-700 text-lg">Format disponible</h3>
              <div className="flex gap-3">
                {['1L', '500ml', '2L'].map((volume) => (
                  <motion.button
                    key={volume}
                    whileHover={{ y: -2 }}
                    className={`px-6 py-2 rounded-xl border-2 ${
                      volume === '1L'
                        ? 'border-blue-600 bg-blue-50 text-blue-800'
                        : 'border-gray-200 text-gray-600 hover:border-blue-400'
                    }`}
                  >
                    {volume}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Ajouter au panier */}
            <div className="mb-8">
              <div className="flex items-center gap-6">
                <div className="flex items-center space-x-4 bg-blue-50 rounded-full p-1">
                  <motion.button
                    className="w-10 h-10 rounded-full flex items-center justify-center text-blue-600 hover:bg-white"
                    whileTap={{ scale: 0.95 }}
                  >
                    -
                  </motion.button>
                  <span className="text-lg w-8 text-center">1</span>
                  <motion.button
                    className="w-10 h-10 rounded-full flex items-center justify-center text-blue-600 hover:bg-white"
                    whileTap={{ scale: 0.95 }}
                  >
                    +
                  </motion.button>
                </div>
                <Link to="/checkout" className="flex-1">
                  <motion.button
                    className="w-full bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 flex items-center gap-2 text-lg justify-center"
                    whileHover={{ scale: 1.02 }}
                  >
                    <ShoppingCart className="h-6 w-6" />
                    Ajouter au panier - {produit.prix.toLocaleString()} CFA
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
