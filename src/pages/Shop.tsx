import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Pages.css';
import { useCart } from '../context/CartContext';

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
};

const Shop: React.FC = () => {
  const navigate = useNavigate();
  const { add } = useCart();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const q = params.get('search')?.toLowerCase() || '';

  const filtered = products.filter((p) => {
    if (!q) return true;
    return p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
  });

  useEffect(() => {
    setLoading(true);
    fetch('/api/products')
      .then((r) => r.json())
      .then((data) => setProducts(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="page-container shop-page">
      <div className="page-header">
        <Link to="/" className="back-btn">← Back to Home</Link>
        <h1>Shop Now</h1>
        <p>Find your perfect look from our complete collection</p>
      </div>

      <div className="shop-layout">
        <aside className="shop-sidebar">
          <div className="sidebar-section">
            <h3>Categories</h3>
            <ul>
              <li><button className="category-btn active">All Items</button></li>
              <li><button className="category-btn">Tops</button></li>
              <li><button className="category-btn">Bottoms</button></li>
              <li><button className="category-btn">Dresses</button></li>
              <li><button className="category-btn">Jackets</button></li>
              <li><button className="category-btn">Accessories</button></li>
            </ul>
          </div>

          <div className="sidebar-section">
            <h3>Price Range</h3>
            <div className="price-range">
              <input type="range" min="0" max="200" defaultValue="200" title="Price Range" aria-label="Price Range" />
              <div className="price-labels">
                <span>$0</span>
                <span>$200</span>
              </div>
            </div>
          </div>

          <div className="sidebar-section">
            <h3>Size</h3>
            <div className="size-options">
              <button className="size-btn">XS</button>
              <button className="size-btn">S</button>
              <button className="size-btn active">M</button>
              <button className="size-btn">L</button>
              <button className="size-btn">XL</button>
            </div>
          </div>

          <div className="sidebar-section">
            <h3>Colors</h3>
            <div className="color-options">
              <button className="color-btn color-black" title="Black" aria-label="Black"></button>
              <button className="color-btn color-white" title="White" aria-label="White"></button>
              <button className="color-btn color-pink active" title="Pink" aria-label="Pink"></button>
              <button className="color-btn color-teal" title="Teal" aria-label="Teal"></button>
              <button className="color-btn color-blue" title="Blue" aria-label="Blue"></button>
            </div>
          </div>
        </aside>

        <main className="shop-main">
          <div className="shop-toolbar">
            <span className="results-count">{products.length} items</span>
            <select className="sort-select" title="Sort Products" aria-label="Sort Products">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
            </select>
          </div>

          {loading ? (
            <div className="loading">Loading products…</div>
          ) : (
            <div className="products-grid">
              {filtered.map((product) => (
                <div key={product.id} className="product-card animate-fade-up">
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                    <div className="product-overlay">
                      <button 
                        className="add-to-cart-btn"
                        onClick={() => add({ id: product.id, name: product.name, price: product.price, quantity: 1, image: product.image })}
                      >
                        Add to Cart
                      </button>
                      <button className="view-btn" onClick={() => navigate(`/product/${product.id}`)}>View</button>
                    </div>
                  </div>
                  <div className="product-info">
                    <span className="product-category">{product.category}</span>
                    <h3>{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    <p className="product-price">${product.price.toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Shop;
