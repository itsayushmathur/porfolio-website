import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                <h3>Websites</h3>A well-designed website is a powerful marketing and
                communication tool that helps build trust and generate leads.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                <h3>Ecommerce</h3>With eCommerce solutions, businesses can operate 24
                hours a day, 7 days a week, and reach customers in any time
                zone.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                <h3>Web Applications</h3>Web applications can reach a global audience.
                They're interactive and engaging, so can easily hold users'
                attention.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                <h3>Content Management System</h3>A dedicated CMS designed to the
                specific needs of your business will save time and money by
                optimizing internal workflows.
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Software Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                <h3>Custom Backend Development</h3>Craft bespoke, intelligent, and
                extremely targeted backend solutions for complex web and mobile
                interfaces to store, process, and manage data from varied
                sources
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                <h3>Application Admin Backend</h3>Add powerful extensions to your
                interfaces, like analytical tracking, push notifications, and
                cloud-based databases, with robust backend engines to drive
                seamless user experience
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                <h3>Data Storage Backend Apps</h3>Scale easily while hosting
                cloud-computing services with high-performing backend
                applications that efficiently store relatable data in
                cloud-based distributed database systems
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
