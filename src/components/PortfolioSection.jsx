import React from 'react';
import '../styles/PortfolioSection.css';

const caseStudies = [
  {
    id: 1,
    imageUrl: '/images/case‑01.jpg',
    client: 'ABC Financial Group',
    industry: 'Financial Services',
    companySize: '250+ employees',
    overview: 'IT Strategy Transformation for a Financial Services Firm',
    link: '/case-studies/abc-financial'
  },
  {
    id: 2,
    imageUrl: '/images/case‑02.jpg',
    client: 'XYZ Manufacturing Co.',
    industry: 'Manufacturing',
    companySize: '500+ employees',
    overview: 'Enhancing Operational Efficiency for a Manufacturing Company',
    link: '/case-studies/xyz-manufacturing'
  },
  {
    id: 3,
    imageUrl: '/images/case‑03.jpg',
    client: 'HealthPlus Clinics',
    industry: 'Healthcare',
    companySize: '1,200+ employees',
    overview: 'Scaling a Healthcare Provider with IT Strategy and Infrastructure Modernization',
    link: '/case-studies/healthplus'
  },
  // add more as needed
];

const PortfolioSection = () => {
  return (
    <section className="portfolio-section">
      <div className="container">
        <h2 className="section-title">Featured Case Studies</h2>
        <p className="section-subtitle">Success stories: Real results for real clients</p>
        <div className="case‑grid">
          {caseStudies.map(cs => (
            <a key={cs.id} href={cs.link} className="case‑card">
              <div className="case‑image‑wrapper">
                <img src={cs.imageUrl} alt={cs.client + ' case study'} className="case‑image"/>
              </div>
              <div className="case‑content">
                <h3 className="case‑client">{cs.client}</h3>
                <p className="case‑industry"><strong>Industry:</strong> {cs.industry}</p>
                <p className="case‑size"><strong>Company size:</strong> {cs.companySize}</p>
                <p className="case‑overview">{cs.overview}</p>
                <div className="case‑cta">
                  Read Case Study →
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
