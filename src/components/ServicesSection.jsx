import React, { useEffect, useRef, useState } from "react";
import "../styles/ServicesSection.css";

const serviceData = [
  {
    img: "https://i.pinimg.com/1200x/12/f7/91/12f7917343c652485829ba8910bb7b0f.jpg",
    title: "IT Strategy Development",
    desc: "Transform your business with a comprehensive IT strategy designed to align technology with your goals.",
    points: [
      "Tailored strategies aligned with business objectives",
      "Improved operational efficiency",
      "Adaptability to technology trends",
    ],
  },
  {
    img: "https://i.pinimg.com/736x/df/79/02/df7902c63506de494ca68c2bab4a62a4.jpg",
    title: "Cloud Infrastructure Setup",
    desc: "Move your business to scalable and modern cloud infrastructure.",
    points: ["End-to-end cloud migration", "Cost-optimized architecture", "High availability"],
  },
  {
    img: "https://i.pinimg.com/1200x/12/f7/91/12f7917343c652485829ba8910bb7b0f.jpg",
    title: "Cybersecurity Solutions",
    desc: "Protect your business with modern cybersecurity frameworks.",
    points: ["Threat detection", "24/7 monitoring", "Zero-trust model"],
  },
  {
    img: "https://i.pinimg.com/736x/df/79/02/df7902c63506de494ca68c2bab4a62a4.jpg",
    title: "Software Product Development",
    desc: "Build scalable products using latest technologies.",
    points: ["Full-stack development", "Modern UI/UX", "Agile sprints"],
  },
];

const ServicesScroll = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionsRef = useRef([]);

  // Intersection observer for switching images
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            setActiveIndex(Number(entry.target.dataset.index));
          }
        });
      },
      { threshold: [0.3] }
    );

    sectionsRef.current.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="scroll_sync_container">

      {/* LEFT FIXED IMAGE */}
      <div className="scroll_left">
        <img
          key={activeIndex}
          src={serviceData[activeIndex].img}
          className="scroll_main_image"
          alt="Service"
        />
      </div>

      {/* RIGHT SCROLLING CONTENT */}
      <div className="scroll_right">
        {serviceData.map((service, index) => (
          <div
            className="service_container"
            key={index}
            data-index={index}
            ref={(el) => (sectionsRef.current[index] = el)}
          >
            {/* SAME DESIGN YOU PROVIDED */}
            <div className="service_content">
              <div className="chips">
                <span>#ITStrategy</span>
                <span>#BusinessGrowth</span>
                <span>#Innovation</span>
              </div>

              <h2>{service.title}</h2>
              <p className="service_desc">{service.desc}</p>

              <ul className="service_points">
                {service.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>

              <div className="service_buttons">
                <button className="case_btn">Case Study</button>
                <button className="call_btn">Book a Call</button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ServicesScroll;
