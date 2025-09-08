import React, { useState } from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { professionalExperience, technicalSkills } from "./experienceData";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("technical");

  return (
    <section id="experience" className="experience-section">
      <h5 className="subheading">My Journey</h5>
      <h2 className="heading">Experience</h2>

      <div className="tabs">
        <button
          className={`tab-button ${activeTab === "technical" ? "active" : ""}`}
          onClick={() => setActiveTab("technical")}
        >
          Technical Skills
        </button>
        <button
          className={`tab-button ${
            activeTab === "professional" ? "active" : ""
          }`}
          onClick={() => setActiveTab("professional")}
        >
          Professional Experience
        </button>
      </div>

      {activeTab === "professional" && (
        <div className="professional-container">
          {professionalExperience.map((job, idx) => (
            <article className="professional-box" key={idx}>
              <div className="job-header">
                <div>
                  <div className="role">{job.role}</div>
                  <div className="company-container">
                    <img className="logo" src={job.logo} alt="Incture Logo" />
                    <div className="company">{job.company}</div>
                  </div>
                </div>

                <div className="meta">
                  <div className="pill">{job.duration}</div>
                </div>
              </div>

              <div className="divider" />

              <div className="job-points">
                {job.points.map((point, i) => (
                  <div className="job-point" key={i}>
                    <BsPatchCheckFill className="experience-icon" />
                    <div>
                      <h4>{point}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      )}

      {activeTab === "technical" && (
        <div className="experience-container">
          {/* Re-create boxes similar to previous behaviour (desktop: 3 columns) */}

          <div className="experience-box">
            <h3>Frontend Development</h3>
            <div className="experience-content">
              {technicalSkills.frontend.map((skill, i) => (
                <div className="experience-details" key={i}>
                  <BsPatchCheckFill className="experience-icon" />
                  <div>
                    <h4>{skill.name}</h4>
                    {skill.level && (
                      <small className="text-light">{skill.level}</small>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="experience-box">
            <h3>Backend Development</h3>
            <div className="experience-content">
              {technicalSkills.backend.map((skill, i) => (
                <div className="experience-details" key={i}>
                  <BsPatchCheckFill className="experience-icon" />
                  <div>
                    <h4>{skill.name}</h4>
                    {skill.level && (
                      <small className="text-light">{skill.level}</small>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="experience-box">
            <h3>Miscellaneous</h3>
            <div className="experience-content">
              {technicalSkills.miscellaneous.map((skill, i) => (
                <div className="experience-details" key={i}>
                  <BsPatchCheckFill className="experience-icon" />
                  <div>
                    <h4>{skill.name}</h4>
                    {skill.level && (
                      <small className="text-light">{skill.level}</small>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="experience-box">
            <h3>Deployment</h3>
            <div className="experience-content">
              {technicalSkills.deployment.map((skill, i) => (
                <div className="experience-details" key={i}>
                  <BsPatchCheckFill className="experience-icon" />
                  <div>
                    <h4>{skill.name}</h4>
                    {skill.level && (
                      <small className="text-light">{skill.level}</small>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="experience-box">
            <h3>Database</h3>
            <div className="experience-content">
              {technicalSkills.database.map((skill, i) => (
                <div className="experience-details" key={i}>
                  <BsPatchCheckFill className="experience-icon" />
                  <div>
                    <h4>{skill.name}</h4>
                    {skill.level && (
                      <small className="text-light">{skill.level}</small>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
