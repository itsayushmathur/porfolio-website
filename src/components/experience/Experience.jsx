import React from "react";
import styled from "styled-components";
import { BsPatchCheckFill } from "react-icons/bs";

// Styled Components
const ExperienceSection = styled.section`
  padding: 2rem 6rem;
`;

const ExperienceContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    > div {
      width: 80%;
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

const ExperienceBox = styled.div`
  background: var(--color-bg-variant);
  padding: 2rem;
  border-radius: 2rem;
  border: 1px solid transparent;
  transition: var(--transition);

  &:hover {
    background: transparent;
    border-color: var(--color-primary-variant);
    cursor: default;
  }

  h3 {
    text-align: center;
    margin-bottom: 2rem;
    color: var(--color-primary);
  }
`;

const ExperienceContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 2rem;
  padding: 1rem;
`;

const ExperienceDetails = styled.article`
  display: flex;
  gap: 1rem;
`;

const Icon = styled(BsPatchCheckFill)`
  margin-top: 6px;
  color: var(--color-primary);
`;

const Experience = () => {
  return (
    <ExperienceSection id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <ExperienceContainer>
        {/* Frontend Development */}
        <ExperienceBox>
          <h3>Frontend Development</h3>
          <ExperienceContent>
            <ExperienceDetails>
              <Icon />
              <div>
                <h4>React.js</h4>
                <small className="text-light">Advanced</small>
              </div>
            </ExperienceDetails>
            <ExperienceDetails>
              <Icon />
              <div>
                <h4>JavaScript (ES6+)</h4>
                <small className="text-light">Advanced</small>
              </div>
            </ExperienceDetails>
            <ExperienceDetails>
              <Icon />
              <div>
                <h4>Styled Components</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </ExperienceDetails>
            <ExperienceDetails>
              <Icon />
              <div>
                <h4>Redux (State Management)</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </ExperienceDetails>
            <ExperienceDetails>
              <Icon />
              <div>
                <h4>HTML5</h4>
                <small className="text-light">Advanced</small>
              </div>
            </ExperienceDetails>
            <ExperienceDetails>
              <Icon />
              <div>
                <h4>CSS3</h4>
                <small className="text-light">Experienced</small>
              </div>
            </ExperienceDetails>
          </ExperienceContent>
        </ExperienceBox>

        {/* Backend Development */}
        <ExperienceBox>
          <h3>Backend Development</h3>
          <ExperienceContent>
            <ExperienceDetails>
              <Icon />
              <div>
                <h4>Core Java</h4>
                <small className="text-light">Entry</small>
              </div>
            </ExperienceDetails>
            <ExperienceDetails>
              <Icon />
              <div>
                <h4>Git & Version Control</h4>
                <small className="text-light">Advanced</small>
              </div>
            </ExperienceDetails>
            <ExperienceDetails>
              <Icon />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </ExperienceDetails>
          </ExperienceContent>
        </ExperienceBox>

        {/* Miscellaneous */}
        <ExperienceBox>
          <h3>Miscellaneous</h3>
          <ExperienceContent>
            <ExperienceDetails>
              <Icon />
              <div>
                <h4>Chrome DevTools</h4>
                <small className="text-light">Advanced</small>
              </div>
            </ExperienceDetails>
            <ExperienceDetails>
              <Icon />
              <div>
                <h4>Debugging & Optimization</h4>
                <small className="text-light">Advanced</small>
              </div>
            </ExperienceDetails>
            <ExperienceDetails>
              <Icon />
              <div>
                <h4>Digital Art & Sketching</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </ExperienceDetails>
          </ExperienceContent>
        </ExperienceBox>
        {/* Deployment */}
        <ExperienceBox>
          <h3>Deployment</h3>
          <ExperienceContent>
            <ExperienceDetails>
              <Icon />
              <div>
                <h4>Netlify</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </ExperienceDetails>
            <ExperienceDetails>
              <Icon />
              <div>
                <h4>CI/CD with Git</h4>
                <small className="text-light">Beginner</small>
              </div>
            </ExperienceDetails>
          </ExperienceContent>
        </ExperienceBox>
      </ExperienceContainer>
    </ExperienceSection>
  );
};

export default Experience;
