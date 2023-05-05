import React from "react";
import "./CSS/Home.css";
import soccer from "../assets/soccer.jpg";
import AboutUs from './AboutUs';
import OurWork from './OurWork';
import GetInvolved from './GetInvolved';


function Home() {
  return (
    <div>
      <header className="homepage-image"></header>
      <section className="mission">
        <div className="container">
          <div className="mission-content">
            <img className="mission-image" src={soccer} alt="Mission" />
            <div className="mission-text">
              <h2>Mission</h2>
              <p>
                Your mission statement or description goes here.
              </p>
              <a href="/" className="learn-more">Learn More</a>
            </div>
          </div>
        </div>
      </section>
      <section className="stories">
        <div className="container">
          <h2>Stories</h2>
          <p>Real people experiencing real impact</p>
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
