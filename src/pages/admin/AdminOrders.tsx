import React, { useState } from 'react';
import { AdminSidebar } from '../../components/AdminSidebar';

export function AdminOrders() {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const orders = [
    { id: 101, client: 'Abibatou', produit: 'Lait entier', quantite: 1, montant: '3 000 FCFA', date: '2024-04-01', statut: 'Livré' },
    { id: 102, client: 'Jacques', produit: 'Yaourt nature', quantite: 2, montant: '4 000 FCFA', date: '2024-04-02', statut: 'En attente' },
    { id: 103, client: 'Honorine', produit: 'Fromage', quantite: 1, montant: '1 500 FCFA', date: '2024-04-03', statut: 'Annulée' },
    { id: 104, client: 'Romuald', produit: 'Crème fraîche', quantite: 1, montant: '4 000 FCFA', date: '2024-04-04', statut: 'Livré' },
    { id: 105, client: 'Monique', produit: 'Yaourt nature', quantite: 1, montant: '2 000 FCFA', date: '2024-04-05', statut: 'En attente' },
    { id: 106, client: 'Florent', produit: 'Fromage', quantite: 2, montant: '3 000 FCFA', date: '2024-04-06', statut: 'Livré' },
  ];
  

  const filteredOrders = orders.filter(o =>
    o.client.toLowerCase().includes(search.toLowerCase()) ||
    o.produit.toLowerCase().includes(search.toLowerCase()) ||
    o.statut.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedOrders = filteredOrders.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      <main className="flex-1 p-8 pt-20 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-purple-700">Commandes</h1>

        <input
          type="text"
          placeholder="Rechercher une commande..."
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="bg-white rounded-lg shadow overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-purple-100">
              <tr>
                <th className="px-4 py-3 text-left">Client</th>
                <th className="px-4 py-3 text-left">Produit</th>
                <th className="px-4 py-3 text-left">Quantité</th>
                <th className="px-4 py-3 text-left">Montant</th>
                <th className="px-4 py-3 text-left">Date</th>
                <th className="px-4 py-3 text-left">Statut</th>
              </tr>
            </thead>
            <tbody>
              {paginatedOrders.map((order) => (
                <tr key={order.id} className="border-b hover:bg-gray-100">
                  <td className="px-4 py-2">{order.client}</td>
                  <td className="px-4 py-2">{order.produit}</td>
                  <td className="px-4 py-2">{order.quantite}</td>
                  <td className="px-4 py-2">{order.montant}</td>
                  <td className="px-4 py-2">{order.date}</td>
                  <td className={`px-4 py-2 font-semibold ${
                    order.statut === 'Livré' ? 'text-green-600' :
                    order.statut === 'Annulée' ? 'text-red-600' : 'text-yellow-600'
                  }`}>
                    {order.statut}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-4 py-2 mx-1 rounded-lg ${
                currentPage === index + 1 ? "bg-purple-600 text-white" : "bg-gray-200"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}
