import React from 'react';
import './PortfolioPopup.css';

const PortfolioPopup = ({ isOpen, onClose, title, content, image }) => {
  if (!isOpen) return null;

  return (
    <div className="portfolio-popup-overlay">
      <div className="portfolio-popup-content">
        <button className="popup-close-btn" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        <div className="popup-header">
          <h3>{title}</h3>
        </div>
        <div className="popup-body">
          <div className="popup-image">
            <img src={image} alt={title} />
          </div>
          <div className="popup-text">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPopup;