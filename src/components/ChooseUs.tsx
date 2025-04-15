import React from "react";
import { motion } from "framer-motion";

const features = [
  { title: "Pourquoi le bio ?", text: "Des produits sans produits chimiques pour votre santé.", number: "01" },
  { title: "Livraison rapide", text: "Recevez vos produits en moins de 24h.", number: "02", highlight: true },
  { title: "Produits locaux", text: "Soutenez les producteurs de votre région.", number: "03" },
  { title: "Sans additifs", text: "Du lait pur, sans aucun ajout inutile.", number: "04" },
  { title: "Prix juste", text: "Nous respectons l’agriculteur autant que vous.", number: "05" },
  { title: "Satisfait ou remboursé", text: "14 jours pour changer d’avis.", number: "06" },
];

const ChooseUs = () => {
  return (
    <div className="bg-blue-50 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Pourquoi Choisir <span className="text-blue-600">Nos Produits ?</span></h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-12">
          Tous nos produits sont conçus avec amour, soin et un profond respect de la nature. Découvrez pourquoi des milliers de clients nous font confiance.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ title, text, number, highlight }, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className={`relative p-6 rounded-xl shadow-md transition-all duration-300 ${
                highlight ? "bg-white text-blue-700 ring-2 ring-blue-400" : "bg-gray-800 text-white"
              }`}
            >
              <div className="text-5xl font-bold text-gray-300 absolute top-4 right-4 opacity-20">{number}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-sm">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
