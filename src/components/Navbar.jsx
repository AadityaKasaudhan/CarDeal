import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Information Bar */}
      <div className="bg-blue-900 text-white text-sm py-2">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mx-4">
            <div className="flex items-center space-x-1">
              <FaMapMarkerAlt />
              <span>Find A Location</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaPhoneAlt />
              <span>+01234567890</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaEnvelope />
              <span>Example@gmail.com</span>
            </div>
          </div>
          {/* Social Media Icons */}
          <div className="flex space-x-3 mx-4 mt-2 md:mt-0">
            <a href="https://facebook.com" className="hover:text-gray-400">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" className="hover:text-gray-400">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" className="hover:text-gray-400">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" className="hover:text-gray-400">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-red-600 flex items-center space-x-1"
          >
            <img
              src="/assets/car-logo.png"
              alt="Car Logo"
              className="w-[80%] h-[80%]"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="hover:text-gray-300 transition duration-300 ease-in-out"
            >
              Home
            </Link>
            <Link
              to="/cars"
              className="hover:text-gray-300 transition duration-300 ease-in-out"
            >
              Buy
            </Link>
            <Link
              to="/sell"
              className="hover:text-gray-300 transition duration-300 ease-in-out"
            >
              Sell
            </Link>
            <Link
              to="/contact"
              className="hover:text-gray-300 transition duration-300 ease-in-out"
            >
              Contact Us
            </Link>

            <Link
              to="/AdminDashboard"
              className="hover:text-gray-300 transition duration-300 ease-in-out"
            >
              Dashboard
            </Link>
          </div>

          {/* Login and Sign Up Buttons */}
          <div className="flex space-x-4">
            <Link
              to="/login"
              className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition duration-300 ease-in-out"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition duration-300 ease-in-out"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <button
              className={`text-gray-700 focus:outline-none ${
                isOpen ? "transform rotate-90" : ""
              } transition-transform duration-300`}
              onClick={toggleMenu}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white transition duration-300 ease-in-out">
            <Link
              to="/"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/cars"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out"
              onClick={toggleMenu}
            >
              Buy
            </Link>
            <Link
              to="/sell"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out"
              onClick={toggleMenu}
            >
              Sell
            </Link>
            <Link
              to="/contact"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>

            <Link
              to="/AdminDashboard"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out"
              onClick={toggleMenu}
            >
              Dashboard
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
