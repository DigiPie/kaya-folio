import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";

import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./styles.module.css";
import SocialLinks from "./components/_SocialLinks";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const mainRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(384);
  const [bannerHeight, setBannerHeight] = useState(256);

  useEffect(() => {
    function handleResize() {
      const tempHeaderHeight = Math.max(384, window.innerHeight);
      setHeaderHeight(tempHeaderHeight);
      setBannerHeight(Math.max(256, tempHeaderHeight / 2));
    }

    handleResize();
    mainRef.current.hidden = false;
    window.addEventListener("resize", handleResize);

    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Layout title="Home" description={siteConfig.tagline}>
      <header className={styles.heroBanner} style={{ minHeight: headerHeight }}>
        <div className="container">
          <div
            className={styles.heroBannerText}
            style={{ minHeight: bannerHeight }}
          >
            <p>
              Hi, my name is
            </p>
            <h1 className="colorSuccess">
              Evan Tay.
            </h1>
            <p>
              I am a <span className="colorWarning">Software Engineer</span> and <span className="colorDanger">Cloud Engineer</span> passionate about solving Meaningful Problems.
            </p>
            <SocialLinks />
            <nav className={clsx("pagination-nav", styles.heroBannerButton)}>
              <div className="pagination-nav__item">
                <Link className="pagination-nav__link" to={useBaseUrl("#main")}>
                  <div className="pagination-nav__sublabel">Read my</div>
                  <div className="pagination-nav__label">Introduction</div>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <main id="main" ref={mainRef} hidden={true}>
        <div className={styles.aboutHeader}>
          <h2 className="underlineColorSuccess">Hello world</h2>
        </div>
        <div className={styles.aboutBody}>
          <div className="container">
            <div className="row">
              <div className={clsx("col col--3", styles.profilePic)}>
                <img src={useBaseUrl("img/profilepic.jpg")} />
              </div>
              <div className="col col--9">
                <h2>Hello, </h2>
                <p>
                  I am a Full Stack Software Engineer and Certified Cloud
                  Engineer based in Singapore.
                </p>
                <p>
                  I love building cool, fun and meaningful things with tech,
                  whether that be{" "}
                  <Link to={useBaseUrl("projects/")}>
                    websites, applications or games
                  </Link>
                  .
                </p>
                <p>
                  I graduated from the{" "}
                  <a href="https://www.comp.nus.edu.sg/">
                    National University of Singapore
                  </a>{" "}
                  with a{" "}
                  <a href="https://www.comp.nus.edu.sg/programmes/ug/cs/">
                    Bachelor of Computing in Computer Science
                  </a>{" "}
                  in Winter 2020.
                </p>
                <p>
                  I am currently working at{" "}
                  <a href="https://padlet.com">Padlet</a> as a Full Stack and
                  Support Engineer.
                </p>
                <p>
                  You can read more{" "}
                  <Link to={useBaseUrl("/about")}>about me</Link> or check out{" "}
                  <Link to={useBaseUrl("/projects")}>my projects</Link> if you
                  are interested.
                </p>
              </div>
            </div>
          </div>
        </div>
        <section className={styles.directoryBody}>
          <div className="container">
            <h3>Continue exploring?</h3>
            <nav className="pagination-nav">
              <div className="pagination-nav__item">
                <Link className="pagination-nav__link" to={useBaseUrl("blog/")}>
                  <div className="pagination-nav__sublabel">Read</div>
                  <div className="pagination-nav__label">My blog</div>
                </Link>
              </div>
              <div className="pagination-nav__item pagination-nav__item--next">
                <Link className="pagination-nav__link" to={useBaseUrl("docs/")}>
                  <div className="pagination-nav__sublabel">Read</div>
                  <div className="pagination-nav__label">My docs</div>
                </Link>
              </div>
            </nav>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
