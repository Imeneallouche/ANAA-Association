import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, Star, ArrowRight, Heart, User, Phone, Mail, MapPin } from 'lucide-react';

const Home = () => {
  const [activeSection, setActiveSection] = useState('home');

  const plants = [
    {
      id: 1,
      name: "Calathea plant",
      price: "Rs. 399/-",
      originalPrice: "Rs. 500/-",
      image: "🌿",
      rating: 4.5,
      isNew: true
    },
    {
      id: 2,
      name: "Desk plant",
      price: "Rs. 359/-",
      originalPrice: "Rs. 450/-",
      image: "🪴",
      rating: 4.3
    },
    {
      id: 3,
      name: "Calathea xl plant",
      price: "Rs. 399/-",
      originalPrice: "Rs. 520/-",
      image: "🌱",
      rating: 4.7
    },
    {
      id: 4,
      name: "Cat 074 plant",
      price: "Rs. 259/-",
      originalPrice: "Rs. 350/-",
      image: "🌵",
      rating: 4.2
    },
    {
      id: 5,
      name: "Show plant",
      price: "Rs. 759/-",
      originalPrice: "Rs. 900/-",
      image: "🍃",
      rating: 4.8
    },
    {
      id: 6,
      name: "Great O2 plant",
      price: "Rs. 659/-",
      originalPrice: "Rs. 800/-",
      image: "🌿",
      rating: 4.6
    }
  ];

  const reviews = [
    {
      name: "John Doe",
      rating: 5,
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      avatar: "👤"
    },
    {
      name: "Jane Smith",
      rating: 5,
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      avatar: "👤"
    },
    {
      name: "Mike Johnson",
      rating: 5,
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      avatar: "👤"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">🌿</span>
            </div>
            <span className="text-xl font-bold text-white">Planto.</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-green-400 hover:text-green-300">Home</a>
            <a href="#" className="text-gray-300 hover:text-white">Plant Types</a>
            <a href="#" className="text-gray-300 hover:text-white">More</a>
            <a href="#" className="text-gray-300 hover:text-white">Contact</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            <Heart className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            <ShoppingCart className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            <Menu className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer md:hidden" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-800 to-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Breath <span className="text-green-400">Natural</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
            
            <div className="relative">
              <div className="bg-gray-700 rounded-2xl p-8 shadow-2xl">
                <div className="text-8xl mb-4 text-center">🌿</div>
                <div className="bg-gray-600 rounded-xl p-4 mb-4">
                  <p className="text-sm text-gray-300 mb-2">Trendy Indoor Plant</p>
                  <h3 className="text-xl font-bold mb-2">Calathea plant</h3>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-600 transition-colors">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trendy Plants Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our <span className="text-green-400">Trendy</span> plants</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Large Featured Plant */}
            <div className="bg-gray-700 rounded-2xl p-8 relative overflow-hidden">
              <div className="text-9xl mb-4 text-center">🌳</div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold mb-2">For Small Desk At Plant</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-400">Rs. 599/-</span>
                  <div className="flex gap-2">
                    <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors">
                      Buy Now
                    </button>
                    <button className="border border-green-500 text-green-400 px-4 py-2 rounded-lg hover:bg-green-500 hover:text-white transition-colors">
                      ❤
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Small Featured Plant */}
            <div className="bg-gray-700 rounded-2xl p-6 relative">
              <div className="text-6xl mb-4 text-center">🪴</div>
              <h3 className="text-xl font-bold mb-2">For Small Desk At Plant</h3>
              <p className="text-gray-300 text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-green-400">Rs. 599/-</span>
                <button className="border border-green-500 text-green-400 px-4 py-2 rounded-lg hover:bg-green-500 hover:text-white transition-colors">
                  ❤
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Selling Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our <span className="text-green-400">Top Selling</span></h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {plants.map((plant) => (
              <div key={plant.id} className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-colors group">
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
                        i < Math.floor(plant.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-400 ml-2">({plant.rating})</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xl font-bold text-green-400">{plant.price}</span>
                    <span className="text-sm text-gray-500 line-through ml-2">{plant.originalPrice}</span>
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
            <h2 className="text-4xl font-bold mb-4">Customer <span className="text-green-400">Review</span></h2>
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
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
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
                We Have Small And Best <span className="text-green-400">O2 Plants</span> Collection
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.
              </p>
              <p className="text-gray-400 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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

      {/* Footer */}
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex space-x-4">
                <span className="text-2xl cursor-pointer hover:text-green-400">📘</span>
                <span className="text-2xl cursor-pointer hover:text-green-400">🐦</span>
                <span className="text-2xl cursor-pointer hover:text-green-400">📷</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Quick Link's</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Search</a></li>
                <li><a href="#" className="hover:text-white">Plant Types</a></li>
                <li><a href="#" className="hover:text-white">Delivery</a></li>
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
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
    </div>
  );
};

export default Home;