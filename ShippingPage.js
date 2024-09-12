import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ShippingPage.css';
import ProductDetailPage from './ProductDetailPage'; 
const ShippingPage = () => {
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
            <li>
              <Link to="/shipping">SHIPPING</Link>
            </li>
            <li className="dropdown">
              <Link to="/makeup" className="dropbtn">
                MAKEUP
              </Link>
              <div className="dropdown-content">
                <Link to="/face">Face</Link>
                <Link to="/eyes">Eyes</Link>
                <Link to="/lips">Lips</Link>
              </div>
            </li>
            <li>
              <Link to="/new">NEW</Link>
            </li>
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
          <ShippingCosts />
          <ShippingLocations />
          <ShippingFAQ />
          <footer className="shipping-footer">
            <p>If you have any additional questions about our shipping policies, please contact us.</p>
          </footer>
        </>
      )}
    </>
  );
};
const ShippingCosts = () => (
  <section className="section shipping-costs">
    <h2>Shipping Costs</h2>
    <p>Shipping costs depend on your location and the selected shipping method:</p>
    <table className="shipping-table">
      <thead>
        <tr>
          <th>Shipping Method</th>
          <th>Cost</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Standard Shipping</td>
          <td>$5.99</td>
        </tr>
        <tr>
          <td>Express Shipping</td>
          <td>$12.99</td>
        </tr>
        <tr>
          <td>Overnight Shipping</td>
          <td>$19.99</td>
        </tr>
      </tbody>
    </table>
  </section>
);
const ShippingLocations = () => (
  <section className="section shipping-locations">
    <h2>Shipping Locations</h2>
    <p>We currently ship to the following countries and regions:</p>
    <ul className="list">
      <li>Kosovo</li>
      <li>Italy</li>
      <li>Greece</li>
      <li>United Kingdom</li>
      <li>Albania</li>
    </ul>
  </section>
);
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="faq-item">
      <h3 className={`faq-question ${isOpen ? 'open' : ''}`} onClick={toggleAnswer}>
        {question}
      </h3>
      {isOpen && <p className="faq-answer">{answer}</p>}
    </div>
  );
};
const ShippingFAQ = () => (
  <section className="section shipping-faq">
    <h2>Frequently Asked Questions</h2>
    <FAQItem
      question="How can I track my order?"
      answer="Once your order has shipped, you will receive a tracking number via email. You can use this number to track your order on our website or the carrier's website."
    />
    <FAQItem
      question="Can I change my shipping address after placing an order?"
      answer="If you need to change your shipping address, please contact our customer service as soon as possible. We can update the address if the order hasn't been shipped yet."
    />
    <FAQItem
      question="What if my package is lost or damaged?"
      answer="If your package is lost or damaged during shipping, please contact our customer service immediately. We will work with the carrier to resolve the issue."
    />
  </section>
);
export default ShippingPage;