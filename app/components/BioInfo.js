import React from "react";
import Image from 'next/image';
// import styles from "../bio/bio.css"

const BioInfo = (props) => {
  return (
    <div className="bio-container">

      {props.num == "1" ? (
        <div className="bio-text">
          <div className="title-div">
            <p className="bio-name">{props.name}</p>
            <p className="bio-title">{props.title}</p>
          </div>
          <p className="services">
            <div className="center">
              <Image width={130} height={150} className="bio-img" src={props.image} alt="profile picture" />
            </div>
            <br />
            Robert “Bob” Berrin was born and raised in Miami, receiving his undergraduate degree from the University of Florida and his Law degree from the University of Miami.
            <br />
            <br />
            Mr. Berrin is a real estate investor and the President and Co-Owner of Capital Realty.  Mr. Berrin has been the promoter and managing general partner of numerous real estate properties, primarily commercial and income producing and is also responsible for the management, leasing and disposition of properties.
            <br />
            <br />
            Mr. Berrin was a member of the Board of Directors of First National Bank of South Miami, leading up to its acquisition by United Community Banks. He is also an attorney and member of the Florida Bar.
            <br />
            <br />
            Mr. Berrin is actively involved in numerous charitable and civic organizations. He is a former Chair of the Baptist Health of South Florida Foundation and the Board of the Greater Miami Jewish Federation and currently serves as an executive board member of the Jewish Federation. He is also a member of the Dean’s Advisory Council of the College of Medicine, Florida International University.
            <br />
            <br />
            Mr. Berrin was born and raised in Miami, Florida and received his
            undergraduate degree from the University of Florida and his law
            degree from the University of Miami.
          </p>
        </div>
      ) : (
        <div className="bio-text">
          <div className="title-div">
            <p className="bio-name">{props.name}</p>
            <p className="bio-title">{props.title}</p>
          </div>
          <p className="services">
            <div className="center">
              <Image width={130} height={150} className="bio-img" src="/img/fisher.png" alt="profile picture" />
            </div>
            <br />
            Isaac “Ike” Fisher grew up in Hollywood, Florida. He came to live and work in Miami after graduating from the University of Florida College of Law, previously receiving his undergraduate education at The George Washington University, Washington D.C.
            <br />
            <br />
            Mr. Fisher is a real estate investor and a principal of Capital Realty, specializing in management, leasing, financing, sales and consulting services for commercial investments. Prior to joining Capital Realty, he was vice president of Sonnenblick-Goldman Southeast Corp. Earlier in his career, Mr. Fisher practiced law in a variety of capacities in Florida and in Tel Aviv, Israel. He is a member of the Florida Bar, and an inactive member of the Israel Chamber of Advocates.
            <br />
            <br />
            He is active in Jewish philanthropies and other national and community charitable organizations. He is a National Board of Directors Alumni of AIPAC and is the past Chair of the Greater Miami Jewish Federation. He resides in Miami, Florida and Tel Aviv, Israel.

            <a href="/img/Resume.pdf" target="_blank">
              <button type="button" className="submit-btn">View Ike's Resume</button>
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default BioInfo;
