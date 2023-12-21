import React from "react";
import "./CSS/Footer.css";
import ellenylogo from "../assets/EllenyLogo.png"
import Facebook from "../assets/facebook-logo.png"
import Instagram from "../assets/instagram-logo.png"
import { useTranslation } from 'react-i18next';

function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <img className="footer-logo" src={ellenylogo} alt="Logo" />
          <nav className="footer-nav">
            <a href="/mission" className="footer-link">
            {t("Mission")}
            </a>
            <a href="/impact" className="footer-link">
            {t("Impact")}
            </a>
            <a href="/gallery" className="footer-link">
            {t("Gallery")}
            </a>
            <a href="/about" className="footer-link">
            {t("About")}
            </a>
            <a href="/contact" className="footer-link">
            {t("Contact")}
            </a>
          </nav>
          
          <div className="social-links">
          <a href="https://www.paypal.com/donate/?hosted_button_id=AY8U45QM5K5GJ" className="donate-footer">
            {(t("Donate"))}
          </a>
            <a href="https://www.facebook.com/EllenyFound" className="social-link">
              <img src={Facebook} alt='Facebook' className="facebook-link"/>
            </a>
            <a href="https://www.instagram.com/ellenyfoundation/" className="social-link">
            <img src={Instagram} alt='Instagram' className="instagram-link" />
            </a>
          </div>
        </div>
        <p className="footer-copyright">
          &copy; {currentYear} {t("CopyrightParagraph")}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
