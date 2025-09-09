// src/components/portfolio/portfolioData.js
import WonderStudyimg from "../../assets/portfolio1.jpg";
import RTOimg from "../../assets/portfolio2.jpg";
import Vaultimg from "../../assets/portfolio3.jpg";
// import TAMSimg from "../../assets/portfolio4.jpg";
import TWMimg from "../../assets/portfolio5.jpg";
import EmployeePortalImg from "../../assets/employee_portal.png";
import VingsImg from "../../assets/vings_dashboard.png";
import ClimateChronicles from "../../assets/climate_chronicles.png";
import DocShareImg from "../../assets/doc_share.png";

export const data = [
  {
    id: 1,
    image: DocShareImg,
    title: "DocShare (Ongoing Project)",
    github: "https://github.com/itsayushmathur/docshare-frontend",
    description:
      "A File Upload and Sharing Web App using React, Spring Boot, MongoDB, Tailwind CSS, and Clerk Authentication. It allows users to upload, share, and manage files securely with a user-friendly interface.",
  },

  {
    id: 2,
    image: ClimateChronicles,
    title: "Climate Chronicles",
    github: "https://github.com/itsayushmathur/climate-chronicles",
    demo: "https://climate-chronicles.vercel.app/",
    description:
      "A Weather Data Visualization App built using React.js and Styled Components. It provides graphical and list-based representations of weather data for a selected location and date range.",
  },
  {
    id: 3,
    image: EmployeePortalImg,
    title: "Employee Portal",
    demo: "https://incturites.cherrywork.com/",
    description:
      "A feature-rich Employee Portal built from scratch using React.js. It includes modules for attendance, allocations, job openings, events, and more. Fully responsive and designed to enhance employee engagement and operational efficiency.",
  },
  {
    id: 4,
    image: VingsImg,
    title: "Visiblity to Growth & Sustainability Dashboard",
    demo: "https://vings.cherrywork.com/",
    description:
      "A comprehensive dashboard integrating 13+ Power BI reports for centralized data access. Built using React.js, focusing on performance optimization and seamless user experience for business insights.",
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
    description:
      "A Java-based course management system designed for educational institutions. Built with Swing and AWT, it manages courses, faculty, and student data efficiently.",
  },
  {
    id: 7,
    image: RTOimg,
    title: "RTO Management System",
    github:
      "https://github.com/itsayushmathur/road-and-transport-office.github.io",
    description:
      "A Java application for managing Regional Transport Office operations, including license applications and vehicle registrations with database integration.",
  },
  {
    id: 8,
    image: Vaultimg,
    title: "The Vault",
    github: "https://github.com/itsayushmathur/The_Vault.github.io",
    description:
      "A vehicle catalog management system for car showrooms. Built with Java, it includes modules for administration, employee management, and customer bookings.",
  },
];
