import React from "react";
import "./footer.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner container">
        <a href="#" className="site-footer__logo" aria-label="Ayush Mathur">
          Ayush Mathur
        </a>

        <ul className="site-footer__permalinks" role="navigation" aria-label="Footer Navigation">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="site-footer__socials" aria-label="Social links">
          <a href="https://github.com/itsayushmathur" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/itsayushmathur/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/itsayushmathur/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>

        <div className="site-footer__copyright">
          <small>&copy; {new Date().getFullYear()} Ayush Mathur. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
