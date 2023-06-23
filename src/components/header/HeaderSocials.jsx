import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://github.com/itsayushmathur"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/itsayushmathur/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin/>
      </a>
      <a
        href="https://www.instagram.com/itsayushmathur/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillInstagram />
      </a>
      {/* <a
        href="https://www.facebook.com/AbstergoCaelum/"
        target="_blank"
        rel="noreferrer"
      >
        <BsFacebook />
      </a> */}
    </div>
  );
};

export default HeaderSocials;
