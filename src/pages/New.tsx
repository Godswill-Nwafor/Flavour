import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

interface NewArrival {
  id: number;
  name: string;
  price: number;
  image: string;
  isNew: boolean;
  dateAdded: string;
}

const newArrivals: NewArrival[] = [
  { id: 1, name: 'Spring Floral Dress', price: 119.99, image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=300&h=400&fit=crop', isNew: true, dateAdded: 'Jan 1, 2026' },
  { id: 2, name: 'Pastel Cardigan', price: 69.99, image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300&h=400&fit=crop', isNew: true, dateAdded: 'Dec 30, 2025' },
  { id: 3, name: 'Silk Blouse', price: 89.99, image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=300&h=400&fit=crop', isNew: true, dateAdded: 'Dec 28, 2025' },
  { id: 4, name: 'Wide Leg Pants', price: 79.99, image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=300&h=400&fit=crop', isNew: true, dateAdded: 'Dec 27, 2025' },
  { id: 5, name: 'Oversized Sweater', price: 59.99, image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=300&h=400&fit=crop', isNew: true, dateAdded: 'Dec 25, 2025' },
  { id: 6, name: 'Pleated Skirt', price: 54.99, image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0uj59?w=300&h=400&fit=crop', isNew: true, dateAdded: 'Dec 24, 2025' },
];

const New: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <Link to="/" className="back-btn">← Back to Home</Link>
        <h1>New Arrivals</h1>
        <p>Be the first to shop our latest pieces</p>
      </div>

      <div className="new-banner">
        <div className="banner-content">
          <span className="banner-tag">JUST DROPPED</span>
          <h2>Spring Collection 2026</h2>
          <p>Fresh styles for the new season</p>
        </div>
      </div>

      <div className="products-grid">
        {newArrivals.map((item) => (
          <div key={item.id} className="product-card">
            <div className="product-image">
              {item.isNew && <span className="new-badge">NEW</span>}
              <img src={item.image} alt={item.name} />
              <div className="product-overlay">
                <button className="add-to-cart-btn">Add to Cart</button>
              </div>
            </div>
            <div className="product-info">
              <span className="product-date">Added {item.dateAdded}</span>
              <h3>{item.name}</h3>
              <p className="product-price">${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default New;
