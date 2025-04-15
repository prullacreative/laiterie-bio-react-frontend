import React, { useState } from 'react';
import ProduitCard from '../components/ProduitCard';
import { products } from '../data/products';
import { Product } from '../types';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export  function Products () {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const categories = ['all', ...new Set(products.map(p => p.category))];

  const filteredProducts = products
    .filter(p => selectedCategory === 'all' || p.category === selectedCategory)
    .filter(p =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const handleAddToCart = (product: Product) => {
    // TODO: Implement cart functionality
    console.log('Ajouté au panier :', product);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Nos Produits</h1>
          <p className="mt-2 text-gray-600">Découvrez notre sélection de produits d'exception</p>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Rechercher un produit..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full transition-colors ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">Aucun produit trouvé</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
             <Link key={product.id} to={`/produits/${product.id}`}>
            <ProduitCard
              key={product.id}
              produit={product}
              onAddToCart={() => handleAddToCart(product)}
            />
           </Link>
          ))}
        </div>
      )}
    </div>
  );
};
