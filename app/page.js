"use client"
import React from 'react';
import Link from 'next/link'
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
          <Image width={500} height={200} style={{ width: "70%" }} className="home-logo" src={"/img/capitalreal.png"} alt=""></Image>
        </div>
        <div className="page-container">
          <div className="about-div">
            <p className="about">
              Capital Realty is a comprehensive real estate advisory, brokerage, and investment firm that offers a wide range of services, including sales and acquisition, mortgage brokerage, investment strategies, tenant representation, site selection, leasing, asset management, as well as consulting and litigation support.            </p>
            <div className='learn-more-div'>
              <Link href={"/services"} className="more-link">
                Learn More About Our Services
              </Link>
            </div>
          </div>
          <div className="home-portfolio">
            <Image width={400} height={300} className="hm-prt-pic" src={"/img/Dadeland.jpg"} alt=""></Image>
            <div className='about-div'>

              <p className="about">
                Our diverse portfolio, which includes commercial office buildings, shopping malls, and multi-family residential properties, has consistently generated exceptional value for our investors and partners. </p>
              <div className='learn-more-div'>
                <Link href={"/portfolio"} className="more-link">
                  View Our Portfolio
                </Link>
              </div>
            </div>
          </div>
          <div className="leadership-div">

            <div className="large-col">
              <div className='partner berrin'>
                <Image width={230} height={250} className="bio-img lighten" src="/img/berrin.png" alt="profile picture"></Image>
                <p className="part">ROBERT BERRIN</p>

              </div>
              <div className='partner'>
                <Image width={200} height={250} className="bio-img" src="/img/fisher.png" alt="profile picture"></Image>
                <p className="part">ISAAC K. FISHER</p>

              </div>
            </div>
            <div className='about-div'>
              <p className="about">
                With nearly four decades of experience as owners, investors, and managers in the commercial real estate sector, founding partners Issac Fisher and Robert Berrin have cultivated an exceptional expertise in effectively navigating the most intricate real estate challenges.              </p>
              <div className='more-bio-div'>
                <Link href={"/bio"} className="more-link">
                  {" "} Read More about Capital Realty's Leadership
                </Link>
              </div>
            </div>
          </div>
          <div className="home-contact-div" id="contact-section">
            <p className='hear-from'>
              Get in touch with Capital Realty
            </p>
            <div className="contact-form-2">
              <form id="contact_form" name="contact_form" method="post">
                <div className="custom-row">
                  <div className="custom-col">
                    <label className="label-2">First Name</label>
                    <input
                      type="text"
                      required
                      maxLength="50"
                      className="custom-input"
                      id="first_name"
                      name="first_name"
                    />
                  </div>
                  <div className="custom-col">
                    <label className="label-2">Last Name</label>
                    <input
                      type="text"
                      required
                      maxLength="50"
                      className="custom-input"
                      id="last_name"
                      name="last_name"
                    />
                  </div>
                </div>
                <div className="custom-row">
                  <div className="custom-col">
                    <label className="label-2" htmlFor="email_addr">Email Address</label>
                    <input
                      type="email"
                      required
                      maxLength="50"
                      className="custom-input"
                      id="email_addr"
                      name="email"
                      placeholder=""
                    />
                  </div>
                  <div className="custom-col">
                    <label className="label-2" htmlFor="phone_input">Phone Number</label>
                    <input
                      type="tel"
                      required
                      maxLength="50"
                      className="custom-input"
                      id="phone_input"
                      name="Phone"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="custom-row">
                  <div className="custom-col">
                    <label className="label-2" htmlFor="message">Message</label>
                    <textarea
                      className="custom-textarea"
                      id="message"
                      name="message"
                      rows="3"
                    ></textarea>
                    <div>
                    </div>
                    <div className="custom-row">
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