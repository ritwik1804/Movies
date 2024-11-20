import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Nayanthara: Beyond the Fairytale</h1>
        <p className="hero-description">However busy she is... [sniffles]</p>
        <div className="hero-buttons">
          <button className="hero-button play">Play</button>
          <button className="hero-button info">More Info</button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
