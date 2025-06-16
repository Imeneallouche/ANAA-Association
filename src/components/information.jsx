import { plants } from "../data/InformationData";
import { Star } from "lucide-react";

const Information = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Des <span className="text-green-400">Informations</span> à Connaitre
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plants.map((plant) => (
            <div
              key={plant.id}
              className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-colors group"
            >
              <h3 className="text-xl font-bold mb-8 text-pink-400">
                {plant.name}
              </h3>
              <p className="text-gray-400 text-sm mb-3">{plant.description} </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Information;
