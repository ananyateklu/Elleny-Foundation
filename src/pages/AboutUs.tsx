// src/pages/AboutUs.tsx
import React from 'react';
import "../components/CSS/AboutUs.css"
import { useTranslation } from 'react-i18next';

const AboutUs: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="about-main">
      <div className="about-hero">
        <div className="about-head">
          <h1>{t("About")}</h1>
          <div className="about-tag">
            <p>
              {t("Aboutparagraph1")}
            </p>
          </div>
        </div>


      </div>
      <div className="content-section">
        <div className="section1-head">
          <h3>
          {t("MissionStatement")}
          </h3>
        </div>
        <div className="section1-body">
          <p>
          {t("Aboutparagraph")}
          </p>
          <p>
          {t("Aboutparagraph2")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
