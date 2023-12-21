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
    <header className={`header ${hamburgerOpen ? 'hamburger-open' : ''}`}>
      <nav>
        <div className="nav-left">
          <a href="/mission" className={isActive('/mission') ? 'active' : ''}>
          {t("Mission")}
          </a>
          <a href="/impact" className={isActive('/impact') ? 'active' : ''}>
          {t("Impact")}
          </a>
          <a href="/gallery" className={isActive('/gallery') ? 'active' : ''}>
          {t("Gallery")}
          </a>
        </div>
        <div className="nav-center">
          <span>
          <a href="/">
            <img src={logo} alt="logo" className="logo" />
          </a>
          <LanguageSwitcher />   
           </span>
        </div>
        <div className="nav-right">
          <a href="/about" className={isActive('/about') ? 'active' : ''}>
          {t("About")}
          </a>
         
          <a href="/contact" className={isActive('/contact') ? 'active' : ''}>
          {t("Contact")}
          </a>
          <a href="https://www.paypal.com/donate/?hosted_button_id=AY8U45QM5K5GJ" className="donate-button">
          {t("Donate")}
          </a>
        </div>
      </nav>
      <div className="hamburger-main" >
        <div className="hamburger_cont" onClick={toggleHamburger}>
          <Hamburger isOpen={hamburgerOpen}/>
            <img src={logo} alt="logo" className="logo" />
        </div>
        <div className='switch-mobile'><LanguageSwitcher /></div>
      </div>
      <div className="nav-mob" style={{display: hamburgerOpen ? 'inline' : 'none'}}>
        <ul className={hamburgerOpen ? 'open' : ''}>
            <li><a href="/" className={isActive('/') ? 'active' : ''}>
            {t("Home")}
          </a></li>
            <li>
          <a href="/mission" className={isActive('/mission') ? 'active' : ''}>
          {t("Mission")}
          </a></li>
            <li>
              <a href="/impact" className={isActive('/impact') ? 'active' : ''}>
              {t("Impact")}
          </a></li>
          <li>
            <a href="/gallery" className={isActive('/gallery') ? 'active' : ''}>
            {t("Gallery")}
          </a></li>
          <li>
          <a href="/about" className={isActive('/about') ? 'active' : ''}>
          {t("About")}
          </a>
          </li>
          <li>
          <a href="/contact" className={isActive('/contact') ? 'active' : ''}>
          {t("Contact")}
          </a>
          </li>
          <li>
          <a href="https://www.paypal.com/donate/?hosted_button_id=AY8U45QM5K5GJ" className="donate-button">
          {t("Donate")}
          </a>
          </li>
            
        </ul>
        </div>
    </header>
  );
};

export default Header;