import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css'; // Niche di gayi CSS file ko yahan import karein

const AboutUs = () => {
  return (
    <section className="about-us-section">
      <div className="about-container">
        
        {/* Page Header */}
        <div className="about-header">
          <h1 className="page-title">About Us</h1>
        </div>

        {/* Section: About MyCredAxis */}
        <div className="about-content-block">
          <h2>About MyCredAxis</h2>
          <p>
            MyCredAxis is a digital financial services platform and a product of BisaniBrothers Private Limited.
          </p>
          <p>
            The platform is designed to provide users with convenient access to digital financial services through a secure and user-friendly experience. MyCredAxis brings together everyday payment services, credit-related services, rewards, and identity verification features within a single application.
          </p>
          <p>
            Our objective is to simplify access to essential financial services while maintaining transparency, security, and compliance with applicable laws and partner requirements.
          </p>
          <p>
            Certain services available on MyCredAxis are offered through authorized service providers, regulated partners, payment networks, and technology integrations, where applicable.
          </p>
        </div>

        {/* Section: Our Services */}
        <div className="about-content-block">
          <h2>Our Services</h2>
          <p className="intro-text">Currently, MyCredAxis provides access to the following services:</p>
          
          <div className="services-grid">
            {/* Bill Payments */}
            <div className="service-card">
              <h3>Bill Payments</h3>
              <p>Users can make supported utility and financial payments, including:</p>
              <ul>
                <li>Electricity Bill Payment</li>
                <li>Mobile Recharge</li>
                <li>DTH Recharge</li>
                <li>Broadband Bill Payment</li>
                <li>Water Bill Payment</li>
                <li>Gas Cylinder Payment</li>
                <li>FASTag Recharge</li>
                <li>Credit Card Bill Payment</li>
                <li>Loan EMI Payment</li>
                <li>Insurance Premium Payment</li>
                <li>Other supported bill payment services</li>
              </ul>
            </div>

            {/* Credit Services */}
            <div className="service-card">
              <h3>Credit Services</h3>
              <p>Eligible users can access credit-related services, including:</p>
              <ul>
                <li>Credit Score Check</li>
                <li>Credit Report</li>
                <li>Credit Account Summary</li>
                <li>Active Accounts</li>
                <li>Closed Accounts</li>
                <li>Credit Enquiry Information</li>
                <li>Credit Insights</li>
              </ul>
              <p className="note-text">Credit-related services are made available through authorized partners where applicable.</p>
            </div>

            {/* Rewards */}
            <div className="service-card">
              <h3>Rewards</h3>
              <p>Eligible users may receive rewards based on supported activities available within the platform. Rewards may include:</p>
              <ul>
                <li>CX Reward Points</li>
                <li>Spin & Win</li>
                <li>Scratch Cards</li>
                <li>Promotional Coupons</li>
                <li>Campaign-based Rewards</li>
              </ul>
              <p className="note-text">Availability of rewards may vary depending on applicable terms, campaigns, and eligibility.</p>
            </div>

            {/* KYC Verification */}
            <div className="service-card">
              <h3>KYC Verification</h3>
              <p>Certain services may require successful identity verification (KYC) before they can be accessed.</p>
              <p className="note-text">KYC verification is performed only where required and through authorized verification partners, where applicable.</p>
            </div>
          </div>
        </div>

        {/* Section: Security */}
        <div className="about-content-block">
          <h2>Security</h2>
          <p>Protecting user information is an important part of our platform.</p>
          <p>MyCredAxis is designed with security measures intended to help safeguard user information and support secure digital transactions.</p>
          <p>Users are responsible for maintaining the confidentiality of their account credentials and reporting any unauthorized activity immediately.</p>
        </div>

        {/* Section: Mission & Commitment */}
        <div className="mission-commitment-wrapper">
          <div className="about-content-block split-block">
            <h2>Our Mission</h2>
            <p>
              Our mission is to simplify access to digital financial services by providing a secure, reliable, and easy-to-use platform that helps users manage everyday payments, credit-related services, and rewards from a single application.
            </p>
          </div>

          <div className="about-content-block split-block">
            <h2>Our Commitment</h2>
            <p>We are committed to:</p>
            <ul>
              <li>Providing a simple and user-friendly experience</li>
              <li>Maintaining transparency in our services</li>
              <li>Protecting user information</li>
              <li>Continuously improving the platform</li>
              <li>Complying with applicable legal and regulatory requirements</li>
            </ul>
          </div>
        </div>

        {/* Section: Company Info */}
        <div className="about-content-block company-info-block">
          <h2>Company Information</h2>
          <div className="info-row">
            <strong>Product Name:</strong> <span>MyCredAxis</span>
          </div>
          <div className="info-row">
            <strong>Owned & Operated By:</strong> <span>BisaniBrothers Private Limited</span>
          </div>
        </div>

        {/* Section: Important Information */}
        <div className="about-content-block important-info-block">
          <h2>Important Information</h2>
          <ul>
            <li>Availability of services may vary depending on location, eligibility, partner integrations, and applicable regulations.</li>
            <li>Some services may require user verification before access is granted.</li>
            <li>Rewards, promotional offers, and supported services may change from time to time.</li>
            <li>Information published on this website reflects the services currently supported by the MyCredAxis platform.</li>
          </ul>
        </div>

        {/* Section: Disclaimer */}
        <div className="about-content-block disclaimer-block">
          <h2>Disclaimer</h2>
          <p>
            MyCredAxis is a technology platform developed and operated by BisaniBrothers Private Limited.
          </p>
          <p>
            Bill payment, credit-related services, KYC verification, payment processing, and other applicable financial services may be provided through authorized partners, licensed service providers, regulated financial institutions, and applicable payment networks.
          </p>
          <p>
            MyCredAxis does not modify or alter information received from authorized third-party service providers.
          </p>
          <p>
            Availability of specific services depends on applicable laws, partner integrations, operational availability, and regulatory requirements.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;