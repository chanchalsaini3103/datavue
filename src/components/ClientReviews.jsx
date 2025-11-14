import React from "react";
import "../styles/ClientReviews.css";

const ClientReviews = () => {
  const reviews = [
    {
      text: "Working with Dalgona has been a game-changer for our business. Their IT strategy development helped us align our technology with our long-term goals, resulting in increased efficiency. Their team is knowledgeable and genuinely invested in our success.",
      name: "Sarah Thompson",
      role: "CEO OF GREENTECH INNOVATIONS",
      img: "https://framerusercontent.com/images/ijAUhimFwwMxdxdPWi4fPARpA.png",
    },
    {
      text: "We entrusted Dalgona with our cloud migration, and the results exceeded our expectations. The transition was seamless, and the improved collaboration across our teams has been remarkable. Their expertise in cloud computing is truly top-notch.",
      name: "David Mitchell",
      role: "CFO OF BLUEWAVE FINANCIAL",
      img: "https://framerusercontent.com/images/0ILTMC4dCM47pGrqbWmuQiKFzc.png",
    },
    {
      text: "The custom software developed by Dalgona has transformed our project management process. The system is intuitive, efficient, and perfectly tailored to our needs. Their development team was a pleasure to work with, delivering on time and within budget.",
      name: "Mark Anderson",
      role: "CTO OF URBANBUILD CONSTRUCTION",
      img: "https://framerusercontent.com/images/zy4WfrU0Kh8VoLFBMAiCgpx4Ie8.png",
    },
    {
      text: "Cybersecurity was a major concern for us, and Dalgona provided the peace of mind we needed. Their advanced security solutions and 24/7 monitoring have kept our patient data secure and compliant with industry regulations. I highly recommend their services.",
      name: "Lisa Chen",
      role: "DIRECTOR OF OPERATIONS AT HEALTHPLUS",
      img: "https://framerusercontent.com/images/HSQJ53BU4fsQa0pUD8Shp9fbA.png",
    },
  ];

  return (
    <section className="client-reviews">
      <div className="review-header">
        <p className="review-subtitle">CLIENTS</p>
        <h2 className="review-title">What Our Clients Say</h2>
        <p className="review-description">
          Hear from some of our satisfied clients who have transformed their
          businesses with our help.
        </p>
      </div>

      <div className="review-grid">
        {reviews.map((r, i) => (
          <div key={i} className="review-card">
            <p className="review-text">“{r.text}”</p>
            <div className="review-user">
              <img src={r.img} alt={r.name} className="review-avatar" />
              <h4 className="review-name">{r.name}</h4>
              <p className="review-role">{r.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientReviews;
