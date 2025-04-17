import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import ProductDetails from '../Components/ProductDetails/ProductDetails';
import CartPage from '../pages/CartPage';
import Navbar from '../Components/Navbar/Navbar';

const Routing = () => {
  return (
    <>
      <Navbar /> {/* ✅ Navbar should be outside Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
};

export default Routing;



