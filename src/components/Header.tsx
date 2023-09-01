import React from 'react';
import { useLocation } from 'react-router-dom';
import './CSS/Header.css';
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

  return (
    <header className="header">
      <nav>
        <div className="nav-left">
          <a href="/mission" className={isActive('/mission') ? 'active' : ''}>
            Mission
          </a>
          <a href="/impact" className={isActive('/impact') ? 'active' : ''}>
            Impact
          </a>
          <a href="/gallery" className={isActive('/gallery') ? 'active' : ''}>
            Gallery
          </a>
        </div>
        <div className="nav-center">
          <a href="/">
            <img src={logo} alt="logo" className="logo" />
          </a>
        </div>
        <div className="nav-right">
          <a href="/about" className={isActive('/about') ? 'active' : ''}>
            About Us
          </a>
         
          <a href="/contact" className={isActive('/contact') ? 'active' : ''}>
            Contact Us
          </a>
          <a href="https://www.paypal.com/donate/?hosted_button_id=AY8U45QM5K5GJ" className="donate-button">
            Donate
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;