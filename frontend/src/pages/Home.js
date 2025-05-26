import React from 'react';
import {
  FaMapMarkerAlt,
  FaBell,
  FaShoppingCart,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
} from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Location from '../components/Location';
import Header from '../components/Header';
import homeBg from '../assets/images/home bg.png';

function Home() {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate('/signin');
  };

  return (
    <div className="font-sans text-gray-800 min-h-screen bg-white pt-20">
      {/* Fixed Header */}
      <Header />
      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between px-2 sm:px-12 py-2">
        <div className="flex-1 text-center md:text-left space-y-5 py-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-orange-400 font-times">
            Rent. Use. Return
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold">
            Why buy when you can rent?
            <br />
            Get what you need, when you need it!
          </h2>

          {/* Discount Banner */}
          <div className="flex justify-center md:justify-start w-full">
            <div className="flex items-center border border-r-4 border-solid border-orange-400 rounded-xl transform scale-90 md:scale-60">
              {/* Discount Percentage Section */}
              <div className="h-full w-[130px] flex flex-col justify-center items-center text-orange-400 p-4 animate-zoom-out">
                <span className="block font-bold text-2xl">15%</span>
                <span className="block font-bold text-2xl">OFF</span>
              </div>

              {/* Divider */}
              <div className="w-0 h-[160px] border-r-4 border-dashed border-orange-400"></div>

              {/* Message Section */}
              <div className="p-4 flex-1 text-orange-400 w-[330px] h-full">
                <h3 className="font-semibold text-2xl h-[34px] flex items-center justify-start mb-4">
                  <span className="animate-bounce">FIRST-RENT🎉</span>
                </h3>
                <p className="text-black">
                  Get Discounts on your first Rent{' '}
                  <strong>15% OFF</strong> on all products
                </p>
              </div>
            </div>
          </div>

          <button className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded-full text-sm sm:text-base">
            Shop Now
          </button>
        </div>
        <div className="flex-1">
          <img
            src={homeBg}
            alt="Hero"
            className="w-[550px] h-auto mx-auto"
          />
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center text-xs sm:text-sm text-black-500 py-1 bg-orange-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Left: Links */}
            <div className="flex space-x-4 text-black text-sm sm:text-base order-2 md:order-1">
              <a href="#" className="hover:underline">
                About Us
              </a>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </div>

            {/* Center: Brand and Bottom Note */}
            <div className="flex flex-col items-center order-1 md:order-2">
              <div className="text-orange-600 font-bold text-base sm:text-lg">
                Rentify © 2025
              </div>
              <p className="text-gray-700 text-xs mt-1">
                Built with ❤️ by Rentify Team
              </p>
            </div>

            {/* Right: Social Icons */}
            <div className="flex space-x-4 text-lg order-3">
              <a href="#" aria-label="Instagram" className="hover:text-orange-600">
                <FaInstagram />
              </a>
              <a href="#" aria-label="WhatsApp" className="hover:text-orange-600">
                <FaWhatsapp />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-orange-600">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
