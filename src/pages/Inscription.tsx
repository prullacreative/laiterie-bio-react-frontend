import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock, Mail } from 'lucide-react';
import { FaGoogle, FaApple, FaFacebookF } from 'react-icons/fa';

export function Inscription() {
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/admin/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdfcf9] px-4">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md">
        <div className="flex justify-center mb-4">
          <User className="h-10 w-10 text-blue-600" />
        </div>
        <h2 className="text-xl font-bold text-center text-gray-900 mb-2">Créer un compte</h2>
        <p className="text-sm text-center text-gray-600 mb-6">
          Remplissez les champs pour créer un compte agent
        </p>

        <form onSubmit={handleRegister} className="space-y-4">
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Nom complet"
              className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              placeholder="Adresse email"
              className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="password"
              placeholder="Mot de passe"
              className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
          >
            S'inscrire
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">— ou inscrivez-vous avec —</div>

        <div className="mt-4 flex justify-between gap-3">
          <button className="w-full flex items-center justify-center gap-2 py-2 border rounded-md text-sm hover:bg-gray-50">
            <FaGoogle className="text-red-500" /> Google
          </button>
          <button className="w-full flex items-center justify-center gap-2 py-2 border rounded-md text-sm hover:bg-gray-50">
            <FaApple className="text-gray-800" /> Apple ID
          </button>
          <button className="w-full flex items-center justify-center gap-2 py-2 border rounded-md text-sm hover:bg-gray-50">
            <FaFacebookF className="text-blue-600" /> Facebook
          </button>
        </div>

        <div className="mt-6 text-center text-sm">
          Vous avez déjà un compte ?{' '}
          <span
            className="text-blue-600 hover:underline cursor-pointer"
            onClick={() => navigate('/compte')}
          >
            Se connecter
          </span>
        </div>
      </div>
    </div>
  );
}
