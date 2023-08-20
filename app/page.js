"use client"
import React from 'react';
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.css';
import Video from "../app/components/Video";
import styles from './globals.css';
import { useEffect } from "react";
import NewNavbar from './components/NewNavbar';
import Image from 'next/image';

const Home = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <main className="">
      {/* <NewNavbar /> */}
      <div className="home-body">
        <div className="welcome">
          <Video />
          <Image width={500} height={200} style={{ width: "70%" }} className="home-logo" src={"/img/CR1.png"} alt=""></Image>
        </div>
        <div className="page-container">

          <div className="about-div">
            <p className="about">
              Capital Realty is a full-service commercial real estate brokerage firm providing services in sales and acquisition, mortgage brokerage, investment, tenant representation, site selection, leasing and asset management, and consulting and litigation support. Capital Realty is a team of professionals with the experience and expertise to execute complex real estate ventures, including financing, leasing, construction, and development, meeting the needs of individual and institutional clients through a commitment to providing the highest level of service.</p>
            <div className='learn-more-div'>
              <Link href={"/services"} className="more-link">
                Learn More About Our Services
              </Link>
            </div>
          </div>
          <div className="home-portfolio">
            <Image width={500} height={350} className="hm-prt-pic" src={"/img/Dadeland.jpg"} alt=""></Image>
            <div className='about-div'>
              <p className="about">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className='learn-more-div'>
                <Link href={"/portfolio"} className="more-link">
                  View Our Portfolio
                </Link>
              </div>
            </div>
          </div>
          <div className="leadership-div">
            <p className="leadership-text">LEADERSHIP</p>
            <div className="large-col">
              <div className='partner berrin'>
                <p className="part">ROBERT BERRIN</p>
                <p className="about">
                  Robert G. Berrin is a real estate investor, and attorney, and the President of Capital Realty Services. Mr. Berrin has been the promoter and managing general partner of numerous commercial real estate properties since 1972.
                </p>
                <div className='learn-more-div'>
                  <Link href={"/bio"} className="more-link">
                    {" "} Learn More About Robert
                  </Link>
                </div>
              </div>
              <div className='partner'>
                <p className="part">ISAAC FISHER</p>
                {/* <p>CO-OWNER</p> */}
                <p className="about">
                  {" "}
                  Isaac "Ike" Fisher is a real estate investor and co-owner of Capital Realty Services. Before joining Capital Realty, he was vice president of Sonnenblick-Goldman Southeast Corp. He is an attorney and a member of the Florida Bar.
                </p>
                <div className='learn-more-div'>
                  <Link href={"/bio"} className="more-link">
                    {" "} Learn More About Ike
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="home-contact-div" id="contact-section">
            <div className="contact-form contact-form-2">
              <form id="contact_form" name="contact_form" method="post">
                <div className="mb-3 mt-2 row">
                  <div className="col">
                    <label className="label-2">First Name</label>
                    <input
                      type="text"
                      required
                      maxLength="50"
                      className="form-control"
                      id="first_name"
                      name="first_name"
                    />
                  </div>
                  <div className="col">
                    <label className="label-2">Last Name</label>
                    <input
                      type="text"
                      required
                      maxLength="50"
                      className="form-control"
                      id="last_name"
                      name="last_name"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col mb-3">
                    <label className="label-2" htmlFor="email_addr">Email address</label>
                    <input
                      type="email"
                      required
                      maxLength="50"
                      className="form-control"
                      id="email_addr"
                      name="email"
                      placeholder=""
                    />
                  </div>
                  <div className="col">
                    <label className="label-2" htmlFor="phone_input">Phone Number</label>
                    <input
                      type="tel"
                      required
                      maxLength="50"
                      className="form-control"
                      id="phone_input"
                      name="Phone"
                      placeholder=""
                    />
                  </div>
                  <div className="message">
                    <label className="label-2" htmlFor="message">Message</label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="3"
                    ></textarea>
                    <div>
                      <button type="submit" className="submit-btn">
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main >
  )
}

export default Home;