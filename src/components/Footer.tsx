import React from "react";
import "./CSS/Footer.css";
import ellenylogo from "../assets/EllenyLogo.png"
import Facebook from "../assets/facebook-logo.png"
import Instagram from "../assets/instagram-logo.png"

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <img className="footer-logo" src={ellenylogo} alt="Logo" />
          <nav className="footer-nav">
            <a href="/" className="footer-link">
              Home
            </a>
            <a href="/about" className="footer-link">
              About Us
            </a>
            <a href="/our-work" className="footer-link">
              Our Work
            </a>
            <a href="/get-involved" className="footer-link">
              Get Involved
            </a>
            <a href="/contact" className="footer-link">
              Contact Us
            </a>
          </nav>
          
          <div className="social-links">
          <a href="/donate" className="donate-footer">
            Donate
          </a>
            <a href="/" className="social-link">
              <img src={Facebook} alt='Facebook' className="facebook-link"/>
            </a>
            <a href="/" className="social-link">
            <img src={Instagram} alt='Instagram' className="instagram-link" />
            </a>
          </div>
        </div>
        <p className="footer-copyright">
          &copy; {currentYear} Your Foundation Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
