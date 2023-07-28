// src/pages/Mission.tsx
import React from 'react';
import "../components/CSS/AboutUs.css"

const AboutUs: React.FC = () => {
  return (
      <div className="about-main">
      <div className="about-hero">
      <div className="about-head">
        <h1>About Us</h1>
        <div className="about-tag">
          <p>
          Improve the health of those we serve with care and compassion to realize higher community standards
          </p>
        </div>
      </div>
     
    
    </div>
    <div className="content-section">
        <div className="section1-head">
      <h3>
      The power of love
      </h3>
    </div>
    <div className="section1-body">
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra odio mi, 
      eget luctus ex auctor id. Curabitur fringilla nunc eget lacus hendrerit dictum. 
      Nunc vitae ex sit amet nisl placerat molestie. Cras vehicula tellus felis, facilisis 
      congue enim facilisis sit amet. Vestibulum auctor ex nibh. Nam convallis nulla gravida 
      est convallis, luctus congue turpis lacinia. Aliquam erat volutpat.
      </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
