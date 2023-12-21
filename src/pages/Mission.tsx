// src/pages/Mission.tsx
import React from 'react';
import "../components/CSS/Mission.css"
import { useTranslation } from 'react-i18next';

const Mission: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="mission-main">
      <div className="mission-hero">
        <div className="mission-head">
          <h1>{t("OurMission")}</h1>
          <div className="mission-tag">
            <p>
            {t("Missionparagraph")}
            </p>
          </div>
        </div>


      </div>
     
      <div className="content-section">
        <div className="section1-head">
          <h3>
          {t("Missionmain")}
          </h3>
        </div>
        <div className="section1-body">
          <p>
          {t("Missionparagraph2")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
