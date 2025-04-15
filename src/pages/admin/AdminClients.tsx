import React, { useState } from "react";
import { AdminSidebar } from "../../components/AdminSidebar";

export function AdminClients() {
  // Données des clients
  const [clients, setClients] = useState([
    { id: 1, name: "Abibatou Sanni", email: "abibatou.sanni@gmail.com", phone: "+229 97 01 00 00 00" },
    { id: 2, name: "Jacques Houngbédji", email: "jacques.houngbedji@gmail.com", phone: "+229 01 91 20 00 00" },
    { id: 3, name: "Honorine Ahouansou", email: "honorine.ahouansou@gmail.com", phone: "+229 01 95 00 00 00" },
    { id: 4, name: "Romuald Zinsou", email: "romuald.zinsou@gmail.com", phone: "+229 01 90 11 00 00" },
  ]);

  // État pour la recherche
  const [search, setSearch] = useState("");

  // Filtrer les clients selon la recherche
  const filteredClients = clients.filter((client) =>
    client.name.toLowerCase().includes(search.toLowerCase()) ||
    client.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-blue-50">
      <AdminSidebar />
      <main className="flex-1 p-8 pt-20 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Liste des Clients</h1>
        <div className="bg-white rounded-lg shadow p-6">
          {/* Barre de recherche */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Rechercher un client..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Table responsive */}
          <div className="overflow-x-auto">
            <table className="w-full table-auto responsive">
              <thead>
                <tr className="bg-blue-100">
                  <th className="px-4 py-2 text-left text-blue-700">Nom</th>
                  <th className="px-4 py-2 text-left text-blue-700">Email</th>
                  <th className="px-4 py-2 text-left text-blue-700">Téléphone</th>
                </tr>
              </thead>
              <tbody>
                {filteredClients.length > 0 ? (
                  filteredClients.map((client) => (
                    <tr key={client.id} className="border-b hover:bg-blue-50">
                      <td className="px-4 py-2">{client.name}</td>
                      <td className="px-4 py-2">{client.email}</td>
                      <td className="px-4 py-2">{client.phone}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="text-center py-4 text-gray-500">
                      Aucun client trouvé.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
