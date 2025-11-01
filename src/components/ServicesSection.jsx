import React from "react";
import "../styles/Services.css";

const servicesData = [
  {
    tags: ["#ITStrategy", "#BusinessGrowth", "#Innovation"],
    title: "IT Strategy Development",
    description:
      "Transform your business with a comprehensive IT strategy designed to align technology with your goals. Our expert team will guide you through optimising your IT infrastructure, enhancing efficiency, and driving innovation.",
  },
  {
    tags: ["#Cybersecurity", "#DataProtection"],
    title: "Cybersecurity Services",
    description:
      "Protect your digital assets with robust cybersecurity solutions that defend against threats and vulnerabilities. Our services include risk assessments, threat monitoring, and incident response to ensure your data remains secure.",
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-header">
        <p className="services-subtitle">OUR SERVICES</p>
        <h2 className="services-title">Solutions for your unique needs</h2>
      </div>
      <div className="services-cards">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-tags">
              {service.tags.map((tag, i) => (
                <span className="service-tag" key={i}>{tag}</span>
              ))}
            </div>
            <h3 className="service-name">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <div className="service-buttons">
              <a href="#case-studies" className="service-btn tertiary-btn">Case Study</a>
              <a href="#contacts" className="service-btn primary-btn">Book a Call</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
