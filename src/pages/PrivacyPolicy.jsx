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
            <img src="/images/logo.png" alt="CredAxis Logo" style={{ width: "60px", height: "auto", marginBottom: "15px", filter: "brightness(0) invert(1)" }} />
          </Link>
          <h1>privacy policy</h1>
          <p>last updated on: [5th June 2026]</p>
        </div>

        {/* Content Section */}
        <div className="privacy-content">
          
          <section>
            <h2>1. objective</h2>
            <p>
              the privacy and security of personal information about you is our priority. we receive and store both personal and non-personal information about you when you visit and/or use our platform, including our mobile application ‘CASH by CRED’ (“Platform”). we protect this information by maintaining physical, electronic, and procedural safeguards that meet applicable laws. we train our employees in the proper handling of personal information.
            </p>
            <p>
              this privacy policy describes our policies and procedures for collection, use, storage, processing, disclosure and protection of any information, including, but not limited to, personal information (“Personal Data”) provided by you as a user while using the platform and your privacy rights.
            </p>
            <p>
              user shall mean any person/ persons, who visits, uses, deals with and/or transacts through the Platform.
            </p>
          </section>

          <section>
            <h2>2. collection of information</h2>
            <p>we collect the following Personal and Non-Personal Information when you use the Platform.</p>
            
            <p><strong>a. Personal Information for the purpose of this privacy policy includes:</strong></p>
            <ul className="privacy-list">
              <li>i. your name, contact number and e-mail that is collected for signing up on Platform.</li>
              <li>ii. information provided by you, for using the services provided by us, such as your mobile number, e-mail, password, date of birth, residential address, gender, marital status, Permanent Account Number (PAN) and your bank account details.</li>
              <li>iii. you may be required to provide certain additional information depending on the services that you wish to use, at your discretion, including but not limited to your credit report(s).</li>
              <li>iv. we may also use your retrieve information from Know Your Customer (KYC) databases such as DigiLocker and collect variables as your KYC status and, father's name, occupation, identity and address proof documents from lending partners for verification purposes.</li>
              <li>v. during the use of our services, we will collect information about your transaction history, transaction status and other transaction details.</li>
              <li>vi. when you interact with our customer support systems including through chat bots, email, live interaction with an agent either over chat or on call, we record these interactions.</li>
            </ul>
            <p>
              to offer features like spend analyser, we may process limited transactional information from your SMS. this is done to identify relevant transactions and categorize spending. we do not read or store personal messages, bank OTPs, or sensitive account information. we do not access mobile phone resources like file and media, contact list, call logs, telephony functions and others or collect any biometric data without explicit consent. however, we may take a one-time access of your camera for uploading a selfie image, microphone, for the purpose of KYC and loan onboarding journey with our lending partner.
            </p>

            <p style={{ marginTop: "20px" }}><strong>b. Non-Personal Information:</strong></p>
            <ul className="privacy-list">
              <li>i. when you visit our Platform, we collect and store information to enable us to provide an online experience that matches your device. the information collected includes the type and address of the device you use, the browser and its version, the operating system and its version you are using and the website from which you came to the Platform.</li>
              <li>ii. when you install and access our mobile application or access our website through a mobile device, we collect information including your location, IP address, the make, model and the unique identifier of the device in use, the browser and its version, the operating system installed on the device and its version.</li>
              <li>iii. when you browse our site or receive an e-mail from us, we and the companies we work with, use cookies and/or pixel tags to collect information and store your online preferences. cookies are widely used and most browsers are set up to accept them automatically. if you would prefer, you can choose to not accept cookies by disabling the same through browser settings.</li>
              <li>iv. cookies and pixel tags help us improve your online experience. this comprises, inter alia, your response to any of our e-mails, the time and duration of your visit to our site and pages you viewed while on our site.</li>
              <li>v. we may also supplement the information we collect with information we receive from other companies. for example, we may use marketing segments developed by us or other companies to customize certain services to your local area and provide relevant Platform offers tailored to you.</li>
            </ul>
            <p style={{ marginTop: "15px" }}>
              any information provided to us by you or collected by us about you shall be deemed to have been disclosed willingly by you, without any coercion by our officers, agents or affiliates. while we make efforts to validate the information provided by you, we do not/shall not undertake any liability and do not/shall not make no representations as to the genuineness, validity, completeness or correctness of the information provided by you.
            </p>
          </section>

          <section>
            <h2>3. storage of your information</h2>
            <p>
              in compliance with applicable Indian data protection laws, all collected information is stored securely on servers or storage systems located within the territorial jurisdiction of India. to safeguard against unauthorized access or breaches, all data is encrypted at rest, whether stored on our proprietary infrastructure or with authorized third-party vendors.
            </p>
          </section>

          <section>
            <h2>4. utilization of information</h2>
            <p>we use the personal information provided by you for:</p>
            <ul className="privacy-list">
              <li>a. facilitating various services provided by us, the availing of each of which are at your discretion, including:
                <ul>
                  <li>i. setting up your account and facilitating the provision of loans through our financial partners.</li>
                  <li>ii. to enable us to complete your registration with us and/or with them and to process any transactions that you authorise, maintain a record of your transactions, generate and send reminders, alerts, notifications to you for transactions, etc.</li>
                </ul>
              </li>
              <li>b. resolving your queries, concerns and to provide you with support in the case of any issues during the use of our services and of those provided by our partners.</li>
              <li>c. informing you about any offers relating to products and services including sharing of marketing material with you.</li>
              <li>d. streamlining and customizing your experience while using our mobile application or while accessing our services through the Platform.</li>
              <li>e. informing you over email or on call about the progress of and issues with, if any, pertaining to the transactions initiated by you and the resolution thereof or relating to the services availed by you.</li>
              <li>f. to communicate with our partners with respect to their products and services that you may have availed through us.</li>
              <li>g. to enable our partners to communicate with you with respect to their products and services that you may have availed through us.</li>
            </ul>

            <p style={{ marginTop: "20px" }}>we use the non-personal information provided by you and aggregated information for:</p>
            <ul className="privacy-list">
              <li>a. to improve your experience while using our Platform.</li>
              <li>b. for troubleshooting and identifying any bugs, operational issues, process bottlenecks, errors in the application and for analysing usage and activity trends.</li>
              <li>c. to prepare analyses, reports and tools for your use such as insights.</li>
              <li>d. to monitor, identify, resolve and prevent any security incidents, frauds, prohibited activities.</li>
              <li>e. we may use aggregated information that does not identify you individually for better product design, research and for developing customized marketing offers either by us or any affiliated or unaffiliated third-party consultants or service providers.</li>
            </ul>
            <p style={{ marginTop: "15px" }}>
              as we add more services or wish to inform you of some additional benefits that we offer either directly or in partnership with any third party, we may use the information we have collected to offer you customized recommendations as well as marketing communications through any medium including e-mail, SMS etc. you will have the option to opt out of such communications at any time.
            </p>
          </section>

          <section>
            <h2>5. sharing of your information</h2>
            <ul className="privacy-list">
              <li>a. when we use third parties to provide services, we require them to protect the confidentiality of personal information about you that they receive from us. the information is disclosed on a need-to-know basis.</li>
              <li>b. we may use third party service providers to enable us in providing some services to you such as sending e-mail messages to you and tracking them on our behalf, and providing technical support that can contact you regarding an issue with any feature or functionality on our website.</li>
              <li>c. information will be shared with the selected third parties such as our group companies, partners through whom we provide some of our services such as banks, financial institutions, credit information companies, entities registered under applicable laws with the Reserve Bank of India, Central Registry of Securitisation Asset Reconstruction and Security Interest of India (CERSAI), KYC registration agencies (KRA), payment gateway providers, banks providing collection services in order to provide various products and services to you.</li>
              <li>d. we also use third-party services such as Sentry, Mixpanel, Google tag manager, Google analytics etc that may collect information used to identify you.</li>
              <li>e. we will not share with, or make available, your personal information to any third party without your authorisation, except if we are specifically directed or mandated to do so under any Applicable Law, legal proceeding or directive by any administrative, judicial, quasi-judicial, statutory or regulatory body or any authority or agency of the Government.</li>
            </ul>
          </section>

          <section>
            <h2>6. security of your information</h2>
            <ul className="privacy-list">
              <li>a. registering for a service on our website requires the creation of a Login ID and Password by you to ensure the privacy and security of the information you provide. your Login ID and Password are the primary means to access our services and website, and hence as a security feature, our website requires creation of a password that meets certain complex requirements. we recommend and require that you keep your Login ID and Password confidential. further, we recommend that you change your password periodically. we shall not be responsible for any unauthorized access to your account if you share your Login ID and Password with anyone or as a consequence of a violation of this Privacy Policy or the Website’s Terms of Use.</li>
              <li>b. every time you login to our website or mobile application, we use, inter alia, the latest authentication and encryption protocols (TLS 1.2) along with session time outs, firewalls to protect your account from unauthorised access. your password information is not accessible to anyone including us and can only be changed/updated by you using a two-factor authentication process.</li>
              <li>c. we may offer the use of social logins or identity providers such as Google, Facebook etc. to enable you to conveniently create an account and register yourselves on our website. by enabling the use of these credentials, we offer you the convenience of not having to create and remember a fresh user ID and password. such service, its availability and the privacy of your login information are governed by the terms and conditions of the respective service providers. whilst we do take adequate measures to safeguard your information, we do not take responsibility of your information in case of a security breach at these service providers or in case you share your login information with anyone or in case your social media account was to get hacked. we require you to maintain adequate confidentiality of your social login information and use this facility after due consideration and with appropriate caution.</li>
              <li>d. when you provide us with your personal information either while setting up an account with us or later, it is kept maintained by the division that is responsible for your account management. you can view and/or update/edit this information by logging on to your account through our website, e-mailing us or calling customer service.</li>
            </ul>
            <p style={{ marginTop: "15px" }}>
              more details on how we store and protect your information can be found here. if you identify a potential security vulnerability in our Platform, please report it to us responsibly. kindly submit a detailed bug report, including steps required to reproduce the vulnerability, to us at security@cred.club. we pledge our best efforts to investigate and rectify legitimate issues within a reasonable timeframe while requesting you not to disclose it publicly.
            </p>
          </section>

          <section>
            <h2>7. your rights</h2>
            <p>
              when you create a login ID and password or sign-in to the Platform, you are providing your consent to this Privacy Policy. with respect to the information collected by us to provide Services, you have the following rights available to you:
            </p>
            <p>
              <strong>Right to withdraw consent:</strong> personal information collected will not be used for any purposes other than as mentioned herein. you may withdraw your consent for the use of the personal information at any time by deactivating your account on the Platform or by reaching out to the customer support at <a href="mailto:cashbycredsupport@cred.club" style={{ color: "#fff" }}>cashbycredsupport@cred.club</a>. withdrawing your consent will not affect the lawfulness of any processing we conducted prior to your withdrawal, nor will it affect processing of your personal data conducted in reliance on lawful processing grounds other than consent. in the event you choose to withdraw your consent for collecting and processing your personal data, we might not be able to provide you with certain products and services.
            </p>
            <p>
              <strong>Right to rectify:</strong> we disclaim all liability and responsibility for the authenticity of the information provided by you to us. however, you have the right to review and correct, update and/or amend your information provided to us previously for it to be accurate, complete and up to date.
            </p>
            <p>
              <strong>Right to deletion:</strong> you may request for deletion of your data by visiting the Contact Us page or by writing to us at <a href="mailto:cashbycredsupport@cred.club" style={{ color: "#fff" }}>cashbycredsupport@cred.club</a>.
            </p>
          </section>

          <section>
            <h2>8. data retention</h2>
            <p>
              your Personal Data will be retained only for the duration necessary to fulfill the purposes elucidated in this Privacy Policy, unless a longer retention period is necessitated by law or for directly related legitimate business purposes. once the Personal Data is no longer required, it will be disposed of securely.
            </p>
          </section>

          <section>
            <h2>9. changes to privacy policy</h2>
            <p>
              we reserve the right to modify, change or update this Privacy Policy in part or its entirety at any point at our discretion without assigning any reason whatsoever. update of this Privacy Policy shall be adequate notification of these changes, if any. we will mention the date of the update of this Privacy Policy right at the beginning of this document/web page.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}

export default PrivacyPolicy;