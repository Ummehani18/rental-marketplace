import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axiosInstance from '../services/axiosInstance';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import NoProductsAvailable from '../components/NoProductAvailable';
import { FaInstagram, FaWhatsapp, FaTwitter } from 'react-icons/fa';

const subCategoryMap = {
  Vehicle: ['bike', 'car', 'bus', 'jeep'],
  Furniture: ['sofa', 'table', 'chair', 'bed'],
  'Electronics and Gadgets': ['camera', 'laptop', 'washing machine', 'mobile'],
  'Sports Equipment': ['outdoor', 'fitness & gym', 'team sports', 'football', 'cricket'],
};

export default function ProductCatalog() {
  const { category } = useParams();
  const navigate = useNavigate();
  const [allProducts, setAllProducts] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [error, setError] = useState('');

  const subCategories = subCategoryMap[category] || [];
  const apiCategory = encodeURIComponent(category); // ✅ Fixed to encode spaces and special characters

  useEffect(() => {
    if (!apiCategory) return;

    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get(`/products/category/${apiCategory}`);
        setAllProducts(response.data);
        setError('');
      } catch (err) {
        console.error('Failed to load products:', err);
        setAllProducts([]);
        setError('Failed to fetch products. Please log in again if required.');
      }
    };

    fetchProducts();
  }, [apiCategory]);

  const handleSubCategoryClick = (subCat) => {
    setSelectedSubCategory(subCat === 'all' ? null : subCat);
  };

  const filteredProducts = selectedSubCategory
    ? allProducts.filter(
        (p) => p.subCategory?.toLowerCase() === selectedSubCategory.toLowerCase()
      )
    : allProducts;

  return (
    <div className="min-h-screen bg-white pt-16">
      <Header />

      {/* Sticky Top Bar */}
      <div className="sticky top-16 z-10 bg-white px-5 pt-3 pb-3 shadow-sm border-b border-orange-300">
        <h2 className="text-3xl font-bold text-orange-500 text-left">
          {category} <span className="text-black">Market</span>
        </h2>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-1">
          <p className="text-black text-base text-left">
            {category === 'Furniture'
              ? 'YOUR PERFECT FURNITURE, JUST A RENTAL AWAY!'
              : category === 'Vehicle'
              ? 'FIND THE PERFECT RIDE, ANYTIME!'
              : category === 'Electronics and Gadgets'
              ? 'SMART TECH, READY TO RENT!'
              : category === 'Sports Equipment'
              ? 'GEAR UP AND PLAY – RENT YOUR SPORTS EQUIPMENT TODAY!'
              : 'Explore our best selections for your needs!'}
          </p>

          {subCategories.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2 sm:mt-0 justify-end">
              {['all', ...subCategories].map((subCat) => (
                <button
                  key={subCat}
                  onClick={() => handleSubCategoryClick(subCat)}
                  className={`border border-orange-500 px-4 py-1 rounded-full text-sm transition-all ${
                    selectedSubCategory === subCat ||
                    (subCat === 'all' && selectedSubCategory === null)
                      ? 'bg-orange-500 text-white'
                      : 'text-orange-600 hover:bg-orange-100'
                  }`}
                >
                  {subCat === 'all'
                    ? 'All'
                    : subCat.charAt(0).toUpperCase() + subCat.slice(1)}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Product Grid */}
      <main className="p-3 flex justify-center">
        {error ? (
          <p className="text-red-600 text-center">{error}</p>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={index}
                name={product.name}
                image={product.image || '/assets/images/default-product.png'}
                location={product.location}
                rent={product.rent}
                description={product.description}
                category={category}
                subCategory={product.subCategory}
                onClick={() =>
                  navigate(`/products/${category}/details`, {
                    state: product,
                  })
                }
              />
            ))}
          </div>
        ) : (
          <div className="scale-75 sm:scale-90">
            <NoProductsAvailable />
          </div>
        )}
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
