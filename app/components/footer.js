import React, { Component } from "react";
import Image from 'next/image';
// import 'font-awesome/css/font-awesome.min.css';
import { FaPhone } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaMapPin } from "react-icons/fa6";

export const Footer = () => (
  <footer className="">
    {/* <div>
      <p>YOU HAVE A GOAL. WE WILL HELP YOU REACH IT.</p>
    </div> */}
    <div className="footer">
      <div className="contact-div-footer">
        <div className="foot-details">
          <div>
            <Image width={180} height={50} className="footer-logo" src={"/img/CR1.png"} alt=""></Image>
          </div>
          <div className="foot">

            < FaPhone className="footer-icon" />
            <p className="foot-info">
              305-663-6633
            </p>
          </div>
          <div className="foot">
            <FaRegEnvelope className="footer-icon" />
            <p className="foot-info">
              info@capital-realty.com
            </p>
          </div>
          <div className="foot">
            <FaMapPin className="footer-icon" />
            <p className="foot-info">

              4601 Ponce de Leon Blvd.<br />
              Suite 300 <br />
              Coral Gables, Florida 33146
            </p>
          </div>
        </div>
      </div>
      <div className="legal">
        <p className="foot-info">
          Privacy Policy</p>
        <p className="foot-info">
          ©2023 Capital Realty Inc. All Rights Reserved</p>
      </div>
    </div>
  </footer>
);
