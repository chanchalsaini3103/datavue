import React from "react";
import "../styles/Testimonials.css";

const testimonials = [
  {
    text: "Working with Dalgona has been a game-changer for our business. Their IT strategy development helped us align our technology with our long-term goals, resulting in increased efficiency. Their team is knowledgeable, and genuinely invested in our success.",
    name: "Sarah Thompson",
    role: "CEO of GreenTech Innovations",
    image: "https://framerusercontent.com/images/ijAUhimFwwMxdxdPWi4fPARpA.png",
  },
  {
    text: "The custom software developed by Dalgona has transformed our project management process. The system is intuitive, efficient, and perfectly tailored to our needs. Their development team was a pleasure to work with, delivering on time and within budget.",
    name: "David Mitchell",
    role: "CFO of BlueWave Financial",
    image: "https://framerusercontent.com/images/0ILTMC4dCM47pGrqbWmuQiKFzc.png",
  },
  {
    text: "We entrusted Dalgona with our cloud migration, and the results exceeded our expectations. The transition was seamless, and the improved collaboration across our teams has been remarkable. Their expertise in cloud computing is truly top-notch",
    name: "Mark Anderson",
    role: "CTO of UrbanBuild Construction",
    image: "https://framerusercontent.com/images/zy4WfrU0Kh8VoLFBMAiCgpx4Ie8.png",
  },
  {
    text: "Cybersecurity was a major concern for us, and Dalgona provided the peace of mind we needed. Their advanced security solutions and 24/7 monitoring have kept our patient data secure and compliant with industry regulations. I highly recommend their services.",
    name: "Lisa Chen",
    role: "Director at HealthPlus",
    image: "https://framerusercontent.com/images/HSQJ53BU4fsQa0pUD8Shp9fbA.png",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <p className="sub-heading">CLIENTS</p>
      <h2 className="main-heading">What Our Clients Say</h2>
      <p className="description">
        Hear from some of our satisfied clients who have transformed their
        businesses with our help.
      </p>

      <div className="testimonial-grid">
  {testimonials.map((item, index) => (
    <div className="testimonial-card" key={index}>
      {/* Testimonial text */}
      <p className="testimonial-text">“{item.text}”</p>

      {/* Quote icon above client info */}
      <div className="testimonial-icon">
        <img
          src="https://framerusercontent.com/images/qtfru7RL5Psm9adPa4E34ni2Hk0.svg"
          alt="quote icon"
        />
      </div>

      {/* Client info */}
      <div className="testimonial-footer">
        <div className="client-info">
          <img src={item.image} alt={item.name} className="client-img" />
          <div className="client-details">
            <h4 className="client-name">{item.name}</h4>
            <p className="client-role">{item.role}</p>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

    </section>
  );
};

export default Testimonials;
