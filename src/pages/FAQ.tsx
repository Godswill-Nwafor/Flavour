import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    category: 'Orders',
    question: 'How can I track my order?',
    answer: 'Once your order is shipped, you will receive an email with a tracking number. You can use this number on our website or the carrier\'s website to track your package in real-time.'
  },
  {
    category: 'Orders',
    question: 'Can I modify or cancel my order?',
    answer: 'You can modify or cancel your order within 1 hour of placing it. After that, please contact our customer service team for assistance.'
  },
  {
    category: 'Shipping',
    question: 'What are the shipping options?',
    answer: 'We offer Standard Shipping (5-7 business days), Express Shipping (2-3 business days), and Next Day Delivery for orders placed before 2 PM.'
  },
  {
    category: 'Shipping',
    question: 'Do you ship internationally?',
    answer: 'Yes! We ship to over 100 countries worldwide. International shipping typically takes 7-14 business days depending on the destination.'
  },
  {
    category: 'Returns',
    question: 'What is your return policy?',
    answer: 'We offer a 30-day return policy for all unworn items with original tags attached. Returns are free for domestic orders.'
  },
  {
    category: 'Returns',
    question: 'How do I initiate a return?',
    answer: 'Log into your account, go to Order History, select the item you want to return, and follow the prompts. You\'ll receive a prepaid shipping label via email.'
  },
  {
    category: 'Payment',
    question: 'What payment methods do you accept?',
    answer: 'We accept Visa, Mastercard, American Express, PayPal, Apple Pay, and Google Pay. All transactions are secured with SSL encryption.'
  },
  {
    category: 'Payment',
    question: 'Is my payment information secure?',
    answer: 'Absolutely! We use industry-standard SSL encryption and never store your full credit card details on our servers.'
  },
  {
    category: 'Products',
    question: 'How do I find my size?',
    answer: 'Check our Size Guide page for detailed measurements. Each product also has specific sizing information in its description.'
  },
  {
    category: 'Products',
    question: 'Are your products sustainable?',
    answer: 'We are committed to sustainability. Many of our products use eco-friendly materials, and we partner with ethical manufacturers.'
  }
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(faqData.map(item => item.category)))];

  const filteredFAQ = activeCategory === 'All' 
    ? faqData 
    : faqData.filter(item => item.category === activeCategory);

  return (
    <div className="page-container faq-page">
      <div className="page-header">
        <Link to="/" className="back-btn">← Back to Home</Link>
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about our products and services</p>
      </div>

      <div className="faq-categories">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-tab ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="faq-list">
        {filteredFAQ.map((item, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          >
            <button 
              className="faq-question"
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <span>{item.question}</span>
              <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
            </button>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="faq-contact">
        <h3>Still have questions?</h3>
        <p>Can't find what you're looking for? Our support team is here to help.</p>
        <Link to="/contact" className="btn-primary">Contact Support</Link>
      </div>
    </div>
  );
};

export default FAQ;
