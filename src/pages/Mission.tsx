// src/pages/Mission.tsx
import React from 'react';
import "../components/CSS/Mission.css"

const Mission: React.FC = () => {
  return (
      <div className="mission-main">
      <div className="mission-hero">
      <div className="mission-head">
        <h1>OUR MISSION</h1>
        <div className="mission-tag">
          <p>
          Improve the health of those we serve with care and compassion to realize higher community standards
          </p>
        </div>
      </div>
     
    
    </div>
    <div className="content-section">
        <div className="section1-head">
      <h3>
      Years of Work
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

export default Mission;
