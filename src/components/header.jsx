import React from "react";
import { ShoppingCart, Search, Menu, Heart } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gray-800 border-b border-gray-700 px-20 py-8 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
          <span className="text-white font-bold">🌿</span>
        </div>
        <span className="text-xl font-bold text-white">Planto.</span>
      </div>

      <nav className="hidden md:flex space-x-24">
        <a href="#" className="text-green-400 hover:text-green-300">
          Acueil
        </a>
        <a href="#" className="text-gray-300 hover:text-white">
          Qui Sommes Nous
        </a>
        <a href="#" className="text-gray-300 hover:text-white">
          Activités
        </a>
        <a href="#" className="text-gray-300 hover:text-white">
          Galerie
        </a>
        <a href="#" className="text-gray-300 hover:text-white">
          Contact
        </a>
      </nav>

      <div className="flex items-center space-x-4">
        <Search className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
        <Heart className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
        <ShoppingCart className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
        <Menu className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer md:hidden" />
      </div>
    </header>
  );
};

export default Header;
