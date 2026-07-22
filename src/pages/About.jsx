import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  // Fix 1: Page load hote hi usko top par scroll karne ke liye
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="about-studio-wrapper">
      {/* Top Header / Navigation Bar */}
      <nav className="about-studio-nav">
        <div className="about-studio-logo">
          <Link to="/">
            <img src="/images/logo.png" alt="MyCredAxis Logo" className="nav-logo-img" />
          </Link>
        </div>
        <div className="about-studio-links">
          <Link to="/">Home</Link>
          <Link to="/security">Security</Link>
        </div>
      </nav>

      {/* Hero / Studio Intro Section */}
      <header className="about-studio-hero">
        <span className="studio-welcome-badge slide-in-left">Welcome To myCredAxis!</span>
        <h1 className="studio-hero-title slide-in-right">IT'S NICE TO MEET YOU</h1>
        {/* Fix 2: <Link> ki jagah <a> tag lagaya hash link ke liye */}
        <a href="#services" className="studio-cta-button fade-in-up">Our Services</a>
      </header>

      {/* Story / Timeline Sections (Matching the uploaded video style) */}
      <section id="story" className="studio-timeline-section">
        <div className="studio-timeline-container">
          {/* Top Center Heading */}
          <div className="studio-section-heading">
            <h2>About</h2>
            <p className="studio-section-sub">Our Journey & Milestones</p>
          </div>
          
          {/* Milestone 1: Utility Bill Management */}
          <div className="studio-timeline-row">
            <div className="studio-timeline-text">
              <span className="studio-year">Utility Bill Management</span>
              <h2>Automated Utility Operations & Household Infrastructure</h2>
              <p>
                Streamlines high-frequency monthly expenditures such as electricity, water, piped gas, broadband, and postpaid mobile bills into a single, unified interface with instant digital receipts.
              </p>
            </div>
            <div className="studio-timeline-image">
              <div className="studio-circle-badge custom-img-badge">
                <img src="/images/utility.png" alt="Utility" className="timeline-rounded-img" />
              </div>
            </div>
          </div>

          {/* Milestone 2 */}
          <div className="studio-timeline-row reverse">
            <div className="studio-timeline-text">
              <span className="studio-year">Financial Obligations & Credit</span>
              <h2>Enterprise Credit & Loan Repayment Gateway</h2>
              <p>
                Secures and fast-tracks the settlement of recurring financial liabilities, including credit card bill cycles, insurance policy premiums, and structured loan EMI repayments.
              </p>
            </div>
            <div className="studio-timeline-image">
              <div className="studio-circle-badge custom-img-badge">
                <img src="/images/fino-ob.png" alt="Utility" className="timeline-rounded-img" />
              </div>
            </div>
          </div>

          {/* Milestone 3 */}
          <div className="studio-timeline-row">
            <div className="studio-timeline-text">
              <span className="studio-year">Institutional & Municipal Payments</span>
              <h2>Institutional Fee & Civic Tax Ecosystem</h2>
              <p>
                Facilitates secure, transparent bulk-payment clearing for academic institutions (school and university fees) alongside municipal taxes and housing society maintenance dues.
              </p>
            </div>
            <div className="studio-timeline-image">
              <div className="studio-circle-badge custom-img-badge">
                <img src="/images/imp.png" alt="Utility" className="timeline-rounded-img" />
              </div>
            </div>
          </div>

          {/* Milestone 4 */}
          <div className="studio-timeline-row reverse">
            <div className="studio-timeline-text">
              <span className="studio-year">Digital Subscriptions & Transit</span>
              <h2>High-Throughput Access & Transit Refueling</h2>
              <p>
               Handles periodic access charges seamlessly, providing instant processing for DTH TV recharges and continuous, uninterrupted FASTag toll top-ups.
              </p>
            </div>
            <div className="studio-timeline-image">
              <div className="studio-circle-badge custom-img-badge">
                <img src="/images/dst.png" alt="Utility" className="timeline-rounded-img" />
              </div>
            </div>
          </div>

          {/* Final Yellow Circle Badge */}
          <div className="studio-timeline-end">
            <div className="studio-final-badge">
              <span>Be Part<br />Of Our<br />Story!</span>
            </div>
          </div>

        </div>
      </section>

      {/* Services Section */}
      {/* Fix 3: id="services" add kiya taaki button pe click karne par yahan aa sake */}
      <section id="services" className="studio-services-section">
        <div className="studio-services-header">
          <h2>SERVICES</h2>
          <p className="studio-services-subtitle">Enterprise-grade financial intelligence and solutions</p>
        </div>
        <div className="studio-services-grid">
          <div className="studio-service-card">
            <div className="service-icon-circle">
              <i className="bi bi-lightning-charge-fill"></i>
            </div>
            <h3>BBPS (Bharat Bill Payment System)</h3>
            <p>Streamlines high-frequency monthly expenditures such as utility bills, municipal dues, digital subscriptions, and recurring payments into a single unified platform.</p>
          </div>
          <div className="studio-service-card">
            <div className="service-icon-circle">
              <i className="bi bi-cash-stack"></i>
            </div>
            <h3>Loan & Financial Obligations</h3>
            <p>Secures and fast-tracks the settlement of structured financial liabilities, including rapid loan EMI processing and credit management solutions.</p>
          </div>
          <div className="studio-service-card">
            <div className="service-icon-circle">
              <i className="bi bi-shield-check"></i>
            </div>
            <h3>Credit Support & Security</h3>
            <p>Delivers robust multi-layer protection standards, credit monitoring, and high-security compliance tailored for institutional transaction environments.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;