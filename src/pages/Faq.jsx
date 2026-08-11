import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  BiSearch, BiGridAlt, BiCreditCard, BiTachometer, 
  BiGift, BiShieldAlt2, BiUserCheck, BiBuildingHouse, BiUser,
  BiMessageRoundedDots, BiEnvelope, BiPhoneCall, BiRightArrowAlt,
  BiPlus, BiMinus
} from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import "./Faq.css";
import apiClient from "../services/apiClient";
import { useSEO } from "../hooks/useSEO";

export default function Faq() {
  const [activeCategory, setActiveCategory] = useState("General");
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  useSEO(pageData?.seo);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchFaqData = async () => {
      try {
        const response = await apiClient.get('website/pages/faq');
        if (response?.success && response.data) {
          setPageData(response.data);
        }
      } catch (error) {
        console.error("API Error: using fallback data for FAQ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFaqData();
  }, []);

  const getSection = (sectionKey) => {
    return pageData?.sections?.find((sec) => sec.key === sectionKey);
  };

  const heroSection = getSection("faq_list");
  const helpBanner = getSection("helpbanner");

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // Categories list with matching API keys
  const categories = [
    { name: "General", key: "general", icon: <BiGridAlt /> },
    { name: "Payments & Billing", key: "pay-&-bill", icon: <BiCreditCard /> },
    { name: "Credit Score", key: "credit-score", icon: <BiTachometer /> },
    { name: "Rewards & Offers", key: "reward&offer", icon: <BiGift /> },
    { name: "Security & Privacy", key: "securityprivacy", icon: <BiShieldAlt2 /> },
    { name: "KYC & Verification", key: "kyc", icon: <BiUserCheck /> },
    { name: "Loans & EMI", key: "loan&emi", icon: <BiBuildingHouse /> },
    { name: "Account & Profile", key: "profile", icon: <BiUser /> },
  ];

  // Find the active category object based on state name
  const currentCategoryObj = categories.find(cat => cat.name === activeCategory);
  
  // Get section data for the active category
  const activeSectionData = getSection(currentCategoryObj?.key);
  
  // Extract items (questions & answers) from the active section, fallback to empty array
  const currentFaqs = activeSectionData?.items || [];

  // Icon mapping for FAQ items
  const iconList = [<BiUser />, <BiCreditCard />, <BiTachometer />, <BiGift />, <BiShieldAlt2 />, <BiUserCheck />];
  const colorClasses = ["icon-blue", "icon-cyan", "icon-green", "icon-orange", "icon-purple", "icon-teal"];

  return (
    <div className="hc-wrapper">
      
      {/* Top Navbar */}
      <nav className="hc-nav">
        <div className="hc-logo">
          <img src="/images/logos.png" alt="MyCredAxis Logo" />
          <span className="logo-text">
            <span className="logo-my">My</span>CredAxis
          </span>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hc-hero">
        <div className="hc-hero-left">
          <h1 className="hc-hero-title">
            {heroSection?.title ? (
              heroSection.title.split('\\n').map((line, i) => (
                <React.Fragment key={i}>
                  {i === 1 ? <span>{line}</span> : line}
                  {i === 0 && <br />}
                </React.Fragment>
              ))
            ) : (
              <>How can we<br /><span>help you today?</span></>
            )}
          </h1>
          <p className="hc-hero-subtitle">
            {heroSection?.description || "Find answers to your questions about our platform, payments, security and more."}
          </p>
        </div>

        <div className="hc-hero-right">
          <div className="hc-hero-image-container">
            <img src={heroSection?.image || "/images/faqbanner.png"} alt="Support Executive" />
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <section className="hc-main-layout">
        
        {/* Left Sidebar */}
        <aside className="hc-sidebar">
          <h3 className="sidebar-title">All Categories</h3>
          <ul className="sidebar-nav">
            {categories.map((cat, idx) => (
              <li 
                key={idx} 
                className={activeCategory === cat.name ? 'active' : ''}
                onClick={() => {
                  setActiveCategory(cat.name);
                  setExpandedFaq(null); // Reset accordion on category switch
                }}
              >
                {cat.icon} {cat.name}
              </li>
            ))}
          </ul>

          <div className="hc-support-card">
            <h4>Can't find your answer?</h4>
            <p>Our support team is help you.</p>
            <Link to="/support" className="hc-btn-support">
              Contact Support <BiRightArrowAlt />
            </Link>
          </div>
        </aside>

        {/* Right Content */}
        <div className="hc-content-area">
          <div className="content-header">
            <h2>{activeCategory}</h2>
          </div>

          <div className="hc-faq-list">
            {currentFaqs.length > 0 ? (
              currentFaqs.map((faq, idx) => {
                const isOpen = expandedFaq === idx;
                return (
                  <div 
                    key={idx} 
                    className={`hc-faq-item ${isOpen ? 'open' : ''}`}
                    onClick={() => toggleFaq(idx)}
                  >
                    <div className="faq-item-icon">
                      <div className={`icon-circle ${colorClasses[idx % colorClasses.length]}`}>
                        {iconList[idx % iconList.length]}
                      </div>
                    </div>
                    <div className="faq-item-content">
                      <h3>{faq.title}</h3>
                      <div className="faq-answer">
                        <p>{faq.description}</p>
                      </div>
                    </div>
                    <div className="faq-item-toggle">
                      {isOpen ? <BiMinus /> : <BiPlus />}
                    </div>
                  </div>
                );
              })
            ) : (
              <p style={{ color: "#94a3b8", padding: "20px 0" }}>No FAQs available in this category yet.</p>
            )}
          </div>
        </div>
      </section>

      {/* Bottom Support Grid */}
      <section className="hc-bottom-support">
        <div className="support-header">
          <h2>{helpBanner?.title || "Still need help?"}</h2>
          <p>{helpBanner?.subtitle || "Our support team is available to assist you."}</p>
        </div>

        <div className="support-cards-grid">
          <div className="support-card chat-card">
            <div className="s-icon"><FaWhatsapp /></div>
            <div className="s-info">
              <h4>{helpBanner?.items?.[0]?.title || "WhatsApp Support"}</h4>
              <p>{helpBanner?.items?.[0]?.description || "Chat with our team instantly on WhatsApp"}</p>
              <a href={helpBanner?.items?.[0]?.link || "https://wa.me/918000000000"} target="_blank" rel="noopener noreferrer" className="s-link">
                Chat on WhatsApp <BiRightArrowAlt />
              </a>
            </div>
          </div>

          <div className="support-card email-card">
            <div className="s-icon"><BiEnvelope /></div>
            <div className="s-info">
              <h4>{helpBanner?.items?.[1]?.title || "Email Support"}</h4>
              <p>{helpBanner?.items?.[1]?.description || "We usually reply within 24 hours"}</p>
              <a href={`mailto:${helpBanner?.items?.[1]?.link || "support@mycredaxis.com"}`} className="s-link">Send Email <BiRightArrowAlt /></a>
            </div>
          </div>

          <div className="support-card call-card">
            <div className="s-icon"><BiPhoneCall /></div>
            <div className="s-info">
              <h4>{helpBanner?.items?.[2]?.title || "Call Support"}</h4>
              <p>{helpBanner?.items?.[2]?.description || "Mon to Sat, 9AM - 7PM (IST)"}</p>
              <a href={`tel:+${helpBanner?.items?.[2]?.link || "918000000000"}`} className="s-link">+91 80-xxxx-xxxx <BiRightArrowAlt /></a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}