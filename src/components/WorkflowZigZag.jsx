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
      info:"We start by understanding your business goals, challenges, and current IT environment. Through in-depth consultations, we identify opportunities for improvement and areas where our expertise can add value. This step sets the foundation for a successful project.",
      duration: "1–2 Weeks",
      points: [
        "Needs Assessment",
        "Stakeholder Interviews",
        "Opportunity Identification",
      ],
    },
    {
      number: "02",
      title: "Strategy Development",
      info:"Next, our team develops a customized IT strategy tailored to your business needs. We outline clear objectives, timelines, and key performance indicators (KPIs) to ensure alignment with your goals. Our approach is data-driven and focused on delivering measurable results.",
      duration: "1 Month",
      points: ["Custom IT Roadmap", "Timeline Planning", "Goal Alignment"],
    },
    {
      number: "03",
      title: "Implementation & Execution",
      info:"Once the strategy is in place, our expert team gets to work. We implement the necessary technologies, optimize processes, and ensure seamless integration with your existing systems. Throughout this stage, we maintain open communication to keep you informed and involved.",
      duration: "At 5 Months",
      points: ["System Integration", "Process Optimization", "Regular Updates"],
    },
    {
      number: "04",
      title: "Monitoring & Support",
      info:"After the implementation, we don’t just walk away. We provide ongoing monitoring and support to ensure that everything runs smoothly. We track performance, make necessary adjustments, and are always available to address any issues or questions that arise.",
      duration: "1 Year",
      points: ["Performance Monitoring", "Ongoing Maintenance", "24/7 Support"],
    },
  ];

  return (
    <div className="workflowSection">
      <h2 className="workflowTitle">OUR WORKFLOW</h2>
      <p className="workflowSubtitle">
        How We Work:<br></br> From Concept to Completion
      </p>

      <div className="timelineContainer">
        {/* Center Vertical Line */}
        <div className="centerLine"></div>

        {steps.map((step, index) => (
          <div className="timelineRow" key={index} data-aos="fade-up">
            {/* Number always centered on vertical line */}
            <div className="numberCircle">{step.number}</div>

            {/* Left or Right Box */}
            <div
              className={`timelineItem ${
                index % 2 === 0 ? "rightSide" : "leftSide"
              }`}
            >
              <div className="contentBox">
                <p className="duration">{step.duration}</p>
                <h3>{step.title}</h3>
                <p className="info">{step.info}</p>

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
