"use client"
import React from 'react';
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.css';
import Video from "../app/components/Video";
import styles from './globals.css';
import { useEffect } from "react";
import 'font-awesome/css/font-awesome.min.css';
import Image from 'next/image';

const Home = () => {

  return (
    <main className="">
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
            <div>

              <p className="about">
                With over nearly forty years of experience as owners, investors and managers of commercial real estate, founding partners Issac Fisher and Robert Berrin have developed an expert understanding on how to navigate through the most complex real estate challenges...              </p>
              <div className='learn-more-div'>
                <Link href={"/portfolio"} className="more-link">
                  View Our Portfolio
                </Link>
              </div>
            </div>
          </div>
          <div className="leadership-div">
            {/* <p className="leadership-text">LEADERSHIP</p> */}
            <div className="large-col">
              <div className='partner berrin'>
                <Image width={230} height={250} className="bio-img lighten" src="/img/berrin.png" alt="profile picture"></Image>
                <p className="part">ROBERT BERRIN</p>
                {/* <p className='principal'>PRINCIPAL</p> */}
              </div>
              <div className='partner'>
                <Image width={200} height={250} className="bio-img" src="/img/fisher.png" alt="profile picture"></Image>
                <p className="part">ISAAC FISHER</p>
                {/* <p className='principal'>PRINCIPAL</p> */}
              </div>
            </div>
            <div className=''>
              <Link href={"/bio"} className="more-link">
                {" "} Learn More About Our Leadership
              </Link>
            </div>
          </div>
          <div className="home-contact-div" id="contact-section">
            <p className='hear-from'>
              Get in touch with Capital Realty
            </p>
            <div className="contact-form-2">
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
                  <div className="col">
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