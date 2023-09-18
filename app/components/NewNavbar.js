import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/navbar.css';

const NewNavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(0);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const smoothScrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
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
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="new-navbar">
      <div className="menu-icon" onClick={toggleNav}>
        {isNavOpen ? 'X' : '☰'}
      </div>

      <div className={`navbar-content ${isNavOpen ? 'open' : ''}`}>
        <span className="nav-item">
          <Link href="/">HOME</Link>
        </span>
        <span className="nav-item">
          <Link href="/portfolio">PORTFOLIO</Link>
        </span>
        <span className="nav-item">
          <Link href="/services">SERVICES</Link>
        </span>
        <span className="nav-item">
          <a onClick={smoothScrollToContact}> CONTACT
          </a>
        </span>
      </div>
    </nav>
  );
};

export default NewNavbar;
