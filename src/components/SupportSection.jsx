import React, { useState } from "react";
import { FaMapMarkerAlt, FaClock, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import "../styles/FAQ.css";

const faqData = [
  {
    question: "What industries do you specialize in?",
    answer:
      "We have experience across finance, healthcare, manufacturing, retail, and technology. Our team tailors solutions to your business needs.",
  },
  {
    question: "How do you ensure the security of our data?",
    answer:
      "We prioritize data security with encryption, GDPR/CCPA compliance, audits, and continuous monitoring.",
  },
  {
    question: "What does the onboarding process look like?",
    answer:
      "Initial consultation, implementation planning, integration setup, team training, and continuous support.",
  },
  {
    question: "How flexible are your pricing plans?",
    answer:
      "We offer multiple flexible pricing options that can be customized as your business grows.",
  },
];

const SupportPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (i) => {
    setActiveIndex(activeIndex === i ? null : i);
  };

  return (
    <div className="supportPage">

      {/* ------------ FAQ SECTION ------------ */}
      <div className="faq-container">
        <p className="faq-title">FAQ</p>
        <h2 className="faq-subtitle">Your Questions, Answered</h2>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{item.question}</span>
                <span className={`arrow ${activeIndex === index ? "open" : ""}`}>
                  ▼
                </span>
              </div>

              <div
                className={`faq-answer ${activeIndex === index ? "open" : ""}`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ------------ LET'S TALK FLOATING CARD ------------ */}
    

<div className="letsTalkWrapper" id="contact">
  <div className="letsTalkCard newTalkCard">

    {/* LEFT SIDE */}
    <div className="leftSection">
      <h2>Let’s Talk</h2>
      <p className="subtext">
        We'd love to learn more about you and what we can design and build together.
      </p>

      <div className="emailRow">
  <div className="inputWrapper">
    <input
      type="email"
      placeholder="Email Address"
      className="emailInput"
    />
    <button className="insideBtn">
      →
    </button>
  </div>
</div>

    </div>

    {/* RIGHT SIDE */}
    <div className="rightSection">

      <div className="infoRow">
        <p>123 Innovation Drive, Suite 500,<br></br> Tech City, TX 75001</p>
        <FaMapMarkerAlt className="iconReact" />
      </div>

      <div className="infoRow">
        <p>
          Mon–Fri: 9:00 AM – 5:00 PM <br />
          Sat: 10:00 AM – 2:00 PM <br />
          Sun: Closed
        </p>
        <FaClock className="iconReact" />
      </div>

      <div className="infoRow">
        <p>917821820239 <br></br> indo@gmail.com</p>
        {/* <FaPhoneAlt className="iconReact" /> */}
        <FaEnvelope className="iconReact" />
      </div>

    </div>

  </div>
</div>

      {/* ------------ FOOTER ------------ */}
      <footer className="supportFooter">

  {/* TOP SECTION TEXT */}
 <div className="footerTop">
  <p className="footerDesc">
    Our team of experts is ready to discuss your needs and tailor a solution that works for you.
  </p>

  <button className="footerButton">
   <span className="buttonText">Contact Us</span>
    <div className="avatarGroup">
      <img src="https://tse4.mm.bing.net/th/id/OIP.aFAdc56FSpTiPfA2F6GAsQHaHa?pid=Api&P=0&h=220" alt="founder1" className="avatarImg" />
      <img src="https://tse4.mm.bing.net/th/id/OIP.aFAdc56FSpTiPfA2F6GAsQHaHa?pid=Api&P=0&h=220" alt="founder2" className="avatarImg" />
      <img src="https://tse4.mm.bing.net/th/id/OIP.aFAdc56FSpTiPfA2F6GAsQHaHa?pid=Api&P=0&h=220" alt="founder3" className="avatarImg" />
    </div>
    
  </button>
</div>


  {/* MIDDLE SECTION WITH 3 COLUMNS */}
  <div className="footerMain">

    {/* LEFT: LOGO */}
    <div className="footerLogo">
      <div className="logoCircle"></div>
    </div>

    {/* CENTER: LINKS */}
    <ul className="footerLinks">
      <li>About Us</li>
      <li>Services</li>
      <li>Pricing</li>
      <li>Portfolio</li>
      <li>Contact Us</li>
    </ul>

    {/* RIGHT: SOCIAL ICONS */}
    <div className="socialIcons">
     <FaInstagram className="sIcon" />
      <FaLinkedin className="sIcon" />
      <FaFacebook className="sIcon" />
    </div>

  </div>

  {/* BOTTOM LINE */}
  <div className="footerLine"></div>

  <p className="footerBottom">
    © 2025 Dalgona by Ditych. Powered by Framer. All rights reserved.
  </p>

</footer>

    </div>
  );
};

export default SupportPage;
