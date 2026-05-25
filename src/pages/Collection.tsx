import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const products: Product[] = [
  { id: 1, name: 'Pink Blazer Set', price: 129.99, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&h=400&fit=crop', category: 'Blazers' },
  { id: 2, name: 'Casual Hoodie', price: 59.99, image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=300&h=400&fit=crop', category: 'Hoodies' },
  { id: 3, name: 'Summer Dress', price: 89.99, image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=300&h=400&fit=crop', category: 'Dresses' },
  { id: 4, name: 'Denim Jacket', price: 99.99, image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=300&h=400&fit=crop', category: 'Jackets' },
  { id: 5, name: 'Floral Blouse', price: 49.99, image: 'https://images.unsplash.com/photo-1485968579169-51d4b4c8b5dc?w=300&h=400&fit=crop', category: 'Tops' },
  { id: 6, name: 'High Waist Jeans', price: 79.99, image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=300&h=400&fit=crop', category: 'Bottoms' },
];

const Collection: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <Link to="/" className="back-btn">← Back to Home</Link>
        <h1>Our Collection</h1>
        <p>Discover our curated selection of trendy fashion pieces</p>
      </div>
      
      <div className="filter-bar">
        <button className="filter-btn active">All</button>
        <button className="filter-btn">Blazers</button>
        <button className="filter-btn">Hoodies</button>
        <button className="filter-btn">Dresses</button>
        <button className="filter-btn">Jackets</button>
        <button className="filter-btn">Tops</button>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              <div className="product-overlay">
                <button className="add-to-cart-btn">Add to Cart</button>
              </div>
            </div>
            <div className="product-info">
              <span className="product-category">{product.category}</span>
              <h3>{product.name}</h3>
              <p className="product-price">${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
