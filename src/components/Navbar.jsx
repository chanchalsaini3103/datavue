import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left Logo */}
        <div className="navbar-logo">
          <a href="#hero-banner">
            <img
              src="https://framerusercontent.com/images/LC4mfyJ1a2CKoZKm5rkkSEYCa8.svg"
              alt="Data Vue Logo"
            />
          </a>
        </div>

        {/* Right Links */}
        <ul className="navbar-links">
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
