import React from "react";
import Resume from "../../assets/Ayush_Mathur_Resume.pdf";
const CTA = () => {
  return (
    <div className="cta">
      <a href={Resume} download className="btn">
        Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        {" "}
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
