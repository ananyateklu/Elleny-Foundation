import React from "react";
import "./CSS/Home.css";
import change from "../assets/change.jpg";
import kids from "../assets/kids.jpg";
import AboutUs from './AboutUs';
import OurWork from './OurWork';
import soccer4 from '../assets/soccer4.jpg';
import soccer2 from '../assets/soccer2.jpg';
import stories from '../assets/stories.jpg';
import { useTranslation } from 'react-i18next';


function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="hero-image">
        <iframe
          className="hero"
          src="https://www.youtube.com/embed/rBI0ecP7Q-Q?autoplay=1&mute=1&loop=1&playlist=rBI0ecP7Q-Q&controls=1"
          title="Elleny Foundation Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <div>
        <div className="coming-soon">
          <h2>{t("ComingSoon")}</h2>
          <a href="/gallery" className="learn-more">{t("Gallery")}</a>
        </div>
      </div>
      <section className="mission">
        <div className="mission-container">
          <div className="mission-content">
            <img className="mission-image" src={change} alt="Mission" />
            <div className="mission-text">
              <h2>{t("Mission")}</h2>
              <p>
                {t("Missionparagraph3")}
              </p>
              <a href="/mission" className="learn-more">{t("LearnMore")}</a>
            </div>
          </div>
        </div>
      </section>
      <section className="stories">
        <div className="stories-container">
          <h1>{t("Gallery")}</h1>
          <p>{t("GalleryDescription")}</p>
          <a href="/gallery" className="learn-more">{t("Gallery")}</a>
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
              <h2>{t("Contact")}</h2>
              <p>{t("Contactparagraph")}</p>
              <a href="/getinvolved" className="learn-more">{t("Contact")}</a>
            </div>
            <img className="get-involved-image" src={kids} alt="Get Involved" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
