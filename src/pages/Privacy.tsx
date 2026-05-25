import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

const Privacy: React.FC = () => {
  return (
    <div className="page-container legal-page">
      <div className="page-header">
        <Link to="/" className="back-btn">← Back to Home</Link>
        <h1>Privacy Policy</h1>
        <p>Last updated: January 1, 2026</p>
      </div>

      <div className="legal-content">
        <section className="legal-section">
          <h2>1. Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support.</p>
          <h3>Personal Information</h3>
          <ul>
            <li>Name and contact information (email, phone, address)</li>
            <li>Payment information (processed securely through our payment providers)</li>
            <li>Account credentials</li>
            <li>Order history and preferences</li>
          </ul>
          <h3>Automatically Collected Information</h3>
          <ul>
            <li>Device and browser information</li>
            <li>IP address and location data</li>
            <li>Browsing behavior on our site</li>
            <li>Cookies and similar technologies</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Process and fulfill your orders</li>
            <li>Send order confirmations and updates</li>
            <li>Provide customer support</li>
            <li>Personalize your shopping experience</li>
            <li>Send marketing communications (with your consent)</li>
            <li>Improve our website and services</li>
            <li>Prevent fraud and ensure security</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>3. Information Sharing</h2>
          <p>We do not sell your personal information. We may share your information with:</p>
          <ul>
            <li>Service providers who assist in our operations</li>
            <li>Payment processors for transaction handling</li>
            <li>Shipping partners to deliver your orders</li>
            <li>Legal authorities when required by law</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>4. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of marketing communications</li>
            <li>Export your data in a portable format</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>5. Data Security</h2>
          <p>We implement industry-standard security measures to protect your information, including SSL encryption, secure servers, and regular security audits.</p>
        </section>

        <section className="legal-section">
          <h2>6. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us at:</p>
          <p><strong>Email:</strong> privacy@clothingshop.com</p>
          <p><strong>Address:</strong> 123 Fashion Street, New York, NY 10001</p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
