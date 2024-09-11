import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index';
import './Kiko.css';
import './styles.css';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
const App = () => {
    const [showAuthForm, setShowAuthForm] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const products = [
        { id: 1, name: 'Days in Bloom Lipstick', description: 'Blends beautifully on the lips; echoing a flurry of petals.' },
        { id: 2, name: 'Glossy Pink', description: 'Perfect for any occasion. Add a touch of radiance on the go.' },
        { id: 3, name: 'Sheer Lip Pencil', description: 'Prevents lipsticks and lipglosses from feathering.' },
        { id: 4, name: 'Hydrating Foundation', description: 'Keeps your skin hydrated and glowy.' },
        { id: 5, name: 'Blush Palette', description: 'A palette with various shades to suit all skin tones.' },
        { id: 6, name: 'Concealer Stick', description: 'Full-coverage concealer stick for dark circles and blemishes.' },
        { id: 7, name: 'Glow Bronzer', description: 'Enhance your features with a radiant sun-kissed look.' },
        { id: 8, name: 'Volume Mascara', description: 'Giving the eyes depth from morning to night.' },
        { id: 9, name: 'Gel Eyeliner', description: 'Outlines the outer eye contour without smuding.' },
    ];
    const toggleAuthForm = () => {
        setShowAuthForm(!showAuthForm);
    };
    const toggleFormType = () => {
        setIsLogin(!isLogin);
    };
    const handleSearchChange = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);
        const results = products.filter(product => 
            product.name.toLowerCase().includes(query)
        );
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
                        {searchResults.map((product) => (
                            <li key={product.id}>
                                <Link to={`/product/${product.id}`}>{product.name}</Link> {/* Link to product detail page */}
                            </li>
                        ))}
                    </ul>
                ) : (
                    searchQuery && searchResults.length === 0 && <p>No products found</p>
                )}
            </div>
            {showAuthForm && (
                <div className="auth-form">
                    <button className="close-btn" onClick={toggleAuthForm}>×</button>
                    <form>
                        <label htmlFor="username">Email:</label>
                        <input type="text" id="username" name="username" />
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" />
                        {!isLogin && (
                            <>
                                <label htmlFor="confirmPassword">Confirm Password:</label>
                                <input type="password" id="confirmPassword" name="confirmPassword" />
                            </>
                        )}
                        <button type="submit">{isLogin ? 'Log In' : 'Sign Up'}</button>
                        <p>{isLogin ? "Don't have an account?" : "Already have an account?"}</p>
                        <button type="button" onClick={toggleFormType}>
                            {isLogin ? 'Sign Up' : 'Log In'}
                        </button>
                    </form>
                </div>
            )}
            <div className="submenu">
                <div className="header_logoWrapper">
                    <a className="header_center" href="/en-us/">
                        <span className="icon_iconContainer">
                            <svg width="78" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78 28" aria-labelledby="kikoTitle" role="img" height="28">
                                <title id="kikoTitle">KIKO MILANO</title>
                            </svg>
                        </span>
                    </a>
                </div>
                <div className="header-elements">
                    <a className="header_headerElement" onClick={toggleAuthForm}>
                        <span className="icon_iconContainer">
                            <svg width="200" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M18 18.05h.05V17.2a4.85 4.85 0 0 0-4.85-4.85H6.8a4.85 4.85 0 0 0-4.85 4.85V18.05H18ZM12.35 6.4c0 1.558-1.094 2.75-2.35 2.75S7.65 7.958 7.65 6.4 8.744 3.65 10 3.65s2.35 1.192 2.35 2.75Zm-6.4 0c0 2.453 1.809 4.45 4.05 4.45 2.241 0 4.05-1.997 4.05-4.45 0-2.453-1.809-4.45-4.05-4.45-2.241 0-4.05 1.997-4.05 4.45Zm-2.184 9.95a3.151 3.151 0 0 1 3.034-2.3h6.4c1.445 0 2.663.973 3.034 2.3H3.766Z" fill="currentColor" stroke="currentColor" strokeWidth=".1"></path>
                        </svg>
                    </span>
                    </a>
                </div>
            </div>
            <div className="header">
                <img src={require('./logo.jpg')} alt="Kiko logo" />
            </div>
            <div className="banner">
                <h2>Discover Your Beauty</h2>
            </div>
            <div className="container">
                <div className="section" id="home">
                    <h2>Welcome to KIKO Cosmetics</h2>
                    <p>At KIKO Cosmetics, we believe that beauty should be accessible to all. Our range of professional makeup and skincare products is designed to empower you to express yourself and enhance your natural beauty. With innovative formulas, a wide array of colors, and cutting-edge textures, we bring you the best of Italian beauty and elegance.</p>
                </div>
                <div className="section" id="products">
                    <h2>Most loved</h2>
                    <div className="products">
                        <div className="product">
                        <Link to="/product/8"><img src={require('./mascara.jpg')} alt="Mascara" /></Link>
                            <h3>Volume Mascara</h3>
                            <p>Always depth to your eyes.</p>
                            <p className="price">$17.50</p>
                        </div>
                        <div className="product">
                        <Link to="/product/2"><img src={require('./glossypink.jpeg')} alt="Pink Lipgloss" /></Link>
                            <h3>Glossy pink</h3>
                            <p>Perfect for any occasion.</p>
                            <p className="price">$17.00</p>
                        </div>
                        <div className="product">
                        <Link to="/product/4"><img src={require('./foundation.jpg')} alt="Foundation" /></Link>
                            <h3>Hydrating foundation</h3>
                            <p>Keeps the skin glowy and hydrated.</p>
                            <p className="price">$30.00</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/p75b8nnnWD8?si=E2lKef0ieefqscVQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h1>LIP GLOSSES</h1>
                    <p>From clear to glittery lip glosses, choose the best KIKO MILANO product for you. Plumping, volumising and nude lip glosses.</p>
                </div>
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
        </>
    );
};
export default App;