import React from "react";
import styled from "styled-components";
import WonderStudyimg from "../../assets/portfolio1.jpg";
import RTOimg from "../../assets/portfolio2.jpg";
import Vaultimg from "../../assets/portfolio3.jpg";
import TAMSimg from "../../assets/portfolio4.jpg";
import TWMimg from "../../assets/portfolio5.jpg";
import EmployeePortalImg from "../../assets/employee_portal.png";
import VingsImg from "../../assets/vings_dashboard.png";
// import GrowthDashboardImg from "../../assets/growth_dashboard.jpg";

// Styled Components
const PortfolioSection = styled.section`
  padding: 2rem 6rem;
`;

const PortfolioContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.2rem;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const PortfolioItem = styled.article`
  background: var(--color-bg-variant);
  padding: 1.5rem;
  border-radius: 2rem;
  border: 1px solid transparent;
  transition: var(--transition);

  &:hover {
    border-color: var(--color-primary-variant);
    background: transparent;
  }
`;

const PortfolioImage = styled.div`
  border-radius: 1.5rem;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
  }
`;

const CTA = styled.div`
  display: flex;
  gap: 1rem;

  margin-bottom: 1rem;

  a {
    padding: 0.5rem 1rem;
    background: var(--color-primary);
    color: white;
    border-radius: 5px;
    text-decoration: none;
    transition: var(--transition);

    &:hover {
      background: var(--color-primary-variant);
    }
  }
`;

const data = [
  {
    id: 1,
    image: EmployeePortalImg,
    title: "Employee Portal",
    // github: "https://github.com/itsayushmathur/employee-portal",
    demo: "https://incturites.cherrywork.com/",
    description:
      "A feature-rich Employee Portal built from scratch using React.js. It includes modules for attendance, allocations, job openings, events, and more. Fully responsive and designed to enhance employee engagement and operational efficiency.",
  },
  {
    id: 2,
    image: VingsImg,
    title: "Visiblity to Growth & Sustainability Dashboard",
    // github: "https://github.com/itsayushmathur/vings-dashboard",
    demo: "https://vings.cherrywork.com/",
    description:
      "A comprehensive dashboard integrating 13+ Power BI reports for centralized data access. Built using React.js, focusing on performance optimization and seamless user experience for business insights.",
  },
  // {
  //   id: 3,
  //   image: GrowthDashboardImg,
  //   title: "Growth & Sustainability Dashboard",
  //   github: "https://github.com/itsayushmathur/growth-dashboard",
  //   demo: "https://growthdashboard.netlify.app",
  //   description:
  //     "Developed a dashboard system integrating Power BI reports with cost optimization features, reducing the need for multiple licenses. Enhanced decision-making through centralized data visualization.",
  // },
  {
    id: 4,
    image: TAMSimg,
    title: "T A M S",
    github: "https://github.com/itsayushmathur/TAMS",
    demo: "https://talentams.netlify.app",
    description:
      "TAMS (Talent Allocation Management System) streamlines talent allocation for organizations. Built with React.js, it improves resource management and enhances project productivity.",
  },
  {
    id: 5,
    image: TWMimg,
    title: "Travel With Me",
    github: "https://github.com/itsayushmathur/Travel-With-Me",
    demo: "https://twmagency.netlify.app/",
    description:
      "A dynamic web app for travel enthusiasts. Built with React.js and EmailJS, it offers seamless communication and a responsive design for an engaging user experience.",
  },
  {
    id: 6,
    image: WonderStudyimg,
    title: "Wonder Study",
    github: "https://github.com/itsayushmathur/WonderStudy-Course_Management",
    demo: "https://github.com/itsayushmathur/WonderStudy-Course_Management",
    description:
      "A Java-based course management system designed for educational institutions. Built with Swing and AWT, it manages courses, faculty, and student data efficiently.",
  },
  {
    id: 7,
    image: RTOimg,
    title: "RTO Management System",
    github:
      "https://github.com/itsayushmathur/road-and-transport-office.github.io",
    demo: "https://github.com/itsayushmathur/road-and-transport-office.github.io",
    description:
      "A Java application for managing Regional Transport Office operations, including license applications and vehicle registrations with database integration.",
  },
  {
    id: 8,
    image: Vaultimg,
    title: "The Vault",
    github: "https://github.com/itsayushmathur/The_Vault.github.io",
    demo: "https://github.com/itsayushmathur/The_Vault.github.io",
    description:
      "A vehicle catalog management system for car showrooms. Built with Java, it includes modules for administration, employee management, and customer bookings.",
  },
];

const Portfolio = () => {
  return (
    <PortfolioSection id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <PortfolioContainer>
        {data.map(({ id, image, title, github, demo, description }) => (
          <PortfolioItem key={id}>
            <PortfolioImage>
              <img src={image} alt={title} />
            </PortfolioImage>
            <h3 style={{ padding: "1rem 0" }}>{title}</h3>

            <CTA>
              {github && (
                <a href={github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              )}
              {demo && (
                <a href={demo} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              )}
              {/* {!github && !demo && (
                <a href="#" className="disabled">
                  Not Available
                </a>
              )} */}
            </CTA>

            <h4>{description}</h4>
          </PortfolioItem>
        ))}
      </PortfolioContainer>
    </PortfolioSection>
  );
};

export default Portfolio;
