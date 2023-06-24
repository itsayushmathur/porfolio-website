import React from "react";
import "./portfolio.css";
import WonderStudyimg from "../../assets/portfolio1.jpg";
import RTOimg from "../../assets/portfolio2.jpg";
import Vaultimg from "../../assets/portfolio3.jpg";
import TAMSimg from "../../assets/portfolio4.jpg";

const data = [
  {
    id: 4,
    image: TAMSimg,
    title: "T A M S",
    github: "https://github.com/itsayushmathur/TAMS",
    demo: "https://talentams.netlify.app",
    description:
      "TAMS (Talent Allocation Management System) is a React.js-based project that streamlines talent allocation and management processes within organizations. It offers a user-friendly interface for HR managers and project leads to efficiently search for suitable resources based on skills and availability. TAMS enhances resource allocation, project efficiency, and overall productivity in organizations.",
  },
  {
    id: 3,
    image: WonderStudyimg,
    title: "Wonder Study",
    github: "https://github.com/itsayushmathur/WonderStudy-Course_Management",
    demo: "https://github.com/itsayushmathur/WonderStudy-Course_Management",
    description:
      "WonderStudy is an application program developed in Java, utilizing Swing and AWT, designed to facilitate efficient management of courses, faculty, and students for educational institutes. The project involves creating a user-friendly interface for administrators, teachers, and students to manage course enrollment, track student progress, and generate reports.",
  },
  {
    id: 1,
    image: RTOimg,
    title: "RTO",
    github:
      "https://github.com/itsayushmathur/road-and-transport-office.github.io",
    demo: "https://github.com/itsayushmathur/road-and-transport-office.github.io",
    description:
      "Regional Transport Office Management is a Java application that provides various transport-related services, including driving license applications, vehicle registration, and management. The project utilizes Java programming concepts and database connectivity to create a comprehensive system that streamlines the process of managing and tracking transportation-related activities.",
  },
  {
    id: 2,
    image: Vaultimg,
    title: "The Vault",
    github: "https://github.com/itsayushmathur/The_Vault.github.io",
    demo: "https://github.com/itsayushmathur/The_Vault.github.io",
    description:
      "The Vault is a Java-based application designed to manage vehicle catalogs for a car showroom. It consisted of modules for administration, employees, and customers. The application facilitated vehicle booking, catalog display, and provided essential administrative features. Its goal was to enhance the overall management and customer experience within a car showroom environment.",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo, description }) => (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>

            <div className="portfolio__item-cta">
              <a href={github} className="btn" target="_blank" rel="noreferrer">
                Github
              </a>
              <a href={demo} className="btn" target="_blank" rel="noreferrer">
                Live Demo
              </a>
            </div>
            <h4>{description}</h4>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
