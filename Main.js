import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App'; 
import ShippingPage from './ShippingPage';
import MakeupPage from './MakeupPage';
import NewPage from './NewPage';
import FacePage from './FacePage';
import EyesPage from './EyesPage';
import LipsPage from './LipsPage';
import ProductDetailPage from './ProductDetailPage';
const Main = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/shipping" element={<ShippingPage />} />
                <Route path="/makeup" element={<MakeupPage />} />
                <Route path="/new" element={<NewPage />} />
                <Route path="/face" element={<FacePage />} /> 
                <Route path="/eyes" element={<EyesPage />} /> 
                <Route path="/lips" element={<LipsPage />} /> 
                <Route path="/product/:productId" element={<ProductDetailPage />} />
            </Routes>
        </Router>
    );
};
export default Main;