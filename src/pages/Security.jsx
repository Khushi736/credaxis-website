import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Security.css";

function Security() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="security-page" style={{ position: "relative", overflow: "hidden" }}>
      
      {/* Framer Motion Animated Glassmorphism Background Blobs */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 50, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: "absolute",
            top: "10%",
            left: "15%",
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, rgba(0,229,255,0.08) 0%, rgba(0,0,0,0) 70%)",
            borderRadius: "50%",
            filter: "blur(60px)",
          }}
        />

        <motion.div
          animate={{
            x: [0, -120, 80, 0],
            y: [0, 100, -60, 0],
            scale: [1, 0.8, 1.3, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: "absolute",
            bottom: "15%",
            right: "10%",
            width: "450px",
            height: "450px",
            background: "radial-gradient(circle, rgba(0,229,255,0.05) 0%, rgba(0,0,0,0) 70%)",
            borderRadius: "50%",
            filter: "blur(70px)",
          }}
        />
      </div>

      {/* Main Glassmorphism Container */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="security-container" 
      >
        
        {/* Header / Branding */}
        <div className="security-header">
          <Link to="/" style={{ textDecoration: "none", display: "inline-block" }}>
            <motion.img 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              src="/images/logo.png" 
              alt="CredAxis Logo" 
              style={{ width: "60px", height: "auto", marginBottom: "15px", filter: "brightness(0) invert(1)" }} 
            />
          </Link>
          <h1>security</h1>
          <p>last updated on: 29 june 2026</p>
        </div>

        {/* Content Section */}
        <div className="security-content">
          
          <section>
            <h2>best practices to follow</h2>
            <p>
              we have always placed your security first on credaxis. to ensure maximum security, we have made a simple list of security to-do's you can follow:
            </p>
            <ul className="security-list">
              <li>never divulge your personal bank details like card number, CVV, PIN, and OTP in any medium, including calls, texts, or emails.</li>
              <li>we will never, ever ask you for any of the sensitive details mentioned above.</li>
              <li>we will never call you and ask to do any payment transaction on the app or install any remote access software such as teamviewer, anydesk, etc.</li>
              <li>never respond to such emails, texts, or phone calls.</li>
              <li>our customer support can only be reached via the app. please do not engage with phone numbers that claim to be of our support team.</li>
            </ul>
          </section>

          <section>
            <h2>privacy practices</h2>
            <p>
              we do not sell your personal information to or share it with unaffiliated third parties for their own advertising or marketing purposes without your explicit consent. check out our <Link to="/privacy-policy">Privacy Policy</Link> for more information.
            </p>
          </section>

          <section>
            <h2>cloud infrastructure</h2>
            <p>
              credaxis is hosted on a Virtual Private Cloud on Amazon Web Services which provides a secure and scalable technology platform to ensure we can provide you services securely and reliably.
            </p>
          </section>

          <section>
            <h2>perimeter security</h2>
            <ul className="security-list">
              <li>we have deployed Defence in Depth Architecture using a network firewall, web application firewall, DDoS protection layer, and a content delivery network.</li>
              <li>our infrastructure is launched in compliance with the AWS Well Architected Framework and from the security perspective incorporating practices from the AWS Cloud Adoption Framework.</li>
              <li>we have a 3-Tier Architecture which incorporates best practices from various standards and certifications.</li>
              <li>we have strict network segmentation and isolation of environments and services in place.</li>
            </ul>
          </section>

          <section>
            <h2>host security</h2>
            <ul className="security-list">
              <li>we use industry leading solutions around anti-virus, anti-malware, intrusion prevention systems, intrusion detection systems, file integrity monitoring, application control, application and audit log aggregation, and automated patching.</li>
              <li>all our servers are launched using the Center for Internet Security Benchmarks for Amazon Linux.</li>
            </ul>
          </section>

          <section>
            <h2>data security</h2>
            <ul className="security-list">
              <li>we employ separation of environments and segregation of duties and have strict role-based access control on a documented, authorized, need-to-use basis.</li>
              <li>we use key management services to limit access to data except the data team.</li>
              <li>stored data is protected by encryption at rest and sensitive data by application level encryption.</li>
              <li>we use data replication for data resiliency, snapshotting for data durability and backup/restore testing for data reliability.</li>
            </ul>
          </section>

          <section>
            <h2>incident and change management</h2>
            <ul className="security-list">
              <li>we have deployed mature processes around Change Management which enables us to release thoroughly tested features for you both reliably and securely enabling you to enjoy the credaxis experience with maximum assurance.</li>
              <li>we have a very aggressive stance on Incident Management on both Systems downtime and Security and have a Network Operations Center and an Information Security Management System in place which quickly reacts, remediates or escalates any Incidents arising out of planned or unplanned changes.</li>
            </ul>
          </section>

          <section>
            <h2>vulnerability assessment and penetration testing</h2>
            <ul className="security-list">
              <li>we have an inhouse network security team which uses industry leading products to conduct manual and automated VA/PT activities.</li>
              <li>we employ both static application security testing and dynamic application security testing which is incorporated into our continuous integration / continuous deployment pipeline.</li>
              <li>we also leverage CERT-IN certified auditors to do periodic external security testing and audits.</li>
            </ul>
          </section>

          <section>
            <h2>standards and certifications</h2>
            <p>
              we are committed to maintaining the highest standards of information security, data privacy, and regulatory compliance. As part of this commitment, we have achieved the following certifications and implemented robust, industry-aligned controls:
            </p>
            <ul className="security-list">
              <li><strong>PCI DSS v4.0.1 (Level 1) Certified</strong> - we are a Level 1 PCI DSS v4.0.1 certified organization, demonstrating our adherence to stringent security requirements defined by the PCI Security Standards Council. This ensures secure handling of cardholder data across all payment processing environments.</li>
              <li><strong>UPI Compliance – NPCI Circulars 15B & 32</strong> - we have successfully completed UPI compliance in line with NPCI Circulars 15B and 32. Our systems are periodically audited by CERT-In empanelled assessors to ensure adherence to NPCI’s UPI operational and security mandates.</li>
              <li><strong>RBI Tokenisation Compliance</strong> - we fully comply with the Reserve Bank of India’s tokenisation guidelines for both card-on-file and device-based tokenisation. Our systems enable secure generation, storage, and lifecycle management of tokens, protecting sensitive cardholder data during digital transactions.</li>
              <li><strong>ISO/IEC 27001:2022 Certified</strong> - our ISO/IEC 27001:2022 certification confirms the implementation of a comprehensive Information Security Management System (ISMS), enabling structured risk management and the protection of critical information assets.</li>
              <li><strong>ISO/IEC 27701:2019 Certified</strong> - we are ISO/IEC 27701:2019 certified for our Privacy Information Management System (PIMS), extending our ISMS framework to address data privacy requirements and ensuring responsible handling of Personally Identifiable Information (PII).</li>
              <li><strong>Data Localisation Compliance – RBI Guidelines</strong> - in accordance with the Reserve Bank of India’s data localisation mandates, all customer data is securely hosted within India. We operate entirely from cloud infrastructure located in AWS’s Mumbai and Hyderabad regions, ensuring full compliance with geographic data residency norms.</li>
              <li><strong>CICRA & Credit Information Regulations Compliance</strong> - we adhere to the Credit Information Companies (Regulation) Act, 2005, specifically complying with Sections 19, 20, and 22, as well as the Credit Information Companies Rules, 2006, including Rules 18(b), 23, 28, and 29. These provisions govern the secure collection, processing, usage, and disclosure of credit-related information. Our policies, procedures, and systems are designed to ensure responsible handling of credit data in accordance with regulatory expectations set by the RBI and integrated Credit Information Companies.</li>
            </ul>
            <p style={{ marginTop: "15px", fontSize: "0.95rem", fontStyle: "italic" }}>
              all compliance/audit statuses will be updated in this section in this policy.
            </p>
          </section>

          <section>
            <h2>responsible disclosure</h2>
            <p>
              we at credaxis are committed about our customer's data and privacy. we blend security at multiple steps within our products with state of the art technology to ensure our systems maintain strong security measures.
            </p>
            <p>
              the overall data and privacy security design allows us defend our systems ranging from low hanging issue up to sophisticated attacks.
            </p>
            <p>
              if you are a security enthusiast or a researcher and you have found a possible security vulnerability on credaxis products, we encourage you to report the issue to us responsibly. you could submit a bug report to us at <a href="mailto:security@cred.club">security@cred.club</a> with detailed steps required to reproduce the vulnerability.
            </p>
            <p>
              we shall put best of our efforts to investigate and fix the legitimate issues in a reasonable time frame, meanwhile, requesting you not to publicly disclose it.
            </p>
          </section>

        </div>

      </motion.div>
    </div>
  );
}

export default Security;