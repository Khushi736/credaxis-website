import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Loans.css';

const Loans = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="loans-page-wrapper">
      {/* Navigation */}
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
        </div>
      </nav>

      {/* Hero Section (Split Layout) */}
      <header className="loans-page-hero">
        
        {/* Left Side: Text Content */}
        <div className="hero-content-wrapper">
          <span className="studio-welcome-badge slide-in-left">Unlock Your Dreams</span>
          <h1 className="studio-hero-title slide-in-right">
            SMART LOANS. SIMPLE PROCESS.<br />
            BETTER TOMORROW.
          </h1>
          <a href="#loan-options" className="studio-cta-button fade-in-up">Find Your Loan</a>
        </div>

        {/* Right Side: Image */}
        <div className="hero-image-wrapper fade-in-up">
          {/* Apni proper phone/loan image ka path yahan dein */}
          <img src="/images/loan-icon.png" alt="Loan App Features" className="hero-side-image" />
        </div>

      </header>

      {/* Loans Grid/Slider Section */}
      <section id="loan-options" className="loans-grid-section">
        <div className="studio-section-heading">
          <h2>Financial Solutions</h2>
          <p className="studio-section-sub">Low interest rates and fast approvals for your everyday needs.</p>
        </div>

        {/* Container for Desktop Grid & Mobile Swipe */}
        
        <div className="loans-swipe-container">
          
          {/* 1. Personal Loan */}
          <div className="loan-card">
            <div className="loan-card-image-wrapper">
              <img src="/images/personal.jpeg" alt="Personal Loan" className="loan-card-img" />
            </div>
            <div className="loan-info">
              <h3>Personal Loan</h3>
              <p>Quick disbursal with minimal documentation. Get funds for medical emergencies, weddings, or travel seamlessly.</p>
              
            </div>
          </div>

          {/* 2. Home Loan */}
          <div className="loan-card">
            <div className="loan-card-image-wrapper">
              <img src="/images/personal.jpeg" alt="Home Loan" className="loan-card-img" />
            </div>
            <div className="loan-info">
              <h3>Home Loan</h3>
              <p>Step into your dream home with our low-interest home loans. Long tenure and flexible repayment options.</p>
              
            </div>
          </div>

          {/* 3. Auto Loan */}
          <div className="loan-card">
            <div className="loan-card-image-wrapper">
              <img src="/images/car.jpg" alt="Auto Loan" className="loan-card-img" />
            </div>
            <div className="loan-info">
              <h3>Auto Loan</h3>
              <p>Hit the road faster with up to 100% on-road financing for your favorite two-wheelers and four-wheelers.</p>
              
            </div>
          </div>

          {/* 4. Education Loan */}
          <div className="loan-card">
            <div className="loan-card-image-wrapper">
              <img src="/images/education.jpg" alt="Education Loan" className="loan-card-img" />
            </div>
            <div className="loan-info">
              <h3>Education Loan</h3>
              <p>Fuel your academic ambitions with our student-friendly loans covering tuition, accommodation, and travel.</p>
             
            </div>
          </div>

          {/* 5. Business Loan */}
          <div className="loan-card">
            <div className="loan-card-image-wrapper">
              <img src="/images/personal.jpeg" alt="Business Loan" className="loan-card-img" />
            </div>
            <div className="loan-info">
              <h3>Business Loan</h3>
              <p>Scale your enterprise with collateral-free working capital. Tailored for MSMEs and growing startups.</p>
              
            </div>
          </div>

          {/* 6. Gold Loan */}
          <div className="loan-card">
            <div className="loan-card-image-wrapper">
              <img src="/images/card.png" alt="Gold Loan" className="loan-card-img" />
            </div>
            <div className="loan-info">
              <h3>Gold Loan</h3>
              <p>Unlock the value of your gold instantly. Enjoy the lowest interest rates with secure storage facilities.</p>
              
            </div>
          </div>

        </div>

      </section>
      {/* NEW: Why Borrow With Us Section */}
      <section className="why-borrow-section">
        <div className="why-borrow-container">
          
          {/* Left Side: Content & Features */}
          <div className="why-borrow-content">
            <h2 className="why-borrow-title">Why Borrow With MyCredAxis?</h2>
            <p className="why-borrow-subtitle">
              We believe that getting a loan should be empowering, not exhausting. Our process is optimized to respect your time and provide maximum clarity.
            </p>
            
            <div className="why-features-grid">
              <div className="why-feature-item">
                <div className="why-feature-icon"><i className="bi bi-lightning-charge"></i></div>
                <div className="why-feature-text">
                  <h4>Fast Approval</h4>
                  <p>Get a decision in as little as 24 hours.</p>
                </div>
              </div>
              <div className="why-feature-item">
                <div className="why-feature-icon"><i className="bi bi-graph-down-arrow"></i></div>
                <div className="why-feature-text">
                  <h4>Competitive Rates</h4>
                  <p>Market-leading rates updated daily.</p>
                </div>
              </div>
              <div className="why-feature-item">
                <div className="why-feature-icon"><i className="bi bi-layers"></i></div>
                <div className="why-feature-text">
                  <h4>Flexible Terms</h4>
                  <p>Repayment schedules that fit your cash flow.</p>
                </div>
              </div>
              <div className="why-feature-item">
                <div className="why-feature-icon"><i className="bi bi-headset"></i></div>
                <div className="why-feature-text">
                  <h4>Expert Support</h4>
                  <p>Dedicated loan officers at every step.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Image & Floating Badge */}
          <div className="why-borrow-image-wrapper">
            <div className="why-image-backdrop"></div>
            {/* Make sure to add an image named 'why-borrow-bg.jpg' in your public/images folder */}
            <img src="/images/why.png" alt="Happy Customer" className="why-main-image" />
            
            <div className="why-floating-badge">
              <div className="badge-icon-circle">
                <i className="bi bi-shield-check"></i>
              </div>
              <div className="badge-text-content">
                <strong>100% Secure</strong>
                <span>Encrypted & Verified</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Loans;