import React, { useState, useEffect } from 'react';
import './Product.css';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState('alphabetical'); // Default sorting option

  // Fetch products from the API
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  // Handle Sort Option Change
  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  // Sort products based on selected option
  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption === 'alphabetical') {
      return a.title.localeCompare(b.title); // A-Z
    } else if (sortOption === 'reverse-alphabetical') {
      return b.title.localeCompare(a.title); // Z-A
    }
    return 0; // Default, no sorting
  });

  return (
    <div className="product-page">
      <h2>Our Products</h2>

      {/* Dropdown to choose sorting */}
      <div className="sort-options">
        <label htmlFor="sort">Sort by: </label>
        <select id="sort" value={sortOption} onChange={handleSortChange}>
          <option value="alphabetical">Alphabetically (A-Z)</option>
          <option value="reverse-alphabetical">Alphabetically (Z-A)</option>
        </select>
      </div>

      {/* Product List */}
      <div className="product-list">
        {sortedProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
