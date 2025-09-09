// src/components/portfolio/Portfolio.jsx
import React, { useEffect, useState } from "react";
import "./portfolio.css";
import { data } from "./portfolioData";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

/* MUI imports for accordion */
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { MdExpandMore } from "react-icons/md";

const Portfolio = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [expandedId, setExpandedId] = useState(null); // for mobile accordion

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 600px)");
    const onChange = (e) => setIsMobile(e.matches);
    setIsMobile(mq.matches);
    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else mq.addListener(onChange);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", onChange);
      else mq.removeListener(onChange);
    };
  }, []);

  const handleAccordionChange = (id) => (ev, isExpanded) => {
    setExpandedId(isExpanded ? id : null);
  };

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio__header">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
      </div>

      <div className="portfolio__container">
        {data.map((item) => {
          // Mobile: render MUI Accordion
          if (isMobile) {
            return (
              <Accordion
                key={item.id}
                expanded={expandedId === item.id}
                onChange={handleAccordionChange(item.id)}
                className="portfolio-accordion"
                TransitionProps={{ unmountOnExit: true }}
              >
                <AccordionSummary
                  expandIcon={<MdExpandMore />}
                  aria-controls={`panel-${item.id}-content`}
                  id={`panel-${item.id}-header`}
                  className="pf-accordion-summary"
                >
                  <div className="pf-accordion-thumb">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="pf-accordion-title">
                    <h3>{item.title}</h3>
                  </div>
                </AccordionSummary>

                <AccordionDetails className="pf-accordion-details">
                  <p className="portfolio__item-desc">{item.description}</p>

                  {item.tech && item.tech.length > 0 && (
                    <div className="pf-tech-list">
                      {item.tech.map((t, i) => (
                        <span className="tech-pill" key={i}>
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="pf-accordion-actions">
                    {item.github && (
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="btn"
                        aria-label={`${item.title} GitHub`}
                      >
                        <FaGithub />&nbsp;Code
                      </a>
                    )}

                    {item.demo && (
                      <a
                        href={item.demo}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="btn btn-primary"
                        aria-label={`${item.title} Demo`}
                      >
                        <FaExternalLinkAlt />&nbsp;Live Demo
                      </a>
                    )}
                  </div>
                </AccordionDetails>
              </Accordion>
            );
          }

          // Desktop / Tablet: Clean card layout without modal
          return (
            <article key={item.id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="portfolio__item-content">
                <h3>{item.title}</h3>
                <p className="portfolio__item-desc">{item.description}</p>

                {item.tech && item.tech.length > 0 && (
                  <div className="portfolio__tech-stack">
                    {item.tech.map((t, i) => (
                      <span className="tech-badge" key={i}>
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                <div className="portfolio__item-cta">
                  {item.github && (
                    <a 
                      href={item.github} 
                      className="btn" 
                      target="_blank" 
                      rel="noreferrer" 
                      aria-label={`${item.title} GitHub`}
                    >
                      <FaGithub />&nbsp;Code
                    </a>
                  )}
                  {item.demo && (
                    <a 
                      href={item.demo} 
                      className="btn btn-primary" 
                      target="_blank" 
                      rel="noreferrer" 
                      aria-label={`${item.title} Live Demo`}
                    >
                      <FaExternalLinkAlt />&nbsp;Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;