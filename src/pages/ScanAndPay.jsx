import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ScanAndPay.css'; // Nayi CSS file import karein

function ScanAndPay() {
  // Page load hone par hamesha top se start karne ke liye
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="feature-detail-page">
      
      {/* Main Content Area */}
      <div className="feature-detail-container">
        
        {/* Left Side: Content */}
        <div className="feature-detail-content">
          
          <h1 className="feature-title serif-text lowercase">
            scan & pay.<br />
            anywhere.
          </h1>
          
          <p className="feature-desc">
            transform the way you pay. scan any UPI QR code using your CredAxis credit card and enjoy a seamless, rewarding checkout experience every single time.
          </p>
          
          <Link to="/" className="feature-action-btn" style={{textDecoration: 'none'}}>
            Go to homepage
          </Link>
        </div>

        {/* Right Side: Visual */}
        <div className="feature-detail-visual">
          {/* Yahan aap apne upgrade section wali same image use kar sakte hain */}
          <img 
            src="/images/upgrade1.png" 
            alt="Scan and Pay anywhere" 
            className="floating-feature-img" 
          />
        </div>

      </div>
    </div>
  );
}

export default ScanAndPay;