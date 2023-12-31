import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
      <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="experience__details-content">
                <h4>Core Java</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="experience__details-content">
                <h4>GIT</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="experience__details-content">
                <h4>MySQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            {/* <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="experience__details-content">
                <h4>Node Js(NPM)</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article> */}
          </div>
        </div><div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="experience__details-content">
                <h4>React</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="experience__details-content">
                <h4>HTML</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="experience__details-content">
                <h4>JavaScript</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="experience__details-content">
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="experience__details-content">
                <h4>TailWind</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
        
        <div className="experience__deployment">
          <h3>Deployment</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="experience__details-content">
                <h4>Netlify Hosting</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            
          </div>
        </div>
        <div className="experience__miscellaneous">
          <h3>Miscellaneous</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="experience__details-content">
                <h4>Digital Art</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
