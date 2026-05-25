import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

const Careers: React.FC = () => {
  const jobs = [
    { title: 'Senior Fashion Designer', department: 'Design', location: 'New York, NY', type: 'Full-time' },
    { title: 'E-commerce Manager', department: 'Marketing', location: 'Remote', type: 'Full-time' },
    { title: 'Customer Service Representative', department: 'Support', location: 'Los Angeles, CA', type: 'Full-time' },
    { title: 'Social Media Coordinator', department: 'Marketing', location: 'Remote', type: 'Part-time' },
    { title: 'Warehouse Associate', department: 'Operations', location: 'New Jersey', type: 'Full-time' },
    { title: 'UX/UI Designer', department: 'Tech', location: 'Remote', type: 'Full-time' },
  ];

  return (
    <div className="page-container careers-page">
      <div className="page-header">
        <Link to="/" className="back-btn">← Back to Home</Link>
        <h1>Join Our Team</h1>
        <p>Build your career with a company that cares about fashion and people</p>
      </div>

      <div className="careers-hero">
        <div className="careers-hero-content">
          <h2>Work Where You're Valued</h2>
          <p>
            At Clothing Shop, we're more than just a fashion company – we're a family. 
            Join our diverse team of creative minds and help shape the future of fashion.
          </p>
        </div>
        <div className="careers-hero-image">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" 
            alt="Our Team"
          />
        </div>
      </div>

      <div className="perks-section">
        <h2>Why Work With Us?</h2>
        <div className="perks-grid">
          <div className="perk-card">
            <span className="perk-icon">🏥</span>
            <h3>Health Benefits</h3>
            <p>Comprehensive medical, dental, and vision coverage</p>
          </div>
          <div className="perk-card">
            <span className="perk-icon">🏠</span>
            <h3>Remote Options</h3>
            <p>Flexible work arrangements for work-life balance</p>
          </div>
          <div className="perk-card">
            <span className="perk-icon">👗</span>
            <h3>Employee Discount</h3>
            <p>50% off all products for you and your family</p>
          </div>
          <div className="perk-card">
            <span className="perk-icon">📚</span>
            <h3>Learning Budget</h3>
            <p>Annual stipend for courses and conferences</p>
          </div>
          <div className="perk-card">
            <span className="perk-icon">🌴</span>
            <h3>Unlimited PTO</h3>
            <p>Take the time you need to recharge</p>
          </div>
          <div className="perk-card">
            <span className="perk-icon">🎉</span>
            <h3>Team Events</h3>
            <p>Regular team outings and celebrations</p>
          </div>
        </div>
      </div>

      <div className="jobs-section">
        <h2>Open Positions</h2>
        <div className="jobs-list">
          {jobs.map((job, index) => (
            <div key={index} className="job-card">
              <div className="job-info">
                <h3>{job.title}</h3>
                <div className="job-meta">
                  <span className="job-department">{job.department}</span>
                  <span className="job-location">📍 {job.location}</span>
                  <span className="job-type">{job.type}</span>
                </div>
              </div>
              <button className="apply-btn">Apply Now</button>
            </div>
          ))}
        </div>
      </div>

      <div className="cta-section">
        <h2>Don't See Your Role?</h2>
        <p>We're always looking for talented people. Send us your resume!</p>
        <Link to="/contact" className="btn-primary">Contact HR</Link>
      </div>
    </div>
  );
};

export default Careers;
