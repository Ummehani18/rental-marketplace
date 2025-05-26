import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../services/axiosInstance';
import { FaMapMarkerAlt, FaInstagram, FaWhatsapp, FaTwitter } from 'react-icons/fa';
import Location from '../components/Location';
import bags from '../assets/images/bags.png';

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({ name: '', username: '', password: '' });
  const navigate = useNavigate();

  const toggleForm = () => setIsSignUp(!isSignUp);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        await axiosInstance.post('/auth/signup', {
          name: formData.name,
          username: formData.username,
          password: formData.password,
        });
        alert('Account created successfully. Please sign in.');
        setIsSignUp(false);
      } else {
        const res = await axiosInstance.post('/auth/signin', {
          username: formData.username,
          password: formData.password,
        });

        const token = res.data.token || res.data.accessToken;
        if (token) {
          localStorage.setItem('token', token);
          console.log('✅ Token saved to localStorage:', token);
          navigate('/catalog');
        } else {
          alert('Token not found in response');
        }
      }
    } catch (err) {
      alert('Authentication failed: ' + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans pt-10 py-2 text-gray-800">
      {/* Header */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 py-1 text-sm">
          <div className="flex items-center gap-1 text-gray-600 mb-2 sm:mb-0">
            <Location />
          </div>
          <div className="flex items-center font-bold text-lg space-x-2">
            <img src={bags} alt="logo" className="w-[30px] h-auto" />
            <span className="text-orange-400">Rentify</span>
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8 py-1 bg-orange-300 text-sm sm:text-base font-times font-semibold text-center px-4">
        <p className="text-lg font-semibold font-times">
          {isSignUp ? 'Create your account and explore amazing rentals' : 'Welcome back! Sign in to continue'}
        </p>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-center mt-20 md:mt-1 px-2">
        {/* Left: Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6">{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
            <form onSubmit={handleSubmit}>
              {isSignUp && (
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-2 rounded border bg-blue-50 text-sm"
                    required
                  />
                </div>
              )}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Username</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter your username"
                  className="w-full px-4 py-2 rounded border bg-red-50 text-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter at least 8+ characters"
                  className="w-full px-4 py-2 rounded border bg-red-50 text-sm"
                  minLength={8}
                  required
                />
              </div>

              {!isSignUp && (
                <div className="flex items-center justify-between mb-4 text-sm">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Remember me
                  </label>
                  <a href="#" className="text-blue-600 hover:underline">
                    Forgot password?
                  </a>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
              >
                {isSignUp ? 'Create Account' : 'Sign In'}
              </button>
            </form>
            <p className="mt-4 text-sm text-center">
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button onClick={toggleForm} className="text-blue-600 hover:underline font-medium">
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </button>
            </p>
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2 hidden md:flex items-center justify-center bg-white p-0">
          <img src={bags} alt="Shopping Illustration" className="w-[500px] h-auto mx-auto" />
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-xs sm:text-sm text-black-500 py-1 bg-orange-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex space-x-4 text-black text-sm sm:text-base order-2 md:order-1">
              <a href="/" className="hover:underline">Home</a>
              <a href="#" className="hover:underline">Contact</a>
            </div>
            <div className="flex flex-col items-center order-1 md:order-2">
              <div className="text-orange-600 font-bold text-base sm:text-lg">Rentify © 2025</div>
              <p className="text-gray-700 text-xs mt-1">Built with ❤️ by Rentify Team</p>
            </div>
            <div className="flex space-x-4 text-lg order-3">
              <a href="#" className="hover:text-orange-600"><FaInstagram /></a>
              <a href="#" className="hover:text-orange-600"><FaWhatsapp /></a>
              <a href="#" className="hover:text-orange-600"><FaTwitter /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
