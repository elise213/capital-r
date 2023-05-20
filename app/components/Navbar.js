"use client";
import React, { useEffect } from "react";
import Link from 'next/link';
import Image from 'next/image';
import styles from '../page.module.css';

const Navbar = () => {
  useEffect(() => {
    setActiveBtn();
    window.addEventListener("popstate", setActiveBtn);
    return () => {
      window.removeEventListener("popstate", setActiveBtn);
    };
  }, []);

  function setActiveBtn() {
    const navBtns = document.querySelectorAll(".nav-btn");
    const currentUrl = window.location.pathname;

    navBtns.forEach((btn) => {
      const btnUrl = btn.getAttribute("href");
      if (btnUrl === currentUrl) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }

  return (
    <nav
      className="navbar navbar-expand-lg navbar-expand-md navbar-light mb-3"
      id="navbar"
    >
      <div className="container-fluid">
        <Link href="/" passHref prefetch>
          <a className="navbar-brand">
            <Image width={100} height={100} className="home-logo" src={"/img/CAPITALRLOGO.png"}></Image>
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          style={{ flexGrow: "0" }}
        >
          <div className="ml-auto"></div>
          <span className="nav-item">
            <Link href="/" passHref prefetch>
              <div className="btn nav-btn">HOME</div>
            </Link>
          </span>
          <span className="nav-item">
            <Link href="/properties" passHref prefetch>
              <div className="btn nav-btn">PORTFOLIO</div>
            </Link>
          </span>
          <span className="nav-item">
            <Link href="/services" passHref prefetch>
              <div className="btn nav-btn">SERVICES</div>
            </Link>
          </span>
          <span className="nav-item">
            <Link href="/contact" passHref prefetch>
              <div className="btn nav-btn">CONTACT</div>
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

