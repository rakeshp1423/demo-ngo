import React from "react";
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="overlay">
                <div className="hero-content" data-aos="fade-in">
                    <h1>Empowerung Dreams Through Education</h1>
                    <p>Mamata is committed to uplifting underprivileged children by supporting their education and dreams. </p>
                    <a href="#donate" className="cta-button">Support a Child </a>
                </div>
            </div>
        </section>
    )
}

export default Hero;