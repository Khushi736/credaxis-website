import React, { useEffect } from 'react';
import { 
  FaApple, 
  FaGooglePlay, 
  FaLandmark, 
  FaShieldAlt, 
  FaCheckCircle, 
  FaFingerprint, 
  FaCalendarCheck 
} from 'react-icons/fa';
import './Mandate.css';

export default function Mandate() {
  useEffect(() => {
    // 🔥 Page khulte hi top par scroll karne ke liye
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      const wrapper = document.querySelector('.md-reveal-wrapper');
      if (wrapper) wrapper.classList.add('md-show-text');
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="md-container">
      {/* Hero Section with Zoom-Out Background & Centered MANDATE */}
      <section className="md-hero-section">
        <div className="md-hero-bg"></div>
        <div className="md-hero-overlay"></div>
        
        <div className="md-hero-content">
          <div className="md-reveal-wrapper">
            <h1 className="md-hero-title md-hidden-text">
              MANDATE
            </h1>
          </div>
        </div>
      </section>

      {/* Extended Section (Below Hero) */}
      <section className="md-extended-section">
        <div className="md-extended-content">
          {/* Subtitle Tagline */}
          <p className="md-hero-subtext">
            APPROVE ONCE <span className="md-dot">•</span> PAID ON TIME
          </p>

          {/* App Store & Play Store Download Buttons */}
          <div className="md-store-buttons">
            {/* <button className="md-store-btn" onClick={() => window.location.href = '/'}>
              <FaApple className="md-store-icon md-apple-icon" />
              <div className="md-store-text">
                <span>Download on the</span>
                <strong>App Store</strong>
              </div>
            </button> */}

            <button className="md-store-btn" onClick={() => window.location.href = 'https://play.google.com/store/apps/details?id=com.bbpl.mycredaxis&pcampaignid=web_share'}>
              <FaGooglePlay className="md-store-icon md-playstore-icon" />
              <div className="md-store-text">
                <span>Get it on</span>
                <strong>Google Play</strong>
              </div>
            </button>
          </div>

          {/* Trust Badges Footer */}
          <div className="md-trust-footer">
            <div className="md-trust-item">
              <FaLandmark className="md-trust-icon" />
              <span>REGULATED BANKS</span>
            </div>
            <div className="md-trust-item">
              <FaShieldAlt className="md-trust-icon" />
              <span>ENCRYPTED</span>
            </div>
            <div className="md-trust-item">
              <FaCheckCircle className="md-trust-icon" />
              <span>CANCEL ANYTIME</span>
            </div>
          </div>

        </div>
      </section>

      {/* 🔥 Naya Cards Section */}
      <section className="md-cards-section">
        <div className="md-features-grid">
          {/* Card 1: Approve Once */}
          <div className="md-feature-card" style={{ backgroundImage: `url('/images/Ao.png')` }}>
            <div className="md-card-overlay"></div>
            <div className="md-card-content-top"></div>
            <div className="md-card-footer">
              <div className="md-card-badge-icon">
                <FaFingerprint />
              </div>
              <span className="md-card-title">Approve once</span>
            </div>
          </div>

          {/* Card 2: Pays on Time */}
          <div className="md-feature-card" style={{ backgroundImage: `url('/images/pay.png')` }}>
            <div className="md-card-overlay"></div>
            <div className="md-card-content-top"></div>
            <div className="md-card-footer">
              <div className="md-card-badge-icon">
                <FaCalendarCheck />
              </div>
              <span className="md-card-title">Pays on time</span>
            </div>
          </div>

          {/* Card 3: Bank-grade safe */}
          <div className="md-feature-card" style={{ backgroundImage: `url('/images/security.png')` }}>
            <div className="md-card-overlay"></div>
            <div className="md-card-content-top"></div>
            <div className="md-card-footer">
              <div className="md-card-badge-icon">
                <FaShieldAlt />
              </div>
              <span className="md-card-title">Bank-grade safe</span>
            </div>
          </div>
        </div>
      </section>

      {/* 🔥 Payment Handled Section (Left Image, Right Content) */}
      <section className="md-handled-section">
        <div className="md-handled-container">
          
          {/* Left Side: Phones Mockup Image */}
          <div className="md-handled-image-wrapper">
            <img src="/images/app-phone.png" alt="Phones Mockup" className="md-handled-img" />
          </div>

          {/* Right Side: Content & Actions */}
          <div className="md-handled-content">
            <h2 className="md-handled-title">
              Every payment, <br />
              <span className="md-handled-highlight">handled for you.</span>
            </h2>

            {/* Store Buttons */}
            <div className="md-handled-store-row">
              

              <button className="md-store-btn" onClick={() => window.location.href = 'https://play.google.com/store/apps/details?id=com.bbpl.mycredaxis&pcampaignid=web_share'}>
                <FaGooglePlay className="md-store-icon md-playstore-icon" />
                <div className="md-store-text">
                  <span>Get it on</span>
                  <strong>Google Play</strong>
                </div>
              </button>

              <button className="md-primary-cta-btn" onClick={() => window.location.href = '/'}>
                Set up Mandate <span className="md-cta-arrow">→</span>
              </button>
            </div>

          </div>

        </div>
      </section>
      
    </div>
  );
}