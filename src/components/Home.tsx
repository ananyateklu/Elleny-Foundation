import React from "react";
import "./CSS/Home.css";
import soccer from "../assets/soccer.jpg";
import AboutUs from './AboutUs';
import OurWork from './OurWork';
import GetInvolved from './GetInvolved';
const hero = require("../assets/front.jpg");

function Home() {
  return (
    <div>
      <div className="hero-image">
        <img src={hero} className="hero" alt="hero"/>
      </div>
      <section className="mission">
        <div className="mission-container">
          <div className="mission-content">
            <img className="mission-image" src={soccer} alt="Mission" />
            <div className="mission-text">
              <h2>Mission</h2>
              <p>
              Improve the health of those we serve with care and compassion to realize higher community standards
              </p>
              <a href="/mission" className="learn-more">Learn More</a>
            </div>
          </div>
        </div>
      </section>
      <section className="stories">
        <div className="stories-container">
          <h2>STORIES</h2>
          <h1>Real people experiencing real impact</h1>
          <p>Read more about the organizations and people working to support positive growth and development for children every day.</p>
          <div className="story-images">
            <div className="story-image"></div>
            <div className="story-image"></div>
            <div className="story-image"></div>
          </div>
        </div>
      </section>
      <AboutUs />
      <OurWork />
      <GetInvolved />
    </div>
  );
}

export default Home;
