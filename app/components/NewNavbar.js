import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/navbar.css';

const NewNavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // set to true by default

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    // Function to check the window width
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setIsNavOpen(true);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="new-navbar" id="navbar">
      <div className="menu-icon" onClick={toggleNav}>
        {isNavOpen ? 'X' : '☰'}
      </div>

      {(isNavOpen || window.innerWidth > 900) && (
        <div className="navbar-content">
          <span className="nav-item">
            <Link href="/">HOME</Link>
          </span>
          <span className="nav-item">
            <Link href="/services">SERVICES</Link>
          </span>
          <span className="nav-item">
            <Link href="/portfolio">PORTFOLIO</Link>
          </span>
          <span className="nav-item">
            <Link href="/#contact-section">CONTACT</Link>
          </span>
        </div>
      )}
    </nav>
  );
};

export default NewNavbar;
