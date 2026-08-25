import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaCog, FaLink, FaBolt, FaShieldAlt, FaLock, FaCheckCircle, FaStar, FaUsers, FaGift } from 'react-icons/fa';
import './Rewards.css'; // <--- Isko theek karke './Rewards.css' ya agar ek folder upar ho toh '../Rewards.css' karein

const RewardsPage = () => {
  const [activeTab, setActiveTab] = useState('spin');
  useEffect(() => {
   window.scrollTo(0, 0);
  }, []);

  return (
    <div className="rewards-page-wrapper">
      
      {/* 1. Hero Section */}
      <section className="rewards-hero">
        <div className="reward-top-bar">
          <div className="reward-brand-logo-container">
            <img src="/images/logos.png" alt="MyCredAxis Logo" className="brand-logo-img" />
            <span className="reward-brand-name">
              <span className="reward-brand-my">My</span>CredAxis
            </span>
          </div>
        </div>
        
        <div className="rewards-hero-content">
        
          <h1>Refer Friends. <br />Unlock Exclusive Rewards.</h1>
          <p>
            Invite your network to MyCredAxis and turn every successful referral into instant cash bonuses, scratch cards, and premium financial perks.
          </p>
          <p>
            Every successful referral unlocks an exclusive Spin Wheel chance. Play your turn and win assured cash bonuses, scratch cards, and financial perks instantly.
          </p>

            <div className="hero-bullet-features">
            <div className="hero-bullet-item">
                <FaCheckCircle className="bullet-check-icon" />
                <span>Get 1 Spin Wheel chance for every friend who joins & activates.</span>
            </div>
            <div className="hero-bullet-item">
                <FaCheckCircle className="bullet-check-icon" />
                <span>Guaranteed rewards on every single spin.</span>
            </div>
        </div>
          <button className="primary-btn" onClick={() => window.location.href = 'https://play.google.com/store/apps/details?id=com.bbpl.mycredaxis&pcampaignid=web_share'}>
            Explore Rewards <FaArrowRight />
          </button>
        </div>
        <div className="rewards-hero-visual">
          <img src="/images/rewards-banner.png" alt="Spin Wheel Phone Mockup" className="hero-phone-img" />
        </div>
      </section>

      {/* How It Works & Rewards Section */}
    <section className="rewards-section how-it-works-section">
    <div className="section-title-wrap">
        <h2>How It Works?</h2>
        <p>Simple steps to refer, earn, and win exciting rewards.</p>
    </div>

    <div className="how-it-works-container">
        
        {/* Left Box: Steps */}
        <div className="hiw-steps-box">
        <div className="hiw-step-item">
            <div className="hiw-step-number">1</div>
            <div className="hiw-step-icon-wrap"><FaLink /></div>
            <div className="hiw-step-text">
            <h4>Share Your Link</h4>
            <p>Share your unique referral link with your friends.</p>
            </div>
        </div>

        <div className="hiw-arrow">➔</div>

        <div className="hiw-step-item">
            <div className="hiw-step-number">2</div>
            <div className="hiw-step-icon-wrap"><FaUsers /></div>
            <div className="hiw-step-text">
            <h4>Friend Joins</h4>
            <p>Your friend signs up and completes their first action.</p>
            </div>
        </div>

        <div className="hiw-arrow">➔</div>

        <div className="hiw-step-item">
            <div className="hiw-step-number">3</div>
            <div className="hiw-step-icon-wrap"><FaGift /></div>
            <div className="hiw-step-text">
            <h4>You Get a Spin</h4>
            <p>You get a chance to spin the wheel and win exciting rewards.</p>
            </div>
        </div>
        </div>

        {/* Right Box: Spin & Win Rewards List */}
        <div className="hiw-rewards-box">
        <h3>Spin & Win Rewards</h3>
        <div className="hiw-reward-list">
            <div className="hiw-reward-row">
            <span className="hiw-reward-icon">🪙</span>
            <span>100 Coins</span>
            </div>
            <div className="hiw-reward-row">
            <span className="hiw-reward-icon">🍀</span>
            <span>Better Luck Next Time</span>
            </div>
            <div className="hiw-reward-row">
            <span className="hiw-reward-icon">💵</span>
            <span>₹5 Cash</span>
            </div>
            <div className="hiw-reward-row">
            <span className="hiw-reward-icon">💰</span>
            <span>300 Coins</span>
            </div>
        </div>
        </div>

    </div>
    </section>


    {/* More Ways to Earn Section */}
        <section className="rewards-section more-ways-section">
        <div className="section-title-wrap text-center">
            <h2>More Ways to Earn</h2>
            <p>Unlock amazing features and boost your earnings</p>
        </div>

        <div className="mw-cards-grid">
            
            {/* Card 1: Scratch Card */}
            <div className="mw-card mw-purple">
            <div className="mw-card-img-wrap">
                <img src="/images/scratch.webp" alt="Scratch Card" className="mw-card-img" />
            </div>
            <div className="mw-card-content">
                <h3>Scratch Card</h3>
                <p>Scratch and reveal instant rewards.</p>
            </div>
            </div>

            {/* Card 2: Card Shuffle */}
            <div className="mw-card mw-blue">
            <div className="mw-card-img-wrap">
                <img src="/images/csuffle.png" alt="Card Shuffle" className="mw-card-img" />
            </div>
            <h3>Card Shuffle</h3>
            <p>Shuffle the cards and win exciting coins.</p>
            </div>

            {/* Card 3: Bubble Pop */}
            <div className="mw-card mw-green">
            <div className="mw-card-img-wrap">
                <img src="/images/bubblepop.png" alt="Bubble Pop" className="mw-card-img" />
            </div>
            <h3>Bubble Pop</h3>
            <p>Pop bubbles and earn rewards.</p>
            </div>

            {/* Card 4: User Rewards */}
            <div className="mw-card mw-yellow">
            <div className="mw-card-img-wrap">
                <img src="/images/gift.png" alt="User Rewards" className="mw-card-img" />
            </div>
            <h3>User Rewards</h3>
            <p>Complete tasks and earn more rewards.</p>
            </div>

            {/* Card 5: Boost Your Income */}
            <div className="mw-card mw-pink">
            <div className="mw-card-img-wrap">
                <img src="/images/win.png" alt="Boost Your Income" className="mw-card-img" />
            </div>
            <h3>Boost Your Income</h3>
            <p>The more you play, the more you earn!</p>
            </div>

        </div>
        </section>

      {/* 3. Interactive Experiences Cards Showcase */}
      <section className="rewards-section">
        <div className="section-title-wrap">
            <h2>Choose Your Experience</h2>
            <p>Multiple ways to play. Every play is a chance to win.</p>
       
        </div>
        <div className="interactive-cards-grid">
          
          <div className="interactive-card mw-pink">
            <h3>Spin Wheel</h3>
            <p className="card-sub">Spin & Win</p>
            <div className="card-mockup-box">
              <img src="/images/spin.png" alt="Spin Wheel" />
            </div>
          </div>

          <div className="interactive-card mw-yellow">
            <h3>Scratch Card</h3>
            <p className="card-sub">Scratch & Reveal</p>
            <div className="card-mockup-box">
              <img src="/images/scratch.webp" alt="Scratch Card" />
            </div>
          </div>

          <div className="interactive-card mw-blue">
            <h3>Card Shuffle</h3>
            <p className="card-sub">Pick a Card</p>
            <div className="card-mockup-box">
              <img src="/images/csuffle.png" alt="Card Shuffle" />
            </div>
          </div>

          <div className="interactive-card mw-purple">
            <h3>Bubble Pop</h3>
            <p className="card-sub">Pop & Win</p>
            <div className="card-mockup-box">
              <img src="/images/bubblepop.png" alt="Bubble Pop" />
            </div>
          </div>

        </div>
      </section>

      {/* 4. Built for Engagement Features Grid */}
      <section className="rewards-section">
        <div className="section-title-wrap">
          <h2>Built for Engagement. Designed for Impact.</h2>
        </div>
        <div className="features-grid-4">
          <div className="feature-box">
            <div className="feat-icon"><FaCog /></div>
            <h4>Configurable Experiences</h4>
            <p>Flexible reward formats designed around different engagement journeys.</p>
          </div>
          <div className="feature-box">
            <div className="feat-icon"><FaLink /></div>
            <h4>Seamless App Integration</h4>
            <p>Reward experiences designed to work naturally within the MyCredAxis ecosystem.</p>
          </div>
          <div className="feature-box">
            <div className="feat-icon"><FaBolt /></div>
            <h4>Engaging Interactions</h4>
            <p>Simple, visually rich experiences that encourage participation and repeat engagement.</p>
          </div>
          <div className="feature-box">
            <div className="feat-icon"><FaShieldAlt /></div>
            <h4>Reward Management</h4>
            <p>A structured platform for managing reward experiences and outcomes.</p>
          </div>
        </div>
      </section>

      {/* 5. Bottom Banner & Footer Trust Badges */}
      <section className="rewards-section">
        <div className="bottom-cta-banner">
          <div className="cta-text-side">
            <h2>Make Every Interaction <br />More Rewarding.</h2>
            <p>Create meaningful engagement and build lasting relationships with rewarding experiences.</p>
            <button className="primary-btn" onClick={() => window.location.href = 'https://play.google.com/store/apps/details?id=com.bbpl.mycredaxis&pcampaignid=web_share'}>
              Explore MyCredAxis Rewards <FaArrowRight />
            </button>
          </div>
          <div className="cta-visual-side">
            <img src="/images/gift-box.png" alt="3D Gift Box" className="gift-box-img" />
          </div>
        </div>
      </section>

    </div>
  );
};

export default RewardsPage;