// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import ProductCatalog from './pages/ProductCatalog';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />

          {/* Support for category-based and fixed catalog */}
          <Route path="/catalog" element={<ProductCatalog />} />
          <Route path="/products/:category" element={<ProductCatalog />} />

          {/* Product details route */}
          <Route path="/products/:category/details" element={<ProductDetails />} />

          {/* 404 Fallback */}
          <Route
            path="*"
            element={
              <div className="text-center p-10 text-2xl text-red-600 font-semibold">
                404 - Page Not Found
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
