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
      {/* <nav className="about-studio-nav">
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
      </nav> */}

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
          <img src="/images/insurance.png" alt="Insurance Protection" className="hero-side-image" />
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
              <img src="/images/health.jpeg" alt="Health Insurance" className="insurance-card-img" />
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
              <img src="/images/lifeins.jpg" alt="Life Insurance" className="insurance-card-img" />
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
              <img src="/images/cins.jpg" alt="Car Insurance" className="insurance-card-img" />
            </div>
            <div className="insurance-info">
              <h3>Car Insurance</h3>
              <p>Drive worry-free with comprehensive third-party and own-damage protection, plus instant claim settlements.</p>
              <button className="insurance-apply-btn">Get Policy</button>
            </div>
          </div>

        </div>
      </section>

      {/* Inspiring Quotes & Trust Section */}
      <section className="insurance-quotes-section">
        <div className="quotes-container">
          <div className="studio-section-heading">
            <h2>Words of Wisdom</h2>
            <p className="studio-section-sub">Why securing your family's future today matters the most.</p>
          </div>

          <div className="quotes-grid">
            <div className="quote-card">
              <div className="quote-icon">“</div>
              <p className="quote-text">
                "Insurance is like a parachute. If you don't have it when you need it, you'll never need it again."
              </p>
              <span className="quote-author">— Thane Keenan</span>
            </div>

            <div className="quote-card">
              <div className="quote-icon">“</div>
              <p className="quote-text">
                "The best time to plant a tree was 20 years ago. The second best time is now. Same goes for financial protection."
              </p>
              <span className="quote-author">— Proverb / Financial Wisdom</span>
            </div>

            <div className="quote-card">
              <div className="quote-icon">“</div>
              <p className="quote-text">
                "It is better to have insurance and not need it, than to need insurance and not have it."
              </p>
              <span className="quote-author">— Sir Winston Churchill</span>
            </div>
          </div>
        </div>
      </section>
      {/* Inline Wavy Footer Section */}
      <footer className="insurance-inline-footer">
        <div className="footer-wave-shape">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,50 L1200,120 L0,120 Z" fill="#111214"></path>
          </svg>
        </div>

        <div className="insurance-footer-container">
          <div className="insurance-footer-row">
            
            {/* Left Column: Logo & Paragraph */}
            <div className="footer-brand-info">
              <Link to="/">
                <img src="/images/logo.png" alt="MyCredAxis Logo" className="footer-logo" />
              </Link>
              <p>Smart loans, credit cards & comprehensive insurance solutions.</p>
            </div>

            {/* Middle Column: Listed Links */}
            <div className="footer-nav-links">
              {/* <h4>Quick Links</h4> */}
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/credit-cards">Credit Cards</Link></li>
                <li><Link to="/loans">Loans</Link></li>
                <li><Link to="/insurance">Insurance</Link></li>
              </ul>
            </div>

            {/* Right Column: Copyright */}
            <div className="footer-copyright">
              <p>&copy; {new Date().getFullYear()} MyCredAxis.<br />All rights reserved.</p>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
};

export default Insurance;