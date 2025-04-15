import React from 'react';
import { categories } from '../data/categories';

export default function Categories() {
  return ( 
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Nos Catégories de Produits
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
            >
              <img 
                src={category.image} 
                alt={category.nom}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{category.nom}</h3>
                  <p className="text-white/80 text-sm">{category.nombreProduits} produits</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}