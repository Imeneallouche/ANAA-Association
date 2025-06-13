import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-800 to-gray-900 py-20 px-20 flex">
      <div className="w-3/5">
        <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Association National{" "}
          <span className="text-green-400">Autiste Algérie</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          L’Association Nationale des Troubles du Spectre de l’Autisme en
          Algérie (A.N.A.A.) est une association à caractère médical, éducatif,
          social, récréatif et sportif exerçant ses activités sur l’ensemble du
          territoire national et soumise à toutes les dispositions de la loi n°
          12/06 relative aux associations.
        </p>
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Elle a été agréée par le ministère de l’Intérieur le 6 octobre 2013
          sous le numéro 69/13.
        </p>
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Siège de l’association : Alger
        </p>
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Présidente de l’association : Mme Ouali Leïla, mère d’un enfant
          autiste
        </p>
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          ANAA a été fondée à l’initiative d’un groupe de parents d’enfants
          autistes issus de différentes régions du pays, dont la motivation
          première était de trouver une solution à la souffrance de leurs
          enfants, en collaboration avec des spécialistes convaincus de la
          noblesse de leur mission.{" "}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Explore Now
          </button>
          <button className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Learn More
          </button>
        </div>
      </div>

      <div className="relative w-2/5 flex flex-col justify-center items-center bg-gray-700 rounded-2xl p-8 shadow-2xl">
        <img src={require("../assets/cover.png")} alt="" />
        <div className="bg-gray-600 rounded-xl p-4 mb-4 w-full">
          <h3 className="text-xl font-bold mb-2">
            <span className="text-green-400">Ensemble</span> pour un monde qui
            <span className="text-green-400"> Comprend</span> et{" "}
            <span className="text-green-400">Inclut l'Autisme</span>{" "}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Hero;
