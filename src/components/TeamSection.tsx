import React from 'react';

const team = [
  {
    name: 'Koffi Ahouandjinou',
    role: 'Responsable Production',
    image: 'https://randomuser.me/api/portraits/men/53.jpg',
    description:
      'Expert dans la gestion de la production laitière, Koffi veille à ce que chaque produit respecte les normes de qualité les plus strictes.',
  },
  {
    name: 'Aminatou Adéoti',
    role: 'Responsable Marketing',
    image: 'https://randomuser.me/api/portraits/women/30.jpg',
    description:
      'Spécialiste du marketing, Aminatou s’assure que nos produits arrivent aux bons consommateurs à travers des campagnes innovantes.',
  },
  {
    name: 'Adama Yessoufou',
    role: 'Contrôleur Qualité',
    image: 'https://randomuser.me/api/portraits/men/83.jpg',
    description:
      'Adama supervise chaque étape du processus de production pour garantir que tous nos produits sont conformes aux normes de qualité et de sécurité.',
  },
  {
    name: 'Olivia Houinou',
    role: 'Responsable de la Distribution',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    description:
      'Olivia assure la gestion de la chaîne logistique, veillant à ce que nos produits frais arrivent dans les meilleures conditions à nos clients.',
  },
];

export default function TeamSection() {
  return (
    <section className="bg-gradient-to-b from-blue-100 to-white py-16 px-4 text-center">
      <h2 className="text-4xl font-bold text-blue-800">NOTRE ÉQUIPE</h2>
      <p className="text-sm text-blue-500 mt-2 italic">
        Oui, on sait, les gens disent qu’on est un peu fous 🤪
      </p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {team.map((member, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-blue-300 shadow-md mb-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
            <p className="text-sm text-blue-600 font-medium mb-2">{member.role}</p>
            <p className="text-xs text-gray-500 px-3">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
