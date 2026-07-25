import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { 
  FaChevronDown, 
  FaChevronUp, 
  FaLinkedinIn, 
  FaFacebookF, 
  FaInstagram, 
  FaYoutube, 
  FaMapMarkerAlt, 
  FaWhatsapp, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaTimes, 
  FaComments 
} from "react-icons/fa";
import "./Faq.css";

export default function Faq() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeIndex, setActiveIndex] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Expanded FAQ Data for a dedicated page
  const faqData = [
    {
      category: "General",
      questions: [
        {
          q: "What is MyCredAxis and what services does it provide?",
          a: "MyCredAxis is a digital financial services platform and a product of BisaniBrothers Private Limited. It brings together everyday payment services, credit-related services, rewards, and identity verification features within a single application."
        },
        {
          q: "How do I create an account?",
          a: "You can download the MyCredAxis app, enter your mobile number, verify it via OTP, and complete a quick KYC process to start using all our financial services."
        }
      ]
    },
    {
      category: "Payments & Billing",
      questions: [
        {
          q: "How do bill payments work on the platform?",
          a: "Users can make supported utility and financial payments seamlessly, including Electricity, Mobile & DTH Recharge, Broadband, Water, Gas Cylinder, FASTag, Credit Card Bill, Loan EMI, and Insurance Premiums."
        },
        {
          q: "Are there any hidden charges for UPI transactions?",
          a: "No, all standard UPI transactions made through the MyCredAxis platform are completely free of charge. We believe in transparent banking."
        }
      ]
    },
    {
      category: "Security & Privacy",
      questions: [
        {
          q: "Is my personal and financial data secure?",
          a: "Yes. We implement robust administrative, technical, and organizational security measures, including 256-bit data encryption and authorized KYC verification, to safeguard your information against unauthorized access."
        },
        {
          q: "How can I access my credit score and reports?",
          a: "Eligible users can access professional credit-related services including Credit Score Checks, Credit Reports, Account Summaries (Active & Closed), and Enquiry Information through our authorized partners."
        }
      ]
    }
  ];

  return (
    <div className="faq-page-wrapper">
      
      {/* Top Header / Hero Section */}
      <section className="faq-hero-banner">
        <div className="faq-nav-brand">
          <Link to="/" className="faq-brand-link">
            <img src="/images/logo.png" alt="MyCredAxis Logo" className="faq-logo-img" />
            <span className="faq-brand-text">myCredAxis</span>
          </Link>
        </div>
        <div className="faq-hero-content">
          <h1>Help Center & FAQs</h1>
          <p>Find answers to common questions about our platform, payments, and security. We're here to help you navigate your financial journey.</p>
        </div>
      </section>

      {/* Main FAQ Accordion Section */}
      <section className="faq-main-content">
        <div className="faq-container-max">
          
          {faqData.map((section, secIndex) => (
            <div key={secIndex} className="faq-category-block">
              <h2 className="faq-category-title">{section.category}</h2>
              
              <div className="faq-accordion-list">
                {section.questions.map((faq, qIndex) => {
                  // Generate a unique index for each question across categories
                  const uniqueIndex = `${secIndex}-${qIndex}`;
                  const isActive = activeIndex === uniqueIndex;

                  return (
                    <div 
                      key={uniqueIndex} 
                      className={`faq-card-item ${isActive ? "active" : ""}`}
                      onClick={() => toggleFAQ(uniqueIndex)}
                    >
                      <div className="faq-question-row">
                        <h3>{faq.q}</h3>
                        <span className="faq-toggle-icon">
                          {isActive ? <FaChevronUp /> : <FaChevronDown />}
                        </span>
                      </div>
                      {isActive && (
                        <div className="faq-answer-row">
                          <p>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Direct Contact Banner */}
      <section className="faq-contact-banner">
        <div className="faq-contact-inner">
          <h2>Still have questions?</h2>
          <p>Can't find the answer you're looking for? Please chat to our friendly team.</p>
          <Link to="/support" className="btn-contact-support">Contact Support</Link>
        </div>
      </section>

      {/* Exact Custom Footer */}
      <footer className="exact-custom-footer">
        <div className="footer-main-container">
          <div className="footer-col-brand">
            <h3>Bisani Brothers Private Limited</h3>
            <p>
              MyCredAxis, a product of Bisani Brothers Pvt. Ltd. is a secure digital finance platform that lets you pay bills, repay loans, and check your credit score — all in one place.
            </p>
            <div className="footer-social-row">
              <a href="#linkedin"><FaLinkedinIn /></a>
              <a href="#facebook"><FaFacebookF /></a>
              <a href="#instagram"><FaInstagram /></a>
              <a href="#youtube"><FaYoutube /></a>
            </div>
          </div>

          <div className="footer-col-links">
            <h4>COMPANY</h4>
            <ul>
              <li><Link to="/about-us">About Us</Link></li>
              {/* <li><Link to="/faq">Faqs</Link></li> */}
            </ul>
          </div>

          <div className="footer-col-links">
            <h4>POLICY</h4>
            <ul>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              {/* <li><Link to="/terms">Terms & Conditions</Link></li> */}
              <li><Link to="/support">Support</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p>&copy; 2026 Bisani Brothers. All Rights Reserved.</p>
          <div className="footer-address">
            <FaMapMarkerAlt /> D-1012/13, Sector 16, Indira Nagar, Lucknow, Uttar Pradesh 226016
          </div>
        </div>

        {/* Floating Chat Widget */}
        <div className="chat-widget-wrapper">
          <div className={`chat-sub-menus ${isChatOpen ? 'active' : ''}`}>
            <a href="https://wa.me/880123456789" target="_blank" rel="noreferrer" className="sub-btn whatsapp">
              <FaWhatsapp />
            </a>
            <a href="mailto:exampleinfo@gmail.com" className="sub-btn email">
              <FaEnvelope />
            </a>
            <a href="tel:+880123456789" className="sub-btn phone">
              <FaPhoneAlt />
            </a>
          </div>

          <div 
            className={`chat-floating-btn ${isChatOpen ? 'open' : ''}`} 
            onClick={() => setIsChatOpen(!isChatOpen)}
          >
            {isChatOpen ? <FaTimes /> : <FaComments />}
          </div>
        </div>
      </footer>

    </div>
  );
}