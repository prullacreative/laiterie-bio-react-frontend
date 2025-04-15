import React from 'react';
import ProduitCard from './ProduitCard';
import { products } from '../data/products';

export default function FeaturedProducts() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Nos Produits Phares</h2>
            <p className="mt-2 text-gray-600">Découvrez notre sélection de produits les plus appréciés</p>
          </div>
          <button className="text-blue-600 hover:text-blue-700 font-semibold">
            Voir tout →
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((produit) => (
            <ProduitCard key={produit.id} produit={produit} onAddToCart={function (quantity: number): void {
              throw new Error('Function not implemented.');
            } } />
          ))}
        </div>
      </div>
    </div>
  );
}