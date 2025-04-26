import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="/logo.png" alt="VSG Creations" className="logo-image" />
        </div>
        <nav className="nav-menu">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </nav>
        <button className="contact-button" onClick={() => window.location.href='#contact'}>
          Get in Touch
        </button>
      </div>
    </header>
  );
};

export default Header;