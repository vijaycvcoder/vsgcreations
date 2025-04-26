import React, { useState } from 'react';
import PortfolioPopup from './PortfolioPopup';
import './About.css';

const About = () => {
  const [selectedPopup, setSelectedPopup] = useState(null);

  const serviceItems = [
    {
      title: "Website Development",
      icon: "fas fa-paint-brush",
      content: "Building responsive and modern websites that showcase your brand. Our custom web solutions combine stunning design with seamless functionality to create an engaging online presence.",
      portfolioImages: [
        "/images/web1.jpg",
        "/images/web2.jpg",
        "/images/web3.jpg"
      ]
    },
    {
      title: "Poster Design",
      icon: "fas fa-object-group",
      content: "Crafting eye-catching posters that command attention and deliver your message with impact. We blend artistic excellence with marketing principles to create designs that drive engagement.",
      portfolioImages: [
        "/images/poster1.jpg",
        "/images/poster2.jpg",
        "/images/poster3.jpg"
      ]
    },
    {
      title: "Content Creation",
      icon: "fas fa-pen-fancy",
      content: "Delivering compelling visual content that tells your story across all platforms. From social media graphics to marketing materials, we create content that resonates with your audience.",
      portfolioImages: [
        "/images/content1.jpg",
        "/images/content2.jpg",
        "/images/content3.jpg"
      ]
    }
  ];

  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="section-title">VSG Creations</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="intro-text">
              We transform ideas into visual masterpieces, crafting unique designs 
              that leave lasting impressions.
            </p>
            <div className="services-grid">
              {serviceItems.map((service, index) => (
                <div 
                  key={index} 
                  className="service-card"
                  onClick={() => setSelectedPopup(service)}
                >
                  <div className="service-icon">
                    <i className={service.icon}></i>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.content}</p>
                  <button className="view-portfolio-btn">
                    View Portfolio
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <PortfolioPopup
        isOpen={selectedPopup !== null}
        onClose={() => setSelectedPopup(null)}
        {...selectedPopup}
      />
    </section>
  );
};

export default About;