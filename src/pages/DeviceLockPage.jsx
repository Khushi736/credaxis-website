import React, {useEffect} from 'react';
import { 
  FaArrowRight, 
  FaArrowDown, 
  FaShieldAlt, 
  FaWallet, 
  FaLock, 
  FaCalendarAlt, 
  FaBell, 
  FaClock, 
  FaCreditCard, 
  FaCheck, 
  FaCogs, 
  FaSyncAlt, 
  FaChartBar, 
  FaHeadset 
} from 'react-icons/fa';
import './DeviceLockPage.css';

const DeviceLockPage = () => {
  useEffect(() => {
   window.scrollTo(0, 0);
  }, []);
  return (
    <div className="dlc-container">
      {/* Breadcrumb & Hero Section */}
      <header className="dlc-hero">
        <div className="dlc-top-bar">
          <div className="brand-logo-container">
            <img src="/images/logos.png" alt="MyCredAxis Logo" className="brand-logo-img" />
            <span className="brand-name">
              <span className="brand-my">My</span>CredAxis
            </span>
          </div>
        </div>
        
        <div className="dlc-hero-content">
          <div className="dlc-hero-text">
            
            <h1>Device Lock & Control</h1>
            <p className="dlc-subtitle">Automated device protection tied to payment status.</p>
            <p className="dlc-description">
              Secure financed devices, automate payment reminders, and restore access automatically when payments are received.
            </p>
            
            {/* Detailed Description Block */}
            <div className="dlc-expanded-description" style={{ marginBottom: '32px', color: '#94a3b8', fontSize: '14px', lineHeight: '1.6' }}>
              <p style={{ marginBottom: '12px' }}>
                MyCredAxis empowers lenders and financiers to seamlessly mitigate credit risk. By bridging payment gateways with hardware-level controls, devices can be securely locked upon missed EMI installments and instantly unlocked the moment payment clears—eliminating manual follow-ups and fraud.
              </p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>Real-time remote locking and unlocking triggers</li>
                <li>Automated SMS and notification workflows for overdue payments</li>
                <li>Tamper-proof security protocols ensuring total device compliance</li>
              </ul>
            </div>

            <div className="dlc-hero-buttons">
              <button className="dlc-btn-primary" onClick={() => window.location.href = 'https://play.google.com/store/apps/details?id=com.bbpl.mycredaxis&pcampaignid=web_share'} >
                Get App <FaArrowRight />
              </button>
              <button className="dlc-btn-secondary" onClick={() => document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' })}>
                Explore How It Works <FaArrowDown />
              </button>
            </div>
          </div>

          {/* Right Side Image Container */}
          <div className="dlc-hero-image-wrapper">
            <img src="/images/dlc_hero.png" alt="Device Lock & Control Dashboard" className="dlc-hero-right-img" />
          </div>
        </div>
      </header>

      {/* How It Works Section */}
      <section className="dlc-section how-it-works" id="how-it-works">
        <div className="section-header text-center">
          <h2>HOW IT WORKS</h2>
          <h2>Smart Protection. Simple Flow.</h2>
        </div>

        <div className="dlc-flow-grid">
          {[
            { step: "01", title: "EMI Due", desc: "EMI is scheduled and customer is expected to make the payment by the due date.", icon: <FaCalendarAlt /> },
            { step: "02", title: "Payment Reminder", desc: "System sends reminders via SMS, Email & Push notifications before and on due date.", icon: <FaBell /> },
            { step: "03", title: "Grace Period", desc: "Additional grace period is provided to complete the payment without any action.", icon: <FaClock /> },
            { step: "04", title: "Device Locked", desc: "If payment is not received, the device is automatically locked and access is restricted.", icon: <FaLock /> },
            { step: "05", title: "EMI Paid", desc: "Customer makes the payment through available payment channels.", icon: <FaCreditCard /> },
            { step: "06", title: "Device Unlocked", desc: "Device is automatically unlocked and access is restored instantly after payment.", icon: <FaCheck /> }
          ].map((item, idx) => (
            <div className="dlc-flow-step" key={idx}>
              <div className="flow-icon-wrapper">
                <div className="flow-icon">{item.icon}</div>
                <span className="step-badge">{item.step}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>



      {/* Features Grid */}
      <section className="dlc-section features-section">
        <div className="section-header text-center">
          <span className="dlc-badge">WHY MYCREDAXIS DLC?</span>
          <h2>Built for <span className="highlight-blue">Security.</span> Designed for <span className="highlight-purple">Simplicity.</span></h2>
        </div>

        <div className="dlc-features-grid">
          {[
            { title: "Secure & Reliable", desc: "Bank-grade security ensures complete data protection and device safety.", icon: <FaShieldAlt /> },
            { title: "Automated Workflow", desc: "End-to-end automation reduces manual effort and eliminates human errors.", icon: <FaCogs /> },
            { title: "Real-time Sync", desc: "Instant status updates across devices and systems for complete visibility.", icon: <FaSyncAlt /> },
            { title: "Smart Reminders", desc: "Multi-channel reminders ensure on-time payments and reduced default risk.", icon: <FaBell /> },
            { title: "Better Recovery", desc: "Improves EMI collection efficiency and reduces default risk significantly.", icon: <FaChartBar /> }
          ].map((feat, idx) => (
            <div className="dlc-feature-card" key={idx}>
              <div className="feature-icon">{feat.icon}</div>
              <h3>{feat.title}</h3>
              <p>{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* DLC Overview / How It Works Section */}
      <section className="dlc-section dlc-overview-section">
        <div className="dlc-overview-container">
          
          {/* Left Side: Image / Mockup */}
          <div className="dlc-overview-image-wrapper">
            <img src="/images/dlc-feature.png" alt="MyCredAxis DLC Overview" className="dlc-overview-img" />
          </div>

          {/* Right Side: Detailed Description & Points */}
          <div className="dlc-overview-content">

            <h2>Smart Device Locking for <br />Seamless EMI Recovery</h2>
            <p className="dlc-overview-desc">
              MyCredAxis Device Locking Control (DLC) is an advanced automated security solution built to safeguard lenders against default risks and streamline EMI collection workflows.
            </p>

            <div className="dlc-overview-points">
              <div className="overview-point-item">
                <h4>How It Works</h4>
                <p>It integrates directly with your loan management system to securely communicate payment statuses and automatically trigger real-time notifications or device restrictions.</p>
              </div>

              <div className="overview-point-item">
                <h4>When It Applies</h4>
                <p>The control mechanism activates automatically under specific conditions—such as a missed payment deadline, an overdue EMI cycle, or when a payment grace period expires.</p>
              </div>

              <div className="overview-point-item">
                <h4>Maintaining EMI Compliance</h4>
                <p>By providing automated reminders, lock triggers upon default, and instant unlock upon payment clearance, it drastically reduces manual follow-ups and encourages timely customer repayments.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="dlc-cta-banner">
        <div className="cta-content">
          <div className="cta-icon-large">
            <FaHeadset />
          </div>
          <div>
            <h2>Take control of your devices <br />and reduce default risk with MyCredAxis DLC.</h2>
            <p>Book a demo today and see how it works.</p>
          </div>
        </div>
        <button className="dlc-btn-primary" onClick={() => window.location.href = 'https://play.google.com/store/apps/details?id=com.bbpl.mycredaxis&pcampaignid=web_share'} >
          Explore on App <FaArrowRight />
        </button>
      </section>
    </div>
  );
};

const FaUnlockIcon = () => <FaCheck style={{ color: '#22c55e', fontSize: '24px' }} />;

export default DeviceLockPage;