import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  BiMessageRoundedDots, BiEnvelope, BiPhoneCall, BiFile, 
  BiRightArrowAlt, BiChevronDown, BiChevronUp, BiTime, 
  BiCalendar, BiStar, BiCheckShield, BiLockAlt, BiUser,  
  BiCheckCircle 
} from "react-icons/bi";
import { FaWhatsapp, FaBolt, FaShieldAlt, FaSmile} from "react-icons/fa";
import "./Support.css";

export default function Support() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeFaq, setActiveFaq] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: ""
  });

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  const faqs = [
    {
      q: "How do I check my credit score?",
      a: "You can check your credit score instantly by logging into your dashboard and navigating to the Credit Score tab."
    },
    {
      q: "How long does it take to update my credit report?",
      a: "Credit bureau data typically updates every 30 to 45 days automatically."
    },
    {
      q: "Are my personal and financial data secure?",
      a: "Yes, we use bank-grade 256-bit SSL encryption to ensure your data is completely secure."
    },
    {
      q: "Is there any fee for using MyCredAxis?",
      a: "Checking your basic credit score and exploring core features is 100% free."
    },
    {
      q: "How can I correct an error in my credit report?",
      a: "You can raise a dispute directly from your credit report section to notify the bureau."
    },
    {
      q: "How do I contact support for my loan application?",
      a: "You can reach out to us instantly via WhatsApp or call our support helpline."
    }
  ];

  return (
    <div className="sup-wrapper">
      
      {/* Top Navbar */}
      <nav className="sup-nav">
        <div className="sup-logo">
          <img src="/images/logos.png" alt="MyCredAxis Logo" />
          <span className="logo-text">
            <span className="logo-my">My</span>CredAxis
          </span>
        </div>
      </nav>

      {/* Hero Header with Right Side Image */}
      <header className="sup-hero">
        <div className="sup-hero-left">
          
          <h1 className="sup-title">We’re here to help<br /><span>you, always.</span></h1>
          <p className="sup-subtitle">
            Have a question, need assistance, or facing an issue? Our expert support team is ready to help you out instantly.
          </p>

          <div className="sup-features-row">
            <div className="sup-feat">
              <span className="feat-dot"><FaBolt /></span>
              <div>
                <strong>Fast Response</strong>
                <p>We respond quickly</p>
              </div>
            </div>
            <div className="sup-feat">
              <span className="feat-dot"><FaShieldAlt /></span>
              <div>
                <strong>Secure & Trusted</strong>
                <p>Your data is safe</p>
              </div>
            </div>
            <div className="sup-feat">
              <span className="feat-dot"><FaSmile /></span>
              <div>
                <strong>Friendly Support</strong>
                <p>We're here for you</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Image Container */}
        <div className="sup-hero-right">
          <div className="sup-image-container">
            <div className="hero-glow"></div>
            <img src="/images/cs.webp" alt="Support Assistance" className="hero-main-img" />
          </div>
        </div>
      </header>

      {/* Choose How You Want To Connect Section */}
      <section className="sup-connect-section">
        <h3 className="section-heading">Choose how you want to connect</h3>

        <div className="connect-grid">
          
          {/* WhatsApp Support Card */}
          <div className="connect-card">
            <div className="card-top-row">
              <div className="card-icon whatsapp-bg"><FaWhatsapp /></div>
            </div>
            <h4>WhatsApp Support</h4>
            <p>Chat with our support team in real-time.</p>
            <a href="https://wa.me/918000000000" target="_blank" rel="noopener noreferrer" className="card-btn whatsapp-btn">
              Chat on WhatsApp <BiRightArrowAlt />
            </a>
          </div>

          {/* Email Support Card */}
          <div className="connect-card">
            <div className="card-top-row">
              <div className="card-icon email-bg"><BiEnvelope /></div>
            </div>
            <h4>Email Support</h4>
            <p>We usually reply within 24 hours.</p>
            <a href="mailto:support@mycredaxis.com" className="card-btn">
              Send Email <BiRightArrowAlt />
            </a>
          </div>

          {/* Call Support Card */}
          <div className="connect-card">
            <div className="card-top-row">
              <div className="card-icon call-bg"><BiPhoneCall /></div>
            </div>
            <h4>Call Support</h4>
            <p>Mon to Sat, 9AM - 7PM (IST)<br /><strong className="phone-num">+91 80-xxxx-xxxx</strong></p>
            <a href="tel:+918000000000" className="card-btn">
              Call Now <BiRightArrowAlt />
            </a>
          </div>

        </div>
      </section>

      {/* Split Section: FAQs & Map */}
      <section className="sup-split-section" id="message-form">
        
        {/* Left: Map / Location Card */}
        <div className="sup-map-box">
          <div className="box-header">
            <h3>Our Location</h3>
            <p>Visit our office or reach out to us directly.</p>
          </div>
          
          <div className="map-embed-wrapper">
            <iframe 
              title="Bisani Brothers Pvt. Ltd. Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.261273397945!2d80.9920823!3d26.8874644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd53b91d35bb%3A0x637480bd96711616!2sBisani+Brothers+Pvt.+Ltd.!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Right: FAQs & Still Need Help Box */}
        <div className="sup-right-col">
          <div className="faq-box-wrap">
            <div className="faq-header-row">
              <h3>Frequently Asked Questions</h3>
              <Link to="/faq" className="view-all-link">View all FAQs <BiRightArrowAlt /></Link>
            </div>

            <div className="faq-accordion-list">
              {faqs.map((item, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div key={idx} className={`faq-row-item ${isOpen ? 'active' : ''}`} onClick={() => toggleFaq(idx)}>
                    <div className="faq-content-wrap" style={{ width: '100%' }}>
                      <div className="faq-q-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div className="faq-q-text">{item.q}</div>
                        <div className="faq-arrow">{isOpen ? <BiChevronUp /> : <BiChevronDown />}</div>
                      </div>
                      {isOpen && (
                        <div className="faq-answer-text" style={{ marginTop: '10px', paddingTop: '10px', borderTop: '1px solid rgba(255, 255, 255, 0.06)', color: '#94a3b8', fontSize: '0.88rem', lineHeight: '1.5' }}>
                          {item.a}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Still Need Help Banner */}
            <div className="still-need-card">
              <div className="snc-left">
                <div className="snc-icon">❓</div>
                <div>
                  <h4>Still need help?</h4>
                  <p>Our support team is here to assist you with any questions or concerns.</p>
                </div>
              </div>
              <a href="https://wa.me/918000000000" target="_blank" rel="noopener noreferrer" className="snc-btn">
                Chat on WhatsApp <BiRightArrowAlt />
              </a>
            </div>

          </div>
        </div>

      </section>

    </div>
  );
}