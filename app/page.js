"use client"
import Image from 'next/image';
import React from 'react';
import Link from 'next/link'
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import Video from "../app/components/Video";
import styles from './globals.css';
import { useEffect } from "react";


const Home = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <main className={styles.main}>
      <div className="home-body">
        <div className="welcome">
          <Video />
          <Image width={900} height={900} style={{ width: "60%" }} className="home-logo" src={"/img/CAPITALRLOGO7.png"} alt=""></Image>
        </div>
        <div className="page-container">
          {/* <hr className="new2 mb-3" /> */}
          <div className="row">
            <div className="d-flex justify-content-center p-2 small-col">
              <p className="side-labels disappear">ABOUT US</p>
            </div>
            <div className="pt-2 ps-2 pe-2 pb-0 large-col">
              <div>
                <h3>CAPITAL REALTY SERVICES, INC.</h3>
                <p className="about">
                  Established in 1988, Capital Realty is a full-service commercial real estate brokerage firm providing services in sales and acquisition, mortgage brokerage, investment, tenant representation, site selection, leasing and asset management, and consulting and litigation support. Capital Realty is a team of professionals with the experience and expertise to execute complex real estate ventures, including financing, leasing, construction, and development, meeting the needs of individual and institutional clients through a commitment to providing the highest level of service.</p>
                <Link href={"/services"} className="btn bio-btn float">
                  Learn More About Our Services
                </Link>
              </div>
            </div>
          </div>
          <hr className="new2 mb-1" />
          <div className="row">
            <div className="d-flex justify-content-center p-2 small-col">
              <p className="side-labels">LEADERSHIP</p>
            </div>
            <div className="p-2 large-col">
              <div>
                <h3>ROBERT BERRIN</h3>
                {/* <h5>PRESIDENT | CO-OWNER</h5> */}
                <p className="about">
                  Robert G. Berrin is a real estate investor and the President and co-owner of Capital Realty Services. Mr. Berrin has been the promoter and managing general partner of numerous commercial real estate properties since 1972. He serves on the First National Bank of South Miami's Executive Loan Committee. He is an attorney and member of the Florida Bar.
                </p>
                <Link href={"/bio"} className="btn bio-btn float">
                  Learn More About Robert
                </Link>
              </div>
              <hr className="new2 mb-1" />
              <div>
                <h3 className="h3">ISAAC FISHER</h3>
                {/* <h5>CO-OWNER</h5> */}
                <p className="about">
                  {" "}
                  Isaac "Ike" Fisher is a real estate investor and co-owner of Capital Realty Services. He is an attorney and a member of the Florida Bar. Before joining Capital Realty, he was vice president of Sonnenblick-Goldman Southeast Corp. He resides in Miami, Florida, and Tel Aviv, Israel.
                </p>
                <Link href={"/bio2"} className="btn bio-btn float">
                  Learn More About Isaac
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home;