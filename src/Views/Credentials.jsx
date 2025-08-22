import React from "react";
import "../styles/credentials.css";

const Credentials = () => {
  const credentials = [
    {
      title: "Microsoft Certified AI Solutions",
      description: "Built with enterprise-grade Microsoft technologies including Copilot Studio, ensuring your AI agents meet professional standards and integrate seamlessly with business tools."
    },
    {
      title: "NZ Privacy & Security Compliant",
      description: "All our AI solutions follow New Zealand Privacy Act requirements with military-grade security measures, keeping your customer data safe and your business legally compliant."
    }
  ];

  const trustBadges = [
    "Microsoft 365 Integration",
    "NZ Compliant",
    "Data Privacy First",
    "Auckland Based",
    "24/7 AI Support"
  ];

  return (
    <section id="credentials" className="credentials">
      <div className="credentials-container">
        <h2 className="credentials-title">Credentials</h2>
        
        <div className="credentials-grid">
          {credentials.map((credential, index) => (
            <div key={index} className="credential-item">
              <h3 className="credential-title">{credential.title}</h3>
              <p className="credential-desc">{credential.description}</p>
            </div>
          ))}
        </div>

        <div className="trust-badges">
          {trustBadges.map((badge, index) => (
            <span key={index} className="trust-badge">
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Credentials;