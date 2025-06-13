import React from "react";
import { Star, ArrowRight } from "lucide-react";
import Hero from "../components/hero";
import Footer from "../components/footer";
import Header from "../components/header";
import Objectives from "../components/objectives";

const Home = () => {
  const plants = [
    {
      id: 1,
      name: "Calathea plant",
      price: "Rs. 399/-",
      originalPrice: "Rs. 500/-",
      image: "🌿",
      rating: 4.5,
      isNew: true,
    },
    {
      id: 2,
      name: "Desk plant",
      price: "Rs. 359/-",
      originalPrice: "Rs. 450/-",
      image: "🪴",
      rating: 4.3,
    },
    {
      id: 3,
      name: "Calathea xl plant",
      price: "Rs. 399/-",
      originalPrice: "Rs. 520/-",
      image: "🌱",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Cat 074 plant",
      price: "Rs. 259/-",
      originalPrice: "Rs. 350/-",
      image: "🌵",
      rating: 4.2,
    },
    {
      id: 5,
      name: "Show plant",
      price: "Rs. 759/-",
      originalPrice: "Rs. 900/-",
      image: "🍃",
      rating: 4.8,
    },
    {
      id: 6,
      name: "Great O2 plant",
      price: "Rs. 659/-",
      originalPrice: "Rs. 800/-",
      image: "🌿",
      rating: 4.6,
    },
  ];

  const reviews = [
    {
      name: "John Doe",
      rating: 5,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      avatar: "👤",
    },
    {
      name: "Jane Smith",
      rating: 5,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      avatar: "👤",
    },
    {
      name: "Mike Johnson",
      rating: 5,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      avatar: "👤",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <Header></Header>

      {/* Hero Section */}
      <Hero />

      {/* Objectives Section */}
      <Objectives></Objectives>

      {/* Top Selling Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="text-green-400">Top Selling</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {plants.map((plant) => (
              <div
                key={plant.id}
                className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-colors group"
              >
                <div className="relative mb-4">
                  <div className="text-6xl text-center mb-4">{plant.image}</div>
                  {plant.isNew && (
                    <span className="absolute top-0 right-0 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      New
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold mb-2">{plant.name}</h3>
                <p className="text-gray-400 text-sm mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>

                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(plant.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-600"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-400 ml-2">
                    ({plant.rating})
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xl font-bold text-green-400">
                      {plant.price}
                    </span>
                    <span className="text-sm text-gray-500 line-through ml-2">
                      {plant.originalPrice}
                    </span>
                  </div>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors group-hover:scale-105 transform">
                    🛒
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Customer <span className="text-green-400">Review</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-gray-700 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-2xl mr-4">
                    {review.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold">{review.name}</h4>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best O2 Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl">
                <div className="text-8xl mb-4 text-center">🍃</div>
              </div>
            </div>

            <div>
              <div className="bg-yellow-400 text-black px-4 py-2 rounded-full inline-block mb-4 text-sm font-semibold">
                Our Best O2
              </div>
              <h2 className="text-4xl font-bold mb-6">
                We Have Small And Best{" "}
                <span className="text-green-400">O2 Plants</span> Collection
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua ut
                enim ad minim veniam.
              </p>
              <p className="text-gray-400 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex gap-4">
                <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Explore
                </button>
                <button className="flex items-center text-green-400 hover:text-green-300 font-semibold">
                  Shop <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Home;
