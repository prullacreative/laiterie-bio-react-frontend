import React from 'react';
import { AdminSidebar } from '../../components/AdminSidebar';
import { ShoppingCart, User, Milk, DollarSign } from 'lucide-react'; 

export function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-blue-50">
      <AdminSidebar />
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6 text-blue-700">Tableau de bord - Produits Laitiers</h1>

        {/* Dashboard stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full">
              <Milk size={32} />
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-semibold">Produits</h2>
              <p className="text-2xl font-bold">120</p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full">
              <ShoppingCart size={32} />
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-semibold">Commandes</h2>
              <p className="text-2xl font-bold">345</p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
            <div className="flex items-center justify-center w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full">
              <User size={32} />
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-semibold">Clients</h2>
              <p className="text-2xl font-bold">89</p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
            <div className="flex items-center justify-center w-16 h-16 bg-pink-100 text-pink-600 rounded-full">
              <DollarSign size={32} />
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-semibold">Ventes</h2>
              <p className="text-2xl font-bold">450 560 FCFA</p>
            </div>
          </div>
        </div>

        {/* Recent orders */}
        <h2 className="text-2xl font-bold mt-10 mb-4 text-blue-700">Commandes récentes</h2>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-4 py-2 text-left text-blue-700">Client</th>
                <th className="px-4 py-2 text-left text-blue-700">Produit</th>
                <th className="px-4 py-2 text-left text-blue-700">Quantité</th>
                <th className="px-4 py-2 text-left text-blue-700">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2">Abibatou Sanni</td>
                <td className="px-4 py-2">Lait entier</td>
                <td className="px-4 py-2">3</td>
                <td className="px-4 py-2">9000 FCFA</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Jacques Houngbédji</td>
                <td className="px-4 py-2">Fromage</td>
                <td className="px-4 py-2">2</td>
                <td className="px-4 py-2">3000 FCFA</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Honorine Ahouansou</td>
                <td className="px-4 py-2">Yaourt nature</td>
                <td className="px-4 py-2">5</td>
                <td className="px-4 py-2">10000 FCFA</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Romuald Zinsou</td>
                <td className="px-4 py-2">Crème fraîche</td>
                <td className="px-4 py-2">1</td>
                <td className="px-4 py-2">4000 FCFA</td>
              </tr>
            </tbody>
          </table>
        </div>

      </main>
    </div>
  );
}
