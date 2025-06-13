import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">🌿</span>
              </div>
              <span className="text-xl font-bold">Planto.</span>
            </div>
            <p className="text-gray-400 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex space-x-4">
              <span className="text-2xl cursor-pointer hover:text-green-400">
                📘
              </span>
              <span className="text-2xl cursor-pointer hover:text-green-400">
                🐦
              </span>
              <span className="text-2xl cursor-pointer hover:text-green-400">
                📷
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Link's</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Search
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Plant Types
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Delivery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">For Every Update</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="bg-gray-700 text-white px-4 py-2 rounded-l-lg flex-1 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-r-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+123 456 789</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>info@planto.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>123 Plant Street, Green City</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Planto. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
