import React from "react";
import "../styles/ServicesSection.css"; // Create a CSS file for styling

const servicesData = [
  {
    hashtags: ["#ITStrategy", "#BusinessGrowth", "#Innovation"],
    title: "IT Strategy Development",
    description:
      "Transform your business with a comprehensive IT strategy designed to align technology with your goals. Our expert team will guide you through optimising your IT infrastructure, enhancing efficiency, and driving innovation.",
    highlights: [
      "Tailored strategies that align with your business objectives",
      "Improved operational efficiency",
      "Enhanced ability to adapt to evolving technology trends",
    ],
  },
  {
    hashtags: ["#Cybersecurity", "#DataProtection"],
    title: "Cybersecurity Services",
    description:
      "Protect your digital assets with robust cybersecurity solutions that defend against threats and vulnerabilities. Our services include risk assessments, threat monitoring, and incident response to ensure your data remains secure.",
    highlights: [
      "Proactive threat detection and response to minimize risks",
      "Comprehensive protection against cyber threats",
      "Ongoing support to adapt to new security challenges",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className="services-header">
        <p className="subtitle">OUR SERVICES</p>
        <h2 className="title">Solutions for your unique needs</h2>
      </div>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-hashtags">
              {service.hashtags.map((tag, idx) => (
                <span key={idx} className="hashtag">{tag}</span>
              ))}
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <ul className="service-highlights">
              {service.highlights.map((highlight, idx) => (
                <li key={idx}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="check-icon"
                  >
                    <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                  </svg>
                  {highlight}
                </li>
              ))}
            </ul>
            <div className="service-buttons">
              <a href="#case-studies" className="btn tertiary">Case Study</a>
              <a href="#contacts" className="btn primary">Book a Call</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
