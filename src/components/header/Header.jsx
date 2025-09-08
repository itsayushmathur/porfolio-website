import React, { useEffect, useState } from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import BMC from "./BMC";

const Header = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header>
      {/* Theme Toggle Button */}
      <button
        className="theme-toggle"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
      </button>
      <div className="container header_container">
        {/* <h5>Hello I'm</h5> */}
        <h1>Hello, I'm Ayush Mathur</h1>
        <h5 className="text-light">Frontend-heavy Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <BMC />
      </div>

      <a href="#" className="scroll__top">
        Scroll To Top
      </a>
    </header>
  );
};

export default Header;
