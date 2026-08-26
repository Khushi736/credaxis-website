import React, { useState, useEffect } from 'react';
import { FaCheckCircle, FaArrowRight, FaFileAlt, FaCreditCard } from 'react-icons/fa';
import './FdCreditCard.css';

const FdCreditCardPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const heroImages = [
    '/images/hero-fd.png',
    '/images/hero-fd-2.png',
    '/images/hero-fd-3.png'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <div className="fd-page-wrapper">
      
      {/* 1. Hero Section (Logo ab banner ke andar integrated hai) */}
      <section className="fd-hero-banner-wrapper">
        
        <div className="fd-hero-content">
          
          {/* Logo ab yahan banner ke andar top par aayega */}
          <div className="fd-brand-logo-container">
            <img src="/images/logos.png" alt="MyCredAxis Logo" className="fd-brand-logo-img" />
            <span className="fd-brand-name">
              <span className="fd-brand-my">My</span>CredAxis
            </span>
          </div>

          <h1>Credit Card Against FD <br />Zero CIBIL Required</h1>
          <p>
            Start your Fixed Deposit with as low as <strong>₹2,000</strong> to any amount. 
            Get an instant credit card with a limit equal to your FD amount and earn high interest on your savings!
          </p>

          <div className="hero-highlights">
            <div className="highlight-item">
              <FaCheckCircle className="check-icon" />
              <span>Start from just ₹2,000</span>
            </div>
            <div className="highlight-item">
              <FaCheckCircle className="check-icon" />
              <span>100% Credit Limit against FD</span>
            </div>
            <div className="highlight-item">
              <FaCheckCircle className="check-icon" />
              <span>Paisa Safe + High Interest</span>
            </div>
          </div>

          {/* <div className="hero-cta-group">
            <button className="primary-btn" onClick={() => alert('Redirecting to FD creation flow...')}>
              Book FD & Get Card Now <FaArrowRight />
            </button>
          </div> */}
        </div>

        {/* Right Side: Sliding Images Carousel */}
        <div className="fd-hero-graphic">
          {heroImages.map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt={`Slide ${index + 1}`}
              className={`hero-slide-img ${index === currentImageIndex ? 'active' : ''}`}
            />
          ))}
        </div>

      </section>

     
      {/* 2. Features / Benefits Section */}
      <section className="fd-section">
        <div className="section-title">
          <h2>Why Choose Credit Card Against FD?</h2>
          <p>The smartest way to spend, save, and build your credit score.</p>
        </div>

        <div className="fd-modern-features-grid">
          
          {/* Feature 1 */}
          <div className="fd-feature-card">
            <div className="feat-img-container">
              <img src="/images/hero-fd-3.png" alt="Starts at Just ₹2,000" />
            </div>
            <div className="feat-text-content">
              <h3>Starts at Just ₹2,000</h3>
              <p>No heavy savings needed. Lock in as low as ₹2,000 or go as high as you want with unlimited options.</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="fd-feature-card">
            <div className="feat-img-container">
              <img src="/images/feat-2.png" alt="Use Anywhere" />
            </div>
            <div className="feat-text-content">
              <h3>Use Anywhere, For Anything</h3>
              <p>Shop online, book flights, dine out, pay bills, or swipe at stores—your card works everywhere globally.</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="fd-feature-card">
            <div className="feat-img-container">
              <img src="/images/feat-3.png" alt="Safe & Secure" />
            </div>
            <div className="feat-text-content">
              <h3>100% Safe & Secure Money</h3>
              <p>Your FD is safely parked in secure partner banks with RBI guidelines protection, earning you regular interest.</p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="fd-feature-card">
            <div className="feat-img-container">
              <img src="/images/feat-4.png" alt="Instant Approval" />
            </div>
            <div className="feat-text-content">
              <h3>Instant Approval & Zero CIBIL</h3>
              <p>No income proof or credit history required. Perfect for students, freelancers, and first-time credit users.</p>
            </div>
          </div>

        </div>
      </section>

      <div className="fd-standalone-tagline-section">
        <div className="fd-badges-row">
          <span className="feature-inline-badge">
            <FaFileAlt /> No Income Proof
          </span>
          <span className="feature-inline-badge">
            <FaCreditCard /> No Credit Score
          </span>
        </div>

        <h2>
          Create a Fixed Deposit, <br />
          <span className="highlight-brand">Take novio Credit Card,</span> <br />
          And Boost Your Credit Score!
        </h2>
      </div>
        

      {/* Promotional Banner Section (Placed after Why Choose Us) */}
      <section className="fd-promo-banner-section">
        
        {/* Top-Right Partner Logos */}
        {/* <div className="fd-powered-by">
          <span className="powered-text">Powered By</span>
          <div className="partner-logos-group">
            <span className="bank-tag">SBM Bank</span>
            <span className="bank-tag">DCB BANK</span>
            <span className="bank-tag">RuPay</span>
          </div>
        </div> */}

        {/* Left Side: Ribbon + Text & CTA Content */}
        <div className="fd-hero-content">
          
          {/* Exact Ribbon Strip with V-cut */}
          <div className="fd-ribbon-strip">
            Start with only ₹2,000 FD
          </div>

          <h1>
            Ye <span className="highlight-upi">UPI</span> Wala Credit Card <br />
            <span className="italic-heading">Sab Ke Liye Hai!</span>
          </h1>

          <p>
            Start your Fixed Deposit instantly. Get a digital credit card with a 100% limit against your FD, zero CIBIL required, and high returns.
          </p>


        </div>

        {/* Right Side: Graphic / Image */}
        <div className="fd-hero-graphic">
          <img src="/images/fd-hero-bg.png" alt="FD Credit Card" className="hero-slide-img active" />
        </div>

      </section>

      {/* 3. Bottom CTA Banner */}
      {/* <section className="fd-section">
        <div className="fd-bottom-banner">
          <div className="banner-text">
            <h2>Ready to Unlock Your Credit Power?</h2>
            <p>Open your FD in less than 3 minutes and get your digital card instantly.</p>
          </div>
          <button className="primary-btn white-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Create FD Now <FaArrowRight />
          </button>
        </div>
      </section> */}

    </div>
  );
};

export default FdCreditCardPage;