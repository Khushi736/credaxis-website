// src/pages/NotFound.jsx
import React, { useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== '/not-found') {
      navigate('/not-found', { replace: true });
    }
  }, [location, navigate]);

  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="notfound-title">There's NOTHING here...</h1>
        <p className="notfound-subtitle">...maybe the page you're looking for is not found or never existed.</p>
        
        <Link to="/" className="notfound-home-btn">
          Back to home <span className="arrow">&rarr;</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;