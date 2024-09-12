import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MakeupPage.css';
const MakeupPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const productsPerPage = 4;
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
    const handleSearchChange = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);
        const results = products.filter(product => 
            product.name.toLowerCase().includes(query)
        );
        setSearchResults(results);
    };
    const MakeupProducts = [
        { id: 1, name: 'Days in Bloom Lipstick', description: 'Blends beautifully on the lips; echoing a flurry of petals.', price: '$7.50', img: require('./lipstick.jpg') },
        { id: 2, name: 'Glossy Pink', description: 'Perfect for any occasion. Add a touch of radiance on the go.', price: '$17.00', img: require('./glossypink.jpeg') },
        { id: 3, name: 'Sheer Lip Pencil', description: 'Prevents lipsticks and lipglosses from feathering.', price: '$10.00', img: require('./lip.jpg') },
        { id: 4, name: 'Hydrating Foundation', description: 'Keeps your skin hydrated and glowy.', price: '$30', img: require('./foundation.jpg') },
        { id: 5, name: 'Blush Palette', description: 'A palette with various shades to suit all skin tones.', price: '$25', img: require('./blush.jpg') },
        { id: 6, name: 'Concealer Stick', description: 'Full-coverage concealer stick for dark circles and blemishes.', price: '$18', img: require('./concealer.jpg') },
        { id: 7, name: 'Glow Bronzer', description: 'Enhance your features with a radiant sun-kissed look.', price: '$19.79', img: require('./bronzer.jpeg') },
        { id: 8, name: 'Volume Mascara', description: 'Giving the eyes depth from morning to night.', price: '$17.50', img: require('./mascara.jpg') },
    ];
    const maxIndex = Math.ceil(MakeupProducts.length / productsPerPage);
    const nextProducts = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % maxIndex);
    };
    const prevProducts = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + maxIndex) % maxIndex);
    };
    const getVisibleProducts = () => {
        const startIndex = currentIndex * productsPerPage;
        return MakeupProducts.slice(startIndex, startIndex + productsPerPage);
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
            <div className="makeup-page-container">
                <h1 className="makeup-page-title">Makeup Products</h1>
                <div className="products-grid fade"> 
                    {getVisibleProducts().map((product) => (
                        <div key={product.id} className="product-card">
                            <Link to={`/product/${product.id}`}>
                                <img src={product.img} alt={product.name} className="product-image" />
                                <div className="product-info">
                                    <h2 className="product-name">{product.name}</h2>
                                    <p className="product-description">{product.description}</p>
                                    <p className="product-price">{product.price}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="carousel-controls">
                    <button onClick={prevProducts} className="prev">❮</button>
                    <button onClick={nextProducts} className="next">❯</button>
                </div>
            </div>
        </>
    );
};
export default MakeupPage;