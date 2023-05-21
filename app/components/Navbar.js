'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-expand-md navbar-light mb-3" id="navbar">
      <div className="container-fluid">
        {/* <Link href={'/'} className="nav-logo">
          <Image width={5} height={5} alt="" className="home-logo" src={'/img/CAPITALRLOGO.png'} />
        </Link> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <p className="navbar-toggler-icon"></p>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ flexGrow: '0' }}>
          <div className="ml-auto nav-content"></div>
          <span className="nav-item">
            <Link href="/" className='nav-btn'>HOME</Link>
          </span>
          <span className="nav-item">
            <Link href="/properties" className="nav-btn">PORTFOLIO</Link>
          </span>
          <span className="nav-item">
            <Link href="/services" className="nav-btn">SERVICES</Link>
          </span>
          <span className="nav-item">
            <Link href="/contact" className="nav-btn">
              CONTACT
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
