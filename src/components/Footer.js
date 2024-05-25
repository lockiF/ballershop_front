import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="links-and-logo">
      <Link to="/">
        <img className="logo-footer" src="/img/logo.png" alt="Logo" />
        </Link>
        <div className="footer-sections">
          <div className="footer-l">
            <Link to="/help">Help</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
          <div className="footer-r">
            <Link to="/terms">Terms and conditions</Link>
            <Link to="/work">Work with us</Link>
          </div>
        </div>
      </div>
      <p className="credits">(c) Ballershop LLC 2023</p>
    </footer>
  );
};

export default Footer;
