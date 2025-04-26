import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">Choose the perfect package for your needs</p>
        
        <div className="pricing-grid">
          <div className="pricing-card basic">
            <div className="pricing-header">
              <h3>Basic</h3>
              <div className="price">
                <span className="currency">₹</span>
                <span className="amount">999</span>
              </div>
            </div>
            <div className="pricing-features">
              <ul>
                <li><i className="fas fa-check"></i> 2 Logo Design Concepts</li>
                <li><i className="fas fa-check"></i> 2 Revision Rounds</li>
                <li><i className="fas fa-check"></i> Basic File Formats</li>
                <li><i className="fas fa-check"></i> 3 Social Media Posts</li>
                <li><i className="fas fa-check"></i> 5 Days Delivery</li>
              </ul>
            </div>
            <button className="pricing-button">Get Started</button>
          </div>

          <div className="pricing-card professional">
            <div className="popular-tag">Most Popular</div>
            <div className="pricing-header">
              <h3>Professional</h3>
              <div className="price">
                <span className="currency">₹</span>
                <span className="amount">2,999</span>
              </div>
            </div>
            <div className="pricing-features">
              <ul>
                <li><i className="fas fa-check"></i> 5 Logo Design Concepts</li>
                <li><i className="fas fa-check"></i> 5 Revision Rounds</li>
                <li><i className="fas fa-check"></i> All File Formats</li>
                <li><i className="fas fa-check"></i> 10 Social Media Posts</li>
                <li><i className="fas fa-check"></i> 2 Poster Designs</li>
                <li><i className="fas fa-check"></i> 3 Days Delivery</li>
              </ul>
            </div>
            <button className="pricing-button">Get Started</button>
          </div>

          <div className="pricing-card premium">
            <div className="pricing-header">
              <h3>Premium</h3>
              <div className="price">
                <span className="currency">₹</span>
                <span className="amount">9,999</span>
              </div>
            </div>
            <div className="pricing-features">
              <ul>
                <li><i className="fas fa-check"></i> Unlimited Logo Concepts</li>
                <li><i className="fas fa-check"></i> Unlimited Revisions</li>
                <li><i className="fas fa-check"></i> All File Formats</li>
                <li><i className="fas fa-check"></i> 20 Social Media Posts</li>
                <li><i className="fas fa-check"></i> 5 Poster Designs</li>
                <li><i className="fas fa-check"></i> Business Card Design</li>
                <li><i className="fas fa-check"></i> Priority Support</li>
                <li><i className="fas fa-check"></i> 48 Hours Delivery</li>
              </ul>
            </div>
            <button className="pricing-button">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;