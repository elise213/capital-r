import Image from 'next/image';
import React from 'react';
import styles from './page.module.css';
import Video from "../app/components/Video";
// import services from "../../pages/Services";
import dynamic from "next/dynamic";

const Home = () => {
  return (
    <main className={styles.main}>
      <div>
        <div className="welcome">
          <Video />
          <Image width={500} height={300} className="home-logo" src={"/img/CAPITALRLOGO7.png"}></Image>
        </div>
        <div className="page-container">
          <div className="row">
            <div className="col-3 d-flex justify-content-center">
            </div>
            <div className="col-9">
              <h3 className="h3">CAPITAL REALTY SERVICES INC.</h3>
              <p className="about">
                We provide a myriad of services in the real estate sector. Sales &
                Acquisition, Mortgage Brokerage, Investment, Tenant Representation
                & Site Selection, Leasing & Property/Asset Management as well as
                Consulting & Litigation Support. We do it all. We are a team of
                highly motivated, aggressive real estate professionals driven to
                continually expand on an already impressive record of
                accomplishments. We possesses the diversity and talent required to
                execute complex real estate ventures with expertise in sales and
                acquisitions, financing, leasing, tenant representation,
                management, consulting, construction and development. We meet the
                varied needs of individual and institutional clients through our
                relationship orientation and commitment to providing the highest
                level of service.
              </p>
              <a href={"/services"} className="btn bio-btn">
                Learn More About Our Services
              </a>
            </div>
          </div>
          <hr className="new1" />
          <div className="row">
            <div className="col-3 d-flex justify-content-center">
              <h2 className="h2">LEADERSHIP</h2>
            </div>
            <div className="col-9">
              <div>
                <h3 className="h3">ROBERT BERRIN</h3>
                {/* <h5>PRESIDENT | CO-OWNER</h5> */}
                <p className="about">
                  {" "}
                  Robert G. Berrin is a real estate investor and the President and
                  Co-Owner of Capital Realty Services, Inc. (since October 1988),
                  a full service commercial real estate brokerage firm,
                  specializing in the management and leasing of commercial
                  properties, exclusive tenant representation, as well as
                  acquisition and sale of commercial properties. His professional
                  experience also includes consultation with real estate clients
                  regarding sales, leasing, management and financing
                  considerations of real estate ownership, sales or acquisition.
                  Since July 1972, Mr. Berrin has also been the promoter and
                  managing general partner of numerous real estate properties,
                  primarily commercial and income producing and is also
                  responsible for the management, leasing and disposition of said
                  properties, together with his business partner in Capital
                  Realty, Isaac K. Fisher.
                </p>
                <a href={"/bio/1"} className="btn bio-btn">
                  Learn More About Robert
                </a>
              </div>
              <hr className="new1" />
              <div>
                <h3 className="h3">ISAAC FISHER</h3>
                {/* <h5>CO-OWNER</h5> */}
                <p className="about">
                  {" "}
                  Mr. Fisher is a real estate investor and a principal of Capital
                  Realty Services, Inc., a diversified real estate company
                  providing management, leasing, financing, sales and consulting
                  services for commercial investments. He has been a partner in
                  commercial real estate with Robert G. Berrin through Capital
                  Realty since 1988. Prior to joining Capital Realty, he was vice
                  president of Sonnenblick-Goldman Southeast Corp. Earlier in his
                  career, Mr. Fisher practiced law in a variety of capacities in
                  Florida and in Tel Aviv, Israel. He is a member of the Florida
                  Bar, and an inactive member of the Israel Chamber of Advocates.
                </p>
                <a href={"/bio/2"} className="btn bio-btn">
                  Learn More About Isaac
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </main>
  )
}

export default Home;