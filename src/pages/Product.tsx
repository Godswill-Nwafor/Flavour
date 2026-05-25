import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Pages.css';

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
};

const ProductPage: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { add } = useCart();

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    fetch(`/api/products/${id}`)
      .then((r) => r.json())
      .then((data) => setProduct(data))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="page-container">Loading...</div>;
  if (!product) return <div className="page-container">Product not found</div>;

  return (
    <div className="page-container product-page">
      <div className="page-header">
        <Link to="/shop" className="back-btn">← Back to Shop</Link>
        <h1>{product.name}</h1>
      </div>

      <div className="product-detail">
        <div className="product-media">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-meta">
          <span className="product-category">{product.category}</span>
          <h2>{product.name}</h2>
          <p className="product-description">{product.description}</p>
          <p className="product-price">${product.price.toFixed(2)}</p>
          <div className="product-actions">
            <button className="btn-primary" onClick={() => add({ id: product.id, name: product.name, price: product.price, quantity: 1, image: product.image })}>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
