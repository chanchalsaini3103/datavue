import React, { useEffect, useRef, useState } from "react";
import "../styles/ServicesSection.css";

const sections = [
  {
    id: 1,
    image:
      "https://i.pinimg.com/736x/36/2c/d4/362cd46d180f11db6dba1cbaff9437b3.jpg",
    chips: ["#ITStrategy", "#BusinessGrowth", "#Innovation"],
    title: "IT Strategy Development",
    desc: "Transform your business with a comprehensive IT strategy designed to align technology with your goals. Our expert team will guide you through optimising your IT infrastructure, enhancing efficiency, and driving innovation",
    points: [
      "Tailored strategies that align with your business objectives",
      "Improved operational efficiency",
      "Enhanced ability to adapt to evolving technology trends",
    ],
  },
  {
    id: 2,
    image:
      "https://i.pinimg.com/736x/91/01/f1/9101f111180713e9fd2c4e484c0ca8d2.jpg",
    chips: ["#Cloud", "#Growth", "#Security"],
    title: "Cloud Integration",
    desc: "Protect your digital assets with robust cybersecurity solutions that defend against threats and vulnerabilities. Our services include risk assessments, threat monitoring, and incident response to ensure your data remains secure.",
    points: [
      "Efficient migration process",
      "Enhanced data security",
      "Reduced operational costs",
    ],
  },
  {
    id: 3,
    image:
      "https://i.pinimg.com/736x/12/ee/1a/12ee1a8f99391834f0be1713fb054e05.jpg",
    chips: ["#Automation", "#AI", "#Productivity"],
    title: "Automation Solutions",
    desc: "Leverage data-driven insights to make informed decisions and drive business growth. Our data analytics and BI solutions provide actionable intelligence to enhance performance and strategy.",
    points: [
      "Boost employee productivity",
      "Reduce workflow errors",
      "Faster execution of tasks",
    ],
  },
  {
    id: 4,
    image:
      "https://i.pinimg.com/736x/5b/84/5f/5b845f48450b91feaa218473d4aa8973.jpg",
    chips: ["#Security", "#RiskManagement", "#ITAudit"],
    title: "Cybersecurity Strategy",
    desc: "Bring your unique business requirements to life with custom software solutions tailored to your needs. Our development team creates scalable, efficient, and user-friendly applications designed to streamline your operations.",
    points: [
      "Threat detection & prevention",
      "Strong security policies",
      "Complete risk assessment",
    ],
  },
];

const ServicesScroll = () => {
  const sectionRefs = useRef([]);
  const [activeImage, setActiveImage] = useState(sections[0].image);
  const [animate, setAnimate] = useState(false);

  // ✅ EFFECT 1 — Intersection Observer
 useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // Trigger only when 80% of section is visible
        if (entry.isIntersecting && entry.intersectionRatio >= 0.8) {
          const id = entry.target.getAttribute("data-id");
          const found = sections.find((s) => s.id === Number(id));
          if (found) setActiveImage(found.image);
        }
      });
    },
    {
      threshold: [0.2, 0.5, 0.8, 1], // important
    }
  );

  sectionRefs.current.forEach((ref) => ref && observer.observe(ref));

  return () => observer.disconnect();
}, []);


  // ✅ EFFECT 2 — Trigger animation on image change
  useEffect(() => {
    setAnimate(false);
    const timeout = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(timeout);
  }, [activeImage]);

  return (
    <>
      <div className="scroll-wrappertop">
        <p className="serviceh">OUR SERVICES</p>
        <span className="sub-headingservice">Solutions for your unique needs</span>
      </div>

      <div className="scroll-wrapper">
        {/* LEFT STICKY IMAGE */}
        <div className="sticky-image-container">
          <img
            src={activeImage}
            className={`sticky-image ${animate ? "slide-up" : ""}`}
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="content-sections">
          {sections.map((sec, idx) => (
            <div
              key={sec.id}
              className="service_container"
              data-id={sec.id}
              ref={(el) => (sectionRefs.current[idx] = el)}
            >
              <div className="service_content">
                <div className="chips">
                  {sec.chips.map((chip) => (
                    <span key={chip}>{chip}</span>
                  ))}
                </div>

                <h2>{sec.title}</h2>
                <p className="service_desc">{sec.desc}</p>

                <ul className="service_points">
                  {sec.points.map((p) => (
                    <li key={p}>{p}</li>
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
    </>
  );
};

export default ServicesScroll;
