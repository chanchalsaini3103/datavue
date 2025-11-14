import React, { useState } from "react";
import "../styles/FAQ.css"; // optional for custom styling

const faqData = [
  {
    question: "What industries do you specialize in?",
    answer:
      "We have extensive experience across a wide range of industries, including finance, healthcare, manufacturing, retail, and technology. Our team tailors solutions to meet your business needs.",
  },
  {
    question: "How do you ensure the security of our data?",
    answer:
      "We prioritize data security with advanced encryption in transit and at rest, compliance with GDPR & CCPA, regular audits, access controls, and monitoring for suspicious activities.",
  },
  {
    question: "What does the onboarding process look like?",
    answer:
      "Our onboarding process is seamless: initial consultation, tailored implementation plan, setup and integration, team training, and ongoing support.",
  },
  {
    question: "How flexible are your pricing plans?",
    answer:
      "We offer a range of flexible pricing plans. You can choose features based on your needs, and we can customize plans as your business grows. Contact our sales team for options.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-header">
        <p className="faq-title">FAQ</p>
        <h2 className="faq-subtitle">Your Questions, Answered</h2>
      </div>

      <div className="faq-list">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <span>{item.question}</span>
              <span className={`arrow ${activeIndex === index ? "open" : ""}`}>
                ▼
              </span>
            </div>
            <div
              className={`faq-answer ${activeIndex === index ? "open" : ""}`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
