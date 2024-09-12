import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NewPage.css';
import ProductDetailPage from './ProductDetailPage'; 
const NewPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const products = [
    { id: 1, name: 'Days in Bloom Lipstick', description: 'Blends beautifully on the lips; echoing a flurry of petals.' },
    { id: 2, name: 'Glossy Pink', description: 'Perfect for any occasion. Add a touch of radiance on the go.' },
    { id: 3, name: 'Sheer Lip Pencil', description: 'Prevents lipsticks and lipglosses from feathering.' },
    { id: 4, name: 'Hydrating Foundation', description: 'Keeps your skin hydrated and glowy.' },
    { id: 5, name: 'Blush Palette', description: 'A palette with various shades to suit all skin tones.' },
    { id: 6, name: 'Concealer Stick', description: 'Full-coverage concealer stick for dark circles and blemishes.' },
    { id: 7, name: 'Glow Bronzer', description: 'Enhance your features with a radiant sun-kissed look.' },
    { id: 8, name: 'Volume Mascara', description: 'Giving the eyes depth from morning to night.' },
    { id: 9, name: 'Gel Eyeliner', description: 'Outlines the outer eye contour without smudging.' },
  ];
  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const results = products.filter(product =>
      product.name.toLowerCase().includes(query)
    );
    setSearchResults(results);
  };
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };
  return (
    <>
      <header className="navbar-container">
        <nav className="navbar-right">
          <ul className="nav-list">
            <li><Link to="/shipping">SHIPPING</Link></li>
            <li className="dropdown">
              <Link to="/makeup" className="dropbtn">MAKEUP</Link>
              <div className="dropdown-content">
                <Link to="/face">Face</Link>
                <Link to="/eyes">Eyes</Link>
                <Link to="/lips">Lips</Link>
              </div>
            </li>
            <li><Link to="/new">NEW</Link></li>
          </ul>
        </nav>
        <div className="search-container">
          <div className="search-group">
            <span className="icon_iconContainer2">
              <svg width="18" height="18" viewBox="0 0 25 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.6 12.6L18 17M15.2 8.6C15.2 11.6928 12.6928 14.2 9.6 14.2C6.50721 14.2 4 11.6928 4 8.6C4 5.50721 6.50721 3 9.6 3C12.6928 3 15.2 5.50721 15.2 8.6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="bevel"></path>
              </svg>
            </span>
            <input 
              type="text" 
              value={searchQuery} 
              onChange={handleSearchChange} 
              placeholder="Search a product..." 
              className="search-input"
            />
          </div>
        </div>
      </header>
      <div className="search-results">
        {searchResults.length > 0 ? (
          <ul>
            {searchResults.map((product) => (
              <li key={product.id}>
                <Link to={`/product/${product.name.toLowerCase().replace(/\s+/g, '-')}`}>{product.name}</Link> {/* Navigate to product detail */}
              </li>
            ))}
          </ul>
        ) : (
          searchQuery && searchResults.length === 0 && <p>No products found</p>
        )}
      </div>
      {selectedProduct ? (
        <ProductDetailPage product={selectedProduct} />
      ) : (
        <>
          <header>
            <h1>LATEST PROMOS</h1>
          </header>
          <div className="container1">
            <div className="promo">
              <h2>Buy One Get One Free</h2>
              <p>For a limited time, buy one item and get another one for free. This offer applies to all products in our store.</p>
              <p><strong>Valid until:</strong> September 13, 2024</p>
            </div>
            <div className="promo">
              <h2>Free Shipping</h2>
              <p>Enjoy free shipping on all orders over $50. Shop now and save on shipping costs.</p>
              <p><strong>Valid until:</strong> December 31, 2024</p>
            </div>
            <div className="promo">
              <h2>Student Discount</h2>
              <p>Students get an extra 15% off on all purchases. Just verify your student status at checkout.</p>
              <p><strong>Valid until:</strong> Ongoing</p>
            </div>
          </div>
          <footer>
            <p>&copy; 2024 KIKO Cosmetics. All rights reserved.</p>
          </footer>
        </>
      )}
    </>
  );
};
export default NewPage;