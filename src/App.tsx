import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { About } from './pages/About';
import { Cart } from './pages/Cart';
import { Admin } from './pages/Admin';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { AdminOrders } from './pages/admin/AdminOrders';
import { AdminClients } from './pages/admin/AdminClients';
import { AdminProducts } from './pages/admin/AdminProducts';
import { AdminPayments } from './pages/admin/AdminPayments';
import { Contact } from './pages/Contact';
import Layout from './components/Layout';
import { ProductDetail } from './pages/ProductDetail';
import { ForgotPassword } from './pages/Forget';
import { Checkout } from './pages/Checkout';
import { BiRegistered } from 'react-icons/bi';
import { Inscription } from './pages/Inscription';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="produits" element={<Products />} />
            <Route path="a-propos" element={<About />} />
            <Route path="produits/:id" element={<ProductDetail />} />
            <Route path="contact" element={<Contact />} />
            <Route path="panier" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>

           {/* Routes Admin */}
          <Route path="/compte" element={<Admin />} />
          
          
          <Route path="/mot-de-passe-oublie" element={<ForgotPassword />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/orders" element={<AdminOrders />} />
          <Route path="/admin/clients" element={<AdminClients />} />
          <Route path="/admin/products" element={<AdminProducts />} />
          <Route path="/admin/payments" element={<AdminPayments />} />
    </Routes>

      </div>
    </Router>
  );
}

export default App;