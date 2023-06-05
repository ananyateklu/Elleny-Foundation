import React from 'react';
import './CSS/AboutUs.css';
import soccer from '../assets/soccer.jpg';
import soccer2 from '../assets/soccer2.jpg';

const AboutUs: React.FC = () => {
  return (
    <div className="about-us">
      <h3>ABOUT US</h3>
      <h1>The power of kindness</h1>
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
