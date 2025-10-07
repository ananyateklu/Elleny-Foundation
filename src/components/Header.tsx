import React,{useState} from 'react';
import { useLocation } from 'react-router-dom';
import './CSS/Header.css';
import Hamburger from './Hamburger'
import LanguageSwitcher from './translate/switch';
import { useTranslation } from 'react-i18next';
const logo = require("../assets/EllenyLogo.png");

const useIsActive = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return isActive;
};

const Header: React.FC = () => {
  const isActive = useIsActive();
  const { t } = useTranslation();
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  }

  return (
    <header className={`header ${hamburgerOpen ? 'hamburger-open' : ''}`} role="banner">
      <div className="logo-corner">
        <img src={logo} alt="Elleny Foundation Logo" className="logo" />
      </div>
      <nav className="desktop-nav" aria-label="Main navigation">
        <div className="nav-links">
          <a
            href="/mission"
            className={isActive('/mission') ? 'active' : ''}
            aria-label={t("Mission")}
          >
            {t("Mission")}
          </a>
          <a
            href="/impact"
            className={isActive('/impact') ? 'active' : ''}
            aria-label={t("Impact")}
          >
            {t("Impact")}
          </a>
          <a
            href="/gallery"
            className={isActive('/gallery') ? 'active' : ''}
            aria-label={t("Gallery")}
          >
            {t("Gallery")}
          </a>
          <a
            href="/about"
            className={isActive('/about') ? 'active' : ''}
            aria-label={t("About")}
          >
            {t("About")}
          </a>
          <a
            href="/contact"
            className={isActive('/contact') ? 'active' : ''}
            aria-label={t("Contact")}
          >
            {t("Contact")}
          </a>
          <a
            href="https://www.paypal.com/donate/?hosted_button_id=AY8U45QM5K5GJ"
            className="donate-button"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Donate via PayPal"
          >
            {t("Donate")}
          </a>
        </div>
      </nav>
      <div className="lang-switch-corner">
        <LanguageSwitcher />
      </div>
      <div className="hamburger-main">
        <div
          className="hamburger_cont"
          onClick={toggleHamburger}
          role="button"
          aria-label="Toggle navigation menu"
          aria-expanded={hamburgerOpen}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              toggleHamburger();
            }
          }}
        >
          <Hamburger isOpen={hamburgerOpen} />
        </div>
        <a href="/" aria-label="Home - Elleny Foundation" className="mobile-logo-link">
          <img src={logo} alt="Elleny Foundation Logo" className="logo" />
        </a>
      </div>
      <div className={`nav-mob ${hamburgerOpen ? 'open' : ''}`} style={{display: hamburgerOpen ? 'block' : 'none'}}>
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <ul>
            <li>
              <a
                href="/"
                className={isActive('/') ? 'active' : ''}
                aria-label={t("Home")}
              >
                {t("Home")}
              </a>
            </li>
            <li>
              <a
                href="/mission"
                className={isActive('/mission') ? 'active' : ''}
                aria-label={t("Mission")}
              >
                {t("Mission")}
              </a>
            </li>
            <li>
              <a
                href="/impact"
                className={isActive('/impact') ? 'active' : ''}
                aria-label={t("Impact")}
              >
                {t("Impact")}
              </a>
            </li>
            <li>
              <a
                href="/gallery"
                className={isActive('/gallery') ? 'active' : ''}
                aria-label={t("Gallery")}
              >
                {t("Gallery")}
              </a>
            </li>
            <li>
              <a
                href="/about"
                className={isActive('/about') ? 'active' : ''}
                aria-label={t("About")}
              >
                {t("About")}
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className={isActive('/contact') ? 'active' : ''}
                aria-label={t("Contact")}
              >
                {t("Contact")}
              </a>
            </li>
            <li>
              <a
                href="https://www.paypal.com/donate/?hosted_button_id=AY8U45QM5K5GJ"
                className="donate-button"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Donate via PayPal"
              >
                {t("Donate")}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
