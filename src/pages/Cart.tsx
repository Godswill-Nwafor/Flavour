import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Cart: React.FC = () => {
  const { items, remove, updateQty, clear } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = items.length ? 9.99 : 0;
  const total = subtotal + shipping;

  return (
    <div className="page-container cart-page">
      <div className="page-header">
        <Link to="/" className="back-btn">← Continue Shopping</Link>
        <h1>Shopping Cart</h1>
        <p>{items.length} items in your cart</p>
      </div>

      <div className="cart-layout">
        <div className="cart-items">
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              {item.image && <img src={item.image} alt={item.name} className="cart-item-image" />}
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p className="cart-item-price">${item.price.toFixed(2)}</p>
              </div>
              <div className="cart-item-quantity">
                <button className="qty-btn" onClick={() => updateQty(item.id, Math.max(1, item.quantity - 1))}>-</button>
                <span>{item.quantity}</span>
                <button className="qty-btn" onClick={() => updateQty(item.id, item.quantity + 1)}>+</button>
              </div>
              <div className="cart-item-total">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
              <button className="remove-btn" onClick={() => remove(item.id)}>×</button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <div className="promo-code">
            <input type="text" placeholder="Promo code" />
            <button>Apply</button>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button className="checkout-btn" onClick={() => { if (!isAuthenticated) return navigate('/login'); alert('Checkout not implemented yet'); }}>Proceed to Checkout</button>
          <button className="clear-btn" onClick={() => clear()}>Clear Cart</button>
          <div className="payment-methods">
            <span>We accept:</span>
            <div className="payment-icons">
              <span className="payment-icon">💳</span>
              <span className="payment-icon">🏦</span>
              <span className="payment-icon">📱</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
