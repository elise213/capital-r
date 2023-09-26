import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/navbar.css";

const NewNavbar = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const navOpen = windowWidth <= 900;

  const [isNavOpen, setIsNavOpen] = useState(!navOpen);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const smoothScrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection && window.location.pathname === "/") {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#contact-section";
    }
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 900) {
        setIsNavOpen(true);
      }
      if (window.innerWidth < 900) {
        setIsNavOpen(false);
      }
      console.log("NAV OPEN", isNavOpen);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeNav = () => {
    if (windowWidth <= 900) {
      setIsNavOpen(false);
    }
  };

  return (
    <nav className="new-navbar">
      <div
        className={`menu-icon ${isNavOpen ? "x-styling" : ""}`}
        onClick={toggleNav}
      >
        {isNavOpen ? "X" : "☰"}
      </div>

      <div className={`navbar-content ${isNavOpen ? "open" : ""}`}>
        <span className="nav-item" onClick={closeNav}>
          <Link href="/">HOME</Link>
        </span>
        <span className="nav-item" onClick={closeNav}>
          <Link href="/services">SERVICES</Link>
        </span>
        <span className="nav-item" onClick={closeNav}>
          <Link href="/portfolio">PORTFOLIO</Link>
        </span>
        <span className="nav-item" onClick={closeNav}>
          <Link href="/bio">LEADERSHIP</Link>
        </span>
        <span
          className="nav-item"
          onClick={() => {
            closeNav();
            smoothScrollToContact();
          }}
        >
          <a>CONTACT</a>
        </span>
      </div>
    </nav>
  );
};

export default NewNavbar;
