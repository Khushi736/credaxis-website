import React, { useEffect } from "react";
import {
  FaArrowRight,
  FaArrowDown,
  FaShieldAlt,
  FaLock,
  FaCalendarAlt,
  FaBell,
  FaClock,
  FaCreditCard,
  FaCheck,
  FaCogs,
  FaSyncAlt,
  FaChartBar,
  FaHeadset,
  FaUserShield,
  FaMobileAlt,
} from "react-icons/fa";
import "./DeviceLockPage.css";

const customerAdvantages = [
  {
    title: "Clear reminders before action",
    text: "Get notified when an EMI is due — so you can pay before any device restriction starts.",
  },
  {
    title: "Fair grace window",
    text: "A defined grace period gives you time to complete payment without sudden lockouts.",
  },
  {
    title: "Instant unlock on payment",
    text: "Once the outstanding EMI clears, device access is restored automatically — no branch visit.",
  },
  {
    title: "Transparent status",
    text: "Know whether your device is active, reminded, or restricted — fewer surprises.",
  },
  {
    title: "Protects your purchase journey",
    text: "Financed devices stay usable when you stay current on EMI — aligned incentives for both sides.",
  },
  {
    title: "Works with CredAxis repayments",
    text: "Pay through CredAxis-supported flows; Master Key Pro follows the payment status in real time.",
  },
  {
    title: "Less collection pressure",
    text: "Automated nudges replace aggressive follow-ups when you simply need a reminder to pay.",
  },
  {
    title: "Secure by design",
    text: "Remote lock / unlock runs on controlled workflows — built for financed-device compliance.",
  },
];

const partnerAdvantages = [
  {
    title: "Lower default risk",
    text: "Payment-linked device control encourages on-time EMI and reduces prolonged delinquency.",
  },
  {
    title: "Automated recovery workflow",
    text: "Reminders, grace, lock, and unlock run as a chain — less manual chasing for your team.",
  },
  {
    title: "Real-time payment sync",
    text: "Device state tracks EMI status so unlocks happen as soon as payment clears.",
  },
  {
    title: "Fewer field follow-ups",
    text: "Replace repeated collection visits with system-driven reminders and controlled access.",
  },
  {
    title: "Stronger portfolio health",
    text: "Consistent EMI discipline across financed devices improves recovery ratios over time.",
  },
  {
    title: "Clear customer communication",
    text: "Multi-channel alerts keep customers informed before any restriction is applied.",
  },
  {
    title: "Scales with your book",
    text: "Standardised Master Key Pro flows stay organised as you add more devices and partners.",
  },
  {
    title: "Built for CredAxis partners",
    text: "Fits the CredAxis lending / EMI journey — from due date to restored access in one loop.",
  },
];

const DeviceLockPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="dlc-container">
      <header className="dlc-hero">
        <div className="dlc-top-bar">
          <div className="brand-logo-container">
            <img
              src="/images/logos.png"
              alt="MyCredAxis Logo"
              className="brand-logo-img"
            />
            <span className="brand-name">
              <span className="brand-my">My</span>CredAxis
            </span>
          </div>
        </div>

        <div className="dlc-hero-content">
          <div className="dlc-hero-text">
            <span className="dlc-badge">Master Key Pro</span>
            <h1>Device protection tied to every EMI.</h1>
            <p className="dlc-subtitle">
              Automated reminders, controlled lock, and instant unlock when
              payment clears.
            </p>
            <p className="dlc-description">
              Master Key Pro helps CredAxis partners secure financed devices
              without daily manual follow-ups. When an EMI is due, customers get
              reminders. If payment still does not arrive after grace, the
              device can be restricted. Pay the EMI — and access comes back
              automatically.
            </p>

            <div className="dlc-hero-points">
              <div className="dlc-hero-point">
                <FaBell />
                <span>Smart payment reminders</span>
              </div>
              <div className="dlc-hero-point">
                <FaLock />
                <span>Payment-linked device control</span>
              </div>
              <div className="dlc-hero-point">
                <FaCheck />
                <span>Auto unlock on settlement</span>
              </div>
            </div>

            <div className="dlc-hero-buttons">
              <button
                className="dlc-btn-primary"
                onClick={() =>
                  (window.location.href =
                    "https://play.google.com/store/apps/details?id=com.bbpl.mycredaxis&pcampaignid=web_share")
                }
              >
                Get App <FaArrowRight />
              </button>
              <button
                className="dlc-btn-secondary"
                onClick={() =>
                  document
                    .getElementById("how-it-works")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore How It Works <FaArrowDown />
              </button>
            </div>
          </div>

          <div className="dlc-hero-image-wrapper">
            <img
              src="/images/dlc_hero.png"
              alt="Master Key Pro"
              className="dlc-hero-right-img"
            />
          </div>
        </div>
      </header>

      <section className="dlc-section how-it-works" id="how-it-works">
        <div className="section-header text-center">
          <span className="dlc-badge">How it works</span>
          <h2>Smart protection. Simple flow.</h2>
          <p className="section-lead">
            Six steps from EMI due to restored access — clear for customers,
            reliable for partners.
          </p>
        </div>

        <div className="dlc-flow-grid">
          {[
            {
              step: "01",
              title: "EMI Due",
              desc: "EMI is scheduled and the customer is expected to pay by the due date.",
              icon: <FaCalendarAlt />,
            },
            {
              step: "02",
              title: "Payment Reminder",
              desc: "Reminders go out via SMS, email, and push before and on the due date.",
              icon: <FaBell />,
            },
            {
              step: "03",
              title: "Grace Period",
              desc: "A short grace window lets the customer complete payment without restriction.",
              icon: <FaClock />,
            },
            {
              step: "04",
              title: "Device Locked",
              desc: "If payment is still missing, the device is restricted to encourage settlement.",
              icon: <FaLock />,
            },
            {
              step: "05",
              title: "EMI Paid",
              desc: "Customer pays through available CredAxis / partner payment channels.",
              icon: <FaCreditCard />,
            },
            {
              step: "06",
              title: "Device Unlocked",
              desc: "Access is restored automatically once payment status clears.",
              icon: <FaCheck />,
            },
          ].map((item, idx) => (
            <div className="dlc-flow-step" key={idx}>
              <div className="flow-icon-wrapper">
                <div className="flow-icon">{item.icon}</div>
                <span className="step-badge">{item.step}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="dlc-detail-section">
        <div className="dlc-detail-shell">
          <p className="dlc-badge">What is Master Key Pro?</p>
          <h2 className="dlc-detail-title">
            Payment-driven device control
            <span className="highlight-blue"> for financed hardware.</span>
          </h2>
          <p className="dlc-detail-lead">
            Master Key Pro connects EMI status with device access. Partners get a
            structured recovery path. Customers get warnings first — and unlock
            the moment they pay. It is built for CredAxis lending journeys where
            the device itself is part of the credit risk story.
          </p>

          <div className="dlc-detail-grid">
            <div className="dlc-detail-card">
              <p className="dlc-detail-label">For lenders</p>
              <h3>Recover with less chase</h3>
              <ul>
                <li>Monitor EMI status against enrolled devices in near real time.</li>
                <li>Trigger reminder → grace → lock without spreadsheet ops.</li>
                <li>Unlock automatically when settlement is confirmed.</li>
                <li>Reduce prolonged defaults on financed smartphone portfolios.</li>
              </ul>
            </div>
            <div className="dlc-detail-card">
              <p className="dlc-detail-label">For customers</p>
              <h3>Fair, predictable rules</h3>
              <ul>
                <li>Know when an EMI is due and when a reminder has been sent.</li>
                <li>Use the grace period to pay before any restriction.</li>
                <li>Get the device back to normal as soon as EMI clears.</li>
                <li>Stay in control by paying on time through CredAxis flows.</li>
              </ul>
            </div>
            <div className="dlc-detail-card">
              <p className="dlc-detail-label">Where it fits</p>
              <h3>Everyday use cases</h3>
              <ul>
                <li>Partner-financed smartphones and similar devices.</li>
                <li>EMI books where hardware access supports repayment discipline.</li>
                <li>Portfolios that need scalable reminders without field teams.</li>
                <li>CredAxis partners running DLC-style modules under Master Key Pro.</li>
              </ul>
            </div>
            <div className="dlc-detail-card">
              <p className="dlc-detail-label">Good to know</p>
              <h3>Before you enrol</h3>
              <ul>
                <li>Customers should understand reminder and lock policy at purchase.</li>
                <li>Unlock depends on confirmed payment status in the system.</li>
                <li>Network / device eligibility still follows partner enrolment rules.</li>
                <li>Support teams can guide customers to pay and restore access quickly.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="dlc-adv-section">
        <div className="dlc-adv-shell">
          <div className="dlc-adv-intro">
            <span className="dlc-badge">Why Master Key Pro</span>
            <h2 className="dlc-adv-title">
              Built for customers.
              <span className="highlight-blue"> Built for partners.</span>
            </h2>
            <p className="dlc-adv-lead">
              The same Autopay-style clarity we bring to mandates — applied to
              financed devices: warn early, act fairly, restore instantly.
            </p>
          </div>

          <div className="dlc-adv-inner">
            <div className="dlc-adv-col">
              <h3 className="dlc-adv-heading">
                <FaUserShield /> For customers
              </h3>
              <ol className="dlc-adv-list">
                {customerAdvantages.map((item, i) => (
                  <li key={i} className="dlc-adv-item">
                    <span className="dlc-adv-num" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="dlc-adv-copy">
                      <p className="dlc-adv-item-title">{item.title}</p>
                      <p className="dlc-adv-text">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="dlc-adv-col">
              <h3 className="dlc-adv-heading">
                <FaMobileAlt /> For merchants & partners
              </h3>
              <ol className="dlc-adv-list">
                {partnerAdvantages.map((item, i) => (
                  <li key={i} className="dlc-adv-item">
                    <span className="dlc-adv-num" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="dlc-adv-copy">
                      <p className="dlc-adv-item-title">{item.title}</p>
                      <p className="dlc-adv-text">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="dlc-section features-section">
        <div className="section-header text-center">
          <span className="dlc-badge">Why CredAxis Master Key Pro</span>
          <h2>
            Built for <span className="highlight-blue">Security.</span> Designed
            for <span className="highlight-purple">Simplicity.</span>
          </h2>
        </div>

        <div className="dlc-features-grid">
          {[
            {
              title: "Secure & Reliable",
              desc: "Controlled lock / unlock workflows protect financed devices and payment discipline.",
              icon: <FaShieldAlt />,
            },
            {
              title: "Automated Workflow",
              desc: "End-to-end automation cuts manual chasing and human error across EMI cycles.",
              icon: <FaCogs />,
            },
            {
              title: "Real-time Sync",
              desc: "Device status tracks payment events for faster unlocks and clearer ops visibility.",
              icon: <FaSyncAlt />,
            },
            {
              title: "Smart Reminders",
              desc: "Multi-channel nudges before restriction — fair warning, better collection odds.",
              icon: <FaBell />,
            },
            {
              title: "Better Recovery",
              desc: "Improves EMI collection efficiency and reduces prolonged default risk.",
              icon: <FaChartBar />,
            },
          ].map((feat, idx) => (
            <div className="dlc-feature-card" key={idx}>
              <div className="feature-icon">{feat.icon}</div>
              <h3>{feat.title}</h3>
              <p>{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="dlc-section dlc-overview-section">
        <div className="dlc-overview-container">
          <div className="dlc-overview-image-wrapper">
            <img
              src="/images/dlc-feature.png"
              alt="Master Key Pro overview"
              className="dlc-overview-img"
            />
          </div>

          <div className="dlc-overview-content">
            <h2>
              Smart device locking for
              <br />
              seamless EMI recovery
            </h2>
            <p className="dlc-overview-desc">
              Master Key Pro is CredAxis device protection for financed
              hardware — built to lower default risk and streamline EMI
              collection without losing customer fairness.
            </p>

            <div className="dlc-overview-points">
              <div className="overview-point-item">
                <h4>How it works</h4>
                <p>
                  It ties loan / EMI status to device controls so reminders and
                  restrictions fire from real payment events — not guesswork.
                </p>
              </div>

              <div className="overview-point-item">
                <h4>When it applies</h4>
                <p>
                  After due date and grace, if EMI is still unpaid, controlled
                  restriction can activate. Clear payment restores access.
                </p>
              </div>

              <div className="overview-point-item">
                <h4>Maintaining EMI compliance</h4>
                <p>
                  Reminders first, lock only when needed, unlock on settlement —
                  fewer manual follow-ups and stronger on-time behaviour.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dlc-cta-banner">
        <div className="cta-content">
          <div className="cta-icon-large">
            <FaHeadset />
          </div>
          <div>
            <h2>
              Take control of financed devices
              <br />
              with CredAxis Master Key Pro.
            </h2>
            <p>Explore the app flow and see how reminder → lock → unlock works.</p>
          </div>
        </div>
        <button
          className="dlc-btn-primary"
          onClick={() =>
            (window.location.href =
              "https://play.google.com/store/apps/details?id=com.bbpl.mycredaxis&pcampaignid=web_share")
          }
        >
          Explore on App <FaArrowRight />
        </button>
      </section>
    </div>
  );
};

export default DeviceLockPage;
