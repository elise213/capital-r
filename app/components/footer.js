import React, { Component } from "react";
import Image from 'next/image';
import { FaPhone } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaMapPin } from "react-icons/fa6";

export const Footer = () => (
  <footer className="">

    <div className="footer">
      {/* <div className="foot-logo">
        <div>
          <Image width={210} height={70} className="footer-logo" src={"/img/caprealservices.png"} alt=""></Image>
        </div>
      </div> */}
      <div className="foot-details">

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
        <p className="foot-info legal">
          © 2023 Capital Realty Services Inc. All Rights Reserved</p>
        {/* <p className="">
            Privacy Policy</p> */}
      </div>
    </div>
    {/* <p className="">
        Website by CodeLotus</p> */}
  </footer>
);
