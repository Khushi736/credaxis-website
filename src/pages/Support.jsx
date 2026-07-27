import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaWhatsapp, 
  FaLinkedinIn, 
  FaFacebookF, 
  FaInstagram, 
  FaYoutube, 
  FaMapMarkerAlt, 
  FaChevronDown, 
  FaChevronUp, 
  FaCommentDots,
  FaTimes,       /* Naya icon chat close karne ke liye */
  FaComments     /* Naya icon chat open karne ke liye */
} from "react-icons/fa";
import "./Support.css"; // (Ya Security.css jo bhi aap use kar rahe hain)

export default function Support() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // FAQ aur Chat widget dono ke liye states
  const [activeIndex, setActiveIndex] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(false); // Chat widget ki state

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is MyCredAxis and what services does it provide?",
      answer: "MyCredAxis is a digital financial services platform and a product of BisaniBrothers Private Limited. It brings together everyday payment services, credit-related services, rewards, and identity verification features within a single application."
    },
    {
      question: "How do bill payments work on the platform?",
      answer: "Users can make supported utility and financial payments seamlessly, including Electricity, Mobile & DTH Recharge, Broadband, Water, Gas Cylinder, FASTag, Credit Card Bill, Loan EMI, and Insurance Premiums."
    },
    {
      question: "How can I access my credit score and reports?",
      answer: "Eligible users can access professional credit-related services including Credit Score Checks, Credit Reports, Account Summaries (Active & Closed), and Enquiry Information through our authorized partners."
    },
    {
      question: "Is my personal and financial data secure?",
      answer: "Yes. We implement robust administrative, technical, and organizational security measures, including data encryption and authorized KYC verification, to safeguard your information against unauthorized access."
    }
  ];

  return (
    <div className="support-page-wrapper">
      
      {/* Top Header / Hero Section */}
      <section className="support-hero-banner">
        <div className="support-nav-brand">
          <Link to="/" className="support-brand-link">
            <img src="/images/logo.png" alt="MyCredAxis Logo" className="support-logo-img" />
            <span className="support-brand-text">myCredAxis</span>
          </Link>
        </div>
        <div className="support-hero-content">
          <h1>Contact Us</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        </div>
      </section>

      {/* Form & Contact Info Card Section */}
      <section className="contact-main-card-section">
        <div className="contact-grid-container">
          
          {/* Left Slanted Card Box (Dynamic Contact Links) */}
          <div className="contact-left-card">
            
            <a href="tel:+880123456789" className="contact-info-row dynamic-contact-link">
              <span className="info-step-circle">1</span>
              <div>
                <span className="info-title-label">Call Us</span>
                <p className="info-value-text">+880 123 456 789</p>
              </div>
            </a>

            <a href="mailto:exampleinfo@gmail.com" className="contact-info-row dynamic-contact-link">
              <span className="info-step-circle">2</span>
              <div>
                <span className="info-title-label">Email Us</span>
                <p className="info-value-text">exampleinfo@gmail.com</p>
              </div>
            </a>

            <a href="https://wa.me/880123456789" target="_blank" rel="noopener noreferrer" className="contact-info-row dynamic-contact-link">
              <span className="info-step-circle">3</span>
              <div>
                <span className="info-title-label">WhatsApp Support</span>
                <p className="info-value-text">Chat with us</p>
              </div>
            </a>

            <p className="left-card-desc">
              Connect with us instantly through call, email, or WhatsApp. We are here to help you.
            </p>

            <div className="left-social-icons">
              <a href="https://wa.me/880123456789" target="_blank" rel="noopener noreferrer" title="WhatsApp"><FaWhatsapp /></a>
              <a href="tel:+880123456789" title="Call"><FaPhoneAlt /></a>
              <a href="mailto:exampleinfo@gmail.com" title="Email"><FaEnvelope /></a>
            </div>
          </div>

          {/* Right Suggestion Form */}
          <div className="contact-right-form-box">
            <h2>Send Us a Suggestion!</h2>
            <p className="form-sub-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            
            <form onSubmit={(e) => e.preventDefault()} className="suggestion-form">
              <div className="form-row-dual">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="example@email.com" required />
              </div>
              <div className="form-row-single">
                <input type="text" placeholder="Your Contact Number" required />
              </div>
              <div className="form-row-single">
                <input type="text" placeholder="Your Message Subject" required />
              </div>
              <div className="form-row-single">
                <textarea rows="4" placeholder="Your Message Here" required></textarea>
              </div>
              <button type="submit" className="submit-btn-pro">SUBMIT</button>
            </form>
          </div>

        </div>
      </section>

      {/* Quick Features Bar */}
      <section className="quick-features-bar">
        <div className="quick-cards-grid">
          <a href="tel:+880123456789" className="q-card dynamic-q-card">
            <div className="q-icon-box"><FaPhoneAlt /></div>
            <h3>Contact Us</h3>
            <p>+880 123 456 789</p>
          </a>
          <a href="mailto:exampleinfo@gmail.com" className="q-card dynamic-q-card">
            <div className="q-icon-box"><FaEnvelope /></div>
            <h3>Gmail</h3>
            <p>exampleinfo@gmail.com</p>
          </a>
          <div className="q-card">
            <div className="q-icon-box"><FaMapMarkerAlt /></div>
            <h3>Location</h3>
            <p>Lotifpur Bogura.</p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="support-faq-section">
        <div className="faq-wrapper-max">
          <h2 className="faq-section-title">Frequently Asked Questions</h2>
          <p className="faq-section-subtitle">Got questions? We've got answers about our platform and services.</p>
          
          <div className="faq-accordion-list">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-card-item ${activeIndex === index ? "active" : ""}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-question-row">
                  <h3>{faq.question}</h3>
                  <span className="faq-toggle-icon">
                    {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </div>
                {activeIndex === index && (
                  <div className="faq-answer-row">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}