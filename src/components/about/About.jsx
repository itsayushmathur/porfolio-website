import React from "react";
import "./about.css";
import IMG1 from "../../assets/shh.png";
import IMG3 from "../../assets/shh2.png";
import IMG2 from "../../assets/me-about.jpg";
import IMG4 from "../../assets/shh3.png";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import ImageCarousel from "./ImageCarousel";

const About = () => {
  return (
    <section id="about" className="about-section">
      <h5 className="subheading">Get To Know</h5>
      <h2 className="heading">About Me</h2>

      <div className="about__container container">
        <div className="about__me">
          <div className="about__me-image">
            <ImageCarousel
              images={[IMG1, IMG2, IMG3, IMG4]}
              interval={3000}
              altPrefix="About"
            />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article
              className="about__card"
              onClick={() =>
                document
                  .getElementById("experience")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              <div className="about__icon">
                <FaAward />
              </div>
              <h5>Experience</h5>
              <small>2 Years 8 Months</small>
            </article>

            <article
              className="about__card"
              onClick={() =>
                document
                  .getElementById("portfolio")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              <div className="about__icon">
                <VscFolderLibrary />
              </div>
              <h5>Projects</h5>
              <small>10+ Completed & Ongoing</small>
            </article>
          </div>

          <p className="about__description">
            Frontend-heavy Fullstack Developer with nearly 3 years of experience
            building high-performance, scalable, and responsive web apps.
            Skilled in React.js, JavaScript, and component-driven UI systems;
            delivering impactful solutions for large-scale clients and products.
            Passionate about frontend architecture, performance optimisation,
            accessibility, and scalable component libraries. Proven track record
            delivering responsive, maintainable UIs and collaborating closely
            with backend, QA and design teams to ship production-ready features.
          </p>

          <a href="#contact" className="btn btn-primary about__btn">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
