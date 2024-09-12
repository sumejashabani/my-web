import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';  
import './ProductDetailPage.css';
import PaymentModal from './PaymentModal';
import Reviews from './Reviews';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
const MakeupProducts = [
  { id: 1, name: 'Days in Bloom Lipstick', description: 'Blends beautifully on the lips.', price: '$7.50', img: require('./lipstick.jpg') },
  { id: 2, name: 'Glossy Pink', description: 'Perfect for any occasion. Add a touch of radiance on the go.', price: '$17.00', img: require('./glossypink.jpeg') },
  { id: 3, name: 'Sheer Lip Pencil', description: 'Prevents lipsticks and lipglosses from feathering.', price: '$10.00', img: require('./lip.jpg') },
  { id: 4, name: 'Hydrating Foundation', description: 'Keeps your skin hydrated and glowy.', price: '$30', img: require('./foundation.jpg') },
  { id: 5, name: 'Blush Palette', description: 'A palette with various shades to suit all skin tones.', price: '$25', img: require('./blush.jpg') },
  { id: 6, name: 'Concealer Stick', description: 'Full-coverage concealer stick for dark circles and blemishes.', price: '$18', img: require('./concealer.jpg') },
  { id: 7, name: 'Glow Bronzer', description: 'Enhance your features with a radiant sun-kissed look.', price: '$19.79', img: require('./bronzer.jpeg') },
  { id: 8, name: 'Volume Mascara', description: 'Giving the eyes depth from morning to night.', price: '$17.50', img: require('./mascara.jpg') },
  { id: 9, name: 'Gel Eyeliner', description: 'Outlines the outer eye contour without smudging.', price: '$16', img: require('./eyeliner.jpeg') },
];
const ProductDetailPage = () => {
  const { productId } = useParams(); 
  const [isPaymentOpen, setPaymentOpen] = useState(false);
  const [reviewText, setReviewText] = useState('');
  const [reviews, setReviews] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const product = MakeupProducts.find(p => p.id === parseInt(productId));
  if (!product) {
    return <h2>Product not found</h2>;
  }
  const handlePaymentClick = () => setPaymentOpen(true);
  const handlePaymentClose = () => setPaymentOpen(false);
  const handleReviewSubmit = (event, rating) => {
    event.preventDefault();
    if (reviewText && rating > 0) {
      setReviews([...reviews, { text: reviewText, rating }]);
      setReviewText('');
    } else {
      alert("Please provide both a review and a rating.");
    }
  };
  const handlePaymentSubmit = (event) => {
    event.preventDefault();
    const cardNumber = event.target.cardNumber.value;
    const cvv = event.target.cvv.value;
    if (cardNumber.length !== 16 || cvv.length !== 3) {
      alert("Please enter valid card details");
    } else {
      alert("Payment successful");
      setPaymentOpen(false);
    }
  };
  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const productNames = MakeupProducts.map(product => product.name.toLowerCase());
    const results = productNames.filter(name => name.includes(query));
    setSearchResults(results);
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
            {searchResults.map((result, index) => {
              const foundProduct = MakeupProducts.find(product => product.name.toLowerCase() === result);
              return (
                <li key={index}>
                  <Link to={`/product/${foundProduct.id}`}>
                    {foundProduct.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : (
          searchQuery && searchResults.length === 0 && <p>No products found</p>
        )}
      </div>
      <div className="page-container">
        <div className="product-detail-page">
          <div className="product-main">
            <img src={product.img} alt={product.name} className="product-image" />
            <div className="product-content">
              <h1 className="product-title">{product.name}</h1>
              <p className="product-description">{product.description}</p>
              <h3 className="product-price">Price: {product.price}</h3>
              <button onClick={handlePaymentClick} className="buy-now-btn">Buy Now</button>
            </div>
          </div>
          <Reviews
            reviews={reviews}
            reviewText={reviewText}
            setReviewText={setReviewText}
            handleReviewSubmit={handleReviewSubmit}
          />
          {isPaymentOpen && (
            <PaymentModal
              handlePaymentClose={handlePaymentClose}
              handlePaymentSubmit={handlePaymentSubmit}
            />
          )}
        </div>
        <footer>
          <div className="social-icons">
            <a href="https://www.facebook.com/KikoMilanoGlobal/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://www.instagram.com/kikomilano/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://x.com/kikomilanoint" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.youtube.com/@KikocosmeticsItOfficial" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
          <p>&copy; 2024 KIKO Cosmetics. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};
export default ProductDetailPage;