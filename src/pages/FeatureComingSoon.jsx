import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import "./FeatureComingSoon.css";

const FeatureComingSoon = () => {
  // Page load hone par hamesha top par scroll karne ke liye
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cs-feature-page">
      {/* Premium Back Button */}
      <div className="cs-nav">
        <Link to="/" className="cs-back-btn">
          <i className="bi bi-arrow-left"></i> Back to Home
        </Link>
      </div>

      <div className="cs-container">
        {/* Glassmorphism Card */}
        <div className="cs-glass-card">
          
          <div className="cs-content-split">
            {/* Left Side: Text & Form */}
            <div className="cs-text-section">
              <div className="cs-badge">
                <span className="cs-pulse-dot"></span>
                UNDER CONSTRUCTION
              </div>
              
              <h1 className="cs-title serif-text">
                Something extraordinary <br /> is brewing.
              </h1>
              
              <p className="cs-subtitle">
                We are meticulously crafting this experience to bring you a flawless, 
                high-performance feature. The wait will be absolutely worth it.
              </p>

              {/* Waitlist Form */}
              <div className="cs-notify-form">
                <input 
                  type="email" 
                  placeholder="Enter your email for early access" 
                  className="cs-input" 
                />
                <button className="cs-submit-btn">Notify Me</button>
              </div>
            </div>

            {/* Right Side: Lottie Animation */}
            <div className="cs-animation-section">
              {/* 🔥 DIRECT WORKING LINK ADDED HERE */}
              <Player
                autoplay
                loop
                src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
                // style={{ height: '350px', width: '350px' }}
                className="cs-lottie-player"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FeatureComingSoon;