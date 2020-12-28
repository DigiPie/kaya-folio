import React, { useEffect, useState } from "react";
import clsx from "clsx";

import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./styles.module.css";
import SocialLinks from "./components/_SocialLinks";
import Features from "../data/_Landing";

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--6", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <div className={styles.featureText}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const [headerHeight, setHeaderHeight] = useState(384);
  const [bannerHeight, setBannerHeight] = useState(256);

  useEffect(() => {
    function handleResize() {
      const tempHeaderHeight = Math.max(384, window.innerHeight);
      setHeaderHeight(tempHeaderHeight);
      setBannerHeight(Math.max(256, tempHeaderHeight / 2));
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Layout title="Home" description={siteConfig.tagline}>
      <header className={styles.heroBanner} style={{ minHeight: headerHeight }}>
        <div className="container">
          <div style={{ minHeight: bannerHeight }}>
            <p>Hi, my name is</p>
            <h1 className="colorSuccess">Evan Tay.</h1>
            <p>{siteConfig.tagline}</p>
            <SocialLinks />
            <Link
              className={clsx(
                "button button--outline button--secondary btnSec",
                styles.heroBannerButton
              )}
              to={useBaseUrl("#main")}
            >
              Learn more about me
            </Link>
          </div>
        </div>
      </header>
      <main id="main">
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
                    "button button--outline button--primary btnSec",
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
        {Features && Features.length > 0 && (
          <section className={styles.featureBody}>
            <div className="container">
              <div className="row">
                {Features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
              <div className={styles.ctaButtons}>
                <Link
                  className={clsx(
                    "button button--outline button--secondary btnSec",
                    styles.ctaButtonBlog
                  )}
                  to={useBaseUrl("blog/")}
                >
                  My blog
                </Link>
                <Link
                  className={clsx(
                    "button button--outline button--secondary btnSec",
                    styles.ctaButtonDocs
                  )}
                  to={useBaseUrl("docs/")}
                >
                  My docs
                </Link>
                <Link
                  className={clsx(
                    "button button--outline button--secondary btnSec",
                    styles.ctaButtonProjects
                  )}
                  to={useBaseUrl("projects/")}
                >
                  My code
                </Link>
              </div>
              <div>
                <p className="text--center">
                  <a href="http://www.freepik.com">
                    <small>Graphics designed by slidesgo / Freepik</small>
                  </a>
                </p>
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
