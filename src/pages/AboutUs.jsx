import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShieldAlt, FaBullseye, FaBuilding, FaInfoCircle,  FaLock } from 'react-icons/fa';
import './AboutUs.css';
import apiClient from "../services/apiClient";
import { useSEO } from "../hooks/useSEO";


export default function AboutUs() {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  useSEO(pageData?.seo);
  // 🔥 Ye hook page load hote hi automatically top par scroll kar dega
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchAboutData  = async () => {
      try {
        const response = await apiClient.get('/website/pages/about-us');
        if (response?.success && response?.data) {
          setPageData(response.data);
        }
      } catch (error) {
        console.error("API Error: Using fallback data for About Us", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAboutData();
  }, []);

  // 1. Helper function: Specific key wala section dhoondhne ke liye
  const getSection = (sectionKey) => {
    return pageData?.sections?.find((sec) => sec.key === sectionKey);
  };

  // 2. Data aane ke baad 'about_hero' section nikalna
  const heroSection = getSection("about_hero");
  const objectiveSection = getSection("objective");
  const disclaimerSection = getSection("disclaimer");
  const servicesSection = getSection("services");

  // 2. Ab usme se teeno alag-alag services ko unke title se nikal lein
  const billPayments = servicesSection?.items?.find(item => item.title === "Bill Payments");
  const creditServices = servicesSection?.items?.find(item => item.title === "Credit Services");
  const rewardsService = servicesSection?.items?.find(item => item.title === "Rewards & KYC Verification");

// 1. Commitment wala poora section nikalein
  const commitmentSection = getSection("commitment");
  const companyInfoSection = getSection("company-info");
  // 2. Uske andar ke items ko ek array mein nikal lein
  const commitmentItems = commitmentSection?.items || [];
  const companyInfoItems = companyInfoSection?.items || [];

  // 2. 'mission_vision' wala pura section nikalna
  const missionVisionSection = getSection("mission_vision");

  // 3. Us section ke 'items' array mein se sirf "Our Mission" dhoondhna
  const missionItem = missionVisionSection?.items?.find(
    (item) => item.title === "Our Mission"
  ); 
  const securitySection = missionVisionSection?.items?.find(
    (item) => item.title === "Security"
  ); 
  return (
    <div className="about-container">
      
      {/* Logo & Brand Section */}
      <div className="logo-container">
        <img src="/images/logos.png" alt="MyCredAxis Logo" className="brand-logo" />
        <span className="logo-subtext">A product of BisaniBrothers Private Limited</span>
      </div>

      {/* 1. Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>{pageData?.name || "About Us"}</h1>
          <p>
            {heroSection?.description }
          </p>
          {/* <p>
            MyCredAxis is a digital financial services platform and a product of BisaniBrothers Private Limited. The platform is designed to provide users with convenient access to digital financial services through a secure and user-friendly experience. MyCredAxis brings together everyday payment services, credit-related services, rewards, and identity verification features within a single application.
          </p> */}
        </div>
      </section>

      {/* Objective Section (Styled matching About Us style without box card) */}
      <section className="objective-section">
        <div className="objective-content">
          <h2>{objectiveSection?.title}</h2>
          
          <p>
             {objectiveSection?.description || "Our objective is to simplify access to digital financial services by providing a secure, reliable and easy-to-use platform that helps users manage everyday payments, credit-related services, and rewards from a single application."}
          </p>
        </div>
      </section>

      {/* Sub-header Title */}
      <div className="section-header">
        <h2>Our Services</h2>
       
      </div>

      {/* 2. Feature Rows */}
      <div className="features-wrapper">
        
        {/* Row 1: Bill Payments */}
        <div className="feature-row">
          <div className="feature-text">
            <h3>{billPayments?.title || "Bill Payments"}</h3>
            <p>
              {billPayments?.description || "Users can make supported utility and financial payments, including Electricity, Mobile & DTH Recharge, Broadband, Water, Gas Cylinder, FASTag, Credit Card Bill, Loan EMI, and Insurance Premium payments."}
            </p>
            <button className="btn-yellow">Explore Bills &rarr;</button>
          </div>
          <div className="feature-image-container">
            <img 
              src={billPayments?.image || "/images/payments.png"} /* 🔥 Yahan apni image ka sahi path daalein */
              alt="Feature Display" 
              className="custom-feature-image"
            />
          </div>
        </div>

        {/* Row 2: Credit Services */}
        <div className="feature-row reverse">
          <div className="feature-text">
            <h3>{creditServices?.title || "Credit Services"}</h3>
            <p>
              {creditServices?.description || "Eligible users can access credit-related services including Credit Score Checks, Reports, Account Summaries (Active & Closed), Enquiry Information, and Insights through authorized partners."}
            </p>
            <button className="btn-yellow">Check Credit &rarr;</button>
          </div>
          <div className="feature-image-container">
            <img 
              src={creditServices?.image || "/images/score.png"} /* 🔥 Yahan apni image ka sahi path daalein */
              alt="Feature Display" 
              className="custom-feature-image"
            />
          </div>
          
        </div>

        {/* Row 3: Rewards & KYC */}
        <div className="feature-row">
          <div className="feature-text">
            <h3>{rewardsService?.title || "Rewards & KYC Verification"}</h3>
            <p>
              {rewardsService?.description || "Receive rewards based on platform activities including CX Reward Points, Spin & Win, Scratch Cards, and Promotional Coupons. Certain services require successful KYC verification via authorized partners."}
            </p>
            <button className="btn-yellow">View Rewards &rarr;</button>
          </div>
          <div className="feature-image-container">
            <img 
              src={rewardsService?.image || "/images/rewards.png"} /* 🔥 Yahan apni image ka sahi path daalein */
              alt="Feature Display" 
              className="custom-feature-image"
            />
          </div>
        </div>

      </div>

      {/* 3. Security, Mission & Commitment Section */}
      <section className="mission-security-section">
        <div className="max-width-wrapper">
          <div className="content-split-box">
            
            <div className="split-block">
              <div className="inline-heading">
                <span className="icon-symbol"><FaLock /></span> {/* 🔥 Updated to React Icon */}
                <h3>{securitySection?.title || "Security"}</h3>
              </div>
              <p>
               {securitySection?.description || "Protecting user information is an important part of our platform. MyCredAxis is designed with security measures intended to help safeguard user information and support secure digital transactions. Users are responsible for maintaining the confidentiality of their account credentials."}
              </p>
            </div>
            
            <div className="split-block">
              <div className="inline-heading">
                <span className="icon-symbol"><FaBullseye /></span> {/* 🔥 Updated to React Icon */}
                <h3>{missionItem?.title || "Our Mission"}</h3>
              </div>

              <p>
                {missionItem?.description || "Our mission is to simplify access to digital financial services by providing a secure, reliable, and easy-to-use platform that helps users manage everyday payments, credit-related services, and rewards from a single application."}
              </p>
            </div>

          </div>

          {/* Commitment Box */}
          <div className="commitment-box">
            <h3>Our Commitment</h3>
            <ul className="commitment-list">
              {commitmentItems.map((item, index) => (
                <li key={index}>{item.description}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Company Information & Important Info Section */}
      <section className="company-info-section">
        
        {/* Top Header - No Outer Box */}
        <div className="company-header-clean">
          <div className="header-icon-box">
            <FaBuilding />
          </div>
          <h2>Company Information</h2>
          <p className="company-subtext"><strong>Product Name:</strong> MyCredAxis</p>
          <p className="company-subtext"><strong>Owned & Operated By:</strong> BisaniBrothers Private Limited</p>
        </div>

        <div className="company-content-stacked">
          
          {/* Important Information - Upper Side (Box Removed) */}
          <div className="important-info-clean">
            <h3 className="blue-heading">{companyInfoItems[0]?.title || "Important Information"}</h3>
            <ul className="custom-bullet-list">
              {companyInfoItems.map((item, index) => (
                <li key={index}>{item.description}</li>
              ))}
            </ul>
          </div>

          {/* Disclaimer - Lower Side (Sleek Highlighted Container) */}
          <div className="disclaimer-sleek-box">
            <h3 className="blue-heading">{disclaimerSection?.title || "Disclaimer"}</h3>
            <p>
              {disclaimerSection?.description || "MyCredAxis is a technology platform developed and operated by BisaniBrothers Private Limited. Bill payment, credit-related services, KYC verification, payment processing, and other applicable financial services may be provided through authorized partners, licensed service providers, regulated financial institutions, and applicable payment networks. MyCredAxis does not modify or alter information received from authorized third-party service providers."}
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}