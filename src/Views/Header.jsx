
import React, { useState } from "react";
import "../styles/Header.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(o => !o);
  const close = () => setOpen(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    close();
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#hero" className="logo" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
          <img 
            src="/logo192.png" 
            alt="RobotsForHire Logo" 
            className="logo-mark"
            width="32" 
            height="32"
          />
          RobotsForHire
        </a>
        
        <nav className="nav-desktop">
          <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Solutions</a>
          <a href="#credentials" onClick={(e) => { e.preventDefault(); scrollToSection('credentials'); }}>Credentials</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
          <a href="#contact" className="cta" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Get Started</a>
        </nav>

        <button className="nav-toggle" onClick={toggle} aria-label="Toggle navigation menu">
          {open ? '✕' : '☰'}
        </button>
      </div>

      <nav className={`nav-mobile ${open ? 'open' : ''}`}>
        <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Solutions</a>
        <a href="#credentials" onClick={(e) => { e.preventDefault(); scrollToSection('credentials'); }}>Credentials</a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Get Started</a>
      </nav>
    </header>
  );
};

export default Header;