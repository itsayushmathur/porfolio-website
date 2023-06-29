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
            <h3>Web Development Services</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                <h3>Create Powerful Websites</h3>
                You deserve a well-designed website that serves as a powerful
                marketing and communication tool. Let me help you build a
                website that builds trust, generates leads, and effectively
                communicates your message to your target audience. Together, we
                can make your online presence shine.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                <h3>Unlock Ecommerce Opportunities</h3>
                With my expertise in web development, I can provide eCommerce
                solutions that enable your business to operate 24/7 and reach
                customers across different time zones. Expand your business
                horizons and tap into the vast potential of online selling. I'll
                guide you through the process and help you maximize your online
                sales.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                <h3>Create Engaging Web Applications</h3>
                Web applications have the power to reach a global audience and
                captivate users with their interactive and engaging nature.
                Partner with me to develop web applications that not only grab
                users' attention but also provide seamless user experiences.
                Together, we'll create web applications that leave a lasting
                impact.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                <h3>
                  Optimize Workflows with a Content Management System (CMS)
                </h3>
                Your business deserves a dedicated CMS tailored to its specific
                needs, saving you valuable time and money by optimizing internal
                workflows. With my expertise in web development, I can create a
                custom CMS solution that streamlines your content management
                processes. Let's boost your productivity and efficiency
                together.
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Digital Art Services</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                <h3>Create Stunning Illustrations</h3>
                You deserve captivating illustrations that bring your projects
                to life. With my expertise in digital art, I can craft unique
                and visually engaging illustrations for your books, magazines,
                advertisements, and more. Let me help you make a lasting
                impression.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                <h3>Design Memorable Logos</h3>
                Your brand deserves a logo that stands out from the crowd. As a
                digital art specialist, I can create visually appealing and
                impactful logos that represent your business's identity. Let's
                work together to design a logo that leaves a lasting impression
                on your audience.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                <h3>Bring Ideas to Life with Digital Sketches</h3>
                You have unique concepts that need to be brought to life.
                Through the power of digital sketching, I can transform your
                ideas into captivating visuals. With an array of digital tools
                and techniques at my disposal, I'll create sketches and concept
                art that exceed your expectations.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                <h3>Elevate Your Brand with Graphic Design</h3>
                Your brand deserves exceptional graphic designs that leave a
                lasting impact. With my expertise in digital art, I can design
                visually appealing and engaging graphics for your branding,
                packaging, and marketing materials. Let's collaborate to create
                designs that resonate with your target audience.
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Software Development Services</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                <h3>Create Custom Backend Solutions</h3>
                You need intelligent and targeted backend solutions for your
                complex web and mobile interfaces. With my expertise in software
                development, I can craft bespoke backend solutions to store,
                process, and manage data from various sources. Let me help you
                build a robust foundation for your applications.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                <h3>Enhance Your Interfaces with Powerful Backend Features</h3>
                Your applications deserve powerful extensions that elevate user
                experience. As a software developer, I can add analytical
                tracking, push notifications, and cloud-based databases to your
                interfaces. Get ready to provide a seamless user experience with
                robust backend engines.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                <h3>Efficiently Store and Scale Cloud-Based Data</h3>
                Scaling your cloud-computing services requires high-performing
                backend applications. With my expertise in software development,
                I can create data storage backend apps that efficiently store
                relatable data in cloud-based distributed database systems.
                Let's ensure your applications scale seamlessly while
                maintaining data integrity.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
