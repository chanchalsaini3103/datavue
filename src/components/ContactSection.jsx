import React from "react";
import "../styles/ContactSection.css";

const ContactSection = () => {
  return (
    <div className="contact-wrapper">
      {/* Let's Talk Section */}
      <div className="lets-talk-card">
        <div className="lets-talk-left">
          <h2>Let's Talk</h2>
          <p>
            We'd love to learn more about you and what we can design and build together.
          </p>
          <div className="email-form">
            <input type="email" placeholder="Email Address" />
            <button>
              <span>&#8594;</span>
            </button>
          </div>
        </div>

        <div className="lets-talk-right">
          <div className="contact-info">
            <p>123 Innovation Drive, Suite 500,<br/>Tech City, TX 75001</p>
          </div>
          <div className="contact-info">
            <p>Mon-Fri: 9:00 AM - 5:00 PM<br/>Sat: 10:00 AM - 2:00 PM<br/>Sun: Closed</p>
          </div>
          <div className="contact-info">
            <p>(555) 123-4567<br/>info@datavue.com</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Datavue Technologies. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactSection;
