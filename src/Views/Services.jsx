import React from "react";
import "../styles/services.css";

const Services = () => {
  const services = [
    {
      icon: "🤖",
      title: "AI Phone Agents",
      features: [
        "24/7 virtual receptionist that never misses a call",
        "Natural conversation with advanced speech AI",
        "Appointment booking and lead qualification"
      ]
    },
    {
      icon: "💬",
      title: "Smart Chatbots",
      features: [
        "Instant customer support on your website",
        "Social media automation for Facebook & WhatsApp",
        "Lead generation and quote automation"
      ]
    },
    {
      icon: "📅",
      title: "AI Scheduling",
      features: [
        "Automated appointment booking across calendars",
        "Smart conflict resolution and reminders",
        "Integration with existing business tools"
      ]
    },
    {
      icon: "⚡",
      title: "Workflow Automation",
      features: [
        "Connect all your business apps automatically",
        "Data entry and processing robots",
        "Email and document automation"
      ]
    },
    {
      icon: "🏢",
      title: "Microsoft 365 Copilot",
      features: [
        "AI assistant in Word, Excel, PowerPoint",
        "Smart email drafting and meeting summaries",
        "Data analysis and report generation"
      ]
    },
    {
      icon: "🔒",
      title: "Secure & Compliant",
      features: [
        "Enterprise-grade security standards",
        "NZ Privacy Act compliance built-in",
        "Auckland-based support and hosting"
      ]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="services">
      <div className="services-container">
        <h2 className="services-title">Services</h2>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <span className="service-icon" role="img" aria-label={service.title}>
                {service.icon}
              </span>
              
              <h3 className="service-title">{service.title}</h3>
              
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              
              <button 
                className="service-link" 
                onClick={scrollToContact}
                aria-label={`Learn more about ${service.title}`}
              >
                Learn more →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;