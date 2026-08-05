import React, { useState, useEffect } from "react";
import "./TermsAndConditions.css";
import apiclient from "../services/apiClient";
import { useSEO } from "../hooks/useSEO";

export default function TermsAndConditions() {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Tab title ke liye ek default text add kar diya
  useSEO(pageData?.seo, "Terms & Conditions - MyCredAxis");
  
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchTermsData = async () => {
      try {
        const response = await apiclient.get('/website/pages/terms-and-conditions');
        if (response?.success && response?.data) {
          setPageData(response.data);
        }
      } catch (error) {
        console.error("API Error: Using fallback data for Terms and Conditions", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTermsData();
  }, []);
   
  const fallbackTitle = "Terms & Conditions";
  const fallbackDate = "August 2026";
  const fallbackDescription = "By accessing or using CredAxis services, you agree to comply with and be bound by the following terms and conditions.";
  
  // Fallback ko naye JSON structure ke hisaab se update kiya
  const fallbackItems = [
    {
      title: "1. Acceptance of Terms",
      description: "By accessing or using the MyCredAxis platform (operated by BisaniBrothers Private Limited), you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services."
    },
    {
      title: "2. Description of Services",
      description: "MyCredAxis acts as a technology intermediary platform providing digital financial services, which include but are not limited to: Utility & Bill Payments, Credit Services, and Rewards Program."
    },
    {
      title: "3. Payments and Mandates",
      description: "By setting up autopay or mandates, you authorize MyCredAxis and its partner banks to deduct the specified amounts from your linked accounts on the due dates."
    },
    {
      title: "4. Limitation of Liability",
      description: "MyCredAxis shall not be held liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our services or platform."
    }
  ];

  const pageTitle = pageData?.name || fallbackTitle;
  const lastUpdated = pageData?.updatedAt
    ? new Date(pageData.updatedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric'})
    : fallbackDate;

  // 🛠️ NAYA LOGIC: API se 'terms_content' section dhoondhein aur uske 'items' nikalein
  const termsSection = pageData?.sections?.find((sec) => sec.key === "terms_content");
  const renderItems = termsSection?.items?.length > 0 ? termsSection.items : fallbackItems;
  const displayDescription = termsSection?.description || pageData?.description || fallbackDescription;

  if (loading) {
    return (
      <div className="tc-container">
        <div className="tc-loader-container">
          Loading Terms and Conditions...
        </div>
      </div>
    );
  }
  
  return (
    <div className="tc-container">
      <div className="tc-container-wrapper">
        <div className="tc-header">
          <h1 className="tc-title serif-text">{pageTitle}</h1>
          <p className="tc-updated-date">Last Updated: {lastUpdated}</p>
        </div>

        <div className="tc-body">
          {/* Main Description */}
          {/* {displayDescription && (
            <p style={{ marginBottom: '30px'}}>{displayDescription}</p>
          )} */}
          
          {/* Ab hum 'sections' ki jagah 'items' ko map kar rahe hain */}
          {renderItems.map((item, index) => (
            <div key={index} className="tc-section">
              <h2 className="tc-section-title">{item.title}</h2>
              <p className="tc-section-desc">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}