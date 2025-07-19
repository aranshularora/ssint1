import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ProductsPage from './components/pages/ProductsPage';
import ServicesPage from './components/pages/ServicesPage';
import SupportPage from './components/pages/SupportPage';
import ContactPage from './components/pages/ContactPage';
import CategoryPage from './components/pages/CategoryPage';
import ProductDetailPage from './components/pages/ProductDetailPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:category" element={<CategoryPage />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;