import React from "react";
import "../styles/footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-copyright">
          © {currentYear} RobotsForHire | 
          <a href="mailto:hello@robotsforhire.nz"> admin@robotsforhire.co.nz</a> | 
          <a href="tel:+64-9-123-4597"> 0273694318</a>
        </p>
        
        <p className="footer-tagline">
          🤖 Smart AI agents built in Auckland. NZ/Aus ISO2700 Privacy-compliant automation for Kiwi businesses.
        </p>
      </div>
    </footer>
  );
};

export default Footer;