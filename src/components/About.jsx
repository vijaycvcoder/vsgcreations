import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title">About VSG Creations</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="intro-text">
              We transform ideas into visual masterpieces, crafting unique designs 
              that leave lasting impressions.
            </p>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-paint-brush"></i>
                </div>
                <h3>Logo Design</h3>
                <p>
                  Creating distinctive brand identities through innovative logo designs 
                  that capture your brand's essence and values. Our logos combine 
                  creativity with strategic thinking to ensure memorable brand recognition.
                </p>
              </div>

              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-object-group"></i>
                </div>
                <h3>Poster Design</h3>
                <p>
                  Crafting eye-catching posters that command attention and deliver 
                  your message with impact. We blend artistic excellence with 
                  marketing principles to create designs that drive engagement.
                </p>
              </div>

              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-pen-fancy"></i>
                </div>
                <h3>Content Creation</h3>
                <p>
                  Delivering compelling visual content that tells your story across 
                  all platforms. From social media graphics to marketing materials, 
                  we create content that resonates with your audience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;