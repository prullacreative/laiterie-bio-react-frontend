import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail } from 'lucide-react';

export function ForgotPassword() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Un lien de réinitialisation a été envoyé !");
    navigate('/compte');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdfcf9] px-4">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md">
        <h2 className="text-xl font-bold text-center text-gray-900 mb-2">Mot de passe oublié</h2>
        <p className="text-sm text-center text-gray-600 mb-6">
          Entrez votre email pour recevoir un lien de réinitialisation
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              placeholder="Votre adresse email"
              className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
          >
            Envoyer le lien
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          <span
            className="text-blue-600 hover:underline cursor-pointer"
            onClick={() => navigate('/compte')}
          >
            Retour à la connexion
          </span>
        </div>
      </div>
    </div>
  );
}
