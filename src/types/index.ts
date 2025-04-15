export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
}

export interface Order {
  id: string;
  clientName: string;
  products: {
    productId: string;
    quantity: number;
    price: number;
  }[];
  total: number;
  status: 'pending' | 'completed' | 'cancelled';
  date: string;
}



export interface Payment {
  id: string;
  orderId: string;
  amount: number;
  date: string;
  status: 'completed' | 'pending' | 'failed';
}





export interface Produit {
  id: number;
  nom: string;
  description: string;
  prix: number;
  image: string;
  categorie: string;
}

export interface Clients {
  id: number;
  nom: string;
  email: string;
  telephone: string;
}

export interface Commande {
  id: number;
  clientId: number;
  produits: Array<{
    produitId: number;
    quantite: number;
  }>;
  total: number;
  date: string;
  statut: 'en attente' | 'confirmée' | 'expédiée';
}

export interface Paiement {
  id: number;
  commandeId: number;
  montant: number;
  date: string;
  statut: 'complété' | 'en attente' | 'échoué';
}