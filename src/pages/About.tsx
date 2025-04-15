import React from 'react';

export function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">À propos de notre laiterie</h1>

        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6">
            Bienvenue dans notre univers laitier ! Nous sommes une entreprise locale engagée à
            offrir des produits laitiers frais, naturels et de haute qualité à nos clients.
          </p>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Notre mission</h2>
            <p className="text-gray-600">
              Promouvoir une alimentation saine à travers des produits laitiers savoureux et
              authentiques, issus de pratiques durables et responsables.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Produits frais et locaux</h3>
              <p className="text-gray-600">
                Nos laits, yaourts et fromages sont préparés chaque jour avec du lait frais
                provenant de producteurs locaux. Aucun conservateur, juste la fraîcheur et le goût.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Proximité avec nos clients</h3>
              <p className="text-gray-600">
                Nous croyons en une relation de confiance et de proximité. Votre satisfaction est
                notre priorité, et nous restons à votre écoute pour améliorer chaque jour notre
                service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
