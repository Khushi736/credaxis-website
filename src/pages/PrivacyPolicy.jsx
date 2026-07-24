import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./PrivacyPolicy.css";

function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-page">
      <div className="privacy-container">
        
        {/* Header / Branding */}
        <div className="privacy-header">
          <Link to="/" style={{ textDecoration: "none", display: "inline-block" }}>
            <img src="/images/logo.png" alt="CredAxis Logo" style={{ width: "80px", height: "auto", marginBottom: "15px", filter: "brightness(0) invert(1)" }} />
          </Link>
          <h1>Privacy Policy</h1>
          <p>Effective Date: [5th June 2026]</p>
        </div>

        {/* Content Section */}
        <div className="privacy-content">
          
          <section>
            <h2>Introduction</h2>
            <p>
              This Privacy Policy explains how MyCredAxis, a product of BisaniBrothers Private Limited, collects, uses, stores, and protects your personal information when you use our website, mobile application, and related services.
            </p>
            <p>
              By accessing or using MyCredAxis, you agree to the practices described in this Privacy Policy.
            </p>
          </section>

          <section>
            <h2>Information We Collect</h2>
            <p>Depending on the services you use, we may collect the following information:</p>
            
            <p style={{ marginTop: "15px" }}><strong>Personal Information</strong></p>
            <ul className="privacy-list">
              <li>Full Name</li>
              <li>Mobile Number</li>
              <li>Email Address (if provided)</li>
              <li>Date of Birth (where required)</li>
              <li>Address (where required)</li>
            </ul>

            <p style={{ marginTop: "20px" }}><strong>Identity Verification Information</strong></p>
            <p>Where required for KYC or regulatory compliance, we may collect information such as:</p>
            <ul className="privacy-list">
              <li>PAN Number</li>
              <li>Aadhaar Information (only where legally permitted and with your consent)</li>
              <li>Other identity documents required for verification</li>
            </ul>

            <p style={{ marginTop: "20px" }}><strong>Device Information</strong></p>
            <p>To help secure the platform and improve service performance, we may collect:</p>
            <ul className="privacy-list">
              <li>Device Model</li>
              <li>Operating System Version</li>
              <li>App Version</li>
              <li>Device Identifier (where applicable)</li>
              <li>IP Address</li>
              <li>Log Information</li>
            </ul>

            <p style={{ marginTop: "20px" }}><strong>Transaction Information</strong></p>
            <p>When you use our services, we may collect:</p>
            <ul className="privacy-list">
              <li>Bill Payment Details</li>
              <li>Transaction Reference Numbers</li>
              <li>Payment Status</li>
              <li>Reward Activity</li>
              <li>Service Usage History</li>
            </ul>

            <p style={{ marginTop: "20px" }}><strong>Credit Service Information</strong></p>
            <p>
              If you request credit-related services, we may collect and process information required to obtain your credit report or credit score only after obtaining your consent, where applicable.
            </p>
          </section>

          <section>
            <h2>How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="privacy-list">
              <li>Create and manage your account</li>
              <li>Verify your identity where required</li>
              <li>Provide bill payment and other supported services</li>
              <li>Process transactions</li>
              <li>Provide credit-related services with your consent</li>
              <li>Deliver rewards and promotional benefits, where applicable</li>
              <li>Respond to customer support requests</li>
              <li>Improve platform functionality and user experience</li>
              <li>Detect and prevent fraud or misuse</li>
              <li>Comply with legal and regulatory obligations</li>
            </ul>
          </section>

          <section>
            <h2>Information Sharing</h2>
            <p>
              We may share your information only when necessary and only for providing services or complying with applicable laws. This may include sharing information with:
            </p>
            <ul className="privacy-list">
              <li>Authorized payment partners</li>
              <li>BBPS service providers (where applicable)</li>
              <li>Credit information partners (where applicable)</li>
              <li>KYC verification partners</li>
              <li>Technology service providers</li>
              <li>Government authorities or law enforcement agencies when legally required</li>
            </ul>
            <p style={{ marginTop: "15px" }}>
              We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2>Data Security</h2>
            <p>
              We implement reasonable administrative, technical, and organizational measures to help protect your personal information against unauthorized access, disclosure, alteration, or destruction.
            </p>
            <p>
              While we take appropriate steps to safeguard information, no method of electronic storage or transmission over the internet can be guaranteed to be completely secure.
            </p>
          </section>

          <section>
            <h2>Data Retention</h2>
            <p>We retain personal information only for as long as necessary to:</p>
            <ul className="privacy-list">
              <li>Provide our services</li>
              <li>Maintain transaction records</li>
              <li>Meet legal, regulatory, or compliance requirements</li>
              <li>Resolve disputes and enforce our agreements</li>
            </ul>
          </section>

          <section>
            <h2>Cookies and Similar Technologies</h2>
            <p>
              Our website may use cookies or similar technologies to improve functionality, remember user preferences, analyze website usage, and enhance user experience.
            </p>
            <p>
              You may choose to disable cookies through your browser settings, although some website features may not function properly.
            </p>
          </section>

          <section>
            <h2>Your Rights</h2>
            <p>Subject to applicable laws, you may:</p>
            <ul className="privacy-list">
              <li>Access your personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of information where legally permitted</li>
              <li>Request account closure</li>
              <li>Contact us regarding privacy-related concerns</li>
            </ul>
            <p style={{ marginTop: "15px" }}>
              Certain information may continue to be retained where required by law or regulatory obligations.
            </p>
          </section>

          <section>
            <h2>Third-Party Services</h2>
            <p>
              MyCredAxis may use third-party service providers to enable certain services, such as payment processing, identity verification, analytics, or credit-related services.
            </p>
            <p>
              These providers process information according to their own privacy practices and applicable legal requirements.
            </p>
          </section>

          <section>
            <h2>Children's Privacy</h2>
            <p>
              MyCredAxis is not intended for use by individuals who are not legally eligible to use the services under applicable laws.
            </p>
          </section>

          <section>
            <h2>Changes to this Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our services, legal requirements, or operational practices.
            </p>
            <p>
              The updated version will be published on this page with the revised effective date.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>
              If you have any questions regarding this Privacy Policy or the handling of your personal information, you may contact us:
            </p>
            <p style={{ marginTop: "10px" }}>
              <strong>Product:</strong> MyCredAxis<br />
              <strong>Company:</strong> BisaniBrothers Private Limited<br />
              <strong>Email:</strong> <a href="mailto:support@mycredaxis.com" style={{ color: "#09d2ff" }}>support@mycredaxis.com</a><br />
              <strong>Website:</strong> <a href="https://www.mycredaxis.com" target="_blank" rel="noreferrer" style={{ color: "#09d2ff" }}>www.mycredaxis.com</a>
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}

export default PrivacyPolicy;