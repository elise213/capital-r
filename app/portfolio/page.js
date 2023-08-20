import React from "react";
import Image from "next/image";
import styles from '../portfolio/portfolio.css';

const Properties = () => {
    return (
        <div className="port-page">
            <span className="services-title">CURRENT PROPERTIES</span>
            <Image width={650} height={400} className="" src={"/img/Ponce.jpg"} alt=""></Image>
            <p className="properties-text">
                Ponce Plaza Office Building – Coral Gables, FL
            </p>
            <Image width={650} height={400} className="" src={"/img/Gables.png"} alt=""></Image>
            <p className="properties-text">
                Gables Plaza Office Building – Coral Gables, FL
            </p>
            <Image width={650} height={400} className="" src={"/img/Dadeland.avif"} alt=""></Image>
            <p className="properties-text">
                Dadeland Executive Plaza – Miami, FL
            </p>
            <Image width={650} height={400} className="" src={"/img/RedLobster.png"} alt=""></Image>
            <p className="properties-text">
                Red Lobster Restaurant Net Lease - Hialeah, FL
            </p>
            <Image width={650} height={400} className="" src={"/img/wendys.png"} alt=""></Image>
            <p className="properties-text">
                Wendy’s Restaurant Net Lease – Memphis, TN
            </p>
            <Image width={650} height={400} className="" src={"/img/mavis.png"} alt=""></Image>
            <p className="properties-text">
                Mavis Tire Center Net Lease – Bradenton, FL
            </p>
            <Image width={650} height={400} className="" src={"/img/Valley.png"} alt=""></Image>
            <p className="properties-text">
                Valley View – Austin, TX
            </p>
            <Image width={650} height={400} className="" src={"/img/Rio.png"} alt=""></Image>
            <p className="properties-text">
                Rio Ranch – San Marcos, TX
            </p>
            <Image width={650} height={400} className="" src={"/img/Out.png"} alt=""></Image>
            <p className="properties-text">
                Outback Steakhouse – Arlington, TX
            </p>




            <span className="services-title">PAST PROPERTIES</span>
            <Image width={650} height={400} className="" src={"/img/lobster.jpg"} alt=""></Image>
            <p className="properties-text">Red Lobster Net Lease – Austin, TX</p>
            <p className="properties-text">Kendall Summit Office Park – Miami, FL</p>
            <p className="properties-text">
                Doral Executive Office Building – Miami, FL
            </p>
            <p className="properties-text">
                Bank of America Office Building – Hollywood, FL
            </p>
            <p className="properties-text">
                Medical Specialties Office Building – Miami, FL
            </p>
            <p className="properties-text">Bank Net Lease – Aventura (Miami), FL</p>
        </div>
    );
};

export default Properties;
