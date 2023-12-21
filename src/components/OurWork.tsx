import React from "react";
import "./CSS/OurWork.css";
import { useTranslation } from 'react-i18next';

function OurWork() {
  const { t } = useTranslation();
  return (
    <section className="our-work">
      <div className="container">
        <h2>{t("OurWork")}</h2>
        <p>{t("WorkParagraph")}</p>
        <p>{t("WorkParagraph2")}</p>
        <a href="/impact" className="learn-more">{t("LearnMore")}</a>
      </div>
    </section>
  );
}

export default OurWork;
