import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  FaShieldAlt, FaLock, FaFileAlt, FaArrowRight,  FaCheckCircle , FaCoins,
  FaTachometerAlt, FaPercentage, FaShieldVirus, FaChartPie, FaChartLine 
} from "react-icons/fa";
import "./CreditScore.css";

export default function CreditScore() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cs-landing-wrapper">
      
    {/* 1. Hero Section */}
        <section className="cs-hero-section">
        <div className="cs-hero-container">
            
            {/* Left Content & List */}
            <div className="cs-hero-content">
            <h1 className="cs-hero-title">
                Check Credit Score & CIBIL Report
            </h1>
            <p className="cs-hero-subtitle">
                Check your credit score across all 4 credit bureaus, including CIBIL, only on MyCredAxis. Get your credit score online with monthly updates and take steps to become 
            </p>

            <div className="cs-section-heading">Why Check Credit Score ?</div>

            <div className="cs-hero-badges-vertical">
                <div className="cs-badge-item">
                <span className="cs-badge-icon"><FaCheckCircle /></span>
                <strong>Check Your Credit Score Instantly</strong>
                </div>
                <div className="cs-badge-item">
                <span className="cs-badge-icon"><FaCheckCircle /></span>
                <strong>Track Credit Score Seamlessly Every Month</strong>
                </div>
                <div className="cs-badge-item">
                <span className="cs-badge-icon"><FaCheckCircle /></span>
                <strong>Get Detailed Insights on Your Credit Report</strong>
                </div>
            </div>
            </div>

            {/* Right Illustration/Image */}
            <div className="cs-hero-image-wrapper">
            <img 
                src="/images/creditbanner.png" 
                alt="Credit Score Dashboard" 
                onError={(e)=>{e.target.src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"}} 
            />
            </div>

        </div>
        </section>

      {/* 2. Three Simple Steps Section */}
      <section className="cs-steps-section">
        <div className="cs-section-header">
          <h2>Check. View. Download.</h2>
          <p>All in 3 simple steps.</p>
        </div>

        <div className="cs-steps-grid">
          <div className="cs-step-card">
            <div className="cs-step-num-badge">1</div>
            <div className="cs-step-img">
              <img src="/images/tokens.png" alt="Use Token" onError={(e)=>{e.target.src="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=400&q=80"}} />
            </div>
            <h3>Choose Your Option</h3>
            <p>Select Coins, Wallet, or Token to check your credit score.</p>
          </div>

          <div className="cs-step-arrow">→</div>

          <div className="cs-step-card">
            <div className="cs-step-num-badge">2</div>
            <div className="cs-step-img">
              <img src="/images/check_report.png" alt="Check Score" onError={(e)=>{e.target.src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80"}} />
            </div>
            <h3>Check Score</h3>
            <p>Get your credit score and key factors instantly.</p>
          </div>

          <div className="cs-step-arrow">→</div>

          <div className="cs-step-card">
            <div className="cs-step-num-badge">3</div>
            <div className="cs-step-img">
              <img src="/images/report_download.png" alt="Download Report" onError={(e)=>{e.target.src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=400&q=80"}} />
            </div>
            <h3>Download Report</h3>
            <p>Download your complete credit report in one click.</p>
          </div>
        </div>
      </section>

        <section className="cs-info-card-section">
            <div className="cs-info-container">
                <h2 className="cs-section-main-heading">What is Credit Score?</h2>
                <div className="cs-info-card">
                    
                    {/* Top Description Paragraph */}
                    <p className="cs-info-desc">
                    Credit Score is a 3-digit numeric summary of your credit history, that represents your creditworthiness. Credit Score is commonly known as CIBIL Score (provided by TransUnion CIBIL), and ranges between 300 and 900. Your Credit Score is a measure of your ability to borrow from Banks and NBFCs, determined by your past credit behaviour.
                    </p>

                    {/* Main Content Layout (Left text bullets & Right image) */}
                    <div className="cs-info-body">
                    <div className="cs-info-bullets">
                        
                        <div className="cs-info-bullet-item">
                        <span className="cs-info-icon"><FaCheckCircle /></span>
                        <p>
                            CIBIL is one of the leading <span className="cs-info-link">Credit Information Companies (CICs)</span> in India that calculates and maintains your Credit Score.
                        </p>
                        </div>

                        <div className="cs-info-bullet-item">
                        <span className="cs-info-icon"><FaCheckCircle /></span>
                        <p>
                            Your Credit Score is based on the information provided by lenders. It includes payment of EMIs, Credit Card bills, new applications etc.
                        </p>
                        </div>

                        <div className="cs-info-bullet-item">
                        <span className="cs-info-icon"><FaCheckCircle /></span>
                        <p>
                            To ensure your report stays accurate and up-to-date, regulatory guidelines mandate lenders to report updated credit information regularly.
                        </p>
                        </div>

                    </div>

                    {/* Right Side Illustration */}
                    <div className="cs-info-image-wrapper">
                        <img 
                        src="/images/cs_info.png" 
                        alt="Credit Report Illustration" 
                        onError={(e)=>{e.target.src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"}} 
                        />
                    </div>
                </div>
            </div>
        </div>
        </section>

        <section className="cs-why-section">
    
            {/* Split Layout Wrapper to arrange Left content and Right reasons side-by-side */}
            <div className="cs-why-main-wrapper">
                
                {/* LEFT SIDE: Your exact unedited code */}
                <div className="cs-why-left-content">
                    {/* 1. Section Header & Heading */}
                    <div className="cs-section-header">
                        <h2>Why It Matters</h2>
                        <div className="cs-header-line"></div>
                    </div>

                    {/* 2. Top Description */}
                    <p className="cs-why-top-desc">
                        Your credit score is one of the first things that a Bank or NBFC will check while evaluating your loan or credit card application. It shows lenders whether you are reliable or risky in repayment of your EMIs or credit card outstanding.
                    </p>

                    {/* 3. Outer Container Card Box with 6 Grid Items */}
                    <div className="cs-why-container-box">
                        <div className="cs-why-grid">
                        
                        {/* Card 1 */}
                        <div className="cs-why-card">
                            <div className="cs-why-icon">
                            <img src="/images/meter-icon.png" alt="Meter Icon" onError={(e)=>{e.target.src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&q=80"}} />
                            </div>
                            <p>A good CIBIL score helps you access credit without much difficulty</p>
                        </div>

                        {/* Card 2 */}
                        <div className="cs-why-card">
                            <div className="cs-why-icon">
                            <img src="/images/loan-icon.png" alt="Interest Rate Icon" onError={(e)=>{e.target.src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&q=80"}} />
                            </div>
                            <p>Many lenders offer lower rate of interest on loans to applicants with a strong credit score</p>
                        </div>

                        {/* Card 3 */}
                        <div className="cs-why-card">
                            <div className="cs-why-icon">
                            <img src="/images/check_report.png" alt="Credit Score Icon" onError={(e)=>{e.target.src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&q=80"}} />
                            </div>
                            <p>The higher your credit score, the more likely lenders are to approve you for new credit</p>
                        </div>

                        {/* Card 4 */}
                        <div className="cs-why-card">
                            <div className="cs-why-icon">
                            <img src="/images/report-icon.png" alt="Preferred Score Icon" onError={(e)=>{e.target.src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&q=80"}} />
                            </div>
                            <p>Usually, a CIBIL Score of 760 and above is preferred by lenders for loan or credit card approval</p>
                        </div>

                        {/* Card 5 */}
                        <div className="cs-why-card">
                            <div className="cs-why-icon">
                            <img src="/images/approve-icon.png" alt="Approval Icon" onError={(e)=>{e.target.src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&q=80"}} />
                            </div>
                            <p>Many Banks and NBFCs also approve applications if the CIBIL score is between 700 and 760</p>
                        </div>

                        {/* Card 6 */}
                        <div className="cs-why-card">
                            <div className="cs-why-icon">
                            <img src="/images/reject-icon.png" alt="Low Score Icon" onError={(e)=>{e.target.src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&q=80"}} />
                            </div>
                            <p>If your credit score is low (below 700), most lenders are likely to reject your loan application.</p>
                        </div>

                        </div>
                    </div>

                </div>

                {/* RIGHT SIDE: Added Reasons Section with Arrow Icons */}
                <div className="cs-reasons-right-column">
                    <div className="cs-section-header">
                        <h2>Reasons for a Low Credit Score</h2>
                        <div className="cs-header-line"></div>
                    </div>

                    <div className="cs-reasons-box">
                        <ul className="cs-reasons-list">
                            <li>
                                <span className="cs-badge-icon"><FaCheckCircle /></span>
                                <p>Defaulting on past loan EMIs or continuous delay in credit card bill payments.</p>
                            </li>
                            <li>
                                <span className="cs-badge-icon"><FaCheckCircle /></span>
                                <p>Having a high credit utilization ratio by maxing out credit cards frequently.</p>
                            </li>
                            <li>
                                <span className="cs-badge-icon"><FaCheckCircle /></span>
                                <p>Making multiple hard inquiries or applying for too many loans in a short span.</p>
                            </li>
                            <li>
                                <span className="cs-badge-icon"><FaCheckCircle /></span>
                                <p>Having a short credit history or lack of a diverse credit mix.</p>
                            </li>
                        </ul>
                    </div>
                     {/* 4. Bottom Note */}
                    <p className="cs-why-note">
                        <strong>Note:</strong> Your credit score is not the only factor considered by lenders. They also check your income, repayment capacity, debt-to-income ratio, employment history, profession, etc.
                    </p>
                </div>

            </div>

        </section>


      {/* 5. Bottom CTA Banner */}
        <section className="cs-cta-section">
        <div className="cs-cta-box">
            
            {/* Part 1 (Left Side): Image Container */}
            <div className="cs-cta-left-part">
            <img 
                src="/images/phone-preview.png" 
                alt="Credit Report App Preview" 
                className="cs-cta-raw-image"
                onError={(e)=>{e.target.src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=500&q=80"}} 
            />
            </div>

            {/* Part 2 (Right Side): Text & Actions */}
            <div className="cs-cta-right-part">
            <h2>Take Control of Your Credit Today</h2>
            <p>Use a token, check your score, and download your report in less than a minute.</p>
            
            <div className="cs-cta-action-group">
                <a href="#check-credit" className="cs-main-btn">
                Check Your Credit Report Now &rarr;
                </a>
                <span className="cs-token-note">
                <FaCoins className="cs-coin-icon" /> 1 Token = 1 Credit Report
                </span>
            </div>
            </div>

        </div>
        </section>

    </div>
  );
}