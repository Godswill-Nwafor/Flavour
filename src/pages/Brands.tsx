import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

interface Brand {
  id: number;
  name: string;
  logo: string;
  description: string;
}

const brands: Brand[] = [
  { id: 1, name: 'ZARA', logo: 'Z', description: 'Modern fashion for the contemporary woman' },
  { id: 2, name: 'H&M', logo: 'H', description: 'Affordable fashion with style' },
  { id: 3, name: 'MANGO', logo: 'M', description: 'Mediterranean inspired fashion' },
  { id: 4, name: 'UNIQLO', logo: 'U', description: 'Simple, quality everyday wear' },
  { id: 5, name: 'ASOS', logo: 'A', description: 'Online fashion destination' },
  { id: 6, name: 'TOPSHOP', logo: 'T', description: 'British high street fashion' },
];

const Brands: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <Link to="/" className="back-btn">← Back to Home</Link>
        <h1>Our Brands</h1>
        <p>Shop from your favorite fashion brands</p>
      </div>

      <div className="brands-grid">
        {brands.map((brand) => (
          <div key={brand.id} className="brand-card">
            <div className="brand-logo">{brand.logo}</div>
            <h3>{brand.name}</h3>
            <p>{brand.description}</p>
            <button className="shop-brand-btn">Shop {brand.name}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
