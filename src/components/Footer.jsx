import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <p className="footer-copyright">
        © {new Date().getFullYear()} MAHEEN'S PALETTE. ALL RIGHTS RESERVED.
      </p>
      
      <div className="footer-links-container">
        <Link to="/privacy" className="footer-link">
          PRIVACY POLICY
        </Link>
        <span className="footer-divider">◆</span>
        <Link to="/terms" className="footer-link">
          TERMS OF SERVICE
        </Link>
      </div>

      <p className="footer-brand">
        POWERED BY <span>UAN TECHNOLOGIES</span>
      </p>
    </footer>
  );
};

export default Footer;
