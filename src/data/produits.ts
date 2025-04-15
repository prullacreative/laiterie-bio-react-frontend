import { Produit } from '../types';

export const produits: Produit[] = [
  {
    id: 1,
    nom: 'Lait Frais Bio',
    description: 'Lait frais bio de nos vaches normandes, riche en calcium et vitamines.',
    prix: 250,
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=800',
    categorie: 'Lait'
  },
  {
    id: 2,
    nom: 'Yaourt Nature',
    description: 'Yaourt onctueux fait à partir de lait entier bio.',
    prix: 320,
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=800',
    categorie: 'Yaourt'
  },
  {
    id: 3,
    nom: 'Fromage Blanc',
    description: 'Fromage blanc crémeux idéal pour vos desserts.',
    prix: 280,
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&q=80&w=800',
    categorie: 'Fromage'
  }
];