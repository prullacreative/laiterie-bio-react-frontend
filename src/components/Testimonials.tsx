import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion'; // Utilisation de Framer Motion pour les animations

const temoignages = [
  {
    id: 1,
    nom: 'Koffi Dossou',
    texte: 'Ce lait bio est incroyable, il est crémeux et délicieux. Je n\'ai plus envie d\'acheter autre chose !',
    image: 'https://randomuser.me/api/portraits/men/80.jpg', // Image d'une personne noire
  },
  {
    id: 2,
    nom: 'Aminatou Sossa',
    texte: 'J\'ai acheté des yaourts bio et je suis ravie ! La texture est parfaite et le goût est exquis. Je recommande vivement.',
    image: 'https://randomuser.me/api/portraits/women/69.jpg', // Image d'une personne noire
    active: true,
  },
  {
    id: 3,
    nom: 'Abdoulaye Aho',
    texte: 'Les fromages sont absolument délicieux. Un vrai régal ! Je suis devenue fidèle à cette marque.',
    image: 'https://randomuser.me/api/portraits/men/91.jpg', // Image d'une personne noire
  },
];

export default function Temoignages() {
  return (
    <div className="bg-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Texte de gauche */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-400 leading-tight">
            Ce que disent <br /> nos clients
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Nous plaçons la satisfaction de nos clients au cœur de nos priorités. Découvrez leurs témoignages inspirants sur nos produits bio.
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-blue-300 text-white px-6 py-2 rounded-md shadow hover:opacity-90 transition">
            Voir plus
          </button>
        </motion.div>

        {/* Cartes témoignages avec animation au survol */}
        <div className="space-y-4 relative">
          {temoignages.map((temoin) => (
            <motion.div
              key={temoin.id}
              className={`flex items-start gap-4 p-5 rounded-lg shadow ${temoin.active ? 'bg-white border-l-4 border-blue-600' : 'bg-gray-50'}`}
              whileHover={{
                scale: 1.05,
                boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.2)',
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img
                src={temoin.image}
                alt={temoin.nom}
                className="w-12 h-12 rounded-full object-cover mt-1"
              />
              <div>
                <h3 className="text-blue-700 font-semibold">{temoin.nom}</h3>
                <p className="text-gray-600 text-sm mt-1">{temoin.texte}</p>
              </div>
              {temoin.active && (
                <Quote className="w-5 h-5 text-blue-500 ml-auto" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
