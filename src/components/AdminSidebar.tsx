import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  ShoppingBag,
  Users,
  Package,
  CreditCard,
  LogOut,
  Milk
} from 'lucide-react';

export const AdminSidebar = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/admin/dashboard', name: 'Dashboard', icon: LayoutDashboard },
    { path: '/admin/orders', name: 'Commandes', icon: ShoppingBag },
    { path: '/admin/clients', name: 'Clients', icon: Users },
    { path: '/admin/products', name: 'Produits', icon: Package },
    { path: '/admin/payments', name: 'Paiements', icon: CreditCard }
  ];

  return (
    <div className="bg-blue-700 text-white w-60 min-h-screen flex flex-col justify-between">
      <div>
        {/* Logo */}
        <div className="p-6 font-bold text-2xl tracking-wide">
            <Link to="/" className="flex items-center">
              <Milk className="h-8 w-8 text-white" />
              <span className="">Laiterie Bio</span>
            </Link>
        </div>

        {/* Menu */}
        <nav className="flex flex-col space-y-1 mt-4">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-6 py-3 rounded-l-full transition-all duration-200 ${
                  isActive
                    ? 'bg-white text-blue-700 shadow-md font-semibold'
                    : 'text-white/80 hover:bg-blue-600 hover:text-white'
                }`}
              >
                <item.icon
                  className={`h-5 w-5 mr-3 ${
                    isActive ? 'text-blue-700' : 'text-white'
                  }`}
                />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer */}
      <div className="px-6 py-4">
        <Link
          to="/"
          className="flex items-center text-red-200 hover:text-white transition-colors"
        >
          <LogOut className="h-5 w-5 mr-3" />
          Se déconnecter
        </Link>

        {/* Réseaux sociaux (facultatif) */}
        <div className="mt-4 flex space-x-3 text-white/50">
          <a href="https://facebook.com" target="_blank">Facebook</a>
          <a href="https://twitter.com" target="_blank">Twitter</a>
          <a href="https://google.com" target="_blank">Google</a>
        </div>
      </div>
    </div>
  );
};
