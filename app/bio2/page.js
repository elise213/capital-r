"use client"
import React, { useState, useContext } from "react";
import BioInfo from "../components/BioInfo";
// import { useRouter } from "next/router";
// import { Context } from "../context/appContext";
import styles from "../bio/bio.css"
// import useSWR from "swr";

const Bio = () => {
    return (
        <div className="page-container">
            <div className="row mt-5">
                <BioInfo
                    name="Isaac K. Fisher"
                    nickName="Isaac"
                    lastName="fisher"
                    image="fisher"
                    email="ike@capital-realty.com"
                    phone="305-903-8632"
                    num="2"
                    title="CO-OWNER"
                    bio="Isaac “Ike” K. Fisher grew up in Hollywood, Florida. He came to live and work in Miami after graduating from the University of Florida College of Law, previously receiving his undergraduate education at The George Washington University, Washington D.C. Mr. Fisher is a real estate investor and a principal of Capital Realty Services, Inc., a diversified real estate company providing management, leasing, financing, sales and consulting services for commercial investments. He has been a partner in commercial real estate with Robert G. Berrin through Capital Realty since 1988. Prior to joining Capital Realty, he was vice president of Sonnenblick-Goldman Southeast Corp. Earlier in his career, Mr. Fisher practiced law in a variety of capacities in Florida and in Tel Aviv, Israel. He is a member of the Florida Bar, and an inactive member of the Israel Chamber of Advocates. He is active in Jewish philanthropies and other national and community charitable organizations. He is a National Board of Directors Alumni of AIPAC and is the past Chair of the Greater Miami Jewish Federation. He resides in Miami, Florida and Tel Aviv, Israel."
                />
            </div>
        </div>
    );
};

export default Bio;
