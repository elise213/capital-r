import React, { Component } from "react";
import Image from 'next/image';
import { FaPhone } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaMapPin } from "react-icons/fa6";

export const Footer = () => (
  <footer className="">

    <div className="footer">
      <div className="new-foot">
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
              Coral Gables, Florida 33146
            </p>
          </div>
          <p className="foot-info legal">
            © 2023 Capital Realty Services Inc. All Rights Reserved
          </p>
        </div>
      </div>
      <div>
        <Image width={110} height={50} className="footer-logo" src={"/img/lotus4.png"} alt=""></Image>
      </div>
    </div>
  </footer>
);
