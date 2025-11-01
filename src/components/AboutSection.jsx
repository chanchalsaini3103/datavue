import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import "../styles/aboutsection.css";

const stats = [
  {
    label: "Experience",
    number: 12,
    description:
      "For over 12 years, we have been a trusted partner in delivering innovative IT solutions that drive business growth.",
  },
  {
    label: "Projects",
    number: 225,
    description:
      "Our team has completed over 225 successful projects, each tailored to meet the unique needs of our clients.",
  },
  {
    label: "Certifications",
    number: 45,
    description:
      "With 45+ industry certifications, we bring unmatched expertise and cutting-edge knowledge to every engagement.",
  },
];

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-header">
        <p className="small-heading">OUR EXPERTISE</p>
        <h2 className="main-heading">Why Choose Us?</h2>
        <p className="description">
          With over 15 years of experience in the IT industry, we have successfully delivered transformative solutions for businesses across various sectors. Our team of certified professionals is committed to providing innovative, customized services that meet the unique needs of your business.
        </p>
      </div>

      <div className="about-counters">
        {stats.map((stat, index) => (
          <div className="counter-box" key={index}>
            <p className="counter-label">{stat.label}</p>
            <span className="counter-number">
              <CountUp start={0} end={stat.number} duration={2} />+
            </span>
            <p className="counter-description">{stat.description}</p>
          </div>
        ))}
      </div>

      <motion.div
        className="about-image"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src="https://framerusercontent.com/images/Q96D2K2Z7cgc4x1DnZGijl0M8Yo.png"
          alt="About Datavue Technologies"
        />
      </motion.div>
    </section>
  );
};

export default AboutSection;
