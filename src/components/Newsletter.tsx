import React from 'react';
import { Send } from 'lucide-react';

export default function Newsletter() {
  return (
    <div className="bg-blue-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Restez informé de nos nouveautés
          </h2>
          <p className="text-blue-100 mb-8">
            Inscrivez-vous à notre newsletter pour recevoir nos offres exclusives
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 rounded-md"
            />
            <button
              type="submit"
              className="bg-white text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 flex items-center"
            >
              S'inscrire
              <Send className="ml-2 h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}