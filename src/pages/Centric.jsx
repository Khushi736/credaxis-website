import React from "react";
import "./Centric.css";

import {
  FaChevronLeft,
  FaChevronRight,
  FaEllipsisH,
  FaCheckSquare,
  FaDownload,
  FaFilePdf,
  FaFileExport,
  FaCircle,
  FaDatabase,
  FaShieldAlt,
  FaMobileAlt,
  FaArrowRight,
  FaCode,
  FaCheckCircle,
  FaServer,
} from "react-icons/fa";

const modules = [
  [
    "01",
    "Personal Details",
    "MATCH 100%",
    "blue",
    [
      ["Full Name", "AARAV M. SHARMA"],
      ["Gender", "Male"],
      ["Date of Birth", "2000-01-08"],
      ["Reported Income", "₹75,000 / mo"],
      ["Father's Name", "RAJESH SHARMA"],
    ],
  ],
  [
    "02",
    "Contact Records",
    "5 TELECOM LINES",
    "purple",
    [
      ["Home Phone", "9876543210"],
      ["Mobile Phone", "9912345678"],
      ["Masked PAN Mobile", "98XXXXXXXX"],
      ["Email Address", "aarav.sharma@example.com"],
      ["PAN Mapped Email", "a*****@example.com"],
    ],
  ],
  [
    "03",
    "Identity Documents",
    "3 DOCS FOUND",
    "green",
    [
      ["PAN", "ABCDE1234F"],
      ["Name", "AARAV M. SHARMA"],
      ["Aadhaar (UIDAI)", "XXXX XXXX 1234"],
      ["Driving Licence", "DL04202300908765"],
    ],
  ],
  [
    "04",
    "Addresses History",
    "PIN 560103",
    "amber",
    [
      ["Primary Residence", "Flat 402, Skyline Residency"],
      ["City", "Bengaluru, Karnataka - 560103"],
      ["Permanent Residence", "B-12, Green Park Avenue"],
      ["Status", "Verified"],
    ],
  ],
  [
    "05",
    "Employment & PF Intelligence",
    "UAN LINKED",
    "blue",
    [
      ["Employer", "Nexus Digital Technologies Pvt Ltd"],
      ["UAN", "100987654321"],
      ["Joining", "2023-01-13"],
      ["PF - MAY-26", "₹1,674.19"],
      ["PF - APR-26", "₹1,756.34"],
    ],
  ],
  [
    "06",
    "Mobile Intelligence",
    "HLR VERIFIED",
    "cyan",
    [
      ["Valid number", "Yes"],
      ["SIM Status", "Connected"],
      ["Connection Type", "Prepaid"],
      ["Operator", "Jio / Jio"],
      ["Network Region", "Karnataka"],
    ],
  ],
];

const Phone = ({ stage = 1 }) => {
  return (
    <div className="phone">
      <div className="phone-top">
        <FaChevronLeft />
        <b>Centric</b>
        <FaEllipsisH />
      </div>

      {stage === 1 ? (
        <>
          <div className="phone-panel">
            <i>CENTRIC</i>

            <b>One number. Full identity picture.</b>

            <p>
              Verify the mobile with OTP and unlock KYC, employment, bank and
              risk signals in seconds.
            </p>
          </div>

          <label>WHO DO YOU WANT TO CHECK?</label>

          <div className="phone-input">
            <span>Full name</span>
            <b>Aarav M. Sharma</b>
          </div>

          <div className="phone-input">
            <span>10-digit mobile number</span>
            <b>+91 98765 43210</b>
          </div>

          <div className="phone-note">
            <FaCheckSquare />
            <span>
              I confirm this person has given consent to fetch identity, KYC,
              employment and credit-related details.
            </span>
          </div>

          <button>
            Send OTP <FaArrowRight />
          </button>
        </>
      ) : (
        <>
          <div className="phone-panel success">
            <i>VERIFIED SUCCESS</i>

            <b>AARAV M. SHARMA</b>

            <small>+91 98765 43210 · PAN ABCDE1234F</small>
          </div>

          {[
            "Personal Details",
            "Contact Records",
            "Identity Documents",
            "Address History",
            "Employment & EPFO Filings",
            "SIM & Carrier Intelligence",
          ].map((item, index) => (
            <div className={`phone-row r${index}`} key={item}>
              <span>{item}</span>
              <FaChevronRight />
            </div>
          ))}

          <div className="phone-buttons">
            <button>
              <FaFilePdf />
              PDF Report
            </button>

            <button>Back</button>
          </div>
        </>
      )}
    </div>
  );
};

export default function Centric() {
  return (
    <main className="centric-ui">
      {/* =========================
          HERO
      ========================== */}

      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">
            CENTRIC
            <small>INTELLIGENCE</small>
          </span>

          <h1>
            One number.
            <br />
            Full identity picture.
          </h1>

          <p>
            Verify the mobile with OTP and unlock personal, KYC, employment,
            bank and risk details in seconds.
          </p>

          <div className="about">
            <b>
              <FaCircle />
              What is Centric?
            </b>

            <p>
              Centric runs an OTP-consented identity check on a mobile number.
              After the person confirms the OTP, MyCredAxis fetches linked
              name, IDs, addresses, employment, masked bank details, credit
              score and SIM risk — then you can download a branded report.
            </p>
          </div>

          <div className="how">
            <b>HOW IT WORKS</b>

            <ol>
              <li>Enter name and mobile, then give consent.</li>
              <li>Pay the check fee (online, wallet or coins).</li>
              <li>Verify OTP and open the full report + PDF.</li>
            </ol>
          </div>
        </div>

        <div className="hero-phones">
          <Phone />
          <Phone stage={2} />
        </div>
      </section>

      {/* =========================
          METRICS
      ========================== */}

      <section className="metrics">
        <div>
          <small>VERIFICATION VECTOR</small>
          <b>1 Mobile #</b>
          <p>Single OTP authorization</p>
        </div>

        <div>
          <small>REPORT MODULES</small>
          <b>6 Cross-Checks</b>
          <p>KYC, EPFO, SIM, PAN, Bureau, Device</p>
        </div>

        <div>
          <small>TURNAROUND SPEED</small>
          <b>&lt; 3.2s</b>
          <p>Synchronous multi-source pull</p>
        </div>

        <div>
          <small>EPFO PAYROLL DEPTH</small>
          <b>9+ Months</b>
          <p>Direct salary & staff headcount ledger</p>
        </div>
      </section>

      {/* =========================
          IDENTITY LAYERS
      ========================== */}

      <section className="layers">
        <span className="eyebrow">
          GRANULAR FORENSIC
          <small>TELEMETRY</small>
        </span>

        <h2>The 6 Identity Layers Unlocked</h2>

        <p>
          Derived directly from Centric's real-time checks on demo subject{" "}
          <b>Aarav M. Sharma (+91 98765 43210)</b>.
        </p>

        <button className="export">
          <FaFileExport />
          Export Verified Audit (PDF)
        </button>

        <div className="module-grid">
          {modules.map(([id, title, tag, tone, rows]) => (
            <article className={`module ${tone}`} key={id}>
              <header>
                <small>
                  <FaDatabase />
                  MODULE {id}
                </small>

                <span>{tag}</span>
              </header>

              <h3>{title}</h3>

              <p>
                Cross-verified intelligence extracted across banking and
                bureau networks.
              </p>

              <div className="module-data">
                {rows.map(([key, value]) => (
                  <div key={key}>
                    <small>{key}</small>
                    <b>{value}</b>
                  </div>
                ))}
              </div>

              <footer>
                <span>Cross-referenced: 4 Bureau Engines</span>

                <b>
                  <FaCheckCircle />
                </b>
              </footer>
            </article>
          ))}
        </div>
      </section>

      {/* =========================
          PRODUCTION VIEWS
      ========================== */}

      <section className="production">
        <span className="eyebrow">
          HIGH-FIDELITY APP
          <small>TOUR</small>
        </span>

        <h2>Exact Production Views</h2>

        <p>
          See how merchants, risk evaluators, and underwriters navigate the
          four key stages of a Centric inquiry.
        </p>

        <div className="stage-grid">
          {[1, 2, 2, 1].map((stage, index) => (
            <div key={index}>
              <b>
                Stage 0{index + 1}:{" "}
                {
                  [
                    "Input & Consent",
                    "Overview Menu",
                    "Employment & PF",
                    "Hardware Verified",
                  ][index]
                }
              </b>

              <small>Screen {index + 1}/4</small>

              <Phone stage={stage} />
            </div>
          ))}
        </div>
      </section>

      {/* =========================
          AUDIT
      ========================== */}

      <section className="audit">
        <div>
          <span className="eyebrow">
            <FaShieldAlt />
            BANK-GRADE IDENTITY AUDIT PIPELINE
          </span>

          <h2>
            Instant Risk Mitigation for Lenders, Fintechs & HR Operators
          </h2>

          <p>
            Centric completely replaces lengthy KYC document upload funnels
            with an instantaneous, 100% consent-driven OTP check. Eliminate
            identity fraud, ghost employees, and mismatched banking accounts
            in a single API roundtrip.
          </p>

          <div className="audit-features">
            <div>
              <b>
                <FaDatabase />
                EPFO Payroll Audits
              </b>

              <p>
                Access exact monthly PF deposit totals and employer workforce
                counts.
              </p>
            </div>

            <div>
              <b>
                <FaMobileAlt />
                SIM Swap Defense
              </b>

              <p>
                Live carrier HLR ping checks protect against account takeovers.
              </p>
            </div>
          </div>
        </div>

        <div className="terminal">
          <header>
            <small>
              <FaServer />
              CENTRIC REST API v2
            </small>

            <b>200 OK · 184ms</b>
          </header>

          <pre>
{`POST /v2/centric/otp-inquiry
{
  "mobile": "919876543210",
  "full_name": "Aarav Sharma",
  "consent": true,
  "depth": "full_identity_epfo"
}`}
          </pre>

          <button>
            <FaDownload />
            Download Aarav Sharma's Report (PDF)
          </button>

          <button>
            <FaCode />
            Generate Sandbox API Keys
          </button>

          <small>
            DPDP 2023 Compliant · Indian Data Residency Assured
          </small>
        </div>
      </section>
    </main>
  );
}