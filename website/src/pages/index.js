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
            <p className="colorSuccess">
              <b>Hi, my name is</b>
            </p>
            <h1>
              <span className="colorWarning">Evan</span>{" "}
              <span className="colorDanger">Tay.</span>
            </h1>
            <p>{siteConfig.tagline}</p>
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
          <h1 className="underlineColorSuccess">Welcome</h1>
        </div>
        <div className={styles.aboutBody}>
          <div className="container">
            <div className="row">
              <div className={clsx("col col--3", styles.profilePic)}>
                <img src={useBaseUrl("img/profilepic.jpg")} />
              </div>
              <div className="col col--9">
                <h1>Hello,</h1>
                <p>
                  I am Evan, a Full Stack Software Engineer and Certified
                  Cloud Engineer based in Singapore.
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
                  <a href="https://padlet.com">Padlet</a> as a Full Stack
                  Engineer.
                </p>
                <div className="button-group button-group--block wideBodyMaxWidth">
                  <Link
                    className="button button--outline button--success"
                    to={useBaseUrl("/projects")}
                  >
                    My projects
                  </Link>{" "}
                  <Link
                    className="button button--outline button--success"
                    to={useBaseUrl("/about")}
                  >
                    About me
                  </Link>{" "}
                </div>
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
                  <div className="pagination-nav__sublabel">Read my</div>
                  <div className="pagination-nav__label">Blog</div>
                </Link>
              </div>
              <div className="pagination-nav__item pagination-nav__item--next">
                <Link className="pagination-nav__link" to={useBaseUrl("docs/")}>
                  <div className="pagination-nav__sublabel">Read my</div>
                  <div className="pagination-nav__label">Documentation</div>
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
