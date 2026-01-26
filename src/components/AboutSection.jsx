import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/aboutsection.css";

const stats = [
  {
    label: "Experience",
    number: 5,
    description:
      "For over 5 years, we have been a trusted IT partner, delivering innovative and reliable solutions that help businesses streamline operations, enhance efficiency, and achieve sustainable growth.",
  },
  {
    label: "Projects",
    number: 25,
    description:
      "Our team has successfully delivered 25+ projects, each carefully tailored to address the specific goals and business requirements of our clients.",
  },
  
];

const AboutSection = () => {
  
  const [ref, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.3,
  });

  return (
    <section className="about-section" id="about" ref={ref}>
      <div className="about-header">
        <p className="small-heading">OUR EXPERTISE</p>
        <h2 className="main-heading">Why Choose Us?</h2>
        <p className="description">
        With 5+ years of proven IT expertise, we help businesses turn ideas into powerful digital solutions. 
        Our certified professionals focus on innovation, reliability, 
        and tailor-made services that align perfectly with your business goals—delivering results that truly matter.
         </p>
      </div>

      <div className="about-counters">
        {stats.map((stat, index) => (
          <motion.div
            className="counter-box"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <p className="counter-label">{stat.label}</p>
            <span className="counter-number">
              {inView && <CountUp start={0} end={stat.number} duration={2} />}+
            </span>
            <p className="counter-description">{stat.description}</p>
          </motion.div>
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
