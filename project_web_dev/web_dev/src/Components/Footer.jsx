import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#">Support</a>
        <a href="#">Community</a>
        <a href="#">Hosting</a>
        <a href="#">About</a>
      </div>
      <div className="social-icons">
        {/* Include icons here */}
      </div>
      <p>© 2024 Airbnb, Inc.</p>
    </footer>
  );
};

export default Footer;
