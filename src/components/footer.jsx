import { Phone, Mail, MapPin } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 py-12 px-16">
      <div className="flex justify-betwenn items-center">
        <div className="flex-1 px-4">
          <div className="flex items-center space-x-2 mb-4">
            <img
              className="w-24 rounded-full flex items-center justify-center"
              src={require("../assets/logo.png")}
              alt=""
            />{" "}
            <span className="text-xl font-bold">A.N.A.A</span>
          </div>
          <p className="text-gray-400 mb-4">
            Association National Autisme Algérie
          </p>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/people/Association-Nationale-Autisme-Algerie/100064727017151/">
              <img
                src={require("../assets/facebook.png")}
                className="w-16"
                alt="facebook"
              />
            </a>
          </div>
        </div>

        <div className="flex-1 px-4">
          <h4 className="font-bold mb-4">Quick Link's</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-white">
                Acueil
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Qui Somme Nous?
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Activités
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Galerie
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="flex-1 px-4">
          <h4 className="font-bold mb-4">Envoyez Nous un Message</h4>
          <div className="flex">
            <input
              type="text"
              placeholder="Votre Message"
              className="bg-gray-700 text-white px-4 py-2 rounded-l-lg flex-1 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-r-lg font-semibold transition-colors">
              Envoyer
            </button>
          </div>
        </div>

        <div className="flex-1 px-4">
          <h4 className="font-bold mb-4">Contactez Nous</h4>
          <div className="space-y-3 text-gray-400">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              <span>+123 456 789</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              <span>example@email.com</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              <span>rue 123 Alger, Algérie </span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 225 ANAA. All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;
