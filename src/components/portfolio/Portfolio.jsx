// src/components/portfolio/Portfolio.jsx
import React, { useEffect, useState } from "react";
import "./portfolio.css";
import { data } from "./portfolioData";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt, FaTimes } from "react-icons/fa";

const Portfolio = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [expandedId, setExpandedId] = useState(null); // for mobile accordion
  const [modalItem, setModalItem] = useState(null); // for desktop modal

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 600px)");
    const onChange = (e) => setIsMobile(e.matches);
    setIsMobile(mq.matches);
    // modern browsers:
    mq.addEventListener ? mq.addEventListener("change", onChange) : mq.addListener(onChange);
    return () =>
      mq.removeEventListener ? mq.removeEventListener("change", onChange) : mq.removeListener(onChange);
  }, []);

  // lock body scroll when modal open
  useEffect(() => {
    if (modalItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalItem]);

  useEffect(() => {
    const onEsc = (e) => {
      if (e.key === "Escape") setModalItem(null);
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  const toggleMobile = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const openModal = (item) => setModalItem(item);

  return (
    <section id="portfolio" className="portfolio-section">
      <h5 className="portfolio-sub">My Recent Work</h5>
      <h2 className="portfolio-heading">Portfolio</h2>

      <div className="portfolio__container container">
        {data.map((item) => {
          const isExpanded = isMobile && expandedId === item.id;
          return (
            <article
              key={item.id}
              className={`portfolio__item ${isMobile && !isExpanded ? "collapsed" : ""}`}
            >
              <div
                className="portfolio__item-image"
                role={isMobile ? "button" : undefined}
                tabIndex={isMobile ? 0 : undefined}
                onClick={() => (isMobile ? toggleMobile(item.id) : null)}
                onKeyDown={(e) => {
                  if (isMobile && (e.key === "Enter" || e.key === " ")) toggleMobile(item.id);
                }}
                aria-expanded={isMobile ? (isExpanded ? "true" : "false") : undefined}
              >
                <img src={item.image} alt={item.title} />
              </div>

              <h3 className="portfolio__item-title">{item.title}</h3>

              <div className="portfolio__item-cta">
                {item.github && (
                  <a
                    href={item.github}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${item.title} GitHub`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub />&nbsp;Code
                  </a>
                )}

                {item.demo && (
                  <a
                    href={item.demo}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${item.title} Live Demo`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Live Demo
                  </a>
                )}

                {/* Desktop: open modal; Mobile: toggle accordion */}
                <button
                  className="btn view-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (isMobile) toggleMobile(item.id);
                    else openModal(item);
                  }}
                  aria-expanded={isMobile ? isExpanded : modalItem?.id === item.id}
                >
                  {isMobile ? (isExpanded ? "Hide" : "Show Details") : "View Details"}
                </button>
              </div>

              {/* details — visible on desktop and when accordion expanded on mobile */}
              <div
                className={`portfolio__item-details ${isMobile && !isExpanded ? "hidden" : ""}`}
                aria-hidden={isMobile && !isExpanded}
              >
                <h4>{item.title}</h4>
                <p className="portfolio__item-desc">{item.description}</p>
              </div>
            </article>
          );
        })}
      </div>

      {/* Modal for desktop */}
      {modalItem && (
        <div className="portfolio-modal" role="dialog" aria-modal="true" aria-labelledby={`modal-${modalItem.id}-title`}>
          <div className="portfolio-modal__backdrop" onClick={() => setModalItem(null)} />
          <div className="portfolio-modal__panel">
            <button className="modal-close" onClick={() => setModalItem(null)} aria-label="Close details">
              <FaTimes />
            </button>

            <div className="modal-image">
              <img src={modalItem.image} alt={modalItem.title} />
            </div>

            <div className="modal-body">
              <h3 id={`modal-${modalItem.id}-title`}>{modalItem.title}</h3>
              <p>{modalItem.description}</p>

              <div className="modal-cta">
                {modalItem.github && (
                  <a href={modalItem.github} className="btn" target="_blank" rel="noreferrer">View Code</a>
                )}
                {modalItem.demo && (
                  <a href={modalItem.demo} className="btn" target="_blank" rel="noreferrer">Live Demo</a>
                )}
                <button className="btn btn-ghost" onClick={() => setModalItem(null)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
