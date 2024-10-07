import React, { useState } from 'react';
import './Navbar.css'; // Import CSS for styling

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Airbnb</h1>
      </div>
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#experiences">Experiences</a></li>
        <li><a href="#online-experiences">Online Experiences</a></li>
      </ul>
      <div className="navbar-user">
        <a href="#login">Login</a>
        <a href="#signup" className="signup-btn">Sign Up</a>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
