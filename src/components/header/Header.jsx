import React, { useEffect, useState } from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import BMC from "./BMC"; // if you have this component; keep as-is

const Header = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header className="site-header">
      <button
        className="theme-toggle"
        aria-label="Toggle theme"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
      </button>

      <div className="container header_container">
        <div className="header_text">
          <h1 className="header_name">Hello, I'm Ayush Mathur</h1>
          <h5 className="text-light header_role">Frontend-heavy Fullstack Developer</h5>
          <CTA />
          <HeaderSocials />
        </div>

        <div className="me">
          <img src={ME} alt="Ayush Mathur" className="me-img" />
        </div>

        <BMC />
      </div>

      <a href="#" className="scroll__top" aria-hidden>
        Scroll To Top
      </a>
    </header>
  );
};

export default Header;
