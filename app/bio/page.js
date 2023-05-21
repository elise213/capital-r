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
                    name="Robert G. Berrin"
                    nickName="Robert"
                    lastName="berrin"
                    image="/img/berrin.png"
                    email="rberrin@capital-realty.com"
                    phone="305-992-3783"
                    num="1"
                    title="PRESIDENT  |  CO-OWNER"
                    bio="Robert G. Berrin is a real estate investor and the President and Co-Owner of Capital Realty Services, Inc. (since October 1988), a full service commercial real estate brokerage firm, specializing in the management and leasing of commercial properties, exclusive tenant representation, as well as acquisition and sale of commercial properties. His professional experience also includes consultation with real estate clients regarding sales, leasing, management and financing considerations of real estate ownership, sales or acquisition. Since July 1972, Mr. Berrin has also been the promoter and managing general partner of numerous real estate properties, primarily commercial and income producing and is also responsible for the management, leasing and disposition of said properties, together with his business partner in Capital Realty, Isaac K. Fisher. Mr. Berrin is a member of the Board of Directors of First National Bank of South Miami, South Miami, Florida (since March 2009), and also serves on the bank’s Executive Loan Committee. He is also an attorney and member of the Florida Bar and actively practiced from June 1977 to May 1987. Mr. Berrin is actively involved in numerous charitable and civic organizations, He currently serves as Chair of the Baptist Health of South Florida Foundation and is a former Chair of the Board of the Greater Miami Jewish Federation (2014-2016) and currently serves as an executive board member. He is also a member of the Dean’s Advisory Council of the College of Medicine, Florida International University (2008 to Present).Mr. Berrin was born and raised in Miami, Florida and received his undergraduate degree from the University of Florida and his law degree from the University of Miami."
                />
            </div>
        </div>
    );
};

export default Bio;
