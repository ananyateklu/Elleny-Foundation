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
              Elleny Foundation is building a Clinic. Our mission is to improve the health of those we serve with care and compassion to realize higher community standards, exceed patients expectations and are provided in a convenient, cost-effective manner.
            </p>
          </div>
        </div>


      </div>
     
      <div className="content-section">
        <div className="section1-head">
          <h3>
            የእሌኒ ክሊንክ ዋና ዋና አለማዎች
          </h3>
        </div>
        <div className="section1-body">
          <p>
            በክሊንካችን የሚገለገሉ የሕብረተሰብ አካላትን ጥራት ያለው;  ጥንቃቄ የተሞላበትና ልባዊ አገልግሎት በመስጠት የሕዝቡን ጤና መጠበቅ ሲሆን; ይህንንም በአመቺ ሁኔታና በተመጣጣኝ ዋግ መስጠት ነው::
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
