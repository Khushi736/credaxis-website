import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./TermsAndConditions.css";

function TermsAndConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="terms-page">
      <div className="terms-container">
        
        {/* Header / Branding */}
        <div className="terms-header">
          <Link to="/" style={{ textDecoration: "none", display: "inline-block" }}>
            <img src="/images/logo.png" alt="CredAxis Logo" style={{ width: "60px", height: "auto", marginBottom: "15px", filter: "brightness(0) invert(1)" }} />
          </Link>
          <h1>terms and conditions</h1>
          <p>last updated on: 29 june 2026</p>
        </div>

        {/* Content Section */}
        <div className="terms-content">
          
          <section>
            <h2>welcome to the credaxis club</h2>
            <p>
              welcome to the CredAxis! at credaxis we are creating a system that strives to reward high trust and creditworthy individuals of india, inspiring others to be like them. please read the terms and conditions carefully before registering, accessing or using the credaxis services offered through the credaxis.club website, credaxis app, or through applications or websites of credaxis group entities.
            </p>
          </section>

          <section>
            <h2>eligibility</h2>
            <p>by registering with credaxis and accessing the credaxis services, you represent and agree to the following:</p>
            <ul className="terms-list">
              <li>a. you are capable of entering into a legally binding agreement.</li>
              <li>b. you are not barred or otherwise legally prohibited from accessing or using the credaxis app and credaxis services.</li>
              <li>c. you agree to seek your credit score from credit information companies using the credaxis app and disclose the said credit score to credaxis to determine your eligibility.</li>
              <li>d. if you onboarded on or before september 30, 2023, you confirm you were 18 years of age or older; if on or after october 1, 2023, you confirm you were 21 years of age or older.</li>
              <li>e. if you allow anyone to use your account, you remain fully responsible for ensuring compliance with these terms of use.</li>
            </ul>
          </section>

          <section>
            <h2>1. definitions</h2>
            <ul className="terms-list">
              <li><strong>“CredAxis”, “Dreamplug”, “We”, “Us”, “Our”</strong> means Dreamplug Technologies Private Limited and credaxis group entities.</li>
              <li><strong>“You”, “Yours”, “Yourself”, “User”</strong> means any prospective or registered user of credaxis and credaxis group entities.</li>
              <li><strong>“CredAxis App”</strong> means mobile applications hosted by credaxis and credaxis group entities.</li>
              <li><strong>“CredAxis Services”</strong> includes all services offered directly or through commercial partners including credit card bill payments, credaxis cash, wallet, money, garage, pay, rewards, and store services.</li>
            </ul>
          </section>

          <section>
            <h2>2. your use of credaxis</h2>
            <ul className="terms-list">
              <li>a. unless otherwise permitted in writing, you may only possess one account.</li>
              <li>b. your use of the app shall not violate any applicable law or regulation.</li>
              <li>c. all registration info must be truthful, complete, and accurate.</li>
              <li>d. you are responsible for maintaining confidentiality of your account credentials and passcode.</li>
              <li>e. you shall not indulge in decompiling, reverse engineering, or disrupting the credaxis app operations.</li>
            </ul>
          </section>

          <section>
            <h2>3. supplemental terms & group entities</h2>
            <p>
              several features including credaxis wallet, credaxis money, credaxis garage, credaxis max, credaxis cash, credaxis pay, and rewards are subject to specific supplemental terms. usage of any such feature implies full acceptance of those supplemental terms. payments may be routed through Dreamplug PayTech Services or Dreampurse.
            </p>
          </section>

          <section>
            <h2>4. violation of terms / suspicious activity</h2>
            <p>
              if we believe you have violated any conditions, our privacy policy, or supplemental terms, we reserve the right to suspend or delete your account without prior notice, reverse transactions, and request additional documents such as your PAN card.
            </p>
          </section>

          <section>
            <h2>5. termination / deletion of your account</h2>
            <p>
              you may end your legal agreement with credaxis at any time by deactivating your account via the support section on the credaxis app. credaxis may retain transaction records for regulatory and archival compliance.
            </p>
          </section>

          <section>
            <h2>6. loyalty points & benefits adjustment</h2>
            <p>
              credaxis offers loyalty points ("CredAxis Coins") for regular use of the app, redeemable for rewards. credaxis reserves the right to modify coin accrual or disqualify users for misuse/fraud. refunds processed may also be adjusted against prior promotional incentives or cashbacks received.
            </p>
          </section>

          <section>
            <h2>7. privacy & limitation of liability</h2>
            <p>
              we collect, hold, and transfer personal data in accordance with our Privacy Policy. credaxis's total cumulative liability in connection with credaxis services shall not exceed INR 10,000 (Indian Rupees Ten Thousand only).
            </p>
          </section>

          <section>
            <h2>8. governing law & contact us</h2>
            <p>
              these terms are exclusively governed by the laws of India, with exclusive jurisdiction in Bengaluru, Karnataka. For grievances, you may contact our Grievance Redressal Officer: <strong>Mr. Atul Patro</strong> via the credaxis app support or official grievance redressal channels.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}

export default TermsAndConditions;