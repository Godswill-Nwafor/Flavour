import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

const SizeGuide: React.FC = () => {
  const [activeTab, setActiveTab] = useState('tops');
  const [unit, setUnit] = useState<'in' | 'cm'>('in');

  const sizeData = {
    tops: [
      { size: 'XS', bust: '32', waist: '24', hip: '34' },
      { size: 'S', bust: '34', waist: '26', hip: '36' },
      { size: 'M', bust: '36', waist: '28', hip: '38' },
      { size: 'L', bust: '38', waist: '30', hip: '40' },
      { size: 'XL', bust: '40', waist: '32', hip: '42' },
    ],
    bottoms: [
      { size: 'XS (0-2)', waist: '24', hip: '34', inseam: '30' },
      { size: 'S (4-6)', waist: '26', hip: '36', inseam: '30' },
      { size: 'M (8-10)', waist: '28', hip: '38', inseam: '31' },
      { size: 'L (12-14)', waist: '30', hip: '40', inseam: '31' },
      { size: 'XL (16)', waist: '32', hip: '42', inseam: '32' },
    ],
    dresses: [
      { size: 'XS', bust: '32', waist: '24', hip: '34', length: '35' },
      { size: 'S', bust: '34', waist: '26', hip: '36', length: '36' },
      { size: 'M', bust: '36', waist: '28', hip: '38', length: '37' },
      { size: 'L', bust: '38', waist: '30', hip: '40', length: '38' },
      { size: 'XL', bust: '40', waist: '32', hip: '42', length: '39' },
    ],
  };

  const convertToCm = (inches: string) => (parseFloat(inches) * 2.54).toFixed(1);

  return (
    <div className="page-container size-guide-page">
      <div className="page-header">
        <Link to="/" className="back-btn">← Back to Home</Link>
        <h1>Size Guide</h1>
        <p>Find your perfect fit with our comprehensive size guide</p>
      </div>

      <div className="size-tabs">
        <button 
          className={`size-tab ${activeTab === 'tops' ? 'active' : ''}`}
          onClick={() => setActiveTab('tops')}
        >
          Tops & Blouses
        </button>
        <button 
          className={`size-tab ${activeTab === 'bottoms' ? 'active' : ''}`}
          onClick={() => setActiveTab('bottoms')}
        >
          Pants & Skirts
        </button>
        <button 
          className={`size-tab ${activeTab === 'dresses' ? 'active' : ''}`}
          onClick={() => setActiveTab('dresses')}
        >
          Dresses
        </button>
      </div>

      <div className="unit-toggle">
        <button 
          className={unit === 'in' ? 'active' : ''}
          onClick={() => setUnit('in')}
        >
          Inches
        </button>
        <button 
          className={unit === 'cm' ? 'active' : ''}
          onClick={() => setUnit('cm')}
        >
          Centimeters
        </button>
      </div>

      <div className="size-table-container">
        <table className="size-table">
          <thead>
            <tr>
              <th>Size</th>
              {activeTab === 'tops' && <th>Bust ({unit})</th>}
              <th>Waist ({unit})</th>
              <th>Hip ({unit})</th>
              {activeTab === 'bottoms' && <th>Inseam ({unit})</th>}
              {activeTab === 'dresses' && <th>Length ({unit})</th>}
            </tr>
          </thead>
          <tbody>
            {(sizeData[activeTab as keyof typeof sizeData] as any[]).map((row, index) => (
              <tr key={index}>
                <td><strong>{row.size}</strong></td>
                {activeTab === 'tops' && <td>{unit === 'in' ? row.bust : convertToCm(row.bust)}</td>}
                <td>{unit === 'in' ? row.waist : convertToCm(row.waist)}</td>
                <td>{unit === 'in' ? row.hip : convertToCm(row.hip)}</td>
                {activeTab === 'bottoms' && <td>{unit === 'in' ? row.inseam : convertToCm(row.inseam)}</td>}
                {activeTab === 'dresses' && <td>{unit === 'in' ? row.length : convertToCm(row.length)}</td>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="measure-guide">
        <h2>How to Measure</h2>
        <div className="measure-grid">
          <div className="measure-item">
            <div className="measure-icon">📏</div>
            <h4>Bust</h4>
            <p>Measure around the fullest part of your chest, keeping the tape level.</p>
          </div>
          <div className="measure-item">
            <div className="measure-icon">📐</div>
            <h4>Waist</h4>
            <p>Measure around your natural waistline, the narrowest part of your torso.</p>
          </div>
          <div className="measure-item">
            <div className="measure-icon">📏</div>
            <h4>Hip</h4>
            <p>Measure around the fullest part of your hips, about 8" below your waist.</p>
          </div>
          <div className="measure-item">
            <div className="measure-icon">📐</div>
            <h4>Inseam</h4>
            <p>Measure from your inner thigh down to where you want the pants to end.</p>
          </div>
        </div>
      </div>

      <div className="size-tips">
        <h2>Fit Tips</h2>
        <ul>
          <li>If you're between sizes, we recommend sizing up for a more relaxed fit.</li>
          <li>Check individual product pages for specific fit information.</li>
          <li>Read customer reviews for insights on how items fit.</li>
          <li>When in doubt, contact our support team for personalized advice.</li>
        </ul>
      </div>
    </div>
  );
};

export default SizeGuide;
