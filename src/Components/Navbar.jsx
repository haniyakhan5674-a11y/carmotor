import React, { useState } from 'react';
import './Navbar.css'; // We'll create this CSS file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <a href="/" onClick={closeMenu}>
            <span className="logo-text">Auto<span className="logo-highlight">Elite</span></span>
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <a href="/" className="navbar-link" onClick={closeMenu}>
              {/* <span className="nav-icon">🏠</span> */}
              <span>Home</span>
            </a>
          </li>
          <li className="navbar-item">
            <a href="/cars" className="navbar-link" onClick={closeMenu}>
              {/* <span className="nav-icon">🚗</span> */}
              <span>Cars</span>
            </a>
          </li>
          <li className="navbar-item">
            <a href="/about" className="navbar-link" onClick={closeMenu}>
              {/* <span className="nav-icon">ℹ️</span> */}
              <span>About</span>
            </a>
          </li>
          <li className="navbar-item">
            <a href="/contact" className="navbar-link" onClick={closeMenu}>
              {/* <span className="nav-icon">📞</span> */}
              <span>Contact</span>
            </a>
          </li>
        </ul>

        {/* CTA Button */}
        <div className="navbar-cta">
          <button className="cta-button"><a href="./testdrive">Book Test Drive</a>
            {/* <span className="cta-icon">🚙</span> */}
            {/* <span>Book Test Drive</span> */}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="navbar-toggle" onClick={toggleMenu}>
          <div className={`hamburger ${isOpen ? 'active' : ''}`}>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="mobile-overlay" onClick={closeMenu}></div>
      )}
    </nav>
  );
};

export default Navbar;