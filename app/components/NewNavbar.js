import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/navbar.css';

const NewNavbar = () => {
  return (
    <nav className="navbar" id="navbar">
      <div className="navbar-content">
        <span className="nav-item">
          <Link href="/" className="nav-btn">HOME</Link>
        </span>
        <span className="nav-item">
          <Link href="/services" className="nav-btn">SERVICES</Link>
        </span>
        <span className="nav-item">
          <Link href="/portfolio" className="nav-btn">PORTFOLIO</Link>
        </span>
        <span className="nav-item">
          <Link href="/#contact-section" className="nav-btn">CONTACT</Link>
        </span>
      </div>

    </nav>
  );
};

export default NewNavbar;
