import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Optional icon lib like lucide-react

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 backdrop-blur-md bg-pink-200/60 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl sm:text-3xl font-bold text-pink-700">
            She Can Foundation
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-pink-700 focus:outline-none"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Links - Desktop */}
          <ul className="hidden md:flex gap-8 items-center">
            {['Home', 'Contact'].map((item, idx) => (
              <li
                key={idx}
                className="relative group text-pink-800 cursor-pointer text-lg"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-pink-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </li>
            ))}
            <li>
              <Link to="/login">
                <button className="bg-black text-white border-2 border-transparent hover:border-white hover:scale-105 px-5 py-2 rounded-3xl transition duration-300 ease-in-out">
                  Login
                </button>
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <button className="bg-white text-pink-700 border-2 border-transparent hover:border-pink-700 hover:text-black px-5 py-2 rounded-3xl transition duration-300">
                  Sign Up
                </button>
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <ul className="md:hidden flex flex-col gap-4 pb-4 animate-fade-in">
            {['Home', 'Contact'].map((item, idx) => (
              <li key={idx} className="text-pink-800 text-base px-1">
                {item}
              </li>
            ))}
            <li>
              <Link to="/login">
                <button className="w-full bg-black text-white py-2 rounded-2xl hover:bg-opacity-80 transition">
                  Login
                </button>
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <button className="w-full bg-white text-pink-700 py-2 rounded-2xl border hover:border-pink-600 transition">
                  Sign Up
                </button>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
