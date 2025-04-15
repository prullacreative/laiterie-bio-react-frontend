import React, { useState } from 'react';
import { ShoppingCart, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Product } from '../types';

interface ProduitCardProps {
  produit: Product;
  onAddToCart: (quantity: number) => void;
}

export default function ProduitCard({ produit, onAddToCart }: ProduitCardProps) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setQuantity(value > 0 ? value : 1);
  };

  return (
    <motion.div
      className="bg-white rounded-[28px] shadow-lg flex flex-col overflow-hidden transition-all w-full max-w-sm mx-auto"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Image produit + cœur */}
      <div className="relative">
        <img
          src={produit.image}
          alt={produit.name}
          className="w-full h-56 object-cover rounded-t-[28px]"
        />
        <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md cursor-pointer hover:scale-110 transition">
          <Heart className="w-5 h-5 text-gray-400 hover:text-blue-500" />
        </div>
      </div>

      {/* Contenu */}
      <div className="bg-blue-50 p-5 flex flex-col gap-3">
        {/* Titre produit */}
        <h3 className="text-xl font-semibold text-gray-800 text-center">
          {produit.name}
        </h3>

        {/* Prix */}
        <div className="text-center">
          <span className="inline-block bg-white px-4 py-1 rounded-full font-bold text-blue-700 text-md shadow-sm">
            {produit.price} FCFA
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500 text-center leading-5 px-3">
          {produit.description}
        </p>

        {/* Quantité + bouton */}
        <div className="mt-3 flex items-center justify-between">
          <div className="flex flex-col w-24">
            <label htmlFor={`quantity-${produit.id}`} className="text-xs text-gray-600 mb-1">
              Quantité
            </label>
            <input
              id={`quantity-${produit.id}`}
              type="number"
              min={1}
              value={quantity}
              onChange={handleQuantityChange}
              className="w-full rounded-md border border-gray-300 px-2 py-1 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            />
          </div>

          <button
            onClick={() => onAddToCart(quantity)}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
          >
            <ShoppingCart className="h-4 w-4" />
            Ajouter
          </button>
        </div>
      </div>
    </motion.div>
  );
}
