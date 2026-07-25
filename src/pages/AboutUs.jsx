import React from 'react';
import { Link } from 'react-router-dom';
import { FaShieldAlt, FaBullseye, FaBuilding, FaInfoCircle } from 'react-icons/fa';
import './AboutUs.css';

export default function AboutUs() {
  return (
    <div className="about-container">
      
      {/* Logo & Brand Section */}
      <div className="logo-container">
        <img src="/images/logos.png" alt="MyCredAxis Logo" className="brand-logo" />
        <span className="logo-subtext">A product of BisaniBrothers Private Limited</span>
      </div>

      {/* 1. Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>About Us</h1>
          <p>
            MyCredAxis is a digital financial services platform and a product of BisaniBrothers Private Limited. The platform is designed to provide users with convenient access to digital financial services through a secure and user-friendly experience. MyCredAxis brings together everyday payment services, credit-related services, rewards, and identity verification features within a single application.
          </p>
        </div>
      </section>

      {/* Objective Section (Styled matching About Us style without box card) */}
      <section className="objective-section">
        <div className="objective-content">
          <h2>Our Objective</h2>
          <div className="yellow-line"></div>
          <p>
            Our objective is to simplify access to essential financial services while maintaining transparency, security, and compliance with applicable laws and partner requirements. Certain services available on MyCredAxis are offered through authorized service providers, regulated partners, payment networks, and technology integrations, where applicable.
          </p>
        </div>
      </section>

      {/* Sub-header Title */}
      <div className="section-header">
        <h2>Our Services</h2>
        <div className="yellow-line"></div>
      </div>

      {/* 2. Feature Rows */}
      <div className="features-wrapper">
        
        {/* Row 1: Bill Payments */}
        <div className="feature-row">
          <div className="feature-text">
            <h3>Bill Payments</h3>
            <p>
              Users can make supported utility and financial payments, including Electricity, Mobile & DTH Recharge, Broadband, Water, Gas Cylinder, FASTag, Credit Card Bill, Loan EMI, and Insurance Premium payments.
            </p>
            <button className="btn-yellow">Explore Bills &rarr;</button>
          </div>
          <div className="feature-image-container">
            <div className="art-wrapper">
              <div className="yellow-blob"></div>
              <div className="hexagon-frame">
                <img src="https://images.unsplash.com/photo-1556742049-0a67d553c2a5?auto=format&fit=crop&q=80&w=500" alt="Bill Payments" />
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Credit Services */}
        <div className="feature-row reverse">
          <div className="feature-text">
            <h3>Credit Services</h3>
            <p>
              Eligible users can access credit-related services including Credit Score Checks, Reports, Account Summaries (Active & Closed), Enquiry Information, and Insights through authorized partners.
            </p>
            <button className="btn-yellow">Check Credit &rarr;</button>
          </div>
          <div className="feature-image-container">
            <div className="art-wrapper">
              <div className="yellow-blob"></div>
              <div className="hexagon-frame">
                <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=500" alt="Credit Services" />
              </div>
            </div>
          </div>
        </div>

        {/* Row 3: Rewards & KYC */}
        <div className="feature-row">
          <div className="feature-text">
            <h3>Rewards & KYC Verification</h3>
            <p>
              Receive rewards based on platform activities including CX Reward Points, Spin & Win, Scratch Cards, and Promotional Coupons. Certain services require successful KYC verification via authorized partners.
            </p>
            <button className="btn-yellow">View Rewards &rarr;</button>
          </div>
          <div className="feature-image-container">
            <div className="art-wrapper">
              <div className="yellow-blob"></div>
              <div className="hexagon-frame">
                <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=500" alt="Rewards and Verification" />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* 3. Security, Mission & Commitment Section */}
      <section className="mission-security-section">
        <div className="max-width-wrapper">
          <div className="content-split-box">
            
            <div className="split-block">
              <div className="inline-heading">
                <span className="icon-symbol">&#128274;</span>
                <h3>Security</h3>
              </div>
              <p>
                Protecting user information is an important part of our platform. MyCredAxis is designed with security measures intended to help safeguard user information and support secure digital transactions. Users are responsible for maintaining the confidentiality of their account credentials.
              </p>
            </div>
            
            <div className="split-block">
              <div className="inline-heading">
                <span className="icon-symbol">&#127919;</span>
                <h3>Our Mission</h3>
              </div>
              <p>
                Our mission is to simplify access to digital financial services by providing a secure, reliable, and easy-to-use platform that helps users manage everyday payments, credit-related services, and rewards from a single application.
              </p>
            </div>

          </div>

          {/* Commitment Box */}
          <div className="commitment-box">
            <h3>Our Commitment</h3>
            <ul className="commitment-list">
              <li>Providing a simple and user-friendly experience</li>
              <li>Maintaining transparency in our services</li>
              <li>Protecting user information</li>
              <li>Continuously improving the platform</li>
              <li>Complying with applicable legal and regulatory requirements</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Company Information & Important Info Section */}
      <section className="company-info-section">
        <div className="company-card-box">
          <span className="icon-symbol mb-2">&#127970;</span>
          <h4>Company Information</h4>
          <p className="company-details">
            <strong>Product Name:</strong> MyCredAxis<br />
            <strong>Owned & Operated By:</strong> BisaniBrothers Private Limited
          </p>

          <div className="info-notes-grid">
            <div className="note-box">
              <h5>Important Information</h5>
              <ul>
                <li>Availability of services may vary depending on location, eligibility, partner integrations, and applicable regulations.</li>
                <li>Some services may require user verification before access is granted.</li>
                <li>Rewards, promotional offers, and supported services may change from time to time.</li>
                <li>Information published on this website reflects services currently supported by the platform.</li>
              </ul>
            </div>

            <div className="note-box">
              <h5>Disclaimer</h5>
              <p>
                MyCredAxis is a technology platform developed and operated by BisaniBrothers Private Limited. Bill payment, credit-related services, KYC verification, payment processing, and other applicable financial services may be provided through authorized partners, licensed service providers, regulated financial institutions, and applicable payment networks. MyCredAxis does not modify or alter information received from authorized third-party service providers.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="about-footer">
        <p>&copy; {new Date().getFullYear()} MyCredAxis (BisaniBrothers Private Limited). All Rights Reserved.</p>
      </footer>

    </div>
  );
}