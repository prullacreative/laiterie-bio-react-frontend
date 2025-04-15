import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Lait Frais Bio',
    description: 'Lait frais bio de vaches élevées en pâturage.',
    price: "250",
    category: 'Lait',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    name: 'Yaourt Nature',
    description: 'Yaourt nature onctueux fait avec du lait entier.',
    price: "320",
    category: 'Yaourt',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80'
  },
  {
    id: '3',
    name: 'Fromage Blanc',
    description: 'Fromage blanc crémeux riche en protéines.',
    price: "280",
    category: 'Fromage',
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&q=80'
  },
  {
    id: '4',
    name: 'Crème Fraîche',
    description: 'Crème fraîche épaisse parfaite pour la cuisine.',
    price: "290",
    category: 'Crème',
    image: 'https://images.unsplash.com/photo-1557142046-c704a3adf364?auto=format&fit=crop&q=80'
  }
];