import React, { useState } from "react";
import { AdminSidebar } from "../../components/AdminSidebar";
import BlueberryImage from '../../images/fruit_yogourt.png';

export function AdminProducts() {
  const [products, setProducts] = useState([
    { id: 1, name: "Lait entier", category: "Lait", price: "3000FCFA", description: "Lait frais", image: BlueberryImage },
    { id: 2, name: "Yaourt nature", category: "Yaourt", price: "2000FCFA", description: "Yaourt sans sucre", image: BlueberryImage },
    { id: 3, name: "Fromage", category: "Fromage", price: "1500FCFA", description: "Fromage artisanal", image: BlueberryImage },
    { id: 4, name: "Crème fraîche", category: "Crème", price: "4000FCFA", description: "Crème fraîche épaisse", image: BlueberryImage },
  ]);


  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(2);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", category: "", price: "", description: "", image: "" });
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()) ||
    product.category.toLowerCase().includes(search.toLowerCase())
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
    setShowDeleteModal(false);
  };

  const openDeleteModal = (product) => {
    setProductToDelete(product);
    setShowDeleteModal(true);
  };

  const toggleForm = (product = null) => {
    setFormData(product || { name: "", category: "", price: "", description: "", image: "" });
    setShowForm(!showForm);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.id) {
      setProducts(products.map((p) => (p.id === formData.id ? formData : p)));
    } else {
      setProducts([...products, { ...formData, id: Date.now() }]);
    }
    setShowForm(false);
  };

  return (
    <div className="flex min-h-screen bg-blue-50">
      <AdminSidebar />
      <main className="flex-1 p-8 pt-20 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-blue-700">Gestion des Produits</h1>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Rechercher un produit..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <button
          className="mb-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          onClick={() => toggleForm()}
        >
          Ajouter un produit
        </button>

        <div className="bg-white rounded-lg shadow p-6">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-4 py-2 text-left text-blue-700">Image</th>
                <th className="px-4 py-2 text-left text-blue-700">Nom</th>
                <th className="px-4 py-2 text-left text-blue-700">Catégorie</th>
                <th className="px-4 py-2 text-left text-blue-700">Prix</th>
                <th className="px-4 py-2 text-left text-blue-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedProducts.map((product) => (
                <tr key={product.id} className="border-b hover:bg-blue-50">
                  <td className="px-4 py-2">
                    <img src={product.image} alt={product.name} className="w-16 h-16 rounded-lg" />
                  </td>
                  <td className="px-4 py-2">{product.name}</td>
                  <td className="px-4 py-2">{product.category}</td>
                  <td className="px-4 py-2">{product.price}</td>
                  <td className="px-4 py-2 flex space-x-2">
                    <button
                      className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                      onClick={() => toggleForm(product)}
                    >
                      Modifier
                    </button>
                    <button
                      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                      onClick={() => openDeleteModal(product)}
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

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

        {showForm && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg shadow p-8 w-96">
              <h2 className="text-2xl font-bold mb-4">{formData.id ? "Modifier le produit" : "Ajouter un produit"}</h2>
              <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Nom</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Catégorie</label>
                  <select
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  >
                    <option value="Lait">Lait</option>
                    <option value="Yaourt">Yaourt</option>
                    <option value="Fromage">Fromage</option>
                    <option value="Crème">Crème</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Prix</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Description</label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  ></textarea>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Image</label>
                  <input
                    type="file"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    onChange={(e) =>
                      setFormData({ ...formData, image: URL.createObjectURL(e.target.files[0]) })
                    }
                  />
                </div>
                <div className="flex justify-end space-x-2">
                  <button
                    type="button"
                    className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                    onClick={() => setShowForm(false)}
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    {formData.id ? 'Modifier' : 'Ajouter'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {showDeleteModal && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg shadow p-8 w-96">
              <h2 className="text-2xl font-bold mb-4 text-red-600">Confirmer la suppression</h2>
              <p className="text-gray-700 mb-6">
                Voulez-vous vraiment supprimer le produit{' '}
                <span className="font-semibold">{productToDelete.name}</span> ?
              </p>
              <div className="flex justify-end space-x-2">
                <button
                  className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                  onClick={() => setShowDeleteModal(false)}
                >
                  Annuler
                </button>
                <button
                  className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                  onClick={() => handleDeleteProduct(productToDelete.id)}
                >
                  Supprimer
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}