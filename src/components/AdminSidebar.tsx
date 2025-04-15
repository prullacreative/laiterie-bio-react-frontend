import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  ShoppingBag,
  Users,
  Package,
  CreditCard,
  LogOut,
  Milk,
  Menu,
  X
} from 'lucide-react';

export const AdminSidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { path: '/admin/dashboard', name: 'Dashboard', icon: LayoutDashboard },
    { path: '/admin/orders', name: 'Commandes', icon: ShoppingBag },
    { path: '/admin/clients', name: 'Clients', icon: Users },
    { path: '/admin/products', name: 'Produits', icon: Package },
    { path: '/admin/payments', name: 'Paiements', icon: CreditCard }
  ];

  const SidebarContent = () => (
    <div className="bg-blue-700 text-white w-64 min-h-screen flex flex-col justify-between 
                    rounded-xl shadow-lg p-4">
      <div>
        {/* Logo */}
        <div className="p-4 font-bold text-2xl tracking-wide">
          <Link to="/" className="flex items-center space-x-2">
            <Milk className="h-8 w-8 text-white" />
            <span>Laiterie Bio</span>
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
                onClick={() => setIsOpen(false)} // ferme le menu mobile après clic
                className={`flex items-center px-6 py-3 rounded-full mx-2 transition-all duration-200 ${
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

        <div className="mt-4 flex space-x-3 text-white/50 text-sm">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
          <a href="https://google.com" target="_blank" rel="noreferrer">Google</a>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <div className="hidden md:flex m-4">
        <SidebarContent />
      </div>

    {/* Mobile menu button */}
    <div className="fixed top-0 left-0 flex  md:hidden items-center w-full bg-blue-700 text-white p-2 z-50">
      <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
        <Milk className="h-8 w-8 text-white" />
        {/* <span>Laiterie Bio</span> */}
      </Link>

      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
  </div>

  {/* <div className="flex top-0 left-0 justify-between items-center md:hidden p-3 bg-blue-700 text-white w-full">
    <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
      <Milk className="h-8 w-8 text-white" />

    </Link>

    
  </div> */}



      {/* Mobile sidebar drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Sidebar content */}
          <div className="relative z-50 w-64">
            <SidebarContent />
          </div>
        </div>
      )}
    </>
  );
};
