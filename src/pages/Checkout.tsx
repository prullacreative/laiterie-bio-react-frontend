import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Checkout() {
  const [panier, setPanier] = useState([
    { id: 1, nom: 'Lait frais bio 1L', quantite: 2, prix: 1200 },
    { id: 2, nom: 'Lait local 500ml', quantite: 1, prix: 700 },
  ]);

  const fraisLivraison = 1000;
  const sousTotal = panier.reduce((total, item) => total + item.prix * item.quantite, 0);
  const total = sousTotal + fraisLivraison;

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success('🎉 Commande confirmée avec succès !', {
      position: 'top-center',
      autoClose: 3000,
    });

    // Tu peux aussi envoyer les infos au backend ici
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <ToastContainer />
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Finaliser la commande</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Formulaire de livraison */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-6">Informations de livraison</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nom complet
              </label>
              <input
                type="text"
                id="name"
                required
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
                required
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
                required
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

        {/* Récapitulatif commande */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-6">Récapitulatif de la commande</h2>
          <div className="space-y-4">
            {panier.map((item) => (
              <div key={item.id} className="flex justify-between text-gray-700">
                <span>{item.nom} × {item.quantite}</span>
                <span>{(item.prix * item.quantite).toLocaleString('fr-FR')} CFA</span>
              </div>
            ))}
            <div className="flex justify-between pt-2 border-t">
              <span>Sous-total</span>
              <span>{sousTotal.toLocaleString('fr-FR')} CFA</span>
            </div>
            <div className="flex justify-between">
              <span>Livraison</span>
              <span>{fraisLivraison.toLocaleString('fr-FR')} CFA</span>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between font-semibold text-lg text-gray-900">
                <span>Total</span>
                <span>{total.toLocaleString('fr-FR')} CFA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
