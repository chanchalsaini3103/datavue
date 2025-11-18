import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCheck } from "react-icons/fa";
import "../styles/WorkflowZigZag.css";

const WorkflowZigZag = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: false });
  }, []);

  const steps = [
    {
      number: "01",
      title: "Discovery & Consultation",
      duration: "1–2 Weeks",
      points: [
        "Needs Assessment",
        "Stakeholder Interviews",
        "Opportunity Identification"
      ]
    },
    {
      number: "02",
      title: "Strategy Development",
      duration: "1 Month",
      points: ["Custom IT Roadmap", "Timeline Planning", "Goal Alignment"]
    },
    {
      number: "03",
      title: "Implementation & Execution",
      duration: "At 5 Months",
      points: ["System Integration", "Process Optimization", "Regular Updates"]
    },
    {
      number: "04",
      title: "Monitoring & Support",
      duration: "1 Year",
      points: ["Performance Monitoring", "Ongoing Maintenance", "24/7 Support"]
    }
  ];

  return (
    <div className="workflowSection">
      <h2 className="workflowTitle">OUR WORKFLOW</h2>
      <p className="workflowSubtitle">How We Work: From Concept to Completion</p>

      <div className="timelineContainer">

        {/* Center Vertical Line */}
        <div className="centerLine"></div>

        {steps.map((step, index) => (
  <div className="timelineRow" key={index} data-aos="fade-up">

    {/* Number always centered on vertical line */}
    <div className="numberCircle">{step.number}</div>

    {/* Left or Right Box */}
    <div className={`timelineItem ${index % 2 === 0 ? "rightSide" : "leftSide"}`}>
      <div className="contentBox">
        <h3>{step.title}</h3>
        <p className="duration">{step.duration}</p>

        <ul className="checkList">
          {step.points.map((p, i) => (
            <li key={i}>
              <span className="checkCircle">
                <FaCheck size={10} />
              </span>
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>

  </div>
))}

      </div>
    </div>
  );
};

export default WorkflowZigZag;
