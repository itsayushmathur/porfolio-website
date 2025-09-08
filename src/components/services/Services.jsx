// Services.jsx
import React from "react";
import styled from "styled-components";
import { BiCheck } from "react-icons/bi";
import services from "./services"; // adjust path if needed

// Styled Components (kept your original styles)
const ServicesSection = styled.section`
w
  padding: 2rem 6rem;
  color: var(--color-light);
  text-align: center;

  @media (max-width: 600px) {
    padding: 2rem 1.25rem;
  }
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
  padding: 1.25rem 1rem;
  border-radius: 1rem 1rem 0 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  h3 {
    color: var(--color-white);
    letter-spacing: 0.5px;
    margin: 0;
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
    margin: 0;
  }

  strong {
    color: var(--color-primary);
    font-weight: 600;
    display: inline-block;
    margin-right: 0.3rem;
  }
`;

const ServiceIcon = styled(BiCheck)`
  color: var(--color-primary);
  margin-top: 4px;
  font-size: 1.5rem;
  flex-shrink: 0;
`;

// Component
const Services = () => {
  return (
    <ServicesSection id="services">
      <SectionHeader>
        <h5>What I Offer</h5>
        <h2>Services</h2>
      </SectionHeader>

      <ServicesContainer>
        {services.map((svc) => (
          <ServiceCard key={svc.id}>
            <ServiceHead>
              <h3>{svc.title}</h3>
            </ServiceHead>

            <ServiceList>
              {svc.points.map((pt, idx) => (
                <ServiceItem key={idx}>
                  <ServiceIcon aria-hidden />
                  <p>
                    <strong>{pt.title}:</strong> {pt.desc}
                  </p>
                </ServiceItem>
              ))}
            </ServiceList>
          </ServiceCard>
        ))}
      </ServicesContainer>
    </ServicesSection>
  );
};

export default Services;
