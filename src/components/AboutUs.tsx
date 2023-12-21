import React from 'react';
import './CSS/AboutUs.css';
import kind from '../assets/kind.jpg';
import kind2 from '../assets/kind2.jpg';
import { useTranslation } from 'react-i18next';

const AboutUs: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="about-us">
      <h3>{t("About")}</h3>
      <h1>{t("Kindness")}</h1>
      <p>{t("ImpactParagraph")}</p>
      <a href="/about" className="learn-more">{t("LearnMore")}</a>
      <div className="about-images">
        <img src={kind} alt="About1" />
        <img src={kind2} alt="About2" />
      </div>
    </div>
  );
};

export default AboutUs;
