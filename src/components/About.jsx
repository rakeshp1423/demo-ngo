// src/components/About.jsx
import React from 'react';
import './About.css';
import aboutImage from '../assets/ngo1.jpg'; // You need to add an image to this path

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-text" data-aos="fade-right">
          <h2>About Mamata</h2>
          <p>
            <strong>Mamata</strong> is a registered Indian NGO working tirelessly to uplift the lives of children from economically backward communities.
            We provide <strong>financial support</strong>, <strong>educational access</strong>, and <strong>mentorship</strong> opportunities to help them break the cycle of poverty.
          </p>
          <p>
            With the belief that **every child deserves a chance**, we've helped hundreds of students pursue their dreams—becoming doctors, engineers, artists, and more.
          </p>
          <div className="impact-metrics">
            <div className="metric">
              <h3>500+</h3>
              <p>Children Supported</p>
            </div>
            <div className="metric">
              <h3>90%</h3>
              <p>School Retention Rate</p>
            </div>
            <div className="metric">
              <h3>100+</h3>
              <p>Success Stories</p>
            </div>
          </div>
        </div>
        <div className="about-image" data-aos="fade-left">
          <img src={aboutImage} alt="Children supported by Mamata NGO" />
        </div>
      </div>
    </section>
  );
};

export default About;
