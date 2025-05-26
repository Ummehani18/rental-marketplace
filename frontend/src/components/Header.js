// src/components/Header.jsx
import React from 'react';
import { FaBell, FaShoppingCart } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Location from './Location';

function Header() {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate('/signin');
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 py-1 text-sm">
        {/* Location */}
        <div className="flex items-center gap-1 text-gray-600 mb-2 sm:mb-0">
          <Location />
        </div>

        {/* Logo */}
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl font-bold">
            <span className="text-orange-400">Rentify</span>{' '}
            <span>- Rental Market</span>
          </h2>
        </div>
    

        {/* Icons and Sign In */}
        <div className="flex items-center gap-4">
          <FaBell className="text-gray-600 text-lg" />
          <FaShoppingCart className="text-gray-600 text-lg" />
          <button
            onClick={handleSignInClick}
            className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-1 rounded-full text-sm"
          >
            Sign In
          </button>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8 py-1 bg-orange-300 text-sm sm:text-base font-times font-semibold text-center px-4">
        <Link
          to="/products/Furniture"
          className="hover:text-white focus:text-white transition-colors"
        >
          Furniture
        </Link>
        <Link
          to="/products/Vehicle"
          className="hover:text-white focus:text-white transition-colors"
        >
          Vehicle
        </Link>
        <Link
          to="/products/Sports%20Equipment"
          className="hover:text-white focus:text-white transition-colors"
        >
          Sports Equipment
        </Link>
        <Link
          to="/products/Electronics%20and%20Gadgets"
          className="hover:text-white focus:text-white transition-colors"
        >
          Electronics & Gadgets
        </Link>
      </div>
    </div>
  );
}

export default Header;
