import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

interface SaleItem {
  id: number;
  name: string;
  originalPrice: number;
  salePrice: number;
  image: string;
  discount: number;
}

const saleItems: SaleItem[] = [
  { id: 1, name: 'Winter Coat', originalPrice: 199.99, salePrice: 99.99, image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=300&h=400&fit=crop', discount: 50 },
  { id: 2, name: 'Knit Sweater', originalPrice: 89.99, salePrice: 44.99, image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=300&h=400&fit=crop', discount: 50 },
  { id: 3, name: 'Leather Boots', originalPrice: 159.99, salePrice: 95.99, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=300&h=400&fit=crop', discount: 40 },
  { id: 4, name: 'Wool Scarf', originalPrice: 49.99, salePrice: 24.99, image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=300&h=400&fit=crop', discount: 50 },
  { id: 5, name: 'Vintage Dress', originalPrice: 129.99, salePrice: 77.99, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=400&fit=crop', discount: 40 },
  { id: 6, name: 'Cashmere Top', originalPrice: 119.99, salePrice: 59.99, image: 'https://images.unsplash.com/photo-1485968579169-51d4b4c8b5dc?w=300&h=400&fit=crop', discount: 50 },
];

const Sales: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-header sales-header">
        <Link to="/" className="back-btn">← Back to Home</Link>
        <h1>🔥 Sales & Offers</h1>
        <p>Don't miss out on these amazing deals!</p>
      </div>

      <div className="sale-banner">
        <div className="sale-banner-content">
          <span className="sale-tag">LIMITED TIME</span>
          <h2>UP TO 50% OFF</h2>
          <p>End of season clearance sale</p>
          <div className="countdown">
            <div className="countdown-item">
              <span className="count">02</span>
              <span className="label">Days</span>
            </div>
            <div className="countdown-item">
              <span className="count">14</span>
              <span className="label">Hours</span>
            </div>
            <div className="countdown-item">
              <span className="count">36</span>
              <span className="label">Mins</span>
            </div>
          </div>
        </div>
      </div>

      <div className="products-grid">
        {saleItems.map((item) => (
          <div key={item.id} className="product-card sale-card">
            <div className="product-image">
              <span className="sale-badge">-{item.discount}%</span>
              <img src={item.image} alt={item.name} />
              <div className="product-overlay">
                <button className="add-to-cart-btn">Add to Cart</button>
              </div>
            </div>
            <div className="product-info">
              <h3>{item.name}</h3>
              <div className="price-container">
                <span className="original-price">${item.originalPrice.toFixed(2)}</span>
                <span className="sale-price">${item.salePrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sales;
