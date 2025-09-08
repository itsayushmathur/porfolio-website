import React from "react";
import "./cta.css";

const CTA = () => {
  return (
    <div className="cta">
      <a href="#contact" className="btn btn-primary cta-primary">Let's Talk</a>
      <a
        href="/assets/Ayush_Mathur_Resume.pdf"
        className="btn cta-secondary"
        download
        rel="noopener noreferrer"
      >
        Download CV
      </a>
    </div>
  );
};

export default CTA;
