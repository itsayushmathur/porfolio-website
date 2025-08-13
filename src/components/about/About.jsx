import React from "react";
import styled from "styled-components";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

// Styled Components
const AboutSection = styled.section`
  padding: 2rem 6rem;
`;

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 35% 50%;
  gap: 15%;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 0;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

const AboutMe = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 2rem;
  background: linear-gradient(
    45deg,
    transparent,
    var(--color-primary),
    transparent
  );
  display: grid;
  place-items: center;

  @media (max-width: 1024px) {
    width: 50%;
    margin: 2rem auto 4rem;
  }

  @media (max-width: 600px) {
    width: 65%;
    margin: 0 auto 3rem;
  }
`;

const AboutImage = styled.div`
  border-radius: 3rem;
  overflow: hidden;
  transform: rotate(10deg);
  transition: var(--transition);

  &:hover {
    transform: rotate(0);
  }
`;

const AboutContent = styled.div`
  text-align: left;

  @media (max-width: 600px) {
    text-align: center;
  }
`;

const AboutCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
`;

const AboutCard = styled.article`
  background: var(--color-bg-variant);
  border: 1px solid transparent;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  transition: var(--transition);

  &:hover {
    background: transparent;
    border-color: var(--color-primary-variant);
    cursor: pointer;
  }
`;

const Icon = styled.div`
  color: var(--color-primary);
  font-size: 1.4rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  margin: 2rem 0 2.6rem;
  color: var(--color-light);

  @media (max-width: 1024px) {
    margin: 2rem 2rem 1.5rem;
  }

  @media (max-width: 600px) {
    margin: 1.5rem 0;
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: var(--color-primary);
  color: var(--color-bg);
  border-radius: 5px;
  text-decoration: none;
  transition: var(--transition);

  &:hover {
    background: var(--color-primary-variant);
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <AboutContainer>
        <AboutMe>
          <AboutImage>
            <img src={ME} alt="About Me" />
          </AboutImage>
        </AboutMe>

        <AboutContent>
          <AboutCards>
            <AboutCard>
              <Icon>
                <FaAward />
              </Icon>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </AboutCard>

            <AboutCard>
              <Icon>
                <VscFolderLibrary />
              </Icon>
              <h5>Projects</h5>
              <small>10+ Completed & Ongoing</small>
            </AboutCard>
          </AboutCards>

          <Description>
            Frontend Engineer with 2+ years of experience and strong expertise
            in React.js, modern JavaScript (ES6+), and component-driven UI.
            Passionate about frontend architecture, performance optimisation,
            accessibility, and scalable component libraries. Proven track record
            delivering responsive, maintainable UIs and collaborating closely
            with backend, QA and design teams to ship production-ready features.
            Key strengths: component reusability, state management (Redux),
            responsive & mobile-first design, performance tuning (lazy loading,
            memoization, code-splitting), accessibility, and pragmatic error
            handling.
          </Description>

          <Button href="#contact">Let's Talk</Button>
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
