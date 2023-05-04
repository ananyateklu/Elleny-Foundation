import React from 'react';
import './CSS/AboutUs.css';
import soccer from '../assets/soccer.jpg';
import soccer2 from '../assets/soccer2.jpg';

const AboutUs: React.FC = () => {
  return (
    <div className="about-us">
      <h2>ABOUT US</h2>
      <h3>The power of kindness</h3>
      <p>
        The Elleny Foundation is a private foundation funded by dash and the works of dash.
      </p>
      <a href="/about" className="learn-more">Learn More</a>
      <div className="about-images">
        <img src={soccer} alt="About1" />
        <img src={soccer2} alt="About2" />
      </div>
    </div>
  );
};

export default AboutUs;
