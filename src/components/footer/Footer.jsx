import React from "react";
import styled from "styled-components";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

// Styled Components
const FooterContainer = styled.footer`
  background: var(--color-primary);
  padding: 3rem 1rem;
  text-align: center;
  margin-top: 7rem;
  border-top: 2px solid var(--color-primary-variant);
  backdrop-filter: blur(10px);
  box-shadow: 0 -4px 15px rgba(0, 0, 0, 0.2);
`;

const Logo = styled.a`
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-bg);
  text-decoration: none;
  margin-bottom: 1.5rem;
  display: inline-block;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const Permalinks = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  list-style: none;
  margin: 1rem 0 2rem;
  padding: 0;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;
  }

  a {
    color: var(--color-bg);
    font-weight: 500;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: var(--color-white);
    }
  }
`;

const Socials = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;

  a {
    background: var(--color-bg);
    color: var(--color-white);
    padding: 0.8rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    border: 1px solid transparent;

    &:hover {
      background: var(--color-white);
      color: var(--color-bg);
      transform: scale(1.1);
      border-color: var(--color-primary-variant);
    }
  }
`;

const Copyright = styled.div`
  color: var(--color-bg);
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Logo href="#">Ayush Mathur</Logo>

      <Permalinks>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </Permalinks>

      <Socials>
        <a href="https://github.com/itsayushmathur" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/itsayushmathur/" target="_blank" rel="noreferrer">
          <BsLinkedin />
        </a>
        <a href="https://www.instagram.com/itsayushmathur/" target="_blank" rel="noreferrer">
          <AiFillInstagram />
        </a>
      </Socials>

      <Copyright>
        <small>&copy; Ayush Mathur. All rights reserved.</small>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
