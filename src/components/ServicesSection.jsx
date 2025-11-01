import React from "react";
import { motion } from "framer-motion";
import "../styles/Services.css";

const servicesData = [
  {
    tags: ["#ITStrategy", "#BusinessGrowth", "#Innovation"],
    title: "IT Strategy Development",
    description:
      "Transform your business with a comprehensive IT strategy designed to align technology with your goals. Our expert team will guide you through optimising your IT infrastructure, enhancing efficiency, and driving innovation.",
    img: "https://framerusercontent.com/images/image1.png",
  },
  {
    tags: ["#Cybersecurity", "#DataProtection"],
    title: "Cybersecurity Services",
    description:
      "Protect your digital assets with robust cybersecurity solutions that defend against threats and vulnerabilities. Our services include risk assessments, threat monitoring, and incident response to ensure your data remains secure.",
    img: "https://framerusercontent.com/images/image2.png",
  },
  {
    tags: ["#Cloud", "#Innovation", "#Efficiency"],
    title: "Cloud Solutions",
    description:
      "Leverage cloud technologies to increase agility and reduce costs. We provide cloud migration, management, and optimization services tailored to your business needs.",
    img: "https://framerusercontent.com/images/image3.png",
  },
  {
    tags: ["#AI", "#Automation"],
    title: "AI & Automation",
    description:
      "Implement intelligent automation to streamline your operations and gain actionable insights. Our solutions help you make data-driven decisions faster.",
    img: "https://framerusercontent.com/images/image4.png",
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-header">
        <p className="services-subtitle">OUR SERVICES</p>
        <h2 className="services-title">Solutions for your unique needs</h2>
      </div>

      <div className="services-vertical">
        {servicesData.map((service, index) => (
          <motion.div
            className="service-vertical-item"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="service-vertical-image">
              <img src={service.img} alt={service.title} />
            </div>
            <div className="service-vertical-text">
              <div className="service-tags">
                {service.tags.map((tag, i) => (
                  <span className="service-tag" key={i}>
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="service-name">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-buttons">
                <a href="#case-studies" className="service-btn tertiary-btn">
                  Case Study
                </a>
                <a href="#contacts" className="service-btn primary-btn">
                  Book a Call
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
