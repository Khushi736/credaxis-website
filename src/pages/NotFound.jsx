// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="notfound-wrapper">
      {/* Brand Logo Header */}
      

      {/* Main Content Area */}
      <div className="notfound-content">
        <div className="notfound-text-section">
          <h1 className="notfound-title">
            seem like<br />
            <span className="notfound-highlight">you've hit the wall</span>
          </h1>
          <p className="notfound-subtitle">
            we could not find the page<br />
            you were looking for
          </p>
          <Link to="/" className="notfound-btn">
            Go to homepage
          </Link>
        </div>

        {/* Visual / Character Section */}
        <div className="notfound-visual-section">
          <div className="notfound-silhouette">
            {/* High-end minimalist dark silhouette placeholder or asset wrapper */}
            <div className="notfound-prop-glow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;