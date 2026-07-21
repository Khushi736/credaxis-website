import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Insurance.css';

const Insurance = () => {
  // Page load hote hi top par scroll karne ke liye
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="insurance-page-wrapper">
      {/* Top Navigation Bar */}
      <nav className="about-studio-nav">
        <div className="about-studio-logo">
          <Link to="/">
            <img src="/images/logo.png" alt="MyCredAxis Logo" className="nav-logo-img" />
          </Link>
        </div>
        <div className="about-studio-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/credit-cards">Credit Cards</Link>
          <Link to="/loans">Loans</Link>
          <Link to="/insurance">Insurance</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="insurance-page-hero">
        <div className="hero-content-wrapper">
          <span className="studio-welcome-badge">Secure Your Future</span>
          <h1 className="studio-hero-title">
            COMPREHENSIVE <br />
            <span className="text-highlight">INSURANCE PLANS</span>
          </h1>
          <p className="hero-subtitle">
            Protect what matters most with customized life, health, and asset coverage designed for total peace of mind.
          </p>
          <a href="#insurance-options" className="studio-cta-button">Explore Policies</a>
        </div>
        <div className="hero-image-wrapper">
          <img src="/images/insurance-hero.jpg" alt="Insurance Protection" className="hero-side-image" />
        </div>
      </header>

      {/* Insurance Cards Section */}
      <section id="insurance-options" className="insurance-grid-section">
        <div className="studio-section-heading">
          <h2>Protection Plans</h2>
          <p className="studio-section-sub">Comprehensive coverage options tailored for you and your family.</p>
        </div>

        <div className="insurance-swipe-container">
          
          {/* 1. Health Insurance */}
          <div className="insurance-card">
            <div className="insurance-card-image-wrapper">
              <img src="/images/health-insurance.jpg" alt="Health Insurance" className="insurance-card-img" />
            </div>
            <div className="insurance-info">
              <h3>Health Insurance</h3>
              <p>Secure top-tier medical care with cashless hospitalisation, pre-existing disease cover, and annual health check-ups.</p>
              <button className="insurance-apply-btn">Get Policy</button>
            </div>
          </div>

          {/* 2. Life Insurance */}
          <div className="insurance-card">
            <div className="insurance-card-image-wrapper">
              <img src="/images/life-insurance.jpg" alt="Life Insurance" className="insurance-card-img" />
            </div>
            <div className="insurance-info">
              <h3>Life Insurance</h3>
              <p>Ensure financial stability for your loved ones with high-sum assured term plans and flexible payout options.</p>
              <button className="insurance-apply-btn">Get Policy</button>
            </div>
          </div>

          {/* 3. Car Insurance */}
          <div className="insurance-card">
            <div className="insurance-card-image-wrapper">
              <img src="/images/car-insurance.jpg" alt="Car Insurance" className="insurance-card-img" />
            </div>
            <div className="insurance-info">
              <h3>Car Insurance</h3>
              <p>Drive worry-free with comprehensive third-party and own-damage protection, plus instant claim settlements.</p>
              <button className="insurance-apply-btn">Get Policy</button>
            </div>
          </div>

          {/* 4. Home Insurance */}
          <div className="insurance-card">
            <div className="insurance-card-image-wrapper">
              <img src="/images/home-insurance.jpg" alt="Home Insurance" className="insurance-card-img" />
            </div>
            <div className="insurance-info">
              <h3>Home Insurance</h3>
              <p>Safeguard your structure and valuable belongings against natural calamities, theft, and accidental damages.</p>
              <button className="insurance-apply-btn">Get Policy</button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Insurance;