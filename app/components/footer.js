import React, { Component } from "react";
import Image from 'next/image';
import 'font-awesome/css/font-awesome.min.css';

export const Footer = () => (
  <footer className="">
    {/* <div>
      <p>YOU HAVE A GOAL. WE WILL HELP YOU REACH IT.</p>
    </div> */}
    <div className="footer">
      <div className="contact-div-footer">
        <Image width={180} height={50} className="footer-logo" src={"/img/CR1.png"} alt=""></Image>
        <div className="foot-details">
          <p className="foot-info">
            <i className="fas fa-phone"></i>
            305-663-6633
          </p>
          <p className="foot-info">
            <i className="fas fa-envelope"></i>
            info@capital-realty.com
          </p>
          <p className="foot-info">
            <i className="fas fa-map-marker-alt"></i>
            4601 Ponce de Leon Blvd – Suite 300 <br />
            Coral Gables, Florida 33146
          </p>
        </div>
      </div>
      <div className="legal">
        <p className="foot-info">
          Privacy Policy</p>
        <p className="foot-info">
          © 2023 Capital Realty Inc. - All Rights Reserved</p>
      </div>
    </div>
  </footer>
);
