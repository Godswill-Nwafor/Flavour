import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';
import MobileMenu from './components/MobileMenu';
import Collection from './pages/Collection';
import Brands from './pages/Brands';
import New from './pages/New';
import Sales from './pages/Sales';
import Shop from './pages/Shop';
import ProductPage from './pages/Product';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './components/ProtectedRoute';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import About from './pages/About';
import Shipping from './pages/Shipping';
import Returns from './pages/Returns';
import SizeGuide from './pages/SizeGuide';
import Careers from './pages/Careers';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import './App.css';

const HomePage: React.FC<{
  onVideoClick: () => void;
  onMenuClick: () => void;
  onCartClick: () => void;
}> = ({ onVideoClick, onMenuClick, onCartClick }) => {
  return (
    <>
      <Header onMenuClick={onMenuClick} onCartClick={onCartClick} />
      <Hero onVideoClick={onVideoClick} />
      <Footer />
    </>
  );
};

const PageWithHeader: React.FC<{
  children: React.ReactNode;
  onMenuClick: () => void;
  onCartClick: () => void;
}> = ({ children, onMenuClick, onCartClick }) => {
  return (
    <>
      <Header onMenuClick={onMenuClick} onCartClick={onCartClick} />
      {children}
      <Footer />
    </>
  );
};

const AppContent: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <div className="app">
      <AuthProvider>
      <CartProvider>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              onVideoClick={() => setIsVideoOpen(true)}
              onMenuClick={() => setIsMenuOpen(true)}
              onCartClick={handleCartClick}
            />
          }
        />
        <Route
          path="/collection"
          element={
            <PageWithHeader onMenuClick={() => setIsMenuOpen(true)} onCartClick={handleCartClick}>
              <Collection />
            </PageWithHeader>
          }
        />
        <Route
          path="/brands"
          element={
            <PageWithHeader onMenuClick={() => setIsMenuOpen(true)} onCartClick={handleCartClick}>
              <Brands />
            </PageWithHeader>
          }
        />
        <Route
          path="/new"
          element={
            <PageWithHeader onMenuClick={() => setIsMenuOpen(true)} onCartClick={handleCartClick}>
              <New />
            </PageWithHeader>
          }
        />
        <Route
          path="/sales"
          element={
            <PageWithHeader onMenuClick={() => setIsMenuOpen(true)} onCartClick={handleCartClick}>
              <Sales />
            </PageWithHeader>
          }
        />
        <Route
          path="/shop"
          element={
            <PageWithHeader onMenuClick={() => setIsMenuOpen(true)} onCartClick={handleCartClick}>
              <Shop />
            </PageWithHeader>
          }
        />
        <Route
          path="/cart"
          element={
            <PageWithHeader onMenuClick={() => setIsMenuOpen(true)} onCartClick={handleCartClick}>
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            </PageWithHeader>
          }
        />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        <Route
          path="/product/:id"
          element={
            <PageWithHeader onMenuClick={() => setIsMenuOpen(true)} onCartClick={handleCartClick}>
              <ProductPage />
            </PageWithHeader>
          }
        />
        <Route
          path="/contact"
          element={
            <PageWithHeader onMenuClick={() => setIsMenuOpen(true)} onCartClick={handleCartClick}>
              <Contact />
            </PageWithHeader>
          }
        />
        <Route
          path="/faq"
          element={
            <PageWithHeader onMenuClick={() => setIsMenuOpen(true)} onCartClick={handleCartClick}>
              <FAQ />
            </PageWithHeader>
          }
        />
        <Route
          path="/about"
          element={
            <PageWithHeader onMenuClick={() => setIsMenuOpen(true)} onCartClick={handleCartClick}>
              <About />
            </PageWithHeader>
          }
        />
        <Route
          path="/shipping"
          element={
            <PageWithHeader onMenuClick={() => setIsMenuOpen(true)} onCartClick={handleCartClick}>
              <Shipping />
            </PageWithHeader>
          }
        />
        <Route
          path="/returns"
          element={
            <PageWithHeader onMenuClick={() => setIsMenuOpen(true)} onCartClick={handleCartClick}>
              <Returns />
            </PageWithHeader>
          }
        />
        <Route
          path="/size-guide"
          element={
            <PageWithHeader onMenuClick={() => setIsMenuOpen(true)} onCartClick={handleCartClick}>
              <SizeGuide />
            </PageWithHeader>
          }
        />
        <Route
          path="/careers"
          element={
            <PageWithHeader onMenuClick={() => setIsMenuOpen(true)} onCartClick={handleCartClick}>
              <Careers />
            </PageWithHeader>
          }
        />
        <Route
          path="/privacy"
          element={
            <PageWithHeader onMenuClick={() => setIsMenuOpen(true)} onCartClick={handleCartClick}>
              <Privacy />
            </PageWithHeader>
          }
        />
        <Route
          path="/terms"
          element={
            <PageWithHeader onMenuClick={() => setIsMenuOpen(true)} onCartClick={handleCartClick}>
              <Terms />
            </PageWithHeader>
          }
        />
      </Routes>

        <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </CartProvider>
      </AuthProvider>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
