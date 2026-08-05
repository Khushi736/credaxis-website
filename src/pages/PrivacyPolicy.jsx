import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./PrivacyPolicy.css";
import apiclient from "../services/apiClient";
import { useSEO } from "../hooks/useSEO";

function PrivacyPolicy() {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);

  // SEO setup with default title
  useSEO(pageData?.seo, "Privacy Policy - MyCredAxis");

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchPrivacyData = async () => {
      try {
        const response = await apiclient.get('/website/pages/privacy-policy');
        if (response?.success && response?.data) {
          setPageData(response.data);
        }
      } catch (error) {
        console.error("API Error: Using fallback data for Privacy Policy", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPrivacyData();
  }, []);

  // 🛡️ FALLBACK DATA (Agar API fail ho jaye toh yeh render hoga)
  const fallbackItems = [
    {
      title: "Introduction",
      content: "<p>This Privacy Policy explains how MyCredAxis collects, uses, stores, and protects your personal information when you use our website and services.</p>"
    },
    {
      title: "Data Security",
      content: "<p>We implement reasonable administrative, technical, and organizational measures to help protect your personal information.</p>"
    }
  ];

  // Data Extraction
  const pageTitle = pageData?.name || "Privacy Policy";
  const lastUpdated = pageData?.updatedAt
    ? new Date(pageData.updatedAt).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
    : "5th June 2026";
    
  const privacySection = pageData?.sections?.find((sec) => sec.key === "privacy_content");
  const renderItems = privacySection?.items?.length > 0 ? privacySection.items : fallbackItems;

  if (loading) {
    return (
      <div className="privacy-page" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', color: '#fff' }}>
        Loading Privacy Policy...
      </div>
    );
  }

  return (
    <div className="privacy-page">
      <div className="privacy-container">
        
        {/* Header / Branding */}
        <div className="privacy-header">
          {/* <Link to="/" style={{ textDecoration: "none", display: "inline-block" }}>
            <img 
              src="/images/logo.png" 
              alt="CredAxis Logo" 
              className="privacy-logo" 
            />
          </Link> */}
          <h1>{pageTitle}</h1>
          <p>Effective Date: {lastUpdated}</p>
        </div>

        {/* Content Section API Mapping */}
        <div className="privacy-content">
          {renderItems.map((item, index) => (
            <section key={index}>
              <h2>{item.title}</h2>
              {/* dangerouslySetInnerHTML API se aane wale HTML tags (lists, links) ko render karta hai */}
              <div dangerouslySetInnerHTML={{ __html: item.description }} />
            </section>
          ))}
        </div>

      </div>
    </div>
  );
}

export default PrivacyPolicy;