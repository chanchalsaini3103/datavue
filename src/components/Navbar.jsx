import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">

          {/* Logo (Always Visible) */}
          <div className="navbar-logo">
            <a href="#hero-banner">
              <img
                src="https://framerusercontent.com/images/LC4mfyJ1a2CKoZKm5rkkSEYCa8.svg"
                alt="Data Vue Logo"
              />
            </a>
          </div>

          {/* Hamburger Button */}
          <div
            className={`hamburger ${openMenu ? "hidden" : ""}`}
            onClick={() => setOpenMenu(true)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Desktop Links */}
          <ul className="navbar-links desktop-only">
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>

        </div>
      </nav>

      {/* FULL SCREEN MOBILE MENU */}
      <div className={`mobile-menu ${openMenu ? "show" : ""}`}>
        
        {/* TOP BAR inside menu */}
        <div className="mobile-menu-top">
          <img
            src="https://framerusercontent.com/images/LC4mfyJ1a2CKoZKm5rkkSEYCa8.svg"
            alt="logo"
            className="mobile-menu-logo"
          />

          {/* Close Button */}
          <div className="close-btn" onClick={() => setOpenMenu(false)}>
            ✕
          </div>
        </div>

        {/* MENU LINKS */}
        <ul className="mobile-menu-links">
          <li><a onClick={() => setOpenMenu(false)} href="#about">About Us</a></li>
          <li><a onClick={() => setOpenMenu(false)} href="#services">Services</a></li>
          <li><a onClick={() => setOpenMenu(false)} href="#pricing">Pricing</a></li>
          <li><a onClick={() => setOpenMenu(false)} href="#portfolio">Portfolio</a></li>
          <li><a onClick={() => setOpenMenu(false)} href="#contact">Contact Us</a></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
