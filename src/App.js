import React, { useEffect, useState } from "react";
import "./styles/global.css";
import Header from "./Views/Header";
import Hero from "./Views/Hero";
import Services from "./Views/Services";
import Credentials from "./Views/Credentials";
import Contact from "./Views/Contact";
import Footer from "./Views/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-overlay">
        <div className="loading-robot"></div>
      </div>
    );
  }

  return (
    <div className="app">
      <Header />
      <Hero />
      <Services />
      <Credentials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;