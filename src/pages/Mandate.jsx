import React, { useEffect } from 'react';
import { 
  FaApple, 
  FaGooglePlay, 
  FaLandmark, 
  FaShieldAlt, 
  FaCheckCircle, 
  FaFingerprint, 
  FaCalendarCheck 
} from 'react-icons/fa';
import './Mandate.css';

export default function Mandate() {
  useEffect(() => {
    // 🔥 Page khulte hi top par scroll karne ke liye
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      const wrapper = document.querySelector('.md-reveal-wrapper');
      if (wrapper) wrapper.classList.add('md-show-text');
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="md-container">
      {/* Hero Section with Zoom-Out Background & Centered MANDATE */}
      <section className="md-hero-section">
        <div className="md-hero-bg"></div>
        <div className="md-hero-overlay"></div>
        
        <div className="md-hero-content">
          <div className="md-reveal-wrapper">
            <h1 className="md-hero-title md-hidden-text">
              MANDATE
            </h1>
          </div>
        </div>
      </section>

      {/* Extended Section (Below Hero) */}
      <section className="md-extended-section">
        <div className="md-extended-content">
          {/* Subtitle Tagline */}
          <p className="md-hero-subtext">
            APPROVE ONCE <span className="md-dot">•</span> PAID ON TIME
          </p>

          {/* App Store & Play Store Download Buttons */}
          <div className="md-store-buttons">
            {/* <button className="md-store-btn" onClick={() => window.location.href = '/'}>
              <FaApple className="md-store-icon md-apple-icon" />
              <div className="md-store-text">
                <span>Download on the</span>
                <strong>App Store</strong>
              </div>
            </button> */}

            <button className="md-store-btn" onClick={() => window.location.href = 'https://play.google.com/store/apps/details?id=com.bbpl.mycredaxis&pcampaignid=web_share'}>
              <svg
                className="md-store-icon md-playstore-icon"
                viewBox="0 0 512 512"
                width="28"
                height="28"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Blue */}
                <path
                  fill="#4285F4"
                  d="M32.3 20.5c-6.1 6.5-9.8 16.5-9.8 29.5v412c0 13 3.7 23 9.8 29.5L264.7 256 32.3 20.5z"
                />
                {/* Green */}
                <path
                  fill="#34A853"
                  d="M342.5 333.8L264.7 256 32.3 491.5c9.8 10.4 25.8 11.7 43.8 1.5l266.4-159.2z"
                />
                {/* Yellow */}
                <path
                  fill="#FBBC04"
                  d="M420.3 211.8l-77.8-46.5L264.7 256l77.8 77.8 77.8-46.5c23-13.7 23-61.8 0-75.5z"
                />
                {/* Red */}
                <path
                  fill="#EA4335"
                  d="M342.5 165.3L76.1 6.1C58.1-4.1 42.1-2.6 32.3 7.8L264.7 256l77.8-90.7z"
                />
              </svg>
              <div className="md-store-text">
                <span>Get it on</span>
                <strong>Google Play</strong>
              </div>
            </button>
          </div>

          {/* Trust Badges Footer */}
          <div className="md-trust-footer">
            <div className="md-trust-item">
              <FaLandmark className="md-trust-icon" />
              <span>REGULATED BANKS</span>
            </div>
            <div className="md-trust-item">
              <FaShieldAlt className="md-trust-icon" />
              <span>ENCRYPTED</span>
            </div>
            <div className="md-trust-item">
              <FaCheckCircle className="md-trust-icon" />
              <span>CANCEL ANYTIME</span>
            </div>
          </div>

        </div>
      </section>

      {/* 🔥 Naya Cards Section */}
      <section className="md-cards-section">
        <div className="md-features-grid">
          {/* Card 1: Approve Once */}
          <div className="md-feature-card" style={{ backgroundImage: `url('/images/Ao.png')` }}>
            <div className="md-card-overlay"></div>
            <div className="md-card-content-top"></div>
            <div className="md-card-footer">
              <div className="md-card-badge-icon">
                <FaFingerprint />
              </div>
              <span className="md-card-title">Approve once</span>
            </div>
          </div>

          {/* Card 2: Pays on Time */}
          <div className="md-feature-card" style={{ backgroundImage: `url('/images/pay.png')` }}>
            <div className="md-card-overlay"></div>
            <div className="md-card-content-top"></div>
            <div className="md-card-footer">
              <div className="md-card-badge-icon">
                <FaCalendarCheck />
              </div>
              <span className="md-card-title">Pays on time</span>
            </div>
          </div>

          {/* Card 3: Bank-grade safe */}
          <div className="md-feature-card" style={{ backgroundImage: `url('/images/security.png')` }}>
            <div className="md-card-overlay"></div>
            <div className="md-card-content-top"></div>
            <div className="md-card-footer">
              <div className="md-card-badge-icon">
                <FaShieldAlt />
              </div>
              <span className="md-card-title">Bank-grade safe</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Mandate — details */}
      <section className="md-about-section">
        <div className="md-about-inner">
          <p className="md-about-eyebrow">UPI Autopay on CredAxis</p>
          <h2 className="md-about-title">
            Approve once.
            <br />
            <span className="md-handled-highlight">Stay on track every month.</span>
          </h2>
          <p className="md-about-lead">
            A CredAxis Mandate is a UPI Autopay setup for your EMI, credit bill,
            or instalment. You confirm it once in your UPI app. After that, the
            due amount is collected on schedule — with a pre-debit alert before
            each run — so you do not chase the same payment every cycle.
          </p>
          <p className="md-about-lead md-about-lead-secondary">
            Mandates are ideal when the amount and date are known in advance:
            device EMIs, credit repayments, and partner-linked dues inside
            CredAxis. You keep full control — pause, change, or cancel from your
            UPI app whenever you need — while CredAxis and your bank handle the
            repeat collection on regulated rails.
          </p>

          <div className="md-about-grid">
            <div className="md-about-card">
              <p className="md-about-card-label">How it works</p>
              <h3>From setup to autopay</h3>
              <ol>
                <li>
                  Open CredAxis and choose the EMI, bill, or instalment you want
                  on Autopay.
                </li>
                <li>
                  Review amount, start date, frequency, and end date — then
                  approve once in your UPI app.
                </li>
                <li>
                  Before every collection you get a pre-debit notification so
                  you can keep the balance ready.
                </li>
                <li>
                  On the due date Autopay runs automatically. No OTP chase, no
                  queue, and no monthly payment stress.
                </li>
                <li>
                  After each run, status updates in CredAxis so you can see what
                  succeeded and what is coming next.
                </li>
              </ol>
            </div>
            <div className="md-about-card">
              <p className="md-about-card-label">Your control</p>
              <h3>Safe by design</h3>
              <ul>
                <li>
                  Pause, resume, modify, or revoke anytime from your UPI /
                  banking app.
                </li>
                <li>
                  Runs on regulated UPI Autopay rails with bank-grade security —
                  never a silent surprise debit.
                </li>
                <li>
                  Amount and frequency are locked at creation; changes need your
                  fresh consent where required.
                </li>
                <li>
                  Track upcoming and past executions clearly inside CredAxis.
                </li>
                <li>
                  Works with supported banks and UPI apps linked to your account.
                </li>
              </ul>
            </div>
            <div className="md-about-card">
              <p className="md-about-card-label">Where it helps</p>
              <h3>Everyday use cases</h3>
              <ul>
                <li>Device / product EMIs linked through CredAxis partners.</li>
                <li>Credit line or card-style repayments on a fixed schedule.</li>
                <li>Recurring instalments where the due date rarely changes.</li>
                <li>
                  Customers who want Autopay without remembering every cycle.
                </li>
                <li>
                  Partners who need predictable collections with fewer follow-ups.
                </li>
              </ul>
            </div>
            <div className="md-about-card">
              <p className="md-about-card-label">Good to know</p>
              <h3>Before you set it up</h3>
              <ul>
                <li>
                  Keep enough balance before the debit date — failed runs can
                  affect your repayment status.
                </li>
                <li>
                  Pre-debit alerts are your reminder window; act early if you
                  need to pause or top up.
                </li>
                <li>
                  If you revoke a mandate, future Autopay stops — set up a new
                  one when you want Autopay again.
                </li>
                <li>
                  Bank / UPI app rules still apply for limits, authentication,
                  and eligible categories.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages — Customers & Merchants */}
      <section className="md-adv-section">
        <div className="md-adv-shell">
          <div className="md-adv-intro">
            <p className="md-about-eyebrow">Why Autopay</p>
            <h2 className="md-adv-title">
              Built for customers.
              <span className="md-handled-highlight"> Built for partners.</span>
            </h2>
            <p className="md-adv-lead">
              Whether you are paying on CredAxis or collecting as a partner,
              Mandates make recurring money movement clearer, safer, and easier
              to manage.
            </p>
          </div>

          <div className="md-adv-inner">
            <div className="md-adv-col">
              <h3 className="md-adv-heading">For customers</h3>
              <ol className="md-adv-list">
                {[
                  {
                    title: "Never miss a due date",
                    text: "Autopay keeps EMIs and credit bills on schedule — lower chance of late fees and follow-up reminders.",
                  },
                  {
                    title: "One approval, many months",
                    text: "Confirm once on UPI. CredAxis and your bank handle the repeat cycle until the mandate ends or you stop it.",
                  },
                  {
                    title: "Clear limits from day one",
                    text: "Amount, frequency, and tenure are set when you create the mandate — you know what will be collected.",
                  },
                  {
                    title: "Pause or cancel anytime",
                    text: "Modify, revoke, pause, or unpause from your UPI app in a few taps whenever plans change.",
                  },
                  {
                    title: "No monthly payment grind",
                    text: "Skip queues, OTPs, and monthly payment stress every billing cycle.",
                  },
                  {
                    title: "Fully digital setup",
                    text: "No forms, no branch visit — mandate starts inside the CredAxis app and completes on UPI.",
                  },
                  {
                    title: "Alert before every debit",
                    text: "Pre-debit notification about a day ahead so you can keep the required balance ready.",
                  },
                  {
                    title: "Visible payment history",
                    text: "See upcoming and past mandate runs in CredAxis — transparency without digging through SMS.",
                  },
                  {
                    title: "Works with your bank app",
                    text: "Uses the UPI Autopay experience you already know, across supported banks and apps.",
                  },
                ].map((item, i) => (
                  <li key={i} className="md-adv-item">
                    <span className="md-adv-num" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="md-adv-copy">
                      <p className="md-adv-item-title">{item.title}</p>
                      <p className="md-adv-text">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="md-adv-col">
              <h3 className="md-adv-heading">For merchants & partners</h3>
              <ol className="md-adv-list">
                {[
                  {
                    title: "Faster customer onboarding",
                    text: "Digital Autopay setup cuts turnaround time versus chasing each EMI with manual collection.",
                  },
                  {
                    title: "More predictable collections",
                    text: "Scheduled debits mean fewer missed dues and fewer last-minute recovery calls.",
                  },
                  {
                    title: "Cleaner support load",
                    text: "Less payment-failed or forgot-EMI noise around every due date for your team.",
                  },
                  {
                    title: "Better retention",
                    text: "A smooth repayment journey builds trust and longer relationships with customers.",
                  },
                  {
                    title: "Transparent, bank-backed flow",
                    text: "UPI Autopay with alerts — customers see what will be collected and when.",
                  },
                  {
                    title: "Flexible product fit",
                    text: "Register mandates that match the right product, amount, and tenure for each customer.",
                  },
                  {
                    title: "Recurrence that matches reality",
                    text: "Choose EMI / bill cycles that fit how your customers actually pay month to month.",
                  },
                  {
                    title: "Fewer cash follow-ups",
                    text: "Replace repeated collection visits with a reliable Autopay rail customers already understand.",
                  },
                  {
                    title: "Scale without chaos",
                    text: "As your book grows, standardised mandate flows keep collections organised across areas and modules.",
                  },
                ].map((item, i) => (
                  <li key={i} className="md-adv-item">
                    <span className="md-adv-num" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="md-adv-copy">
                      <p className="md-adv-item-title">{item.title}</p>
                      <p className="md-adv-text">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* 🔥 Payment Handled Section (Left Image, Right Content) */}
      <section className="md-handled-section">
        <div className="md-handled-container">
          
          {/* Left Side: Phones Mockup Image */}
          <div className="md-handled-image-wrapper">
            <img src="/images/app-phone.png" alt="Phones Mockup" className="md-handled-img" />
          </div>

          {/* Right Side: Content & Actions */}
          <div className="md-handled-content">
            <h2 className="md-handled-title">
              Every payment, <br />
              <span className="md-handled-highlight">handled for you.</span>
            </h2>

            {/* Store Buttons */}
            <div className="md-handled-store-row">
              

              <button className="md-store-btn" onClick={() => window.location.href = 'https://play.google.com/store/apps/details?id=com.bbpl.mycredaxis&pcampaignid=web_share'}>
                <svg
                  className="md-store-icon md-playstore-icon"
                  viewBox="0 0 512 512"
                  width="28"
                  height="28"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Blue */}
                  <path
                    fill="#4285F4"
                    d="M32.3 20.5c-6.1 6.5-9.8 16.5-9.8 29.5v412c0 13 3.7 23 9.8 29.5L264.7 256 32.3 20.5z"
                  />
                  {/* Green */}
                  <path
                    fill="#34A853"
                    d="M342.5 333.8L264.7 256 32.3 491.5c9.8 10.4 25.8 11.7 43.8 1.5l266.4-159.2z"
                  />
                  {/* Yellow */}
                  <path
                    fill="#FBBC04"
                    d="M420.3 211.8l-77.8-46.5L264.7 256l77.8 77.8 77.8-46.5c23-13.7 23-61.8 0-75.5z"
                  />
                  {/* Red */}
                  <path
                    fill="#EA4335"
                    d="M342.5 165.3L76.1 6.1C58.1-4.1 42.1-2.6 32.3 7.8L264.7 256l77.8-90.7z"
                  />
                </svg>
                <div className="md-store-text">
                  <span>Get it on</span>
                  <strong>Google Play</strong>
                </div>
              </button>

              <button className="md-primary-cta-btn" onClick={() => window.location.href = '/'}>
                Set up Mandate <span className="md-cta-arrow">→</span>
              </button>
            </div>

          </div>

        </div>
      </section>
      
    </div>
  );
}