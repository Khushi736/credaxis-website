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
import apiClient from "../services/apiClient";
import { useSEO } from "../hooks/useSEO";

export default function Support() {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  useSEO(pageData?.seo);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchSupportData = async () => {
      try {
        const response = await apiClient.get('/website/pages/support');
        if (response?.success && response?.data) {
          setPageData(response.data);
        }
      } catch (error) {
        console.error("API Error: using fallback data for Support", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSupportData();
  }, []);

  const getSection = (sectionKey) => {
    return pageData?.sections?.find((sec) => sec.key === sectionKey);
  };

  const heroSection = getSection("support_hero");
  const connectSection = getSection("connect");
  const mapSection = getSection("supportleft");
  const faqSection = getSection("supportright");
  const helpSection = getSection("helpbanner");

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
          <h1 className="sup-title">
            {heroSection?.title ? heroSection.title.split('\\n').map((line, i) => (
              <React.Fragment key={i}>
                {i === 1 ? <span>{line}</span> : line}
                {i === 0 && <br />}
              </React.Fragment>
            )) : (
              <>We’re here to help<br /><span>you, always.</span></>
            )}
          </h1>
          <p className="sup-subtitle">
            {heroSection?.subtitle || "Have a question, need assistance, or facing an issue? Our expert support team is ready to help you out instantly."}
          </p>

          <div className="sup-features-row">
            {heroSection?.items?.map((feat, idx) => {
              const icons = [<FaBolt />, <FaShieldAlt />, <FaSmile />];
              return (
                <div className="sup-feat" key={idx}>
                  <span className="feat-dot">{icons[idx] || <FaBolt />}</span>
                  <div>
                    <strong>{feat.title}</strong>
                    <p>{feat.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Image Container */}
        <div className="sup-hero-right">
          <div className="sup-image-container">
            <div className="hero-glow"></div>
            <img src={heroSection?.image || "/images/cs.webp"} alt="Support Assistance" className="hero-main-img" />
          </div>
        </div>
      </header>

      {/* Choose How You Want To Connect Section */}
      <section className="sup-connect-section">
        <h3 className="section-heading">{connectSection?.title || "Choose how you want to connect"}</h3>

        <div className="connect-grid">
          {connectSection?.items?.map((card, idx) => {
            const cardIcons = [<FaWhatsapp />, <BiEnvelope />, <BiPhoneCall />];
            const bgClasses = ["whatsapp-bg", "email-bg", "call-bg"];
            const btnClasses = ["card-btn whatsapp-btn", "card-btn", "card-btn"];
            
            let hrefLink = card.link;
            if (idx === 1) hrefLink = `mailto:${card.link}`;
            if (idx === 2) hrefLink = `tel:${card.link}`;

            return (
              <div className="connect-card" key={idx}>
                <div className="card-top-row">
                  <div className={`card-icon ${bgClasses[idx]}`}>{cardIcons[idx]}</div>
                </div>
                <h4>{card.title}</h4>
                <p>
                  {card.description}
                  {idx === 2 && <><br /><strong className="phone-num">{card.link}</strong></>}
                </p>
                <a href={hrefLink} target={idx === 0 ? "_blank" : "_self"} rel="noopener noreferrer" className={btnClasses[idx]}>
                  {idx === 0 ? "Chat on WhatsApp" : idx === 1 ? "Send Email" : "Call Now"} <BiRightArrowAlt />
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* Split Section: FAQs & Map */}
      <section className="sup-split-section" id="message-form">
        
        {/* Left: Map / Location Card */}
        <div className="sup-map-box">
          <div className="box-header">
            <h3>{mapSection?.title || "Our Location"}</h3>
            <p>{mapSection?.description || "Visit our office or reach out to us directly."}</p>
          </div>
          
          <div className="map-embed-wrapper">
            <iframe 
              title="Bisani Brothers Pvt. Ltd. Location"
              src={mapSection?.image || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.261273397945!2d80.9920823!3d26.8874644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd53b91d35bb%3A0x637480bd96711616!2sBisani+Brothers+Pvt.+Ltd.!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"} 
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
              <h3>{faqSection?.title || "Frequently Asked Questions"}</h3>
              <Link to={faqSection?.buttons?.[0]?.link || "/faq"} className="view-all-link">
                {faqSection?.buttons?.[0]?.text || "View all FAQs"} <BiRightArrowAlt />
              </Link>
            </div>

            <div className="faq-accordion-list">
              {faqSection?.items?.map((item, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div key={idx} className={`faq-row-item ${isOpen ? 'active' : ''}`} onClick={() => toggleFaq(idx)}>
                    <div className="faq-content-wrap">
                      <div className="faq-q-row">
                        <div className="faq-q-text">{item.title}</div>
                        <div className="faq-arrow">{isOpen ? <BiChevronUp /> : <BiChevronDown />}</div>
                      </div>
                      {isOpen && (
                        <div className="faq-answer-text">
                          {item.description}
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
                  <h4>{helpSection?.title ||"Still need help?"}</h4>
                  <p>{helpSection?.subtitle || "Our support team is here to assist you with any questions or concerns."}</p>
                </div>
              </div>
              <a href={helpSection?.buttons?.[0]?.link || "https://wa.me/918000000000"} target={helpSection?.buttons?.[0]?.target ||"_blank"} rel="noopener noreferrer" className="snc-btn">
                {helpSection?.buttons?.[0]?.text || "Chat on WhatsApp"} <BiRightArrowAlt />
              </a>
      
            </div>

          </div>
        </div>

      </section>

    </div>
  );
}