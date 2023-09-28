import React from "react";
import "./CSS/Home.css";
import change from "../assets/change.jpg";
import kids from "../assets/kids.jpg";
import AboutUs from './AboutUs';
import OurWork from './OurWork';
import soccer4 from '../assets/soccer4.jpg';
import soccer2 from '../assets/soccer2.jpg';
import stories from '../assets/stories.jpg';
import video from '../assets/Video.mp4';


function Home() {

  return (
    <div>
      <div className="hero-image">
        <video className="hero" controls autoPlay muted loop>
        <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <section className="mission">
        <div className="mission-container">
          <div className="mission-content">
            <img className="mission-image" src={change} alt="Mission" />
            <div className="mission-text">
              <h2>Mission</h2>
              <p>
                The Elleny Foundation was established to honor the memory of Elleny Belayneh, whose aspiration was to become a pediatrician. Possessing a deep love for children and an inherent desire to help others, Elleny's spirit is the guiding force of our mission. The Foundation is steadfastly committed to erecting one or more clinics in her name, dedicated to serving the underserved, with a particular focus on children's welfare.
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
            <img className="story-image" src={soccer4} alt="soccer"></img>
            <img className="story-image" src={soccer2} alt="soccer"></img>
            <img className="story-image" src={stories} alt="stories"></img>
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
