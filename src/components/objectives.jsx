import React from "react";
import { ObjectivesData } from "../data/ObjectivesData";

const Objectives = () => {
  return (
    <section className="py-16 bg-gray-800">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          Les <span className="text-green-400">Objectifs</span> de l'ANAA
        </h2>
      </div>

      <div className="scrollbar-hide mt-5 w-full overflow-x-auto flex space-x-5">
        {ObjectivesData.map((Objective, index) => (
          <div className="bg-gray-700 rounded-2xl p-8 flex flex-col justify-between flex-shrink-0 w-96 space-y-4">
            <h3 className="text-2xl font-bold mb-2 text-sky-400">
              {index + 1}. {Objective.title}
            </h3>
            <p className="text-gray-300 text-sm mb-4">{Objective.text}</p>
            <div className="flex gap-2 items-center justify-between">
              <button className="border border-pink-500 text-pink-400 px-4 py-2 rounded-lg hover:bg-pink-500 hover:text-white transition-colors">
                ❤
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Objectives;
