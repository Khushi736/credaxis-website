import React, { useEffect, useRef } from 'react';
import { FaBolt, FaTint, FaFire, FaCarSide, FaHistory, FaMobileAlt, FaWifi, FaCreditCard, FaShieldAlt} from 'react-icons/fa';
import './BillPayments.css';
import { useNavigate } from 'react-router-dom';

export default function BillPayments() {
  const observerRef = useRef(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0,0);

    // Scroll Animation Observer Setup
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("bp-show-text");
        }
      });
    }, { threshold: 0.15 });

    // Targeting all elements with 'bp-reveal-wrapper'
    const elementsToAnimate = document.querySelectorAll(".bp-reveal-wrapper");
    elementsToAnimate.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  return (
    <div className="bp-container">
      
      {/* =========================================
          TOP SECTION: LOGO + HERO (COMBINED)
      ========================================= */}
      <div className="bp-hero-wrapper">
        
        {/* The Background Layer (Spans exactly from the top, covering the logo too) */}
        <div className="bp-wave-bg">
          <svg viewBox="0 0 1440 700" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="wave-grad-fill-1" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00b4d8" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#0077b6" stopOpacity="0.05" />
              </linearGradient>
              <linearGradient id="wave-grad-fill-2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#48cae4" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#03045e" stopOpacity="0.02" />
              </linearGradient>
              <linearGradient id="wave-grad-line" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#00b4d8" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#90e0ef" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {/* Filled Flowing Ribbons */}
            <path d="M-100,500 C200,550 400,200 800,150 C1100,100 1300,120 1500,0 L1500,-100 L-100,-100 Z" fill="url(#wave-grad-fill-1)" />
            <path d="M-100,350 C300,600 500,300 900,250 C1200,200 1400,100 1600,-50 L1600,-100 L-100,-100 Z" fill="url(#wave-grad-fill-2)" />
            
            {/* Elegant Swooping Lines */}
            <path d="M-100,600 C300,700 600,300 1000,200 C1300,100 1450,150 1600,0" fill="none" stroke="url(#wave-grad-line)" strokeWidth="3" />
            <path d="M-50,450 C250,550 450,250 850,200 C1150,150 1350,50 1550,-50" fill="none" stroke="#00b4d8" strokeWidth="1.5" strokeOpacity="0.6" />
            <path d="M-200,700 C200,800 700,400 1100,350 C1400,300 1500,200 1600,100" fill="none" stroke="#48cae4" strokeWidth="1" strokeOpacity="0.8" />
          </svg>
        </div>

        {/* 1. LOGO SECTION (Now sits on top of the wave) */}
        <div className='bp-logo-wrapper'>
          <div className='bp-reveal-wrapper'>
            <img src='/images/logos.png' alt="mycredaxis logo" className='bp-brand-logo bp-hidden-text bp-fade-up'/>
          </div>
          <div className='bp-reveal-wrapper bp-delay-1'>
            <span className='bp-logo-subtext bp-hidden-text bp-fade-up'> MyCredAxis</span>
          </div>
        </div>

        {/* 2. HERO CONTENT SECTION */}
        <div className="bp-hero-content">
          <div className='bp-reveal-wrapper bp-delay-1'>
            <h1 className='bp-title-text bp-hidden-text bp-fade-up'>
              Pay every bill. <br/> <span className='bp-text-gradient'>From one app.</span>
            </h1>
          </div>
          
          <div className='bp-reveal-wrapper bp-delay-2'>
            <p className="bp-header-subtitle bp-hidden-text bp-fade-up">
              Electricity, water, gas, FASTag, mobile, broadband — every utility you pay, simplified into one seamless experience.
            </p>
          </div>
          
          <div className='bp-reveal-wrapper bp-delay-3'>
            <div className="bp-cta-container bp-hidden-text bp-fade-up">
              <button 
                className="bp-btn bp-btn-primary" 
                onClick={() => navigate('/')}
              >
                Download the App
              </button>
              <button 
                className="bp-btn bp-btn-secondary" 
                onClick={() => navigate('/')}
              >
                See how it works
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. MINIMAL CATEGORIES GRID */}
      <div className="bp-biller-section">
        <div className="bp-reveal-wrapper">
          <h2 className="bp-section-title bp-hidden-text bp-fade-up">Essential Services</h2>
        </div>
        
        <div className="bp-minimal-grid">
          {/* Card 1 */}
          <div className="bp-reveal-wrapper bp-delay-1">
            <div className="bp-minimal-card bp-hidden-text bp-fade-up">
              <div className="bp-icon-circle bp-blue-light"><FaBolt /></div>
              <h3>Electricity</h3>
              <p>Instant settlements for 100+ boards.</p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bp-reveal-wrapper bp-delay-2">
            <div className="bp-minimal-card bp-hidden-text bp-fade-up">
              <div className="bp-icon-circle bp-cyan-light"><FaTint /></div>
              <h3>Water Tax</h3>
              <p>Clear municipal dues with zero latency.</p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bp-reveal-wrapper bp-delay-3">
            <div className="bp-minimal-card bp-hidden-text bp-fade-up">
              <div className="bp-icon-circle bp-orange-light"><FaFire /></div>
              <h3>Piped Gas</h3>
              <p>Automated tracking for seamless billing.</p>
            </div>
          </div>
          {/* Card 4 */}
          <div className="bp-reveal-wrapper bp-delay-4">
            <div className="bp-minimal-card bp-hidden-text bp-fade-up">
              <div className="bp-icon-circle bp-green-light"><FaCarSide /></div>
              <h3>FASTag</h3>
              <p>Real-time highway recharges on the go.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. IMMERSIVE SECURITY SECTION */}
      <div className="bp-security-immersive-section">
        <div className="bp-security-container">
          
          {/* Left Column: Text Content */}
          <div className="bp-security-text-col">
            <div className="bp-reveal-wrapper">
              <span className="bp-security-label bp-hidden-text bp-fade-up">SECURITY & TRUST</span>
            </div>
            
            <div className="bp-reveal-wrapper bp-delay-1">
              <h2 className="bp-security-title bp-hidden-text bp-fade-up">
                Military-Grade.<br/>
                <span className="bp-security-highlight">BBPS Encryption.</span>
              </h2>
            </div>
            
            <div className="bp-reveal-wrapper bp-delay-2">
              <p className="bp-security-desc bp-hidden-text bp-fade-up">
                Every byte of your data and every rupee of your transaction is shielded in a zero-breach environment. Total peace of mind.
              </p>
            </div>

            <div className="bp-reveal-wrapper bp-delay-3">
              <div className="bp-security-footer bp-hidden-text bp-fade-up">
                <div className="bp-accent-line"></div>
                <span>100% Bank-grade security supported</span>
              </div>
            </div>
          </div>

          {/* Right Column: Image with Fade-to-Black Mask */}
          <div className="bp-security-image-col">
            <div className="bp-image-fade-mask"></div>
            <img 
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1470&auto=format&fit=crop" 
              alt="Secure Mobile Payment" 
              className="bp-security-image"
            />
          </div>

        </div>
      </div>

      {/* 5. THE NEXUS ECOSYSTEM SECTION (Custom & Unique) */}
      <div className="bp-nexus-ecosystem-section">{/* =========================================
          5. THE NEXUS ECOSYSTEM SECTION (Vertical Layout)
      ========================================= */}
      <div className="bp-nexus-section">
        <div className="bp-nexus-container bp-nexus-vertical">
          
          {/* TOP COLUMN: Title & New Paragraph */}
          <div className="bp-nexus-text-col">
            <div className="bp-reveal-wrapper">
              <span className="bp-clean-label bp-hidden-text bp-fade-up">THE ECOSYSTEM</span>
            </div>
            
            <div className="bp-reveal-wrapper bp-delay-1">
              <h2 className="bp-nexus-title bp-hidden-text bp-fade-up">
                <span className="bp-title-line-1">The center of your</span>
                <span className="bp-title-line-2">financial universe.</span>
              </h2>
            </div>
            
            <div className="bp-reveal-wrapper bp-delay-2">
              <p className="bp-nexus-desc bp-hidden-text bp-fade-up">
                Experience a truly unified platform. From electricity and piped gas to FASTag and broadband, bring all your essential payments into one central hub. No more switching between multiple apps—just pure, seamless control.
              </p>
            </div>
          </div>

          {/* BOTTOM COLUMN: The Interactive Nexus Orbit */}
          <div className="bp-nexus-visual-col">
            <div className="bp-reveal-wrapper bp-delay-3">
              <div className="bp-orbital-system bp-hidden-text bp-fade-up">
                
                {/* The Central Hub */}
                <div className="bp-nexus-core">
                  <div className="bp-core-pulse"></div>
                  <span className="bp-core-label">All in<br/>One</span>
                </div>

                {/* The Orbiting Track */}
                <div className="bp-orbit-track">
                  
                  <div className="bp-orbit-node bp-node-1">
                    <div className="bp-node-icon bp-blue-light"><FaBolt /></div>
                  </div>
                  
                  <div className="bp-orbit-node bp-node-2">
                    <div className="bp-node-icon bp-purple-light"><FaMobileAlt /></div>
                  </div>
                  
                  <div className="bp-orbit-node bp-node-3">
                    <div className="bp-node-icon bp-indigo-light"><FaWifi /></div>
                  </div>
                  
                  <div className="bp-orbit-node bp-node-4">
                    <div className="bp-node-icon bp-green-light"><FaCarSide /></div>
                  </div>
                  
                  <div className="bp-orbit-node bp-node-5">
                    <div className="bp-node-icon bp-teal-light"><FaCreditCard /></div>
                  </div>
                  
                  <div className="bp-orbit-node bp-node-6">
                    <div className="bp-node-icon bp-gold-light"><FaShieldAlt /></div>
                  </div>
                  
                  <div className="bp-orbit-node bp-node-7">
                    <div className="bp-node-icon bp-cyan-light"><FaTint /></div>
                  </div>
                  
                  <div className="bp-orbit-node bp-node-8">
                    <div className="bp-node-icon bp-orange-light"><FaFire /></div>
                  </div>
                  
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
      </div>

      {/* =========================================
          3. FEATURE BLOCKS (Zig-Zag Layout)
      ========================================= */}
      <div className="bp-feature-blocks-section">
        
        {/* Block 1: Electricity */}
        <div className="bp-feature-row">
          <div className="bp-feature-text-col">
            <div className="bp-reveal-wrapper">
              <span className="bp-feature-label bp-hidden-text bp-fade-up">ELECTRICITY</span>
            </div>
            <div className="bp-reveal-wrapper bp-delay-1">
              <h2 className="bp-feature-title bp-hidden-text bp-fade-up">Power on.<br/>Never pause.</h2>
            </div>
            <div className="bp-reveal-wrapper bp-delay-2">
              <p className="bp-feature-desc bp-hidden-text bp-fade-up">
                Pay your electricity bill across all state boards in seconds. Set reminders, track usage history, and never face a disconnection.
              </p>
            </div>
            <div className="bp-reveal-wrapper bp-delay-3">
              <div className="bp-feature-footer bp-hidden-text bp-fade-up">
                <div className="bp-accent-line"></div> Available in-app
              </div>
            </div>
          </div>
          <div className="bp-feature-image-col">
            <img src="https://images.unsplash.com/photo-1742032850891-b984dc5e57a1?w=900&h=1100&fit=crop&auto=format" alt="Electricity Bill" className="bp-feature-img" />
          </div>
        </div>

        {/* Block 2: Water Tax (Reverse) */}
        <div className="bp-feature-row bp-reverse">
          <div className="bp-feature-text-col">
            <div className="bp-reveal-wrapper">
              <span className="bp-feature-label bp-hidden-text bp-fade-up">WATER TAX</span>
            </div>
            <div className="bp-reveal-wrapper bp-delay-1">
              <h2 className="bp-feature-title bp-hidden-text bp-fade-up">Every drop<br/>accounted for.</h2>
            </div>
            <div className="bp-reveal-wrapper bp-delay-2">
              <p className="bp-feature-desc bp-hidden-text bp-fade-up">
                Municipal water tax payments handled with one tap. Connected to all major municipal boards across India.
              </p>
            </div>
            <div className="bp-reveal-wrapper bp-delay-3">
              <div className="bp-feature-footer bp-hidden-text bp-fade-up">
                <div className="bp-accent-line"></div> Available in-app
              </div>
            </div>
          </div>
          <div className="bp-feature-image-col">
            <img src="https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=1000&auto=format&fit=crop" alt="Water Tax" className="bp-feature-img" />
          </div>
        </div>

        {/* Block 3: FASTag */}
        <div className="bp-feature-row">
          <div className="bp-feature-text-col">
            <div className="bp-reveal-wrapper">
              <span className="bp-feature-label bp-hidden-text bp-fade-up">FASTTAG</span>
            </div>
            <div className="bp-reveal-wrapper bp-delay-1">
              <h2 className="bp-feature-title bp-hidden-text bp-fade-up">Every highway,<br/>zero stops.</h2>
            </div>
            <div className="bp-reveal-wrapper bp-delay-2">
              <p className="bp-feature-desc bp-hidden-text bp-fade-up">
                Recharge your FASTag wallet instantly. No queues, no cash — just sail through every toll plaza on every expressway.
              </p>
            </div>
            <div className="bp-reveal-wrapper bp-delay-3">
              <div className="bp-feature-footer bp-hidden-text bp-fade-up">
                <div className="bp-accent-line"></div> Available in-app
              </div>
            </div>
          </div>
          <div className="bp-feature-image-col">
            <img src="https://images.unsplash.com/photo-1532201633958-497feb474315?w=900&h=1100&fit=crop&auto=format" alt="FASTag Recharge" className="bp-feature-img" />
          </div>
        </div>

        {/* Block 4: Mobile & Broadband (Reverse) */}
        <div className="bp-feature-row bp-reverse">
          <div className="bp-feature-text-col">
            <div className="bp-reveal-wrapper">
              <span className="bp-feature-label bp-hidden-text bp-fade-up">MOBILE & BROADBAND</span>
            </div>
            <div className="bp-reveal-wrapper bp-delay-1">
              <h2 className="bp-feature-title bp-hidden-text bp-fade-up">Always<br/>connected.</h2>
            </div>
            <div className="bp-reveal-wrapper bp-delay-2">
              <p className="bp-feature-desc bp-hidden-text bp-fade-up">
                Prepaid recharges, postpaid bills, and broadband payments — all carriers, all plans, all in one place.
              </p>
            </div>
            <div className="bp-reveal-wrapper bp-delay-3">
              <div className="bp-feature-footer bp-hidden-text bp-fade-up">
                <div className="bp-accent-line"></div> Available in-app
              </div>
            </div>
          </div>
          <div className="bp-feature-image-col">
            <img src="https://images.unsplash.com/photo-1571867424488-4565932edb41?w=900&h=1100&fit=crop&auto=format" alt="Mobile Recharge" className="bp-feature-img" />
          </div>
        </div>

        {/* Block 5: Piped Gas */}
        <div className="bp-feature-row">
          <div className="bp-feature-text-col">
            <div className="bp-reveal-wrapper">
              <span className="bp-feature-label bp-hidden-text bp-fade-up">PIPED GAS</span>
            </div>
            <div className="bp-reveal-wrapper bp-delay-1">
              <h2 className="bp-feature-title bp-hidden-text bp-fade-up">Home comforts,<br/>delivered.</h2>
            </div>
            <div className="bp-reveal-wrapper bp-delay-2">
              <p className="bp-feature-desc bp-hidden-text bp-fade-up">
                IGL, MGL, and all major PNG providers. Pay your piped gas bill in seconds — your kitchen never waits.
              </p>
            </div>
            <div className="bp-reveal-wrapper bp-delay-3">
              <div className="bp-feature-footer bp-hidden-text bp-fade-up">
                <div className="bp-accent-line"></div> Available in-app
              </div>
            </div>
          </div>
          <div className="bp-feature-image-col">
            <img src="https://images.unsplash.com/photo-1559510981-10719ce4266a?w=900&h=1100&fit=crop&auto=format" alt="Piped Gas" className="bp-feature-img" />
          </div>
        </div>
      </div>

      {/* =========================================
          4. IMMERSIVE SECURITY / CREDIT CARD SECTION 
      ========================================= */}
      {/* <div className="bp-security-immersive-section">
        <div className="bp-security-container">
          
          <div className="bp-security-text-col">
            <div className="bp-reveal-wrapper">
              <span className="bp-security-label bp-hidden-text bp-fade-up">CREDIT CARD</span>
            </div>
            
            <div className="bp-reveal-wrapper bp-delay-1">
              <h2 className="bp-security-title bp-hidden-text bp-fade-up">
                Clear your card.<br/>
                <span className="bp-security-highlight">Protect your score.</span>
              </h2>
            </div>
            
            <div className="bp-reveal-wrapper bp-delay-2">
              <p className="bp-security-desc bp-hidden-text bp-fade-up">
                HDFC, ICICI, SBI, Axis — pay your credit card bill on time, every time. Smart reminders, zero late fees.
              </p>
            </div>

            <div className="bp-reveal-wrapper bp-delay-3">
              <div className="bp-security-footer bp-hidden-text bp-fade-up">
                <div className="bp-accent-line"></div>
                <span>All major banks supported</span>
              </div>
            </div>
          </div>

          <div className="bp-security-image-col">
            <div className="bp-image-fade-mask"></div>
            <img 
              src="https://images.unsplash.com/photo-1599050751795-6cdaafbc2319?w=900&h=700&fit=crop&auto=format" 
              alt="Credit Card Payment" 
              className="bp-security-image"
            />
          </div>

        </div>
      </div> */}

    </div>
  )
}