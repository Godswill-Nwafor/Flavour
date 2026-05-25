import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

const Returns: React.FC = () => {
  return (
    <div className="page-container info-page">
      <div className="page-header">
        <Link to="/" className="back-btn">← Back to Home</Link>
        <h1>Returns & Exchanges</h1>
        <p>Easy returns and hassle-free exchanges</p>
      </div>

      <div className="returns-hero">
        <div className="returns-badge">
          <span className="badge-icon">🔄</span>
          <span className="badge-text">30-Day Returns</span>
        </div>
        <h2>Shop with Confidence</h2>
        <p>Not happy with your purchase? No problem! We offer free returns within 30 days.</p>
      </div>

      <div className="returns-steps">
        <h2>How to Return</h2>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Start Return</h3>
            <p>Log into your account and go to Order History. Select the item(s) you want to return.</p>
          </div>
          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Print Label</h3>
            <p>We'll email you a prepaid shipping label. Just print it and attach it to your package.</p>
          </div>
          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Ship It</h3>
            <p>Drop off your package at any authorized shipping location near you.</p>
          </div>
          <div className="step-card">
            <div className="step-number">4</div>
            <h3>Get Refund</h3>
            <p>Once we receive your return, we'll process your refund within 3-5 business days.</p>
          </div>
        </div>
      </div>

      <div className="info-section">
        <h2>Return Policy Details</h2>
        <div className="policy-grid">
          <div className="policy-item eligible">
            <h4>✅ Eligible for Return</h4>
            <ul>
              <li>Unworn items with tags attached</li>
              <li>Items in original packaging</li>
              <li>Items purchased within 30 days</li>
              <li>Defective or damaged items</li>
            </ul>
          </div>
          <div className="policy-item not-eligible">
            <h4>❌ Not Eligible</h4>
            <ul>
              <li>Worn or washed items</li>
              <li>Items without original tags</li>
              <li>Swimwear and intimates (final sale)</li>
              <li>Gift cards</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="exchange-section">
        <h2>Exchanges</h2>
        <p>Need a different size or color? Exchanges are easy!</p>
        <div className="exchange-options">
          <div className="exchange-option">
            <span className="option-icon">📏</span>
            <h4>Size Exchange</h4>
            <p>Free exchanges for different sizes while supplies last</p>
          </div>
          <div className="exchange-option">
            <span className="option-icon">🎨</span>
            <h4>Color Exchange</h4>
            <p>Swap for a different color of the same item</p>
          </div>
          <div className="exchange-option">
            <span className="option-icon">💫</span>
            <h4>Store Credit</h4>
            <p>Get store credit to shop for something new</p>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <h2>Need Help?</h2>
        <p>Our customer service team is here to assist you with your return.</p>
        <Link to="/contact" className="btn-primary">Contact Us</Link>
      </div>
    </div>
  );
};

export default Returns;
