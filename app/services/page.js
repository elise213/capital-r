import React from "react";
import Image from 'next/image';
import styles from "../services/services.css";
import Link from 'next/link';

const Services = () => {
    return (
        <div className="services-container">
            <div className="title-container">
                {/* <p className="services-title">SERVICES</p> */}
                <div className="foot-logo">
                    <div>
                        <Image width={340} height={80} className="services-logo" src={"/img/caprealservices.png"} alt=""></Image>
                    </div>
                </div>
            </div>
            <p className="services">
                We provide investment advisory, management, leasing, financing, sales and consulting services for commercial properties located throughout the United States. With over nearly forty years of experience as owners, investors and managers of commercial real estate, founding partners Issac Fisher and Robert Berrin have developed an expert understanding on how to navigate through the most complex real estate challenges. We provide our clients with a broad range of services to meet your real estate needs.
            </p>

            <p className="heading">CONSULTING </p>{" "}
            <p className="services">
                We provide the necessary advice and consulting services to assist our clients in analyzing the various alternatives and in selecting the best third party providers to handle the process from beginning to end.
            </p>{" "}

            <p className="heading">SALES</p>{" "}
            <p className="services">
                Capital Realty professionals are specialists at packaging, marketing and negotiating commercial real estate sales offerings that result in closed transactions at the most advantageous pricing for our seller. We have the connections and expertise to seek out and attract institutional and private investors, and our track record reflects disposition of single properties for the individual investor as well as portfolio sales in excess of $100 million for institutional owners.
            </p>{" "}

            <p className="heading">ACQUISITIONS </p>{" "}
            <p className="services">
                Acquisitions for the firm’s clients focus on achieving their comprehensive yield goals in terms of both annual cash flow requirements and overall return upon the project’s disposition. We search continuously for commercial property that can be purchased at values reflective of strong investment potential for both clients and investors/partners.
            </p>

            <p className="heading">MORTGAGE FINANCING </p>
            <p className="services">
                Our longevity and experience through a variety of real estate cycles gives us the capabilities and expertise to deliver a full menu of attractive financing alternatives. Our creative abilities and innovative solutions, together with our commitment to obtain the most favorable transactions, assures our clients exposure to a large variety of alternatives consistent with their desired goals
            </p>{" "}

            <p className="heading"> INVESTMENT </p>{" "}
            <p className="services">
                As long-time owners and investors—throughout all market conditions and cycles—Capital Realty is a trusted and respected commercial real estate investor. Our focus is on opportunistic real estate acquisitions that deliver unprecedented value to our investors/partners.
            </p>

            <p className="heading">TENANT REPRESENTATION & SITE SELECTION </p>
            <p className="services">
                Drawing upon our years of experience and knowledge representing both tenants and landlords, together with our many years of experience as landlords, we provide tenant representation services for businesses looking to lease space in retail, office, and industrial properties.
            </p>{" "}

            <p className="heading">LEASING & PROPERTY/ASSET MANAGEMENT</p>{" "}
            <p className="services">
                Our team has been responsible for project leasing of millions of square feet of commercial space on behalf of property owners, from retail to warehouse to Class A office space. Our innovative and rigorous property management strategies help our clients enhance their bottom line and streamline operating costs—all while maintaining a superior environment for tenants.
                {" "}
            </p>

            <p className="heading">CONSULTING & LITIGATION SUPPORT</p>{" "}
            <p className="services">
                From expert testimony to forensic real estate analysis to receivership to navigating a complex litigation terrain, we provide expert support to resolve disputes of real estate clients.
            </p>
        </div>
    );
};

export default Services;
