"use client"

import { useState, useEffect } from "react"
import "./nav.css"
import { AiFillHome, AiOutlineUser, AiFillContainer } from "react-icons/ai"
import { BiBook, BiMessageSquareDetail } from "react-icons/bi"
import { RiServiceLine } from "react-icons/ri"

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")

  useEffect(() => {
    const sections = document.querySelectorAll("section")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute("id")
            setActiveNav(sectionId ? `#${sectionId}` : "#")
          }
        })
      },
      { threshold: 0.6 },
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  const navItems = [
    { href: "#", icon: AiFillHome, label: "Home" },
    { href: "#about", icon: AiOutlineUser, label: "About" },
    { href: "#experience", icon: BiBook, label: "Experience" },
    { href: "#services", icon: RiServiceLine, label: "Services" },
    { href: "#portfolio", icon: AiFillContainer, label: "Portfolio" },
    { href: "#contact", icon: BiMessageSquareDetail, label: "Contact" },
  ]

  return (
    <nav className="main-nav">
      {navItems.map(({ href, icon: Icon, label }) => (
        <a
          key={href}
          href={href}
          onClick={() => setActiveNav(href)}
          className={`nav-link ${activeNav === href ? "active" : ""}`}
          aria-label={label}
          title={label}
        >
          <Icon />
        </a>
      ))}
    </nav>
  )
}

export default Nav
