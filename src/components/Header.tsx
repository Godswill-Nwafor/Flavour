import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onMenuClick: () => void;
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, onCartClick }) => {
  const { items } = useCart();
  const count = items.reduce((s, it) => s + it.quantity, 0);
  const navigate = useNavigate();

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.querySelector('input[name="q"]') as HTMLInputElement | null;
    const q = input?.value.trim();
    navigate(`/shop${q ? `?search=${encodeURIComponent(q)}` : ''}`);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>CLOTHING<br />SHOP</h1>
        </Link>
        
        <form className="header-search" onSubmit={onSearch} role="search">
          <input name="q" type="search" placeholder="Search products" aria-label="Search products" />
          <button type="submit" aria-label="Search">Search</button>
        </form>
        <nav className="nav-menu">
          <ul>
            <li><Link to="/collection">COLLECTION</Link></li>
            <li><Link to="/brands">BRANDS</Link></li>
            <li><Link to="/new">NEW</Link></li>
            <li><Link to="/sales">SALES</Link></li>
          </ul>
        </nav>
        
        <div className="header-icons">
          <button className="icon-btn cart-btn" aria-label="Shopping cart" onClick={onCartClick}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6H4.5C3.67157 6 3 6.67157 3 7.5V7.5C3 8.32843 3.67157 9 4.5 9H19.5C20.3284 9 21 9.67157 21 10.5V18.5C21 19.3284 20.3284 20 19.5 20H6.5C5.67157 20 5 19.3284 5 18.5V6.5C5 5.67157 5.67157 5 6.5 5H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="9" cy="22" r="1" fill="currentColor"/>
              <circle cx="17" cy="22" r="1" fill="currentColor"/>
            </svg>
            <span className="cart-badge">{count}</span>
          </button>
          <button className="icon-btn menu-btn" aria-label="Menu" onClick={onMenuClick}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
