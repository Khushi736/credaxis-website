import { useEffect, useState, useRef } from "react";
import "../App.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom"; // NAYA IMPORT



function Home() {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFaqExpanded, setIsFaqExpanded] = useState(false);
  const [activeCol, setActiveCol] = useState(null);
  
  // App.jsx mein ye state add karein
  const [openFaqIndex, setOpenFaqIndex] = useState(null); 

  const toggleFaq = (index) => {
    // Agar wahi click kiya hai jo open hai, toh use band kar do, warna naya kholo
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };
      
  // const handleWidgetClick = () => {
  //   if (!isExpanded) setIsExpanded(true);
  //   else setIsModalOpen(true);
  // };
  const handleWidgetClick = () => {
    if (isExpanded) {
      // Agar pehle se expanded hai, toh click karne par modal kholein
      setIsModalOpen(true);
    } else {
      // Agar band hai, toh expand karein
      setIsExpanded(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsExpanded(false); // Ye line card ko collapse karke icon mode mein le aayegi
    // hasVisitedModal ki zarurat ab nahi hai, isse hata dein
  };

  const faqData = [
    {
      title: "about CredAxis",
      desc: "CredAxis is a members-only club that rewards trustworthy individuals with financial and lifestyle progress. members are rewarded with exclusive perks and privileges for making sound financial decisions."
    },
    {
      title: "getting a membership",
      desc: "to become a member, you need a credit score of 750 or above. you can apply for membership by signing up on the app with your name and a valid mobile number. if your credit score makes the cut, we'll see you there."
    },
    {
      title: "checking your credit score",
      desc: "members can check and refresh their credit score on the app. we acquire the updated credit score through a CIBIL score soft inquiry without any extra charges."
    }
  ];
  const toggleCol = (index) => {
    // Agar same col pe dobara click kiya toh band kar do, warna naya open karo
    if (activeCol === index) {
      setActiveCol(null);
    } else {
      setActiveCol(index);
    }
  };
  // Typing Animation ke liye variants
  const textVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.08 } // 0.02 bahut fast tha, 0.05 zyada clear dikhega
    }
  };

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const revealOnLoad = () => {
      revealElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add("active");
        }
      });
    };

    const revealOnScroll = () => {
      revealElements.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
          // Jab section screen par aaye, animation chalao
          el.classList.add("active");
        } else {
          // YAHAN CHANGE KIYA HAI: 
          // Jab section screen se bahar jaye, toh class hata do taaki agli baar dobara chalu ho
          el.classList.remove("active");
        }
      });
    };
    setTimeout(revealOnLoad, 100);

    window.addEventListener("scroll", revealOnScroll);

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
        setIsExpanded(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", revealOnScroll);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      {/* ================================
            HERO SECTION
      ================================= */}

      <section className="hero-section">
        {/* Video Background */}
        <div className="video-container">
          <video autoPlay loop muted playsInline className="bg-video">
            <source src="/video/banner.mp4" type="video/mp4" />
          </video>
        </div>

        {/* ================= NAVBAR ================= */}

        <nav className="top-nav">
          <div className="logo">
            <img src="/images/logo.png" />
          </div>

          <div className="nav-right" style={{ paddingTop: "25px" }}>
    
            {/* SCREEN BLUR BACKDROP (Only visible when widget is expanded) */}
            <div 
              className={`widget-backdrop ${isExpanded && !isModalOpen ? 'active' : ''}`}
              onClick={() => setIsExpanded(false)} // Clicking outside shrinks it back
            ></div>

            {/* 3D GLASS WIDGET */}
            <div 
              className={`nav-glass-widget ${isExpanded ? 'expanded' : ''}`} 
              onClick={handleWidgetClick}
            >
              <div className="widget-inner">
                
                {/* FRONT: 56x56 Glass Icon */}
                {/* FRONT OF WIDGET */}
                <div className="widget-front">
                  {/* Ye icon sirf tab dikhega jab widget chhota hoga */}
                  <i className="bi bi-credit-card small-glass-icon"></i>
                  
                  {/* Ye Credit Card ka BACK design hai, jo sirf flip hone par dikhega */}
                  <div className="credit-card-back-ui">
                    <div className="magnetic-stripe"></div>
                    <div className="signature-box">
                      <span className="cvv-text">***</span>
                    </div>
                    <p className="support-text">If found, please return to IndusInd Bank.</p>
                  </div>
                </div>

                {/* BACK: Premium Glassmorphism Card (Screenshot 1 Style) */}
                <div className="widget-back premium-glass-card">
                  
                  {/* Diagonal Light Reflection/Glare */}
                  <div className="card-glare"></div>

                  {/* Top Header: Logo and Icon Button */}
                  <div className="card-header">
                    <div className="brand-logo">
                      <i className="bi bi-shield-check"></i>
                      <span>CredAxis</span>
                    </div>
                    <div className="card-icon-btn">
                      <i className="bi bi-credit-card-2-front-fill"></i>
                    </div>
                  </div>

                  {/* Center: Bank Name & Details */}
                  <div className="card-center">
                    <h3>IndusInd Bank</h3>
                    <p>RuPay Credit Card</p>
                  </div>

                  {/* Bottom Footer: Stacked Text (Left) and Arrow Button (Right) */}
                  <div className="card-footer">
                    
                    {/* Left Side: Stacked Texts */}
                    <div className="footer-left">
                      <h4 className="card-footer-h4">A REFLECTION OF CLARITY</h4>
                      <span className="members-only">CLICK TO VIEW DETAILS &rarr;</span>
                    </div>

                    {/* Right Side: Arrow Button */}
                    <div className="action-arrow-btn">
                      <i className="bi bi-arrow-up-right"></i>
                    </div>

                  </div>
                  {/* Hover Label */}
                  <div className="card-hover-content">
                    <span>Tap to Explore</span>
                    <i className="bi bi-arrow-right"></i>
                  </div>

                </div>

              </div>
            </div>
            
          </div>
        </nav>

        {/* ================= HERO CONTENT ================= */}

        <div className="hero-content reveal">
          <h1 className="hero-title serif-text lowercase">
            engineered for 
            <br />
            the elite
          </h1>

          <p className="hero-subtitle serif-text">
            Step into a curated financial ecosystem built for high achievers
            <br />
            We reward your financial discipline with unmatched privileges,
            <br />
            premium credit lines, and bespoke wealth tools
          </p>
        </div>

        {/* ================= DOWNLOAD QR ================= */}

        <div className="download-qr reveal">
          <div
            style={{
              width: "50px",
              height: "50px",
              background: "#fff",
              border: "2px solid #000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <i
              className="bi bi-qr-code"
              style={{
                color: "#000",
                fontSize: "30px",
              }}
            ></i>
          </div>

          <div
            style={{
              fontWeight: 700,
            }}
          >
            download
            <br />
            CredAxis
          </div>
        </div>
      </section>
            {/* =========================================
            STORY SECTION
      ========================================== */}

      {/* <section className="story-section">
        <h2 className="story-heading reveal">
          not everyone makes it in.
        </h2>

        <p className="story-para serif-text reveal">
          the story of CRED begins with trust. we believe individuals who've
          proven their trustworthiness{" "}
          <span style={{ color: "#fff" }}>
            deserve better: better experiences, better rewards, better rules.
          </span>{" "}
          this is the status quo we're building. make it to the club, and
          experience the ascension yourself.
        </p>
      </section> */}
      {/* =========================================
            SPATIAL UI FLOATING SCREENS
      ========================================== */}
      
      <section className="spatial-ui-section reveal">
        
        <div className="spatial-text-content">
          <h2 className="spatial-text-content serif-text lowercase reveal">
          everything you expect.
          <br />
          beautifully executed.
        </h2>
          <p className="spatial-text-content reveal">
          step into a frictionless financial ecosystem.
           from seamless payments to curated insights, 
           every interaction is engineered to keep you moving forward effortlessly.
        </p>
        </div>

        <div className="spatial-container reveal">
          
          {/* Back Left Screen (Small & Tilted) */}
          <div className="spatial-screen screen-left">
            <div className="glass-glare"></div>
            <img src="/images/sp1.jpeg" alt="UI Screen" />
          </div>

          {/* Main Center Screen (Large & Focused) */}
          <div className="spatial-screen screen-main">
            <div className="glass-glare"></div>
            <img src="/images/sp2.jpeg" alt="UI Screen" />
          </div>

          {/* Back Right Screen (Small & Tilted) */}
          <div className="spatial-screen screen-right">
            <div className="glass-glare"></div>
            <img src="/images/sp3.jpeg" alt="UI Screen" />
          </div>

        </div>
      </section>

      {/* =========================================
            DESERVE SECTION
      ========================================== */}

      {/* <section className="deserve-section">
        <h2 className="deserve-title serif-text lowercase reveal">
          all that you deserve.
          <br />
          and some more. 
        </h2>

        <p className="deserve-desc reveal">
          if you're a CRED member, you're already a step ahead. every experience
          you unlock takes you higher up the pedestal.
        </p>
      </section> */}


      {/* <section className="financial-core-section">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="financial-video"
        >
          <source src="/video/bubble.mp4" type="video/mp4" />
        </video>

        <div className="financial-overlay reveal">

          <div className="financial-content serif-text lowercase reveal">

            <h2>
              do more with your credit cards
            </h2>

            <p>
              manage your credit card expenses with ease and improve your financial health: receive timely reminders, track your spending, and get insights to make smarter financial decisions.
            </p>

          </div>

        </div>

      </section> */}

      <section className="financial-core-section">
        {/* Left Side: Video (Scroll-based) */}
        <div className="video-container-financial">
          <video
          autoPlay
          muted
          loop
          playsInline
          className="financial-video"
        >
          <source src="/video/card-spin.mp4" type="video/mp4" />
        </video>
        </div>

        {/* Right Side: Content */}
        <div className="financial-content serif-text lowercase reveal">
          <h2>smarter spending. <br/> better progress.</h2>
          <p>turn your credit card into a powerful financial tool. 
            receive timely updates, master your cash flow, and unlock
             the insights needed to reach your financial potential.</p>
        </div>
      </section>
      {/* =========================================
            UPGRADE SECTION
      ========================================== */}

      <section className="upgrade-section">
        <div className="upgrade-header reveal">
          <h2 className="upgrade-title serif-text lowercase">
            upgrade your life.
            <br />
            bit by bit.
          </h2>
        </div>

        <div className="cards-container reveal">
          <div className="feature-card card-green">
            <div className="card-tag">Scan & Pay</div>

            <h3 className="card-title serif-text lowercase">
              scan & pay
              <br />
              any upi qr
            </h3>

            <div className="card-visual">
              <img src="/images/upgrade1.png" alt="Scan and Pay" className="card-image portrait" />
            </div>

            <Link to="/scan-and-pay" className="know-more">
              know more <i className="bi bi-arrow-right"></i>
            </Link>
          </div>

          <div className="feature-card card-purple">
            <div className="card-tag">UPI on Credit</div>

            <h3 className="card-title serif-text lowercase">
              upi payments.
              <br />
              on credit.
            </h3>
             
            <div className="card-visual">
              <img src="/images/upg2.png" alt="Scan and Pay" className="card-image landscape" />
            </div>

            <Link to="/upi-on-credit" className="know-more">
              know more <i className="bi bi-arrow-right"></i>
            </Link>
          </div>

          <div className="feature-card card-pink">
            <div className="card-tag">Tap to Pay</div>

            <h3 className="card-title serif-text lowercase">
              tap your phone.
              <br />
              pay on credit.
            </h3>

            <div className="card-visual">
              <img src="/images/upg5.png" alt="Scan and Pay" className="card-image landscape " />
            </div>

            <div className="know-more">
              know more <i className="bi bi-arrow-right"></i>
            </div>
          </div>

          <div className="feature-card card-pink">
            <div className="card-tag">Pay Anyone</div>

            <h3 className="card-title serif-text lowercase">
              send money to
              <br />
              pay UPI app
            </h3>

            <div className="card-visual">
              <img src="/images/upg4.png" alt="Scan and Pay" className="card-image landscape" />
            </div>

            <div className="know-more">
              know more <i className="bi bi-arrow-right"></i>
            </div>
          </div>

          <div className="feature-card card-pink">
            <div className="card-tag">CredAxis Garage</div>

            <h3 className="card-title serif-text lowercase">
              manage your 
              <br />
              cars'vitals.
            </h3>

            <div className="card-visual">
              <img src="/images/upg3.png" alt="Scan and Pay" className="card-image portrait" />
            </div>

            <div className="know-more">
              know more <i className="bi bi-arrow-right"></i>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
            SECURITY SECTION
      ========================================== */}

      {/* <section className="security-section">
        <div className="security-icon reveal">
          <i className="bi bi-lock-fill"></i>
        </div>

        <h3 className="security-tag reveal">
          your data isn't our business. keeping it safe is.
        </h3>

        <p className="security-para serif-text reveal">
          all your personal data and transactions are{" "}
          <span style={{ color: "#fff" }}>
            encrypted and secured.
          </span>{" "}
          there's no room for mistakes because we didn't leave any.
        </p>
      </section> */}

      <section className="security-section">
        {/* Background Video */}
        {/* <video autoPlay loop muted playsInline className="security-video">
          <source src="/video/security1.mp4" type="video/mp4" />
        </video> */}

        {/* Intersection Observer container */}
        {(() => {
          const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: false });
          const fullText = "all your personal data and transactions are encrypted and secured. there's no room for mistakes because we didn't leave any.";

          return (
            <div ref={ref} className="security-content">
              
              <div className="security-icon reveal" >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  // Path public folder ke reference se denge
                  src="/animations/Shield.webm" 
                  style={{ 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "contain" 
                  }}
                />
              </div>

              <h3 className="security-tag serif-text lowercase reveal">
                your data isn't our business. keeping it safe is.
              </h3>

              <motion.p 
                className="security-para serif-text"
                variants={textVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"} 
              >
                {/* NAYA LOGIC: Pehle WORDS mein todna, phir LETTERS mein */}
                {fullText.split(" ").map((word, wordIndex) => (
                  <span 
                    key={wordIndex} 
                    style={{ 
                      display: "inline-block", 
                      whiteSpace: "nowrap", // Yeh pure word ko beech se tutne nahi dega!
                      marginRight: "0.25em" // Do words ke beech ka space
                    }}
                  >
                    {word.split("").map((char, charIndex) => (
                      <motion.span 
                        key={charIndex} 
                        variants={letterVariants} 
                        style={{ display: "inline-block" }} 
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </motion.p>
            </div>
          );
        })()}
      </section>

      {/* =========================================
            TRUSTED SECTION
      ========================================== */}
      <section className="trusted-section reveal">
        <div className="trusted-container">
          
          {/* Left Side: Text Content */}
          <div className="trusted-left">
            <span className="trusted-label">JOIN THE EXCLUSIVE CLUB</span>
            <h2 className="trusted-heading serif-text lowercase">
              excellence is<br />our baseline
            </h2>
          </div>

          {/* Right Side: Ratings */}
          <div className="trusted-right">
            
            {/* App Store Rating */}
            <div className="rating-block">
              <div className="stars">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
              </div>
              <div className="score">
                4.8<span className="out-of">/5</span>
              </div>
              <div className="store-label">APP STORE</div>
            </div>

            {/* Play Store Rating */}
            <div className="rating-block">
              <div className="stars">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
              </div>
              <div className="score">
                4.8<span className="out-of">/5</span>
              </div>
              <div className="store-label">PLAY STORE</div>
            </div>

          </div>
        </div>
      </section>
      

      {/* =========================================
            FOOTER
      ========================================== */}

      <section className="faq-section">
        {/* <div className="faq-header reveal">
          F A Q s <i className="bi bi-chevron-down"></i>
        </div> */}
        {/* 1. Clickable FAQ Header */}
        <div 
          className="faq-header reveal" 
          onClick={() => setIsFaqExpanded(!isFaqExpanded)}
          style={{ cursor: "pointer", userSelect: "none" }}
        >
          F A Q s <i className={`bi bi-chevron-${isFaqExpanded ? 'up' : 'down'}`}></i>
        </div>

        {/* 2. Expandable FAQ Content (Hidden by default) */}
        {/* <div className={`faq-content-container ${isFaqExpanded ? 'expanded' : ''}`}>
          <div className="faq-content-inner">
            
            
            <div className="faq-text-content">
              {faqData.map((faq, index) => (
                <div className="faq-item" key={index}>
                  <h3 className="faq-item-title">{faq.title}</h3>
                  <p className="faq-item-desc">{faq.desc}</p>
                </div>
              ))}
            </div>
            
          </div>
        </div> */}


         <div className={`faq-content-container ${isFaqExpanded ? 'expanded' : ''}`}>
          <div className="faq-content-inner">
            
            <div className="faq-text-content">
              {faqData.map((faq, index) => (
                <div className="faq-item" key={index}>
                  {/* Question Header */}
                  <div 
                    className="faq-item-header" 
                    onClick={() => toggleFaq(index)}
                    style={{ cursor: "pointer", display: "flex", justifyContent: "space-between" }}
                  >
                    <h3 className="faq-item-title">{faq.title}</h3>
                    {/* + ya - icon */}
                    <i className={`bi bi-${openFaqIndex === index ? 'dash' : 'plus'}`}></i>
                  </div>

                  {/* Answer (Sirf tab dikhega jab openFaqIndex match karega) */}
                  {openFaqIndex === index && (
                    <p className="faq-item-desc reveal active">
                      {faq.desc}
                    </p>
                  )}
                </div>
              ))}
            </div>
            
          </div>
        </div>

        
        {/* FAQ ke neeche footer start */}
        <div className="footer-content-wrapper reveal">
          
          {/* Left: Logo */}
          <div className="logo">
            <img src="/images/logo.png" alt="CredAxis Logo" style={{ width: "150px", height: "auto" }} />
            
          </div>

          <div className="footer-grid">
            
            {/* Column 1 */}
            <div className={`footer-col ${activeCol === 1 ? 'active' : ''}`}>
              <h4 onClick={() => toggleCol(1)}>Upgrades</h4>
              <ul>
                <li>Credit Cards</li>
                <li>Loans</li>
                <li>Insurance</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className={`footer-col ${activeCol === 2 ? 'active' : ''}`}>
              <h4 onClick={() => toggleCol(2)}>Payments</h4>
              <ul>
                <li>Utility Bills</li>
                <li>Rent Payment</li>
                <li>Education Fees</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className={`footer-col ${activeCol === 3 ? 'active' : ''}`}>
              <h4 onClick={() => toggleCol(3)}>Company</h4>
              <ul>
                <li><Link to="/about" style={{ color: "inherit", textDecoration: "none" }} >About Us</Link></li>
                <li><Link to="/not-found" style={{ color: "inherit", textDecoration: "none"}}>Careers</Link></li>
                <li><Link to="/not-found" style={{ color: "inherit", textDecoration: "none"}}>Contact</Link></li>
              </ul>
            </div>

            {/* Column 4 */}
            <div className={`footer-col ${activeCol === 4 ? 'active' : ''}`}>
              <h4 onClick={() => toggleCol(4)}>Policy</h4>
              <ul>
                <li><Link to="/privacy-policy" style={{ color: "inherit", textDecoration: "none" }}>privacy policy</Link></li>
                <li><Link to="/terms" style={{ color: "inherit", textDecoration: "none" }}>Terms & Conditions</Link></li>
                <li><Link to="/security" style={{ color: "inherit", textDecoration: "none" }}>Security</Link></li>
              </ul>
            </div>

          </div>
        </div>
        {/* <div className="footer-grid reveal">
          <div className="footer-col">
            <h4>Upgrades</h4>

            <ul>
              <li>CRED money</li>
              <li>CRED mint</li>
              <li>CRED garage</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Payments</h4>

            <ul>
              <li>Tap to Pay</li>
              <li>Pay anyone</li>
              <li>RuPay on UPI</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>

            <ul>
              <li>about CRED</li>
              <li>careers</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Policy</h4>

            <ul>
              <li>security</li>
              <li>privacy policy</li>
              <li>terms</li>
            </ul>
          </div>
        </div> */}
      </section>

      {/* =========================================
            MODAL
      ========================================== */}

      <div
        className={`modal-overlay ${isModalOpen ? "active" : ""}`}
        
      >
        <button
          className="close-btn"
          onClick={(e) => {
            e.stopPropagation();
            closeModal();
          }}
        >
          &times;
        </button>

        <div
          className="modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="card-image-container">
            <img
              src="/images/card.png"
              alt="IndusInd Card"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/350x550.png?text=Add+Card+Image+Here";
              }}
            />
          </div>

          <div className="modal-text-content">
            <h2 className="modal-title">
              A STATEMENT
              <br />
              OF INTENT.
            </h2>

            <button className="learn-more-btn">
              LEARN MORE
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;