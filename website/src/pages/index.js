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
            <p>Hi, my name is</p>
            <h1>
              <span className="colorSuccess">Evan</span>{" "}
              <span className="colorWarning">Tay</span>
              <span className="colorDanger">.</span>
            </h1>
            <p>{siteConfig.tagline}</p>
            <SocialLinks />
            <Link
              className={clsx(
                "button button--outline button--success btnSec textUpper",
                styles.heroBannerButton
              )}
              to={useBaseUrl("#main")}
            >
              Learn more
            </Link>
          </div>
        </div>
      </header>
      <main id="main" ref={mainRef} hidden={true}>
        <div className={styles.aboutBody}>
          <div className="container">
            <div className="row">
              <div className={clsx("col col--3", styles.profilePic)}>
                <img src={useBaseUrl("img/profilepic.jpg")} />
              </div>
              <div className="col col--9">
                <h1>Evan Tay</h1>
                <p>
                  Hello! I'm Evan, a Full Stack Software Engineer and Certified
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
                  <a href="https://padlet.com/dashboard">Padlet</a> as a Full
                  Stack Engineer.
                </p>
                <Link
                  className={clsx(
                    "button button--outline button--primary btnSec textUpper",
                    styles.aboutBodyButton
                  )}
                  to={useBaseUrl("/about")}
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
        <section className={styles.directoryBody}>
          <div className="container">
            <h3 className="text--center">Continue exploring?</h3>
            <div
              className={clsx(
                "button-group button-group--block",
                styles.ctaButtons
              )}
            >
              <Link
                className="button button--outline button--success btnDef textUpper"
                to={useBaseUrl("blog/")}
              >
                My blog
              </Link>
              <Link
                className="button button--outline button--warning btnDef textUpper"
                to={useBaseUrl("docs/")}
              >
                My docs
              </Link>
              <Link
                className="button button--outline button--danger btnDef textUpper"
                to={useBaseUrl("projects/")}
              >
                My code
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
