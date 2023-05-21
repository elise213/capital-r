import Image from 'next/image';
import React from 'react';
// import styles from './page.module.css';
import Video from "../app/components/Video";
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.css'; // Add this line
import styles from './globals.css';

const Home = () => {
  return (
    <main className={styles.main}>
      <div className="home-body">
        <div className="welcome">
          <Video />
          <Image width={700} height={130} className="home-logo" src={"/img/CAPITALRLOGO7.png"} alt=""></Image>
        </div>
        <div className="page-container">
          {/* <hr className="new2 mb-3" /> */}
          <div className="row">
            <div className="col-3 d-flex justify-content-center p-2">
              <p className="side-labels">ABOUT US</p>
            </div>
            <div className="col-9 pt-2 ps-2 pe-2 pb-0">
              <div>
                <h3>CAPITAL REALTY SERVICES INC.</h3>
                <p className="about">
                  Established in 1988, Capital Realty Inc. is a full-service commercial real estate brokerage firm providing services in sales and acquisition, mortgage brokerage, investment, tenant representation, site selection, leasing and asset management, and consulting and litigation support. Capital Realty is a team of professionals with the experience and expertise to execute complex real estate ventures, including financing, leasing, construction, and development, meeting the needs of individual and institutional clients through a commitment to providing the highest level of service.</p>
                <Link href={"/services"} className="btn bio-btn float">
                  Learn More About Our Services
                </Link>
              </div>
            </div>
          </div>
          <hr className="new2 mb-3" />
          <div className="row">
            <div className="col-3 d-flex justify-content-center p-2">
              <p className="side-labels">LEADERSHIP</p>
            </div>
            <div className="col-9 p-2">
              <div>
                <h3>ROBERT BERRIN</h3>
                {/* <h5>PRESIDENT | CO-OWNER</h5> */}
                <p className="about">
                  Robert G. Berrin is a real estate investor and the President of Capital Realty Services. Mr. Berrin has been the promoter and managing general partner of numerous commercial real estate properties since 1972. He serves on the First National Bank of South Miami's Executive Loan Committee. He is an attorney and member of the Florida Bar.
                </p>
                <Link href={"/bio"} className="btn bio-btn float">
                  Learn More About Robert
                </Link>
              </div>
              <hr className="new2 mb-3 mb-2" />
              <div>
                <h3 className="h3">ISAAC FISHER</h3>
                {/* <h5>CO-OWNER</h5> */}
                <p className="about">
                  {" "}
                  Mr. Fisher is a real estate investor and co-owner of Capital Realty Services, Inc. He is an attorney and a member of the Florida Bar. Before joining Capital Realty, he was vice president of Sonnenblick-Goldman Southeast Corp. He resides in Miami, Florida, and Tel Aviv, Israel.
                </p>
                <Link href={"/bio2"} className="btn bio-btn float">
                  Learn More About Isaac
                </Link>
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