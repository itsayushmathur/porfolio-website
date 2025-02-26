import React, { useState, useEffect } from "react";
import "./nav.css";
import Tooltip from "@mui/material/Tooltip";
import { AiFillHome, AiOutlineUser, AiFillContainer } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute("id");
            setActiveNav(sectionId ? `#${sectionId}` : "#");
          }
        });
      },
      { threshold: 0.6 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav>
      <Tooltip title="Home" arrow placement="top">
        <a
          href="#"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          <AiFillHome />
        </a>
      </Tooltip>
      <Tooltip title="About" arrow placement="top">
        <a
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
        >
          <AiOutlineUser />
        </a>
      </Tooltip>
      <Tooltip title="Experience" arrow placement="top">
        <a
          href="#experience"
          onClick={() => setActiveNav("#experience")}
          className={activeNav === "#experience" ? "active" : ""}
        >
          <BiBook />
        </a>
      </Tooltip>
      <Tooltip title="Services" arrow placement="top">
        <a
          href="#services"
          onClick={() => setActiveNav("#services")}
          className={activeNav === "#services" ? "active" : ""}
        >
          <RiServiceLine />
        </a>
      </Tooltip>
      <Tooltip title="Portfolio" arrow placement="top">
        <a
          href="#portfolio"
          onClick={() => setActiveNav("#portfolio")}
          className={activeNav === "#portfolio" ? "active" : ""}
        >
          <AiFillContainer />
        </a>
      </Tooltip>
      <Tooltip title="Contact" arrow placement="top">
        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <BiMessageSquareDetail />
        </a>
      </Tooltip>
    </nav>
  );
};

export default Nav;
