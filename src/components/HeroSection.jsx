import React from "react";
import { motion } from "framer-motion";
import "../styles/HeroSection.css";

const HeroSection = () => {
  const text = "datavue.";
  const letters = text.split("");

  return (
    <section className="hero-section" id="hero-banner">
      <div className="hero-content">
        <motion.h1
          className="hero-title"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {letters.map((char, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          className="hero-subtext"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p>transform your operations,</p>
          <p>innovate your processes with</p>
          <p>our expert consulting services.</p>
        </motion.div>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <a href="#services" className="btn btn-primary">
            <span>Get Expert Help</span>
          </a>
          <a href="#contacts" className="btn btn-outline">
            <span>Book a Call</span>
          </a>
        </motion.div>
      </div>

      <div className="hero-media">
        <motion.div
          className="hero-video"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
        >
          <video
            src="https://assets.mixkit.co/videos/261/261-720.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
        >
          <img
            src="https://framerusercontent.com/images/xA7MCQdmzAdK62N6FFHwMWh1rY.png"
            alt="hero"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
