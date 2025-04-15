import React from 'react';
import { Leaf, Truck, Shield } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: <Leaf className="w-8 h-8 text-green-600 mb-4" />,
      title: "100% Bio",
      description: "Tous nos produits sont certifiés biologiques et proviennent de fermes locales."
    },
    {
      icon: <Truck className="w-8 h-8 text-blue-600 mb-4" />,
      title: "Livraison Rapide",
      description: "Livraison gratuite à partir de 50€ d'achat, dans un délai de 24-48h."
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600 mb-4" />,
      title: "Qualité Garantie",
      description: "Satisfaction garantie ou remboursé sous 14 jours."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Pourquoi Choisir Nos Produits ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}