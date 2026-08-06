import React, { useEffect, useState, useRef } from "react";
import "../App.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube, FaMapMarkerAlt, FaComments, FaTimes, FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

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
        { title: "Refer & Earn", description: "Share more.\nEarn more.", image: "/images/referral.png", link: "/upcoming", isComingSoon: true }
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
  const [activeCol, setActiveCol] = useState(null);
  
  // 🔥 NEW: API Data State
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

  // 🔥 NEW: API Fetch Logic
  useEffect(() => {
    const fetchPageData = async () => {
      try {
        // Apni real API ka endpoint yahan dalein
        const response = await fetch('https://www.mycredaxis.com/api/website/pages/home');
        const json = await response.json();
        
        if (json.success && json.data) {
          setPageData(json.data); // API se data aane par update karein
        }
      } catch (error) {
        console.error("Failed to fetch API data, using fallback data:", error);
      }
    };

    fetchPageData();
  }, []);

  // Helper Function: Key ke base par section nikalne ke liye
  const getSection = (key) => pageData.sections.find(sec => sec.key === key) || {};

  // Helper Function: Text ko \n se <br/> me dynamically convert karne ke liye
  const renderTextWithBreaks = (text) => {
    if (!text) return null;
    return text.replace(/\\n/g, '\n').split('\n').map((line, i, arr) => (
      <React.Fragment key={i}>
        {line}
        {i < arr.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  // Typing Animation Variants
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
      ================================= */}
      <section className="hero-section">
        <div className="video-container">
          <video autoPlay loop muted playsInline className="bg-video">
            <source src="/video/banner.mp4" type="video/mp4" />
          </video>
        </div>

        <nav className="top-nav">
          <div className="logo">
            <img src="/images/logo.png" alt="Logo" />
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
                    <p className="support-text">If found, please return to IndusInd Bank.</p>
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
                    <h3>IndusInd Bank</h3>
                    <p>RuPay Credit Card</p>
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

        {/* 🔥 DYNAMIC HERO CONTENT */}
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
      ========================================== */}
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

          {/* 🔥 DYNAMIC BILL CONTENT */}
          <div className="vf-text-box reveal">
            <h2>{renderTextWithBreaks(getSection('bill').subtitle)}</h2>
            <p>{getSection('bill').description}</p>
          </div>

        </div>
      </section>

      {/* =========================================
            UPGRADE SECTION
      ========================================== */}
      <section className="upgrade-section">
        <div className="upgrade-header reveal">
          <h2 className="upgrade-title serif-text ">
            {renderTextWithBreaks(getSection('upgrade').title)}
          </h2>
        </div>

        <div className="cards-container reveal">
          {getSection('upgrade').items?.map((card, index) => {
            // Mapping colors to indexes to keep the design exactly as it was
            const colorClasses = ["card-green", "card-purple", "card-pink", "card-pink", "card-pink"];
            const cardColor = colorClasses[index % colorClasses.length];
            const showComingSoonBadge = card.isComingSoon || card.title.toLowerCase().includes("pay bills") || card.title.toLowerCase().includes("emi") || card.title.toLowerCase().includes("refer");

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
      ========================================== */}
      <section className="autopay-showcase-section">
        <div className="autopay-showcase-container">
          
          {/* ⬅️ Left Text Column (First 2 Items) */}
          <div className="autopay-text-col autopay-align-left">
            {getSection('mandate').items?.slice(0, 2).map((item, index) => (
              <div key={index} className="autopay-info-box">
                <h3 className="serif-text ">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>

          {/* 📱 Center Image Column */}
          <div className="autopay-center-visual">
            <div className="autopay-mockup-wrapper">
              <img src="/images/mdt.png" alt="Autopay Features" />
              <div className="autopay-ambient-glow"></div>
            </div>
          </div>

          {/* ➡️ Right Text Column (Next 2 Items) */}
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

      {/* =========================================
            SECURITY SECTION
      ========================================== */}
      <section className="security-section">
        {(() => {
          const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: false });
          // 🔥 Dynamic typing text fetch
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
      ========================================== */}
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
              src="/images/card.png"
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
            <button className="learn-more-btn">
              LEARN MORE
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;