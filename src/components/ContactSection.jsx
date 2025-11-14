import React from "react";
import "../styles/ContactSection.css";

const ContactSection = () => {
  return (
    <div className="contact-section">
      {/* Let's Talk Section */}
      <div className="lets-talk">
        <div className="lets-talk-content">
          <h2 className="lets-talk-title">Let’s Talk</h2>
          <p className="lets-talk-subtitle">
            Have a project in mind? Let’s create something amazing together.
          </p>
          <a href="mailto:hello@datavue.com" className="contact-button">
            Get in Touch
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">
            &copy; {new Date().getFullYear()} Datavue Technologies. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ContactSection;
