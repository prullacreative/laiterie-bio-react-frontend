import React from 'react';
import { Send } from 'lucide-react';

export default function Newsletter() {
  return (
    <div className="bg-blue-600 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Restez informé de nos nouveautés
        </h2>
        <p className="text-blue-100 text-sm sm:text-base mb-8">
          Inscrivez-vous à notre newsletter pour recevoir nos offres exclusives
        </p>
        <form className="w-full flex flex-col sm:flex-row sm:max-w-md mx-auto">
          <input
            type="email"
            placeholder="Votre adresse email"
            className="w-full px-4 py-3 rounded-t-md sm:rounded-l-md sm:rounded-tr-none sm:rounded-br-none border border-transparent focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            className="bg-white text-blue-600 px-6 py-3 rounded-b-md sm:rounded-r-md sm:rounded-bl-none sm:rounded-tl-none hover:bg-blue-100 flex items-center justify-center mt-2 sm:mt-0"
          >
            S'inscrire
            <Send className="ml-2 h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
