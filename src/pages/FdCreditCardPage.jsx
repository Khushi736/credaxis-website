import React, { useEffect, useState } from 'react';
import { FaShieldAlt, FaLock, FaCheckCircle, FaArrowRight, FaPercent, FaWallet, FaShoppingBag } from 'react-icons/fa';
import './FdCreditCard.css';

const FdCreditCardPage = () => {
  // Page load hone par top par scroll karne ke liye
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [fdAmount, setFdAmount] = useState(10000);

  // Limit calculation (100% of FD amount)
  const creditLimit = fdAmount;

  return (
    <div className="fd-page-wrapper">
      
      {/* 1. Hero Section */}
      <section className="fd-hero">
        <div className="fd-hero-content">
          <div className="badge-pill">
            <FaShieldAlt className="badge-icon" /> 100% Secure & Guaranteed Approval
          </div>
          <h1>Get Credit Card Against FD <br /><span>Zero CIBIL Required</span></h1>
          <p>
            Start your Fixed Deposit with as low as <strong>₹2,000</strong> to unlimited amount. 
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

          <button className="primary-btn" onClick={() => alert('Redirecting to FD creation flow...')}>
            Book FD & Get Card Now <FaArrowRight />
          </button>
        </div>

        {/* Interactive FD Calculator / Visual Card */}
        <div className="fd-calculator-card">
          <h3>Calculate Your Credit Limit</h3>
          <p className="calc-sub">Drag or enter your FD amount</p>
          
          <div className="amount-input-box">
            <span className="currency-symbol">₹</span>
            <input 
              type="number" 
              min="2000" 
              step="1000"
              value={fdAmount} 
              onChange={(e) => setFdAmount(Math.max(0, Number(e.target.value)))}
            />
          </div>

          <div className="preset-buttons">
            <button onClick={() => setFdAmount(5000)}>₹5,000</button>
            <button onClick={() => setFdAmount(10000)}>₹10,000</button>
            <button onClick={() => setFdAmount(50000)}>₹50,000</button>
            <button onClick={() => setFdAmount(100000)}>₹1,00,000+</button>
          </div>

          <div className="calculation-result-box">
            <div className="result-row">
              <span>Your Fixed Deposit:</span>
              <strong>₹{fdAmount.toLocaleString('en-IN')}</strong>
            </div>
            <div className="result-row highlight-row">
              <span>Your Card Spending Limit:</span>
              <strong className="text-green">₹{creditLimit.toLocaleString('en-IN')} (100%)</strong>
            </div>
            <div className="result-row">
              <span>FD Interest Rate:</span>
              <strong className="text-blue">Up to 7.5% p.a.</strong>
            </div>
          </div>

          <button className="secondary-btn" onClick={() => alert('Starting application...')}>
            Get ₹{creditLimit.toLocaleString('en-IN')} Limit Card
          </button>
        </div>
      </section>

      {/* 2. Features / Benefits Section */}
      <section className="fd-section">
        <div className="section-title">
          <h2>Why Choose FD-Backed Credit Card?</h2>
          <p>The smartest way to spend, save, and build your credit score.</p>
        </div>

        <div className="fd-features-grid">
          <div className="fd-feature-box">
            <div className="feat-icon-wrap"><FaWallet /></div>
            <h3>Starts at Just ₹2,000</h3>
            <p>No heavy savings needed. Lock in as low as ₹2,000 or go as high as you want with unlimited options.</p>
          </div>

          <div className="fd-feature-box">
            <div className="feat-icon-wrap"><FaShoppingBag /></div>
            <h3>Use Anywhere, For Anything</h3>
            <p>Shop online, book flights, dine out, pay bills, or swipe at stores—your card works everywhere globally.</p>
          </div>

          <div className="fd-feature-box">
            <div className="feat-icon-wrap"><FaLock /></div>
            <h3>100% Safe & Secure Money</h3>
            <p>Your FD is safely parked in secure partner banks with RBI guidelines protection, earning you regular interest.</p>
          </div>

          <div className="fd-feature-box">
            <div className="feat-icon-wrap"><FaPercent /></div>
            <h3>Instant Approval & Zero CIBIL</h3>
            <p>No income proof or credit history required. Perfect for students, freelancers, and first-time credit users.</p>
          </div>
        </div>
      </section>

      {/* 3. Bottom CTA Banner */}
      <section className="fd-section">
        <div className="fd-bottom-banner">
          <div className="banner-text">
            <h2>Ready to Unlock Your Credit Power?</h2>
            <p>Open your FD in less than 3 minutes and get your digital card instantly.</p>
          </div>
          <button className="primary-btn white-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Create FD Now <FaArrowRight />
          </button>
        </div>
      </section>

    </div>
  );
};

export default FdCreditCardPage;