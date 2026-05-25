import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

const Shipping: React.FC = () => {
  return (
    <div className="page-container info-page">
      <div className="page-header">
        <Link to="/" className="back-btn">← Back to Home</Link>
        <h1>Shipping Information</h1>
        <p>Everything you need to know about our shipping options</p>
      </div>

      <div className="shipping-options">
        <div className="shipping-card">
          <div className="shipping-icon">📦</div>
          <h3>Standard Shipping</h3>
          <p className="shipping-time">5-7 Business Days</p>
          <p className="shipping-price">$4.99 or FREE over $50</p>
          <ul>
            <li>Trackable delivery</li>
            <li>Signature not required</li>
            <li>Available nationwide</li>
          </ul>
        </div>

        <div className="shipping-card featured">
          <div className="featured-badge">Most Popular</div>
          <div className="shipping-icon">🚚</div>
          <h3>Express Shipping</h3>
          <p className="shipping-time">2-3 Business Days</p>
          <p className="shipping-price">$9.99</p>
          <ul>
            <li>Priority handling</li>
            <li>Full tracking</li>
            <li>Email notifications</li>
          </ul>
        </div>

        <div className="shipping-card">
          <div className="shipping-icon">⚡</div>
          <h3>Next Day Delivery</h3>
          <p className="shipping-time">1 Business Day</p>
          <p className="shipping-price">$19.99</p>
          <ul>
            <li>Order by 2 PM EST</li>
            <li>Guaranteed delivery</li>
            <li>Signature required</li>
          </ul>
        </div>
      </div>

      <div className="info-section">
        <h2>International Shipping</h2>
        <p>We ship to over 100 countries worldwide! International shipping rates are calculated at checkout based on destination and package weight.</p>
        <div className="info-grid">
          <div className="info-item">
            <h4>🌍 Europe</h4>
            <p>7-10 business days</p>
            <p>From $14.99</p>
          </div>
          <div className="info-item">
            <h4>🌏 Asia Pacific</h4>
            <p>10-14 business days</p>
            <p>From $19.99</p>
          </div>
          <div className="info-item">
            <h4>🌎 Americas</h4>
            <p>5-10 business days</p>
            <p>From $12.99</p>
          </div>
          <div className="info-item">
            <h4>🌍 Rest of World</h4>
            <p>14-21 business days</p>
            <p>From $24.99</p>
          </div>
        </div>
      </div>

      <div className="info-section">
        <h2>Shipping FAQs</h2>
        <div className="info-faq">
          <div className="info-faq-item">
            <h4>When will my order ship?</h4>
            <p>Orders placed before 2 PM EST on business days are processed the same day. Weekend orders are processed on Monday.</p>
          </div>
          <div className="info-faq-item">
            <h4>How do I track my package?</h4>
            <p>You'll receive an email with tracking information once your order ships. You can also track your order in your account.</p>
          </div>
          <div className="info-faq-item">
            <h4>Do you ship to PO Boxes?</h4>
            <p>Yes, we can ship to PO Boxes via Standard Shipping. Express and Next Day options require a street address.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
