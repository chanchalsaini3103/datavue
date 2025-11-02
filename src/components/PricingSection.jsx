import React from "react";
import "../styles/PricingSection.css";

const pricingPlans = [
  {
    name: "Basic",
    description: "Ideal for small businesses",
    price: 18,
    features: [
      "Basic IT consulting sessions",
      "Cloud storage setup",
      "Standard cybersecurity package",
      "Support during business hours",
    ],
  },
  {
    name: "Pro",
    description: "Comprehensive IT management",
    price: 99,
    features: [
      "Full IT consulting sessions",
      "Custom cloud solutions and integration",
      "24/7 cybersecurity package",
      "On-site support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "Fully managed IT solutions",
    price: 200,
    features: [
      "Unlimited IT consulting sessions",
      "Advanced cloud solutions",
      "Dedicated cybersecurity team",
      "Full-time on-site support",
    ],
  },
];

const PricingSection = () => {
  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-header">
        <p className="subtitle">PRICING PLANS</p>
        <h2 className="title">Flexible Pricing to Suit Your Budget</h2>
        <p className="description">
          We offer flexible pricing plans tailored to the specific needs of your
          business. Whether you are a small startup or a large enterprise, we
          have a solution that fits your budget.
        </p>
      </div>
      <div className="pricing-cards">
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className={`pricing-card ${plan.highlighted ? "highlighted" : ""}`}
          >
            <h3 className="plan-name">{plan.name}</h3>
            <p className="plan-description">{plan.description}</p>
            <p className="starting-text">STARTING AT</p>
            <div className="price">
              <span className="currency">$</span>
              <span className="amount">{plan.price}</span>
              <span className="per-month">/month</span>
            </div>
            <ul className="features">
              {plan.features.map((feature, index) => (
                <li key={index}>
                  <span className="checkmark">✔</span> {feature}
                </li>
              ))}
            </ul>
            <a href="#contacts" className="cta-button">
              Try it now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
