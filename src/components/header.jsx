import React from "react";
import { ShoppingCart, Search, Menu, Heart } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gray-800 border-b border-gray-700 px-20 py-2 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <img
          className="w-24 rounded-full flex items-center justify-center"
          src={require("../assets/logo.png")}
          alt=""
        />{" "}
        <span className="text-xl font-bold text-white">A.</span>
        <span className="text-xl font-bold text-sky-400">N.</span>
        <span className="text-xl font-bold text-pink-400">A.</span>
        <span className="text-xl font-bold text-green-400">A</span>
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
        <a href="https://www.facebook.com/people/Association-Nationale-Autisme-Algerie/100064727017151/">
          <img
            src={require("../assets/facebook.png")}
            className="w-16"
            alt="facebook"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
