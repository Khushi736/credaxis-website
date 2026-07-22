import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CreditCards.css';

const CreditCards = () => {
  // Page load hote hi usko top par scroll karne ke liye
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="cards-page-wrapper">
      {/* Top Header / Navigation Bar */}
      <nav className="about-studio-nav">
        <div className="about-studio-logo">
          <Link to="/">
            <img 
              src="/images/logo.png" 
              alt="MyCredAxis Logo" 
              className="nav-logo-img" 
            />
          </Link>
        </div>
        <div className="about-studio-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/security">Security</Link>
        </div>
      </nav>

      {/* Hero Section with Video Background */}
      <header className="cards-page-hero">
        {/* Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="hero-bg-video"
        >
          {/* Yahan apne video ka correct path dalna */}
          <source src="/video/visa.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Dark Overlay taaki text clear dikhe */}
        <div className="hero-video-overlay"></div>

        {/* Hero Content */}
        <div className="hero-content-wrapper">
          <span className="studio-welcome-badge slide-in-left">Unlock Your Financial Power</span>
          <h1 className="studio-hero-title slide-in-right">CREDIT CARDS</h1>
          <a href="#card-options" className="studio-cta-button fade-in-up">Explore Options</a>
        </div>
      </header>

      {/* Cards Grid Section */}
      <section id="card-options" className="cards-grid-section">
        <div className="studio-section-heading">
          <h2>Choose Your Card</h2>
          <p className="studio-section-sub">Tailored for your everyday lifestyle and financial goals.</p>
        </div>

        <div className="cards-container">
          
          {/* Card 1: Rewards */}
          <div className="cc-card">
            <div className="cc-card-visual blue-card">
              <div className="cc-top-row">
                <h4>MyCredAxis</h4>
                <i className="bi bi-wifi"></i>
              </div>
              <div className="cc-chip"></div>
              <p className="cc-number">**** **** **** 1234</p>
              <div className="cc-bottom-row">
                <p className="cc-name">REGULAR USER</p>
                <i className="bi bi-cc-mastercard cc-logo-icon"></i>
              </div>
            </div>
            <div className="cc-info">
              <h3>Premium Rewards</h3>
              <p>Earn 2x points on everyday purchases. Perfect for shopping and dining enthusiasts.</p>
              <button className="cc-apply-btn">Apply Now</button>
            </div>
          </div>

          {/* Card 2: Travel */}
          <div className="cc-card">
            <div className="cc-card-visual gold-card">
              <div className="cc-top-row">
                <h4>MyCredAxis</h4>
                <i className="bi bi-wifi"></i>
              </div>
              <div className="cc-chip"></div>
              <p className="cc-number">**** **** **** 5678</p>
              <div className="cc-bottom-row">
                <p className="cc-name">REGULAR USER</p>
                <i className="bi bi-cc-visa cc-logo-icon"></i>
              </div>
            </div>
            <div className="cc-info">
              <h3>Travel Elite</h3>
              <p>Zero foreign transaction fees and exclusive lounge access worldwide for frequent flyers.</p>
              <button className="cc-apply-btn">Apply Now</button>
            </div>
          </div>

          {/* Card 3: Cashback */}
          <div className="cc-card">
            <div className="cc-card-visual dark-card">
              <div className="cc-top-row">
                <h4>MyCredAxis</h4>
                <i className="bi bi-wifi"></i>
              </div>
              <div className="cc-chip"></div>
              <p className="cc-number">**** **** **** 9012</p>
              <div className="cc-bottom-row">
                <p className="cc-name">REGULAR USER</p>
                <i className="bi bi-cc-mastercard cc-logo-icon"></i>
              </div>
            </div>
            <div className="cc-info">
              <h3>Cashback Plus</h3>
              <p>Get flat 5% cashback on utility bills, digital subscriptions, and BBPS payments.</p>
              <button className="cc-apply-btn">Apply Now</button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default CreditCards;