import { ArrowRight } from "lucide-react";

const GaleryAccess = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl h-full">
              <img
                src={require("../assets/galerie/1.png")}
                className="h-full"
                alt=""
              />{" "}
            </div>
          </div>

          <div>
            <div className="bg-yellow-400 text-black px-4 py-2 rounded-full inline-block mb-4 text-sm font-semibold">
              Galerie
            </div>
            <h2 className="text-4xl font-bold mb-6">
              Explorer Nos <span className="text-green-400">Réalisations</span>
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim
              ad minim veniam.
            </p>
            <p className="text-gray-400 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex gap-4">
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GaleryAccess;
