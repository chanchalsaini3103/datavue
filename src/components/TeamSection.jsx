import React from "react";
import "../styles/TeamSection.css";

const teamData = [
  {
    name: "Sarah Lee",
    role: "CHIEF EXECUTIVE OFFICER (CEO)",
    desc: "Sarah ensures that our projects are delivered on time and within budget. With her exceptional organizational skills and attention to detail, she coordinates all aspects of project execution, ensuring client satisfaction.",
    img: "https://framerusercontent.com/images/O84aEy6cbWWMnamO8UuKiupvEOc.png",
  },
  {
    name: "John Doe",
    role: "CHIEF TECHNOLOGY OFFICER (CTO)",
    desc: "With over 20 years of experience in the IT industry, John leads our team with a vision for innovation and excellence. He has successfully overseen numerous large-scale digital transformation projects for enterprises.",
    img: "https://framerusercontent.com/images/W1A3uBx46267ftvomrOoQ0ZA.png",
  },
  {
    name: "Emily Davis",
    role: "SENIOR IT Consultant",
    desc: "Emily has a wealth of experience in IT strategy development and implementation. She works closely with clients to create tailored strategies that align with their business goals and deliver measurable results.",
    img: "https://framerusercontent.com/images/uKLti9VCzhn0aUvJIGWOons5qq4.png",
  },
  {
    name: "Michael Smith",
    role: "SENIOR IT CONSULTAN",
    desc: "Michael is an expert in data analytics and business intelligence. He has helped businesses turn raw data into actionable insights, driving growth and improving decision-making processes.",
    img: "https://framerusercontent.com/images/O84aEy6cbWWMnamO8UuKiupvEOc.png",
  },
  {
    name: "Olivia Brown",
    role: "SENIOR IT CONSULTANT",
    desc: "Olivia arah ensures that our projects are delivered on time and within budget. With her exceptional organizational skills and attention to detail, she coordinates all aspects of project execution, ensuring client satisfaction.",
    img: "https://framerusercontent.com/images/W1A3uBx46267ftvomrOoQ0ZA.png",
  },
  {
    name: "David Wilson",
    role: "DATA ANALYST",
    desc: "David arah ensures that our projects are delivered on time and within budget. With her exceptional organizational skills and attention to detail, she coordinates all aspects of project execution, ensuring client satisfaction.",
    img: "https://framerusercontent.com/images/uKLti9VCzhn0aUvJIGWOons5qq4.png",
  },
];

const HeroTeam = () => {
  return (
    <section className="team-section">
      <p className="team-subtitle">MEET OUR TEAM</p>
      <h2 className="team-title">Experts Behind Your Success</h2>
      <p className="team-intro">
       Our team is composed of experienced professionals who are passionate about driving digital transformation and innovation. Each member brings unique skills and expertise, working together to deliver exceptional results for our clients
      </p>

      {/* First Row - Scroll Left */}
      <div className="marquee-container">
        <div className="marquee scroll-left">
          {teamData.slice(0, 3).map((member, idx) => (
            <div className="team-card horizontal" key={idx}>
              <img src={member.img} alt={member.name} className="team-img" />
              <div className="team-info">
                <h4 className="team-name">{member.name}</h4>
                <p className="team-role">{member.role}</p>
                <p className="team-desc">{member.desc}</p>
              </div>
            </div>
          ))}
          {/* Duplicate for seamless scroll */}
          {teamData.slice(0, 3).map((member, idx) => (
            <div className="team-card horizontal" key={"dup1-" + idx}>
              <img src={member.img} alt={member.name} className="team-img" />
              <div className="team-info">
                <h4 className="team-name">{member.name}</h4>
                <p className="team-role">{member.role}</p>
                <p className="team-desc">{member.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Second Row - Scroll Right */}
      {/* <div className="marquee-container">
        <div className="marquee scroll-right">
          {teamData.slice(3, 6).map((member, idx) => (
            <div className="team-card horizontal" key={idx}>
              <img src={member.img} alt={member.name} className="team-img" />
              <div className="team-info">
                <h4 className="team-name">{member.name}</h4>
                <p className="team-role">{member.role}</p>
                <p className="team-desc">{member.desc}</p>
              </div>
            </div>
          ))}
          
          {teamData.slice(3, 6).map((member, idx) => (
            <div className="team-card horizontal" key={"dup2-" + idx}>
              <img src={member.img} alt={member.name} className="team-img" />
              <div className="team-info">
                <h4 className="team-name">{member.name}</h4>
                <p className="team-role">{member.role}</p>
                <p className="team-desc">{member.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default HeroTeam;
