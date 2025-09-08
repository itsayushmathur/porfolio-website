import React, { useState } from "react";
import styled from "styled-components";
import { BsPatchCheckFill } from "react-icons/bs";
import { professionalExperience, technicalSkills } from "./experienceData";

const ExperienceSection = styled.section`
  padding: 2rem 6rem;
`;

const Tabs = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const TabButton = styled.button`
  padding: 0.6rem 1.2rem;
  border-radius: 0.5rem;
  border: none;
  background: ${(props) => (props.active ? "var(--color-primary)" : "var(--color-bg-variant)")};
  color: ${(props) => (props.active ? "#fff" : "var(--color-light)")};
  cursor: pointer;
  font-weight: 500;
  transition: var(--transition);

  &:hover {
    background: var(--color-primary-variant);
    color: #fff;
  }
`;

const ExperienceContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    > div {
      width: 90%;
      margin: 0 auto;
      padding: 2rem;
    }
  }

  @media (max-width: 600px) {
    gap: 1rem;
    > div {
      width: 100%;
      padding: 2rem 1rem;
    }
  }
`;

/* Shared box used across technical & professional, with small tweaks for professional */
const ExperienceBox = styled.div`
  background: var(--color-bg-variant);
  padding: 2rem;
  border-radius: 1.6rem;
  border: 1px solid transparent;
  transition: var(--transition);
  box-shadow: 0 6px 18px rgba(11, 13, 20, 0.04);
  &:hover {
    background: transparent;
    border-color: var(--color-primary-variant);
    transform: translateY(-6px);
  }
  h3 {
    text-align: center;
    margin-bottom: 1.25rem;
    color: var(--color-primary);
  }
`;

/* Technical layout (unchanged) */
const ExperienceContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.4rem;
  padding: 1rem;
`;

const ExperienceDetails = styled.article`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  h4 {
    margin: 0;
  }
`;

const Icon = styled(BsPatchCheckFill)`
  margin-top: 6px;
  color: var(--color-primary);
`;

/* PROFESSIONAL SPECIFIC STYLES */
const ProfessionalContainer = styled(ExperienceContainer)``;

const ProfessionalBox = styled(ExperienceBox)`
  padding: 1.6rem;
  border-radius: 1.25rem;

  .job-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 0.6rem;
  }

  .role {
    text-align: left;
    font-size: 1.05rem;
    font-weight: 700;
    color: var(--color-primary);
    line-height: 1.15;
  }

  .meta {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  .company {
    font-weight: 600;
    color: var(--color-light);
    font-size: 0.95rem;
  }

  .pill {
    background: linear-gradient(90deg, var(--color-primary) 0%, var(--color-primary-variant) 100%);
    color: #fff;
    padding: 0.25rem 0.6rem;
    border-radius: 999px;
    font-size: 0.75rem;
    font-weight: 600;
    box-shadow: 0 6px 16px rgba(14, 50, 120, 0.06);
  }

  .divider {
    height: 1px;
    background: rgba(255,255,255,0.03);
    margin: 0.9rem 0;
  }

  .job-points {
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
    padding: 0.25rem 0;
  }

  .job-point {
    display: flex;
    gap: 0.9rem;
    align-items: flex-start;
  }

  .job-point h4 {
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--color-light);
    margin: 0;
  }

  /* make icon smaller for job bullet */
  .job-point svg {
    margin-top: 4px;
    transform: translateY(0);
    font-size: 0.85rem;
  }

  /* responsive tweak: keep content readable on small screens */
  @media (max-width: 600px) {
    padding: 1.4rem;
    .role { font-size: 1rem; }
  }
`;

const Experience = () => {
  const [activeTab, setActiveTab] = useState("technical");

  return (
    <ExperienceSection id="experience">
      <h5>My Journey</h5>
      <h2>Experience</h2>

      <Tabs>
        <TabButton active={activeTab === "technical"} onClick={() => setActiveTab("technical")}>
          Technical Skills
        </TabButton>
        <TabButton active={activeTab === "professional"} onClick={() => setActiveTab("professional")}>
          Professional Experience
        </TabButton>
      </Tabs>

      {activeTab === "professional" && (
        <ProfessionalContainer>
          {professionalExperience.map((job, idx) => (
            <ProfessionalBox key={idx}>
              <div className="job-header">
                <div>
                  <div className="role">{job.role}</div>
                  <div className="company">{job.company}</div>
                </div>

              </div>
                <div className="meta">
                  {/* duration pill */}
                  <div className="pill">{job.duration}</div>
                </div>

              <div className="divider" />

              <div className="job-points">
                {job.points.map((point, i) => (
                  <div className="job-point" key={i}>
                    <Icon />
                    <div>
                      <h4>{point}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </ProfessionalBox>
          ))}
        </ProfessionalContainer>
      )}

      {activeTab === "technical" && (
        <ExperienceContainer>
          {/* Frontend */}
          <ExperienceBox>
            <h3>Frontend Development</h3>
            <ExperienceContent>
              {technicalSkills.frontend.map((skill, i) => (
                <ExperienceDetails key={i}>
                  <Icon />
                  <div>
                    <h4>{skill.name}</h4>
                    {skill.level && <small className="text-light">{skill.level}</small>}
                  </div>
                </ExperienceDetails>
              ))}
            </ExperienceContent>
          </ExperienceBox>

          {/* Backend */}
          <ExperienceBox>
            <h3>Backend Development</h3>
            <ExperienceContent>
              {technicalSkills.backend.map((skill, i) => (
                <ExperienceDetails key={i}>
                  <Icon />
                  <div>
                    <h4>{skill.name}</h4>
                    {skill.level && <small className="text-light">{skill.level}</small>}
                  </div>
                </ExperienceDetails>
              ))}
            </ExperienceContent>
          </ExperienceBox>

          

          {/* Miscellaneous */}
          <ExperienceBox>
            <h3>Miscellaneous</h3>
            <ExperienceContent>
              {technicalSkills.miscellaneous.map((skill, i) => (
                <ExperienceDetails key={i}>
                  <Icon />
                  <div>
                    <h4>{skill.name}</h4>
                    {skill.level && <small className="text-light">{skill.level}</small>}
                  </div>
                </ExperienceDetails>
              ))}
            </ExperienceContent>
          </ExperienceBox>

          {/* Deployment */}
          <ExperienceBox>
            <h3>Deployment</h3>
            <ExperienceContent>
              {technicalSkills.deployment.map((skill, i) => (
                <ExperienceDetails key={i}>
                  <Icon />
                  <div>
                    <h4>{skill.name}</h4>
                    {skill.level && <small className="text-light">{skill.level}</small>}
                  </div>
                </ExperienceDetails>
              ))}
            </ExperienceContent>
          </ExperienceBox>

          {/* database */}
          <ExperienceBox>
            <h3>Database</h3>
            <ExperienceContent>
              {technicalSkills.database.map((skill, i) => (
                <ExperienceDetails key={i}>
                  <Icon />
                  <div>
                    <h4>{skill.name}</h4>
                    {skill.level && <small className="text-light">{skill.level}</small>}
                  </div>
                </ExperienceDetails>
              ))}
            </ExperienceContent>
          </ExperienceBox>
        </ExperienceContainer>
      )}
    </ExperienceSection>
  );
};

export default Experience;
