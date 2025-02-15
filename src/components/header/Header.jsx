import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import BMC from "./BMC"; 

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Ayush Mathur</h1>
        <h5 className="text-light">ASE Web Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <BMC />
      </div>
      <a href="#contact" className="scroll__down">
        Scroll Down
      </a>
    </header>
  );
};

export default Header;
