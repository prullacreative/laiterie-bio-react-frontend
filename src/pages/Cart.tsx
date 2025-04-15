import React, { useState } from 'react';
import { Trash2 } from 'lucide-react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export  function Cart  ()  {
  // Example cart items - in a real app, this would come from a cart context/state
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Lait Frais Bio',
      price: 2.50,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80'
    },
    {
      id: '2',
      name: 'Yaourt Nature',
      price: 3.20,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80'
    }
  ]);

  const updateQuantity = (id: string, newQuantity: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Votre Panier</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">Votre panier est vide</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {cartItems.map(item => (
              <div
                key={item.id}
                className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm mb-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">{item.price.toFixed(2)}€</p>
                  <div className="flex items-center gap-4 mt-2">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value))
                      }
                      className="w-20 px-2 py-1 border rounded"
                    />
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold">
                    {(item.price * item.quantity).toFixed(2)}€
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
            <h2 className="text-xl font-semibold mb-4">Résumé</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Sous-total</span>
                <span>{total.toFixed(2)}€</span>
              </div>
              <div className="flex justify-between">
                <span>Livraison</span>
                <span>Gratuite</span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>{total.toFixed(2)}€</span>
                </div>
              </div>
            </div>
            <button
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
              onClick={() => {
                // TODO: Implement checkout
                console.log('Proceeding to checkout');
              }}
            >
              Procéder au paiement
            </button>
          </div>
        </div>
      )}
    </div>
  );
};