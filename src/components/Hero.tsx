import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

interface HeroProps {
  onVideoClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onVideoClick }) => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <span className="new-arrival">New Arrival</span>
          <h2 className="hero-title">
            THE BEST<br />
            LOOK ANYTIME<br />
            ANYWHERE
          </h2>
          <p className="hero-description">
            Refresh your style with on-trend pieces from<br />
            clothing collection.Anyone can get dressed<br />
            up and glamorous.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => navigate('/shop')}>Shop Now</button>
            <button className="btn-video" onClick={onVideoClick}>
              <span className="play-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2"/>
                  <path d="M10 8L16 12L10 16V8Z" fill="currentColor"/>
                </svg>
              </span>
              Watch video
            </button>
          </div>
        </div>
        
        <div className="hero-images">
          {/* Decorative curve */}
          <div className="decorative-curve"></div>
          
          {/* Main image container */}
          <div className="image-wrapper main-image">
            <div className="image-bg"></div>
            <img 
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&h=500&fit=crop" 
              alt="Fashion model in pink hoodie"
            />
          </div>
          
          {/* Secondary image container */}
          <div className="image-wrapper secondary-image">
            <div className="dotted-border"></div>
            <div className="image-bg"></div>
            <img 
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=350&h=450&fit=crop" 
              alt="Fashion model in pink blazer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
