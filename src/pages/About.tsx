import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

const About: React.FC = () => {
  return (
    <div className="page-container about-page">
      <div className="page-header">
        <Link to="/" className="back-btn">← Back to Home</Link>
        <h1>About Us</h1>
        <p>Discover the story behind Clothing Shop</p>
      </div>

      <div className="about-hero">
        <div className="about-hero-content">
          <h2>Our Story</h2>
          <p>
            Founded in 2020, Clothing Shop started with a simple mission: to make 
            fashion accessible, sustainable, and exciting for everyone. What began 
            as a small online boutique has grown into a beloved destination for 
            fashion-forward individuals worldwide.
          </p>
        </div>
        <div className="about-hero-image">
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop" 
            alt="Our Store"
          />
        </div>
      </div>

      <div className="values-section">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">🌱</div>
            <h3>Sustainability</h3>
            <p>We're committed to reducing our environmental impact through eco-friendly materials and ethical practices.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">💎</div>
            <h3>Quality</h3>
            <p>Every piece is carefully selected and crafted to ensure lasting quality and timeless style.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🤝</div>
            <h3>Community</h3>
            <p>We believe in building a community where everyone feels welcome and represented.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">✨</div>
            <h3>Innovation</h3>
            <p>Constantly pushing boundaries to bring you the latest trends and shopping experiences.</p>
          </div>
        </div>
      </div>

      <div className="stats-section">
        <div className="stat-item">
          <span className="stat-number">500K+</span>
          <span className="stat-label">Happy Customers</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">100+</span>
          <span className="stat-label">Countries</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">10K+</span>
          <span className="stat-label">Products</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">4.9</span>
          <span className="stat-label">Average Rating</span>
        </div>
      </div>

      <div className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop" alt="Sarah Johnson" />
            <h3>Sarah Johnson</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" alt="Michael Chen" />
            <h3>Michael Chen</h3>
            <p>Creative Director</p>
          </div>
          <div className="team-member">
            <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop" alt="Emily Davis" />
            <h3>Emily Davis</h3>
            <p>Head of Design</p>
          </div>
          <div className="team-member">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop" alt="James Wilson" />
            <h3>James Wilson</h3>
            <p>Operations Manager</p>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <h2>Join Our Fashion Journey</h2>
        <p>Be part of our growing community and discover your perfect style.</p>
        <Link to="/shop" className="btn-primary">Shop Now</Link>
      </div>
    </div>
  );
};

export default About;
