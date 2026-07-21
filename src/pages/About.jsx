import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className="saas-about-wrapper">
      {/* Hero Section */}
      <section className="saas-about-hero">
        <div className="saas-badge">About MyCredAxis</div>
        <h1 className="saas-hero-title">
          Architecting the Future of <span className="saas-gradient-text">Intelligent Finance</span>
        </h1>
        <p className="saas-hero-subtitle">
          MyCredAxis is a next-generation fintech platform engineered to deliver enterprise-grade visibility, high-speed transaction flows, and absolute data security for modern financial ecosystems.
        </p>
      </section>

      {/* Stats Grid Section */}
      <section className="saas-stats-section">
        <div className="saas-stat-card">
          <h3>99.99%</h3>
          <p>Platform Uptime</p>
        </div>
        <div className="saas-stat-card">
          <h3>Enterprise</h3>
          <p>Grade Encryption</p>
        </div>
        <div className="saas-stat-card">
          <h3>Real-Time</h3>
          <p>Financial Analytics</p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="saas-content-section">
        <div className="saas-content-grid">
          <div className="saas-text-block">
            <h2>Our Core Mission</h2>
            <p>
              To bridge the gap between complex financial infrastructure and user-centric software design. We empower businesses and individuals with absolute control, transparency, and scalable tools required to navigate global financial markets seamlessly.
            </p>
          </div>
          <div className="saas-text-block">
            <h2>Built For Scale</h2>
            <p>
              Powered by robust backend architectures and structured relational databases, Credaxis guarantees high availability, rapid processing, and secure transaction tracking tailored for high-demand environments.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values SaaS Table/List */}
      <section className="saas-values-section">
        <h2 className="saas-section-title">Engineering Principles</h2>
        <div className="saas-values-grid">
          <div className="saas-value-item">
            <h4>Precision</h4>
            <p>Accurate, real-time metrics designed to optimize financial performance without latency.</p>
          </div>
          <div className="saas-value-item">
            <h4>Security First</h4>
            <p>Rigorous multi-layer protection standards ensuring complete privacy and regulatory compliance.</p>
          </div>
          <div className="saas-value-item">
            <h4>Seamless UX</h4>
            <p>Clean design systems and responsive interfaces built for effortless workflow navigation.</p>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="saas-cta-section">
        <h2>Ready to transform your financial workflows?</h2>
        <p>Explore our platform capabilities or review our security guidelines.</p>
        <div className="saas-cta-buttons">
          <Link to="/security" className="saas-btn-primary">View Security Architecture</Link>
          <Link to="/privacy-policy" className="saas-btn-secondary">Privacy Policy</Link>
        </div>
      </section>
    </div>
  );
};

export default About;