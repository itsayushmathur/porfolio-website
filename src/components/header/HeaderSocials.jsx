import React from "react";
import "./headersocials.css";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://github.com/itsayushmathur" target="_blank" rel="noreferrer" aria-label="GitHub">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/itsayushmathur" target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <FaLinkedin />
      </a>
      <a href="https://www.instagram.com/itsayushmathur/" target="_blank" rel="noreferrer" aria-label="Instagram">
        <FaInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
