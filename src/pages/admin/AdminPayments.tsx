import React, { useState } from 'react';
import { AdminSidebar } from '../../components/AdminSidebar';

export function AdminPayments() {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const payments = [
    { id: 1, user: 'Abdoulaye', amount: '2 000 FCFA', method: 'Fedapay', date: '2024-04-01', status: 'Réussi' },
    { id: 2, user: 'Chantal', amount: '1 500 FCFA', method: 'Mobile Money', date: '2024-04-02', status: 'En attente' },
    { id: 3, user: 'Emmanuel', amount: '4 000 FCFA', method: 'Carte Bancaire', date: '2024-04-03', status: 'Échoué' },
    { id: 4, user: 'Sylvain', amount: '3 000 FCFA', method: 'Fedapay', date: '2024-04-04', status: 'Réussi' },
    { id: 5, user: 'Clarisse', amount: '2 000 FCFA', method: 'Mobile Money', date: '2024-04-05', status: 'Réussi' },
    { id: 6, user: 'Aurélien', amount: '4 000 FCFA', method: 'Carte Bancaire', date: '2024-04-06', status: 'Réussi' },
  ];
  

  const filteredPayments = payments.filter(p =>
    p.user.toLowerCase().includes(search.toLowerCase()) ||
    p.method.toLowerCase().includes(search.toLowerCase()) ||
    p.status.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPayments.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedPayments = filteredPayments.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      <main className="flex-1 p-8 pt-20 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-blue-700">Historique des paiements</h1>

        <input
          type="text"
          placeholder="Rechercher un paiement..."
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="bg-white rounded-lg shadow overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-blue-100">
              <tr>
                <th className="px-4 py-3 text-left">Utilisateur</th>
                <th className="px-4 py-3 text-left">Montant</th>
                <th className="px-4 py-3 text-left">Méthode</th>
                <th className="px-4 py-3 text-left">Date</th>
                <th className="px-4 py-3 text-left">Statut</th>
              </tr>
            </thead>
            <tbody>
              {paginatedPayments.map((payment) => (
                <tr key={payment.id} className="border-b hover:bg-gray-100">
                  <td className="px-4 py-2">{payment.user}</td>
                  <td className="px-4 py-2">{payment.amount}</td>
                  <td className="px-4 py-2">{payment.method}</td>
                  <td className="px-4 py-2">{payment.date}</td>
                  <td className={`px-4 py-2 font-semibold ${payment.status === 'Réussi' ? 'text-green-600' : payment.status === 'Échoué' ? 'text-red-600' : 'text-yellow-600'}`}>
                    {payment.status}
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
                currentPage === index + 1 ? "bg-blue-600 text-white" : "bg-gray-200"
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
