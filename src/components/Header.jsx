import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [showPopup, setShowPopup] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="/logo.png" alt="VSG Creations" className="logo-image" />
        </div>
        <nav className="nav-menu">
          <ul>
            <li><a onClick={() => scrollToSection('#about')} href="#about">Home</a></li>
            <li><a onClick={() => scrollToSection('#services')} href="#services">Services</a></li>
            <li><a onClick={() => scrollToSection('#portfolio')} href="#portfolio">Portfolio</a></li>
          </ul>
        </nav>
        <button className="get-in-touch" onClick={() => setShowPopup(true)}>
          Get in Touch
        </button>

        {showPopup && (
          <div className="contact-popup">
            <div className="popup-content">
              <button className="close-button" onClick={() => setShowPopup(false)}>
                <i className="fas fa-times"></i>
              </button>
              <h3>Contact Us</h3>
              <div className="contact-info">
                <p><i className="fas fa-envelope"></i> Email: info@vsgcreations.com</p>
                <p><i className="fas fa-phone"></i> Phone: +91 1234567890</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;