// src/pages/NotFound.jsx
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Agar current URL "/not-found" nahi hai, toh URL ko replace karke "/not-found" kar do
    if (location.pathname !== '/not-found') {
      navigate('/not-found', { replace: true });
    }
  }, [location, navigate]);

  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="notfound-code">404</h1>
        <h2 className="notfound-heading">Not Found</h2>
        <p className="notfound-text">The resource requested could not be found on this server!</p>
      </div>
    </div>
  );
};

export default NotFound;