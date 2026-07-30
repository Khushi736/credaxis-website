import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { 
  FaLinkedinIn, 
  FaFacebookF, 
  FaInstagram, 
  FaYoutube, 
  FaMapMarkerAlt, 
  FaComments,
  FaTimes, 
  FaWhatsapp, 
  FaEnvelope, 
  FaPhoneAlt 
} from "react-icons/fa";

export default function Footer() {
  // State for responsive footer columns (Accordion on mobile)
  const [activeCol, setActiveCol] = useState(null);
  
  // State for floating chat widget
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleCol = (index) => {
    // Agar same col pe dobara click kiya toh band kar do, warna naya open karo
    if (activeCol === index) {
      setActiveCol(null);
    } else {
      setActiveCol(index);
    }
  };

  return (
    <section className="footer-section">
      <div className="footer-content-wrapper reveal">
        
        {/* Left: Logo & Brand Section */}
        <div className="footer-brand-col">
          <span className="brand-name">
            Bisani Brothers Private Limited
          </span>
          <p className="brand-desc">
            MyCredAxis, a product of Bisani Brothers Pvt. Ltd. is a secure digital finance platform that lets you pay bills, repay loans, and check your credit score — all in one place.
          </p>
          <div className="social-icons">
            <a href="#!" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#!" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#!" aria-label="Instagram"><FaInstagram /></a>
            <a href="#!" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>

        <div className="footer-grid">
          {/* Column 3: Company */}
          <div className={`footer-col ${activeCol === 3 ? 'active' : ''}`}>
            <h4 onClick={() => toggleCol(3)}>Company</h4>
            <ul>
              <li><Link to="/about-us" style={{ color: "inherit", textDecoration: "none" }}>About Us</Link></li>
              <li><Link to="/faq" style={{ color: "inherit", textDecoration: "none"}}>FAQs</Link></li>
            </ul>
          </div>

          {/* Column 4: Policy */}
          <div className={`footer-col ${activeCol === 4 ? 'active' : ''}`}>
            <h4 onClick={() => toggleCol(4)}>Policy</h4>
            <ul>
              <li><Link to="/privacy-policy" style={{ color: "inherit", textDecoration: "none" }}>Privacy Policy</Link></li>
              <li><Link to="/support" style={{ color: "inherit", textDecoration: "none" }}>Support</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar (Copyright & Legal Links) */}
      <div className="footer-bottom-bar">
        <p className="copyright-text">© 2026 Bisani Brothers. All Rights Reserved.</p>
        <div className="footer-address">
          <p>
            <FaMapMarkerAlt /> 
            D-1012/13, Sector 16, Indira Nagar, Lucknow, Uttar Pradesh 226016
          </p>
        </div>
      </div>

      {/* Floating Chat Widget (Popup Menu) */}
      <div className="chat-widget-wrapper">
        {/* Sub-menus (WhatsApp, Email, Phone) */}
        <div className={`chat-sub-menus ${isChatOpen ? 'active' : ''}`}>
          <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="sub-btn whatsapp">
            <FaWhatsapp />
          </a>
          <a href="mailto:support@bisanibrothers.com" className="sub-btn email">
            <FaEnvelope />
          </a>
          <a href="tel:+911234567890" className="sub-btn phone">
            <FaPhoneAlt />
          </a>
        </div>

        {/* Main Floating Button (Toggles between Comment & X) */}
        <div 
          className={`chat-floating-btn ${isChatOpen ? 'open' : ''}`} 
          onClick={() => setIsChatOpen(!isChatOpen)}
        >
          {isChatOpen ? <FaTimes /> : <FaComments />}
        </div>
      </div>
    </section>
  );
}