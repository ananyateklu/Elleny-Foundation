import React from "react";
import "./CSS/Home.css";
import change from "../assets/change.jpg";
import kids from "../assets/kids.jpg";
import AboutUs from './AboutUs';
import OurWork from './OurWork';
import soccer from '../assets/soccer.jpg';
import soccer2 from '../assets/soccer2.jpg';
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
            <img className="mission-image" src={change} alt="Mission" />
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
            <img className="story-image" src={soccer} alt="soccer"></img>
            <img className="story-image" src={soccer2} alt="soccer"></img>
            <div className="story-image"></div>
          </div>
        </div>
      </section>
      <AboutUs />
      <OurWork />
      <section className="get-involved">
    <div className="container">
      <div className="get-involved-content">
        <div className="get-involved-text">
          <h2>GET INVOLVED</h2>
          <p>Looking to join the action?</p>
          <p>
            See the variety of ways you can take action to help kids who face adversity.
          </p>
          <a href="/getinvolved" className="learn-more">Learn More</a>
        </div>
       <img className="get-involved-image" src={kids} alt="Get Involved" />
      </div>
    </div>
  </section>
    </div>
  );
}

export default Home;
