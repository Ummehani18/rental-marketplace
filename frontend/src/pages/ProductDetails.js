import React, { useEffect, useState } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import axiosInstance from '../services/axiosInstance';
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaWhatsapp, FaTwitter, FaShoppingCart, FaBell, FaUserCircle } from "react-icons/fa";
import Location from '../components/Location';

export default function ProductDetails() {
  const { state } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(state || null);

  useEffect(() => {
    if (!state && id) {
      axiosInstance
        .get(`/products/${id}`)
        .then((res) => setProduct(res.data))
        .catch((err) => console.error('Failed to fetch product', err));
    }
  }, [id, state]);

  const handleSignInClick = () => {
    navigate('/signin');
  };

  if (!product) return <div className="p-10 text-center">Loading product...</div>;

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 py-1 text-sm">
        <div className="flex items-center gap-1 text-gray-600 mb-2 sm:mb-0">
          <Location />
        </div>

        <div className="text-center">
          <h2 className="text-xl sm:text-2xl font-bold">
            <span className="text-orange-400">Rentify</span> - Rental Market
          </h2>
        </div>

        <div className="flex items-center gap-4">
          <FaBell className="text-gray-600 text-lg" />
          <FaShoppingCart className="text-gray-600 text-lg" />
          <FaUserCircle
            onClick={handleSignInClick}
            className="text-gray-600 text-2xl cursor-pointer hover:text-orange-500"
          />
        </div>
      </div>

      <div className="bg-orange-300 text-center py-2 font-semibold text-lg font-times">
        Product Details
      </div>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-12">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>

        <div>
          <h2 className="text-sm text-gray-500 uppercase">{product.category}</h2>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-lg mt-2">
            RENT: <span className="font-semibold">{product.rent}</span>
          </p>

          <p className="mt-4 font-semibold">Rental Duration:</p>
          <div className="flex gap-3 mt-2">
            {["1 Week", "1 Month", "2 Months"].map((duration) => (
              <button
                key={duration}
                className="border px-3 py-1 rounded-md text-sm hover:bg-orange-100"
              >
                {duration}
              </button>
            ))}
          </div>

          <p className="mt-6 font-semibold">Description :</p>
          <p className="mt-2 text-gray-700 text-sm leading-relaxed">
            {product.description || 'No description available.'}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="tel:+911234567890"
              className="inline-flex items-center gap-2 bg-orange-200 text-orange-800 font-semibold px-4 py-2 rounded-full text-sm hover:bg-orange-300"
            >
              <FaPhoneAlt />
              Call Owner
            </a>

            <a
              href="mailto:owner@example.com"
              className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 font-semibold px-4 py-2 rounded-full text-sm hover:bg-blue-200"
            >
              <FaEnvelope />
              Email Owner
            </a>
          </div>

          <button className="mt-6 w-full bg-red-500 text-white font-bold py-3 rounded-full hover:bg-red-600 text-lg">
            RENT NOW!
          </button>
        </div>
      </main>

      {/* Footer */}
      <div className="text-center text-xs sm:text-sm text-black-500 py-1 bg-orange-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex space-x-4 text-black text-sm sm:text-base order-2 md:order-1">
              <a href="/" className="hover:underline">Home</a>
              <a href="#" className="hover:underline">Contact</a>
            </div>

            <div className="flex flex-col items-center order-1 md:order-2">
              <div className="text-orange-600 font-bold text-base sm:text-lg">
                Rentify © 2025
              </div>
              <p className="text-gray-700 text-xs mt-1">
                Built with ❤️ by Rentify Team
              </p>
            </div>

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
