import React from 'react';
import './CSS/AboutUs.css';
import kind from '../assets/kind.jpg';
import kind2 from '../assets/kind2.jpg';

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
        <img src={kind} alt="About1" />
        <img src={kind2} alt="About2" />
      </div>
    </div>
  );
};

export default AboutUs;
