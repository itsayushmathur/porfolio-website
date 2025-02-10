import React from "react";
import styled from "styled-components";
import { BiCheck } from "react-icons/bi";

// Styled Components
const ServicesSection = styled.section`
  padding: 2rem 6rem;
  ${'' /* background: var(--color-bg); */}
  color: var(--color-light);
  text-align: center;
`;

const SectionHeader = styled.div`
  margin-bottom: 3rem;

  h5 {
    font-size: 1.3rem;
    color: var(--color-primary);
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  h2 {
    font-size: 2.5rem;
    color: var(--color-white);
    margin-top: 0.5rem;
  }
`;

const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.article`
  background: var(--color-bg-variant);
  padding: 2rem;
  border-radius: 1.5rem;
  border: 2px solid transparent;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background: var(--color-dark);
    transform: translateY(-8px);
    border-color: var(--color-primary);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }
`;

const ServiceHead = styled.div`
  background: var(--color-primary);
  padding: 1.5rem;
  border-radius: 1rem 1rem 0 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  h3 {
    color: var(--color-white);
    ${'' /* font-size: 1.5rem; */}
    ${'' /* font-weight: bold; */}
    letter-spacing: 0.5px;
  }
`;

const ServiceList = styled.ul`
  padding: 1.5rem;
  list-style: none;
  text-align: left;
`;

const ServiceItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(5px);
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    color: var(--color-light);
  }

  strong {
    color: var(--color-primary);
    font-weight: 600;
  }
`;

const ServiceIcon = styled(BiCheck)`
  color: var(--color-primary);
  margin-top: 4px;
  font-size: 1.5rem;
`;

const Services = () => {
  return (
    <ServicesSection id="services">
      {/* <SectionHeader> */}
        <h5>What I Offer</h5>
        <h2>Services</h2>
      {/* </SectionHeader> */}

      <ServicesContainer>
        {/* Frontend Development Services */}
        <ServiceCard>
          <ServiceHead>
            <h3>Frontend Development</h3>
          </ServiceHead>
          <ServiceList>
            <ServiceItem>
              <ServiceIcon />
              <p>
                <strong>Responsive Web Applications:</strong> I develop
                scalable, mobile-responsive applications using React.js for
                seamless performance.
              </p>
            </ServiceItem>
            <ServiceItem>
              <ServiceIcon />
              <p>
                <strong>Optimized Performance:</strong> I focus on performance
                optimization, reducing load times, and enhancing user
                engagement.
              </p>
            </ServiceItem>
            <ServiceItem>
              <ServiceIcon />
              <p>
                <strong>Custom Dashboard Development:</strong> Experienced in
                building data-driven dashboards, integrating Power BI reports
                for centralized insights.
              </p>
            </ServiceItem>
          </ServiceList>
        </ServiceCard>

        {/* UI/UX Design Services */}
        <ServiceCard>
          <ServiceHead>
            <h3>UI/UX Design</h3>
          </ServiceHead>
          <ServiceList>
            <ServiceItem>
              <ServiceIcon />
              <p>
                <strong>Modern User Interfaces:</strong> Clean, intuitive UIs
                with Tailwind CSS & Material-UI for vibrant, responsive layouts.
              </p>
            </ServiceItem>
            <ServiceItem>
              <ServiceIcon />
              <p>
                <strong>Mobile-First Design:</strong> Building apps that adapt
                flawlessly to all screen sizes for consistent user experiences.
              </p>
            </ServiceItem>
            <ServiceItem>
              <ServiceIcon />
              <p>
                <strong>Interactive Prototypes:</strong> Developing prototypes
                to visualize workflows, aiding product functionality before
                development.
              </p>
            </ServiceItem>
          </ServiceList>
        </ServiceCard>

        {/* Digital Art Services */}
        <ServiceCard>
          <ServiceHead>
            <h3>Digital Art & Design</h3>
          </ServiceHead>
          <ServiceList>
            <ServiceItem>
              <ServiceIcon />
              <p>
                <strong>Sketching & Illustrations:</strong> Creating unique
                visuals that blend creativity with technical precision.
              </p>
            </ServiceItem>
            <ServiceItem>
              <ServiceIcon />
              <p>
                <strong>Custom Graphic Designs:</strong> Designing engaging
                graphics to enhance brand identity and storytelling.
              </p>
            </ServiceItem>
            <ServiceItem>
              <ServiceIcon />
              <p>
                <strong>Creative UI Elements:</strong> Adding artistic elements
                to web apps for visually appealing yet functional designs.
              </p>
            </ServiceItem>
          </ServiceList>
        </ServiceCard>
      </ServicesContainer>
    </ServicesSection>
  );
};

export default Services;
