import React, { useState } from "react";
import "../styles/contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    consent: false
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev, 
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const validateForm = () => {
    if (!form.name.trim()) return "Name is required";
    if (!form.email.trim()) return "Email is required";
    if (!form.email.includes("@")) return "Please enter a valid email";
    if (!form.message.trim()) return "Message is required";
    if (!form.consent) return "Please agree to be contacted";
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const error = validateForm();
    if (error) {
      setStatus("error");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setStatus("success");
      setIsSubmitting(false);
      setForm({
        name: "",
        email: "",
        company: "",
        message: "",
        consent: false
      });
    }, 1000);
  };

  const contactFeatures = [
    "Based in New Lynn, Auckland",
    "Free on-site robot demos available",
    "100% NZ Privacy Law compliant",
    "Microsoft enterprise security",
    "Set & forget automation"
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="contact-title">Ready to Hire Your First Robot?</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>
              Book a free 30-minute consultation where we'll analyze your business processes and show you exactly which AI robots can save you time and money.
            </h3>
            
            <p className="contact-location">
              New Lynn, Auckland.
            </p>
            
            <ul className="contact-features">
              {contactFeatures.map((feature, index) => (
                <li key={index}>
                  <span>✅</span> {feature}
                </li>
              ))}
            </ul>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="your.email@company.com"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Your company name"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Tell us about your business needs</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="What tasks would you like your AI robots to handle?"
              />
            </div>
            
            <div className="checkbox-group">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={form.consent}
                onChange={handleChange}
                required
              />
              <label htmlFor="consent">
                I agree to be contacted about AI automation solutions.
              </label>
            </div>
            
            <button 
              type="submit" 
              className="submit-btn" 
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "🚀 Get My Free Robot Consultation"}
            </button>
            
            {status === "success" && (
              <div className="success-message">
                Thanks! Our robot specialists will contact you within 24 hours.
              </div>
            )}
            
            {status === "error" && (
              <div className="error-message">
                Please fill in all required fields correctly.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;