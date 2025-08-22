import React from "react";
import "../styles/hero.css";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-brand">
            RobotsForHire
          </div>
          
          <h1 className="hero-headline">
            Where AI Meets Real Work
          </h1>
          
          <p className="hero-desc">
            We build autonomous AI agents to automate business workflows, so you can focus on what matters most.
          </p>

          <div className="hero-tagline">
            Smart. Secure. Set-and-Forget.
          </div>

          <div className="hero-actions">
            <button className="btn btn-primary" onClick={scrollToServices}>
              Learn More
            </button>
            <button className="btn btn-secondary" onClick={scrollToContact}>
              Book a Free Call
            </button>
          </div>

          <div className="hero-features">
            <span>✓ AI Powered</span>
            <span>✓ Secure</span>
            <span>✓ Analytics</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="robot-visual" aria-label="AI Robot Animation">
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;