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
            MISSION STATEMENT
          </h3>
        </div>
        <div className="section1-body">
          <p>
            The purpose of The Elleny Foundation is to honor Elleny Belayneh whose plan was to become a pediatrician.  She always loved to help and work with children.  Therefore, The Elleny Foundation is determined to establish one or more clinics in her name and to provide services to the needy, especially children.  The corporation adopt as its Mission Statement the following:
          </p>
          <p>
            To establish and maintain one or more medical clinic(s) that provide doctor appointments and consultations, laboratory services and pharmacy services to poor and underprivileged persons, especially children, without access to adequate health care services in Nazret, Ethiopia and in other locations in the country of Ethiopia.
          </p>
        </div>
      </div>
      <div className="content-section">
        <div className="section1-head">
          <h3>
          What we do
          </h3>
        </div>
        <div className="section1-body">
          <p>
            To establish clinic(s) that provide doctor visits, laboratory and pharmacy services to the needy, specially the children in Adama(Nazret), Ethiopia and then in other locations in Ethiopia, in commemoration of Elleny Tedla Belayneh(1990-2009)
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
