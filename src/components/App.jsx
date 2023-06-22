import React from "react";
import Header from "./header/Header";
import About from "./about/About";
import Nav from "./nav/Nav";
import Footer from "./footer/Footer";
import Portfolio from "./portfolio/Portfolio";
import Experience from "./experience/Experience";
import Testimonials from "./testimonials/Testimonials";
import Services from "./services/Services";
import Contact from "./contact/Contact";
const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
