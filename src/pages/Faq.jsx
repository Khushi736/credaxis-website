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

export default function Faq() {
  const [activeCategory, setActiveCategory] = useState("General");
  const [expandedFaq, setExpandedFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // 🔥 Updated: Completely removed all counts and numbers
  const categories = [
    { name: "General", icon: <BiGridAlt /> },
    { name: "Payments & Billing", icon: <BiCreditCard /> },
    { name: "Credit Score", icon: <BiTachometer /> },
    { name: "Rewards & Offers", icon: <BiGift /> },
    { name: "Security & Privacy", icon: <BiShieldAlt2 /> },
    { name: "KYC & Verification", icon: <BiUserCheck /> },
    { name: "Loans & EMI", icon: <BiBuildingHouse /> },
    { name: "Account & Profile", icon: <BiUser /> },
  ];

  const faqs = [
    {
      q: "What is MyCredAxis and what services does it provide?",
      a: "MyCredAxis is a secure digital finance platform that helps you manage bill payments, check credit score, and track your financial health.",
      icon: <BiUser />,
      colorClass: "icon-blue"
    },
    {
      q: "How do I make a bill payment on MyCredAxis?",
      a: "You can make payments for mobile recharge, electricity, gas, water, DTH, broadband and more in just a few simple steps.",
      icon: <BiCreditCard />,
      colorClass: "icon-cyan"
    },
    {
      q: "How can I check my credit score?",
      a: "You can check your credit score instantly from the app dashboard and get detailed insights and improvement tips.",
      icon: <BiTachometer />,
      colorClass: "icon-green"
    },
    {
      q: "How do rewards and cashback work?",
      a: "Earn CX Reward Points on transactions and redeem them for exciting rewards, scratch cards and exclusive offers.",
      icon: <BiGift />,
      colorClass: "icon-orange"
    },
    {
      q: "Is my personal and financial data secure?",
      a: "Yes, we use bank-grade encryption and follow strict security protocols to keep your data safe and private.",
      icon: <BiShieldAlt2 />,
      colorClass: "icon-purple"
    },
    {
      q: "Why is KYC verification required?",
      a: "KYC helps us verify your identity and ensures a safe and compliant platform experience for all users.",
      icon: <BiUserCheck />,
      colorClass: "icon-teal"
    }
  ];

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
          
          <h1 className="hc-hero-title">How can we<br/>help you today?</h1>
          <p className="hc-hero-subtitle">
            Find answers to your questions about our platform, payments, security and more.
          </p>
          
          

          
        </div>

        <div className="hc-hero-right">
          <div className="hc-hero-image-container">
            <img src="/images/faqbanner.png" alt="Support Executive" />
          </div>
        </div>
      </header>

      {/* Horizontal Categories */}
      {/* <section className="hc-categories-row">
        {categories.map((cat, idx) => (
          <div key={idx} className={`hc-cat-box ${activeCategory === cat.name ? 'active' : ''}`} onClick={() => setActiveCategory(cat.name)}>
            <div className="cat-icon">{cat.icon}</div>
            <h4>{cat.name}</h4>
           
          </div>
        ))}
      </section> */}

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
                onClick={() => setActiveCategory(cat.name)}
              >
                {cat.icon} {cat.name}
              </li>
            ))}
          </ul>

          <div className="hc-support-card">
            <h4>Can't find your answer?</h4>
            <p>Our support team is here to help you.</p>
            <Link to="/support" className="hc-btn-support">
              Contact Support <BiRightArrowAlt />
            </Link>
          </div>
        </aside>

        {/* Right Content */}
        <div className="hc-content-area">
          <div className="content-header">
            <h2>Frequently Asked Questions</h2>
            {/* 🔥 Updated: Removed the article-count span entirely */}
          </div>

          <div className="hc-faq-list">
            {faqs.map((faq, idx) => {
              const isOpen = expandedFaq === idx;
              return (
                <div 
                  key={idx} 
                  className={`hc-faq-item ${isOpen ? 'open' : ''}`}
                  onClick={() => toggleFaq(idx)}
                >
                  <div className="faq-item-icon">
                    <div className={`icon-circle ${faq.colorClass}`}>
                      {faq.icon}
                    </div>
                  </div>
                  <div className="faq-item-content">
                    <h3>{faq.q}</h3>
                    <div className="faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  </div>
                  <div className="faq-item-toggle">
                    {isOpen ? <BiMinus /> : <BiPlus />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom Support Grid */}
      <section className="hc-bottom-support">
        <div className="support-header">
          <h2>Still need help?</h2>
          <p>Our support team is available to assist you.</p>
        </div>

        <div className="support-cards-grid">
          <div className="support-card chat-card">
            <div className="s-icon"><FaWhatsapp /></div>
            <div className="s-info">
              <h4>WhatsApp Support</h4>
              <p>Chat with our team instantly on WhatsApp</p>
              <a href="https://wa.me/918000000000" target="_blank" rel="noopener noreferrer" className="s-link">
                Chat on WhatsApp <BiRightArrowAlt />
              </a>
            </div>
          </div>

          <div className="support-card email-card">
            <div className="s-icon"><BiEnvelope /></div>
            <div className="s-info">
              <h4>Email Support</h4>
              <p>We usually reply within 24 hours</p>
              <a href="mailto:support@mycredaxis.com" className="s-link">Send Email <BiRightArrowAlt /></a>
            </div>
          </div>

          <div className="support-card call-card">
            <div className="s-icon"><BiPhoneCall /></div>
            <div className="s-info">
              <h4>Call Support</h4>
              <p>Mon to Sat, 9AM - 7PM (IST)</p>
              <a href="tel:+918000000000" className="s-link">+91 80-xxxx-xxxx <BiRightArrowAlt /></a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}