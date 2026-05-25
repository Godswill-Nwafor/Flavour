import React from 'react';
import { Link } from 'react-router-dom';
import './MobileMenu.css';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <div className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}></div>
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <h2>Menu</h2>
          <button className="close-menu" onClick={onClose}>×</button>
        </div>
        
        <nav className="mobile-nav">
          <Link to="/collection" onClick={onClose}>
            <span className="nav-icon">📦</span>
            COLLECTION
          </Link>
          <Link to="/brands" onClick={onClose}>
            <span className="nav-icon">🏷️</span>
            BRANDS
          </Link>
          <Link to="/new" onClick={onClose}>
            <span className="nav-icon">✨</span>
            NEW
          </Link>
          <Link to="/sales" onClick={onClose}>
            <span className="nav-icon">🔥</span>
            SALES
          </Link>
          <Link to="/shop" onClick={onClose}>
            <span className="nav-icon">🛍️</span>
            SHOP NOW
          </Link>
          <Link to="/cart" onClick={onClose}>
            <span className="nav-icon">🛒</span>
            CART
          </Link>
        </nav>

        <div className="mobile-menu-footer">
          <div className="social-links">
            <a href="#instagram" aria-label="Instagram">📷</a>
            <a href="#facebook" aria-label="Facebook">📘</a>
            <a href="#twitter" aria-label="Twitter">🐦</a>
            <a href="#pinterest" aria-label="Pinterest">📌</a>
          </div>
          <p>© 2026 Clothing Shop</p>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
