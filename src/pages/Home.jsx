import React, { useEffect, useState, useRef } from "react";
import "../App.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { 
  FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube, 
  FaMapMarkerAlt, FaComments, FaTimes, FaWhatsapp, 
  FaEnvelope, FaPhoneAlt, FaApple 
} from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5"; // 🔥 Yahan import add kiya gaya hai
import { title } from "framer-motion/client";

// =========================================
// FALLBACK DATA (API Fail hone par ye use hoga)
// =========================================
const fallbackData = {
  sections: [
    {
      key: "hero",
      title: "Engineered for \nthe Elite",
      description: "Step into a curated financial ecosystem built for high achievers.\nWe reward your financial discipline with unmatched privileges, \nseamless everyday payments, and bespoke credit tools—all \nwithin a single, highly secure platform."
    },
    {
      key: "bill",
      subtitle: "One Platform. Every Bill.\n Zero Hassle.",
      description: "Pay electricity, mobile, broadband, FASTag, credit card bills, loan EMIs, insurance premiums and more—all from one secure platform. Choose your preferred payment method, including UPI, debit cards, credit cards or net banking, and enjoy fast, reliable payments with instant confirmations. Earn rewards on eligible transactions and unlock additional benefits through referrals, making every payment more rewarding."
    },
    {
      key: "upgrade",
      title: "Upgrade your life.\nbit by bit.",
      items: [
        { title: "Pay bills", description: "Every bill. \nOne place.", image: "/images/bp1.png", link: "/bill-payments", isComingSoon: true },
        { title: "Mandate", description: "Set it once.\nForgot the rest.", image: "/images/autopay.png", link: "/mandate", isComingSoon: false },
        { title: "CREDIT INSIGHTS", description: "Know where \nYou stand", image: "/images/report.png", link: "/upcoming", isComingSoon: false },
        { title: "EMI PAYMENTS", description: "Stay ahead \nof every EMi.", image: "/images/emi.png", link: "/upcoming", isComingSoon: true },
        { title: "Refer & Earn", description: "Share more.\nEarn more.", image: "/images/referral.png", link: "/rewards", isComingSoon: false },
        { title: "DLC", description: "Missed EMI? We'll remind you.", image: "/images/dlc.png", link: "/device-lock", isComingSoon: false}
      ]
    },
    {
      key: "mandate",
      items: [
        { title: "Effortless mandates.", description: "Set up recurring payments for your bills and emis in seconds. automate the hassle out of your monthly cycle." },
        { title: "Absolute control.", description: "Pause, modify, or revoke your active autopay setups instantly. you are always in the driver's seat." },
        { title: "Zero late fees.", description: "Never miss a due date again. automated deductions ensure on-time payments and protect your credit score." },
        { title: "Pre-debit alerts.", description: "No surprise deductions. get timely notifications before any mandate is executed from your account." }
      ]
    },
    {
      key: "security",
      subtitle: "your data isn't our business. keeping it safe is.",
      description: "All your personal data and transactions are encrypted and secured. there's no room for mistakes because we didn't leave any."
    }
  ]
};

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [pageData, setPageData] = useState(fallbackData);

  const handleWidgetClick = () => {
    if (isExpanded) {
      setIsModalOpen(true);
    } else {
      setIsExpanded(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsExpanded(false); 
  };

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await fetch('https://www.mycredaxis.com/api/website/pages/home');
        const json = await response.json();
        
        if (json.success && json.data) {
          setPageData(json.data);
        }
      } catch (error) {
        console.error("Failed to fetch API data, using fallback data:", error);
      }
    };

    fetchPageData();
  }, []);

  const getSection = (key) => pageData.sections.find(sec => sec.key === key) || {};

  const renderTextWithBreaks = (text) => {
    if (!text) return null;
    return text.replace(/\\n/g, '\n').split('\n').map((line, i, arr) => (
      <React.Fragment key={i}>
        {line}
        {i < arr.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
  };

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const revealOnLoad = () => {
      revealElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add("active");
        }
      });
    };

    const revealOnScroll = () => {
      revealElements.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
          el.classList.add("active");
        } else {
          el.classList.remove("active");
        }
      });
    };
    
    setTimeout(revealOnLoad, 100);
    window.addEventListener("scroll", revealOnScroll);

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
        setIsExpanded(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", revealOnScroll);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      {/* ================================
            HERO SECTION
      ================================ */}
      <section className="hero-section">
        <div className="video-container">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="bg-video"
            poster="/images/hero-poster.png" // 👈 Yahan apni poster image ka path de dein
          >
            <source src={getSection('hero').image || "/video/banner.mp4"} type="video/mp4" />
          </video>
          {/* <video autoPlay loop muted playsInline className="bg-video">
            <source src="/video/banner.mp4" type="video/mp4" />
          </video> */}
        </div>

        <nav className="top-nav">
          <div className="logo">
            <img src="/images/logos.png" alt="Logo" />
             <span className="logo-text">
                <span className="logo-my">My</span>CredAxis
             </span>
          </div>

          <div className="nav-right" style={{ paddingTop: "25px" }}>
            <div 
              className={`widget-backdrop ${isExpanded && !isModalOpen ? 'active' : ''}`}
              onClick={() => setIsExpanded(false)} 
            ></div>

            <div 
              className={`nav-glass-widget ${isExpanded ? 'expanded' : ''}`} 
              onClick={handleWidgetClick}
            >
              <div className="widget-inner">
                <div className="widget-front">
                  <i className="bi bi-credit-card small-glass-icon"></i>
                  <div className="credit-card-back-ui">
                    <div className="magnetic-stripe"></div>
                    <div className="signature-box">
                      <span className="cvv-text">***</span>
                    </div>
                    <p className="support-text">If found, please return to MyCredAxis.</p>
                  </div>
                </div>

                <div className="widget-back premium-glass-card">
                  <div className="card-glare"></div>
                  <div className="card-header">
                    <div className="brand-logo">
                      <i className="bi bi-shield-check"></i>
                      <span>MyCredAxis</span>
                    </div>
                    <div className="card-icon-btn">
                      <i className="bi bi-credit-card-2-front-fill"></i>
                    </div>
                  </div>
                  <div className="card-center">
                    <h3>Credit Card</h3>
                    {/* <p>RuPay Credit Card</p> */}
                  </div>
                  <div className="card-footer">
                    <div className="footer-left">
                      <h4 className="card-footer-h4">A REFLECTION OF CLARITY</h4>
                      <span className="members-only">CLICK TO VIEW DETAILS &rarr;</span>
                    </div>
                    <div className="action-arrow-btn">
                      <i className="bi bi-arrow-up-right"></i>
                    </div>
                  </div>
                  <div className="card-hover-content">
                    <span>Tap to Explore</span>
                    <i className="bi bi-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="hero-content reveal">
          <h1 className="hero-title serif-text ">
            {renderTextWithBreaks(getSection('hero').title)}
          </h1>
          <p className="hero-subtitle serif-text">
            {renderTextWithBreaks(getSection('hero').description)}
          </p>
        </div>
      </section>
    
      {/* =========================================
            SPATIAL UI FLOATING SCREENS
      ========================================= */}
      <section className="video-feature-section">
        <div className="vf-container">
          <div className="vf-video-box">
            <div className="coming-soon-badge">
              <span className="pulse-dot"></span> Coming Soon
            </div>
            <video autoPlay loop muted playsInline className="vf-video">
              <source src="/video/bill.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="vf-text-box reveal">
            <h2>{renderTextWithBreaks(getSection('bill').subtitle)}</h2>
            <p>{getSection('bill').description}</p>
          </div>
        </div>
      </section>

      {/* =========================================
            UPGRADE SECTION
      ========================================= */}
      <section className="upgrade-section">
        <div className="upgrade-header reveal">
          <h2 className="upgrade-title serif-text ">
            {renderTextWithBreaks(getSection('upgrade').title)}
          </h2>
        </div>

        <div className="cards-container reveal">
          {getSection('upgrade').items?.map((card, index) => {
            const colorClasses = ["card-green", "card-purple", "card-pink", "card-pink", "card-pink"];
            const cardColor = colorClasses[index % colorClasses.length];
            const showComingSoonBadge = card.isComingSoon || card.title.toLowerCase().includes("pay bills") || card.title.toLowerCase().includes("emi");

            return (
              <div key={index} className={`feature-card ${cardColor}`}>
                {showComingSoonBadge && (
                  <div className="coming-soon-badge card-badge-size">
                    <span className="pulse-dot"></span> Coming Soon
                  </div>
                )}
                
                <div className="card-tag">{card.title.toUpperCase()}</div>

                <h3 className="card-title serif-text ">
                  {renderTextWithBreaks(card.description)}
                </h3>

                <div className="card-visual">
                  <img src={card.image} alt={card.title} className="card-image landscape" />
                </div>

                <Link to={card.link || "/upcoming"} className="know-more">
                  know more <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================
          CENTER IMAGE FEATURE SECTION (AUTOPAY/MANDATE)
      ========================================= */}
      <section className="autopay-showcase-section">
        <div className="autopay-showcase-container">
          <div className="autopay-text-col autopay-align-left">
            {getSection('mandate').items?.slice(0, 2).map((item, index) => (
              <div key={index} className="autopay-info-box">
                <h3 className="serif-text ">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>

          <div className="autopay-center-visual">
            <div className="autopay-mockup-wrapper">
              <img src="/images/mdt.png" alt="Autopay Features" />
              <div className="autopay-ambient-glow"></div>
            </div>
          </div>

          <div className="autopay-text-col autopay-align-right">
             {getSection('mandate').items?.slice(2, 4).map((item, index) => (
              <div key={index} className="autopay-info-box">
                <h3 className="serif-text ">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Device Lock & Control Overview Section */}
      <section className="dlc-section dlc-about-section">
        <div className="dlc-about-container">
          
          {/* Left Side: Phone / Feature Image */}
          <div className="dlc-about-image-wrapper">
            <img src="/images/dlc-banner.png" alt="Device Lock & Control" className="dlc-about-img" />
          </div>

          {/* Right Side: Paragraph Content */}
          <div className="dlc-about-content">

            <h2>Automated device control aligned with every EMI payment.</h2>
            <p className="dlc-about-desc">
              MyCredAxis Device Lock & Control enables lenders to manage financed devices through an automated, payment-driven workflow. When an EMI becomes due, the system monitors the payment status in real time. If the payment is not received, an automated reminder is triggered. Continued non-payment results in the device being securely locked, helping lenders strengthen payment compliance and reduce operational intervention. Once the outstanding EMI is paid, device access is automatically restored, creating a seamless and controlled payment-to-device lifecycle.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================
            APP DOWNLOAD SECTION
      ========================================= */}
      <section 
        className="app-download-section"
        style={{ 
          backgroundImage: `linear-gradient(135deg, rgba(3, 7, 18, 0.1) 0%, rgba(11, 15, 25, 0.1) 100%), url('/images/dl-bg.png')` 
        }}
      >
        <div className="app-download-container">
          <div className="app-download-content">
            <span className="app-sub-badge">GO MOBILE</span>
            <h2>
              Download the <span className="title-my">My</span>CredAxis App
            </h2>
            <p>
              Take control of your credit health, pay your bills instantly, and manage your financial profile on the go. Scan the QR code or download directly from your app store.
            </p>
            
            <div className="app-store-buttons">
              <a href="https://play.google.com/store/apps/details?id=com.bbpl.mycredaxis&pcampaignid=web_share" className="store-btn">
                <svg
                  className="store-icon-svg"
                  viewBox="0 0 512 512"
                  width="28"
                  height="28"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Blue */}
                  <path
                    fill="#4285F4"
                    d="M32.3 20.5c-6.1 6.5-9.8 16.5-9.8 29.5v412c0 13 3.7 23 9.8 29.5L264.7 256 32.3 20.5z"
                  />

                  {/* Green */}
                  <path
                    fill="#34A853"
                    d="M342.5 333.8L264.7 256 32.3 491.5c9.8 10.4 25.8 11.7 43.8 1.5l266.4-159.2z"
                  />

                  {/* Yellow */}
                  <path
                    fill="#FBBC04"
                    d="M420.3 211.8l-77.8-46.5L264.7 256l77.8 77.8 77.8-46.5c23-13.7 23-61.8 0-75.5z"
                  />

                  {/* Red */}
                  <path
                    fill="#EA4335"
                    d="M342.5 165.3L76.1 6.1C58.1-4.1 42.1-2.6 32.3 7.8L264.7 256l77.8-90.7z"
                  />
                </svg>
                <div>
                  <span>GET IT ON</span>
                  <strong>Google Play</strong>
                </div>
              </a>
            </div>
          </div>

          <div className="app-qr-card">
            <div className="qr-code-box">
              <img 
                src="/images/app-qr-code.jpeg" 
                alt="Scan to Download App" 
                onError={(e)=>{e.target.src="https://play.google.com/store/apps/details?id=com.bbpl.mycredaxis&pcampaignid=web_share"}} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
            SECURITY SECTION
      ========================================= */}
      <section className="security-section">
        {(() => {
          const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: false });
          const fullText = getSection('security').description || "";

          return (
            <div ref={ref} className="security-content">
              <div className="security-icon reveal">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  src="/animations/Shield.webm" 
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              </div>

              <h3 className="security-tag serif-text lowercase reveal">
                {getSection('security').subtitle}
              </h3>

              <motion.p 
                className="security-para serif-text"
                variants={textVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"} 
              >
                {fullText.split(" ").map((word, wordIndex) => (
                  <span 
                    key={wordIndex} 
                    style={{ 
                      display: "inline-block", 
                      whiteSpace: "nowrap", 
                      marginRight: "0.25em" 
                    }}
                  >
                    {word.split("").map((char, charIndex) => (
                      <motion.span 
                        key={charIndex} 
                        variants={letterVariants} 
                        style={{ display: "inline-block" }} 
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </motion.p>
            </div>
          );
        })()}
      </section>

      {/* =========================================
            MODAL
      ========================================= */}
      <div className={`modal-overlay ${isModalOpen ? "active" : ""}`}>
        <button
          className="close-btn"
          onClick={(e) => {
            e.stopPropagation();
            closeModal();
          }}
        >
          &times;
        </button>

        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="card-image-container">
            <img
              src="/images/app-qr-code.jpeg"
              alt="IndusInd Card"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/350x550.png?text=Add+Card+Image+Here";
              }}
            />
          </div>

          <div className="modal-text-content">
            <h2 className="modal-title">
              A STATEMENT
              <br />
              OF INTENT.
            </h2>
            <a href="https://play.google.com/store/apps/details?id=com.bbpl.mycredaxis&pcampaignid=web_share" style={{textDecoration:"none", color:"inherit"}}className="learn-more-btn">
              GET APP
              <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;