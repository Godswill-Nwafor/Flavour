import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

const Terms: React.FC = () => {
  return (
    <div className="page-container legal-page">
      <div className="page-header">
        <Link to="/" className="back-btn">← Back to Home</Link>
        <h1>Terms of Service</h1>
        <p>Last updated: January 1, 2026</p>
      </div>

      <div className="legal-content">
        <section className="legal-section">
          <h2>1. Agreement to Terms</h2>
          <p>By accessing or using Clothing Shop's website and services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not access our services.</p>
        </section>

        <section className="legal-section">
          <h2>2. Use of Our Service</h2>
          <p>You agree to use our service only for lawful purposes and in accordance with these Terms. You agree not to:</p>
          <ul>
            <li>Use the service in any way that violates applicable laws</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Interfere with or disrupt the service</li>
            <li>Use automated systems to access the service without permission</li>
            <li>Impersonate another person or entity</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>3. Account Responsibilities</h2>
          <p>When you create an account, you are responsible for:</p>
          <ul>
            <li>Maintaining the confidentiality of your account credentials</li>
            <li>All activities that occur under your account</li>
            <li>Providing accurate and current information</li>
            <li>Notifying us of any unauthorized use</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>4. Orders and Payment</h2>
          <p>All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order for any reason. Prices are subject to change without notice.</p>
          <p>By placing an order, you represent that:</p>
          <ul>
            <li>You are authorized to use the payment method</li>
            <li>The information you provide is accurate</li>
            <li>You will pay all charges incurred</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>5. Intellectual Property</h2>
          <p>All content on our website, including text, graphics, logos, images, and software, is the property of Clothing Shop and is protected by copyright and trademark laws.</p>
        </section>

        <section className="legal-section">
          <h2>6. Limitation of Liability</h2>
          <p>Clothing Shop shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our service.</p>
        </section>

        <section className="legal-section">
          <h2>7. Changes to Terms</h2>
          <p>We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. Your continued use of the service constitutes acceptance of the modified Terms.</p>
        </section>

        <section className="legal-section">
          <h2>8. Contact Information</h2>
          <p>For questions about these Terms, please contact us at:</p>
          <p><strong>Email:</strong> legal@clothingshop.com</p>
          <p><strong>Address:</strong> 123 Fashion Street, New York, NY 10001</p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
