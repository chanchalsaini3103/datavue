import React from "react";
import "../styles/PricingSection.css";

const plans = [
  {
    title: "Basic",
    price: "$49/mo",
    features: [
      "5 Projects",
      "10 GB Storage",
      "Basic Support",
      "Collaboration Tools"
    ],
  },
  {
    title: "Pro",
    price: "$99/mo",
    features: [
      "20 Projects",
      "50 GB Storage",
      "Priority Support",
      "Team Collaboration"
    ],
    popular: true
  },
  {
    title: "Enterprise",
    price: "$199/mo",
    features: [
      "Unlimited Projects",
      "200 GB Storage",
      "24/7 Support",
      "Advanced Analytics"
    ],
  },
];

const PricingSection = () => {
  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-header">
        <h2>Our Pricing Plans</h2>
        <p>Choose a plan that fits your business needs.</p>
      </div>

      <div className="pricing-cards">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`pricing-card ${plan.popular ? "popular" : ""}`}
          >
            {plan.popular && <span className="popular-badge">Most Popular</span>}
            <h3>{plan.title}</h3>
            <p className="price">{plan.price}</p>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button className="btn">Get Started</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
