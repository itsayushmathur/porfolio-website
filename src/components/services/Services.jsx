// Services.jsx
import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
import services from "./services";

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="services__header">
        <h5>What I Offer</h5>
        <h2>Services</h2>
      </div>

      <div className="services__container">
        {services.map((svc) => (
          <article className="service" key={svc.id}>
            <div className="service__head">
              <h3>{svc.title}</h3>
            </div>
            <ul className="service__list">
              {svc.points.map((pt, idx) => (
                <li key={idx}>
                  <BiCheck className="service__list-icon" aria-hidden />
                  <p>
                    <strong>{pt.title}:</strong> {pt.desc}
                  </p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
