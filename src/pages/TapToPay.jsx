import React, { useEffect, useRef, useState, memo } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './TapToPay.css';

// GSAP Plugin Register
gsap.registerPlugin(ScrollTrigger);

const FaqItem = memo(({ faq, index, isOpen, onToggle }) => {
  return (
    <div 
      className={`tp-faq-item ${isOpen ? 'active' : ''}`}
      onClick={() => onToggle(index)}
    >
      <div className="tp-faq-question-row">
        <span className="tp-faq-num">0{index + 1}</span>
        <h3>{faq.question}</h3>
        <span className="tp-faq-toggle-icon">{isOpen ? '✕' : '+'}</span>
      </div>
      <div className={`tp-faq-answer-wrapper ${isOpen ? 'open' : ''}`}>
        <p className="tp-faq-answer-text">{faq.answer}</p>
      </div>
    </div>
  );
});

const TapToPay = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // Ensure video plays programmatically to bypass browser autoplay restrictions
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay prevented:", error);
      });
    }

    const ctx = gsap.context(() => {
      // Pinning the hero/animation stage for a cinematic scroll sequence
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.tp-cinematic-stage',
          start: 'top top',
          end: '+=3000',
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      // Step 1: Text scrolls up / fades out & Video completely hides (opacity: 0)
      tl.to('.tp-hero-text-block', {
        y: -150,
        opacity: 0,
        duration: 1,
      })
      .to('.tp-bg-video', {
        opacity: 0, // Video bilkul nazar nahi aayegi
        duration: 1,
      }, '<')
      .to('.tp-top-center-logo', { // <-- Yeh line add karni hai
        opacity: 0,
        duration: 1,
      }, '<')
      // Step 2: Phone mockup slides up and settles in the center with circular purple shadow
      .fromTo('.tp-floating-phone-mockup', 
        { y: 300, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: 1.5 },
        '-=0.5'
      )
      // Step 3: Jab phone poora dikh jaye, aur user aage scroll kare toh phone fade out ho jaye
      .to('.tp-floating-phone-mockup', {
        opacity: 0,
        scale: 0.95,
        duration: 1,
        delay: 0.5,
      });
      // ADVANCED STAGGERED REVEAL ANIMATION FOR SPEED SECTION
      gsap.utils.toArray('.tp-reveal-parent').forEach((parent) => {
        const items = parent.querySelectorAll('.tp-reveal-item');
        
        gsap.fromTo(
          items,
          { 
            opacity: 0, 
            y: 80, 
            scale: 0.9,
            filter: 'blur(10px)' // High-end cinematic blur entry
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: 'blur(0px)',
            duration: 1.2,
            stagger: 0.15, // Ek ke baad ek element reveal hoga (Badge -> Headline -> Subtext)
            ease: 'power4.out',
            scrollTrigger: {
              trigger: parent,
              start: 'top 75%', // Jaise hi section screen ke 75% par aayega, trigger hoga
              toggleActions: 'play none none reset',
              // markers: true, // Enable this if you want to test the exact trigger line
            },
          }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => setOpenFaq((prev) => (prev === index ? null : index));

  const faqData = [
    {
      question: "what is myCredAxis tap to pay?",
      answer: "tap to pay lets you make secure, seamless, and instant card payments with nothing but your phone. simply tap your phone on card readers at stores to pay. for payments above ₹5,000, you may be required to enter your PIN to complete your payment."
    },
    {
      question: "why should you tap to pay with myCredAxis?",
      answer: "tap to pay was designed with safety, security, and speed in mind. it's the fastest way to pay at a store, using nothing but your phone."
    },
    {
      question: "how does tap to pay work?",
      answer: "it uses NFC technology built into your device to securely communicate with the payment terminal instantly."
    },
    {
      question: "what is NFC and how do you enable it?",
      answer: "NFC enables close-range wireless communication between your device and payment terminals. You can turn it on via your phone's connection settings."
    },
    {
      question: "is tap to pay available on all devices?",
      answer: "tap to pay is currently accessible only on NFC enabled Android devices and NFC cards from supported bank partners."
    },
    {
      question: "where can you find tap to pay on myCredAxis?",
      answer: "you can find and configure tap to pay straight from your card management options inside your app dashboard."
    }
  ];

  return (
    <div className="tap-to-pay-page" ref={containerRef}>
      
      {/* CINEMATIC STICKY STAGE (Video Background + Scroll Sequence) */}
      <section className="tp-cinematic-stage">
        {/* Background Video */}
        <video 
          ref={videoRef}
          src="/video/rotating-ring.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
          type="video/mp4"
          className="tp-bg-video"
        />
        <div className="tp-video-overlay"></div>

        <div className="tp-top-center-logo tp-reveal-parent">
          <Link to="/" className="tp-brand-link tp-reveal-item">
            <img src="/images/logos.png" alt="Logo" className="tp-stage-logo" />
            <span className="tp-brand-text">myCredAxis</span>
          </Link>
        </div>

        {/* Hero Text */}
        <div className="tp-hero-text-block">
          <h1 className="tp-serif-headline">
            leave the wallet behind.<br />
            <span className="tp-italic-light">pay with just a touch.</span>
          </h1>
          <p className="tp-sub-heading">THE FUTURE OF INSTANT PAYMENTS</p>
        </div>

        {/* Phone Mockup that animates in on scroll */}
        <div className="tp-floating-phone-mockup">
          <div className="tp-phone-screen-content">
            
            <div className="tp-success-popup">
              <div className="tp-check-icon">✓</div>
              <h4>all done, your card has a new home.</h4>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCING SECTION (Screenshot Style) */}
      {/* <section className="tp-section tp-introducing-section ">
        <div className="tp-content-center">
          <span className="tp-intro-tag ">INTRODUCING</span>
          <h2 className="tp-serif-headline tp-intro-main-title">
            <span className="tp-italic-light">tap</span> to <span className="tp-italic-light">pay</span><br />
            with <span className="tp-bold-brand">myCredAxis</span>
          </h2>
          <p className="tp-sub-heading">INTRODUCE YOUR CARDS TO A NEW LIFE</p>
        </div>
      </section> */}
      {/* INTRODUCING SECTION */}
      <section className="tp-section tp-introducing-section">
        {/* Left Side: Real Tilted Phone Image */}
        <div className="tp-side-mockup tp-left-phone">
          <img src="/images/phone.png" alt="Phone Mockup" className="tp-tilt-image" />
        </div>

        {/* Center Content */}
        <div className="tp-content-center tp-reveal-parent">
          <span className="tp-intro-tag tp-reveal-item">INTRODUCING</span>
          <h2 className="tp-serif-headline tp-intro-main-title tp-reveal-item">
            <span className="tp-italic-light">tap</span> to <span className="tp-italic-light">pay</span><br />
            with <span className="tp-bold-brand">myCredAxis</span>
          </h2>
          <p className="tp-sub-heading tp-reveal-item">INTRODUCE YOUR CARDS TO A NEW LIFE</p>
        </div>

        {/* Right Side: Tomato Red Tilted Credit Card */}
        <div className="tp-side-mockup tp-right-card">
          <div className="tp-tomato-card">
            <div className="tp-card-chip"></div>
            <div className="tp-card-number">•••• •••• •••• 5428</div>
            <div className="tp-card-holder">MYCREDAXIS</div>
          </div>
        </div>
      </section>


      {/* SUBSEQUENT SECTIONS */}
      <section className="tp-section tp-speed-section">
        <div className="tp-content-center">
          <div className="tp-reveal-parent">
            <div className="tp-big-badge tp-reveal-item">5X</div>
            <h3 className="tp-medium-headline tp-reveal-item">faster than swiping your card</h3>
            <p className="tp-sub-text tp-reveal-item">MAKE PAYMENTS. WITHOUT TESTING YOUR PATIENCE.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="tp-section tp-faq-section">
        <div className="tp-faq-container">
          <h2 className="tp-faq-title">frequently <br/> asked questions</h2>
          <div className="tp-faq-list">
            {faqData.map((faq, index) => (
              <FaqItem 
                key={index}
                faq={faq}
                index={index}
                isOpen={openFaq === index}
                onToggle={toggleFaq}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="tp-footer">
        <div className="tp-footer-container">
          <div className="tp-footer-row">
            {/* Brand Info (Left Aligned) */}
            <div className="tp-footer-brand">
              <Link to="/">
                <img src="/images/logo.png" alt="MyCredAxis Logo" className="tp-footer-logo" />
              </Link>
              <p>complete security. no asterisks.</p>
            </div>

            {/* Links Columns Container (Right Side) */}
            <div className="tp-footer-links-group">
              <div className="tp-footer-links-col">
                <h4>products</h4>
                <ul>
                  <li><Link to="/credit-cards">myCredAxis pay</Link></li>
                  <li><Link to="/credit-cards">credit score check</Link></li>
                </ul>
              </div>
              <div className="tp-footer-links-col">
                <h4>myCredAxis</h4>
                <ul>
                  <li><Link to="/about">about</Link></li>
                  <li><Link to="/about">careers</Link></li>
                  <li><Link to="/insurance">customer care</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="tp-footer-bottom">
            <p>&copy; {new Date().getFullYear()} MyCredAxis. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default TapToPay;