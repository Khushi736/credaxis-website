import React from 'react';
import { Link } from 'react-router-dom';
import './UpiOnCredit.css';

function UpiOnCredit() {
  return (
    <div className="upi-deep-dive-page">
      {/* 1. Navbar */}
      <nav className="feature-nav"><Link to="/" className="back-btn">← back to home</Link></nav>

      {/* 2. Hero Section (The "UPI on Credit" main title) */}
      <section className="upi-hero">
        <h2 className="title">give your Rupay credit card<br/>the UPI advantage</h2>
      </section>

      {/* 3. Scan & Pay Section (The scroll-fade one we built) */}
      <section className="scroll-section"> {/* Yahan wo 3-step scroll logic aayega */} </section>

      {/* 4. Pay Online Section */}
      <section className="content-section"> {/* "pay online without CVV/OTP" */} </section>

      {/* 5. Know Your Cards Section */}
      <section className="content-section"> {/* "know your cards inside out" */} </section>

      {/* 6. Features Grid (Track, Savor, Reflect) */}
      <section className="features-grid"> {/* Track, Savor, Reflect cards */} </section>

      {/* 7. Rewards Section */}
      <section className="content-section"> {/* "Twice the reasons to celebrate" */} </section>

      {/* 8. Final Call to Action */}
      <section className="cta-section"> {/* "pay via CRED UPI on credit" */} </section>

      {/* 9. FAQ Section */}
      <section className="faq-section"> {/* FAQ ka code yahan repeat hoga */} </section>
      
      {/* Footer */}
      <footer> {/* Website ka main footer */} </footer>
    </div>
  );
}

export default UpiOnCredit;