import React from 'react';

export  function Checkout() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Finaliser la commande</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-6">Informations de livraison</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nom complet
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Adresse
              </label>
              <input
                type="text"
                id="address"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Confirmer la commande
            </button>
          </form>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-6">Récapitulatif de la commande</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Sous-total</span>
              <span>0.00 €</span>
            </div>
            <div className="flex justify-between">
              <span>Livraison</span>
              <span>0.00 €</span>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>0.00 €</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}