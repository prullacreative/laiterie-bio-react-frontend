import React from 'react';
import { motion } from 'framer-motion';
import { Input } from '@headlessui/react'; // uniquement si tu utilises le composant de champ (sinon styles personnalisés)
import BlueberryImage from '../images/fruit_yogourt.png';

export function Contact() {
  return (
    <div className="min-h-screen bg-[#E5F0FB] flex items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-white rounded-3xl shadow-xl p-6 md:p-10 max-w-2xl w-full"
      >
        {/* 🍇 Image à gauche plus grande */}
        <div className="absolute -left-32 top-1/2 transform -translate-y-1/2 hidden md:block z-0">
          <img
            src={BlueberryImage}
            alt="Smoothie décoratif"
            className="w-64 h-64 object-contain drop-shadow-xl"
          />
        </div>

        {/* Formulaire */}
        <div className="relative z-10 md:ml-36">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center md:text-left tracking-wide">
            CONTACT
          </h2>
          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-blue-900 mb-1">First Name</label>
                <input
                  type="text"
                  placeholder="Car"
                  className="w-full rounded-md border border-blue-200 focus:ring-2 focus:ring-blue-400 focus:outline-none px-4 py-2 text-sm placeholder-blue-300 transition duration-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-900 mb-1">Last Name</label>
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="w-full rounded-md border border-blue-200 focus:ring-2 focus:ring-blue-400 focus:outline-none px-4 py-2 text-sm placeholder-blue-300 transition duration-200"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-blue-900 mb-1">E-mail</label>
              <input
                type="email"
                placeholder="Votre email"
                className="w-full rounded-md border border-blue-200 focus:ring-2 focus:ring-blue-400 focus:outline-none px-4 py-2 text-sm placeholder-blue-300 transition duration-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-blue-900 mb-1">Message</label>
              <textarea
                rows={4}
                placeholder="Votre message"
                className="w-full rounded-md border border-blue-200 focus:ring-2 focus:ring-blue-400 focus:outline-none px-4 py-2 text-sm placeholder-blue-300 resize-none transition duration-200"
              ></textarea>
            </div>

            {/* 📨 Bouton */}
            <div className="pt-4 flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-10 py-2.5 rounded-full shadow-lg hover:brightness-105 transition duration-300"
              >
                SEND
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
