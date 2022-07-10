import React from "react";
import clsx from "clsx";

import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./styles.module.css";

function About() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout title="About" description={siteConfig.tagline}>
      <header className={styles.aboutHeader}>
        <h2 className="underlineColorSuccess">About me</h2>
      </header>
      <main id="main">
        <div className={styles.about}>
          <div>
            <img
              className={styles.aboutProfilePic}
              src={useBaseUrl("img/profilepic.jpg")}
            />
          </div>
          <div class={styles.aboutText}>
            <h2>Hello,</h2>
            <p>
              I am Evan, a Full Stack Software Engineer and Certified Cloud
              Engineer based in Singapore.
            </p>
            <p>
              I love building cool, fun and meaningful things with tech, whether
              that be{" "}
              <Link to={useBaseUrl("projects/")}>
                websites, applications or games
              </Link>
              . To me, coding is the closest thing to magic we have in this
              world.
            </p>
            <p>
              I was a{" "}
              <a href="https://www.comp.nus.edu.sg/programmes/ug/cs/">
                Computer Science major
              </a>{" "}
              at the{" "}
              <a href="https://www.comp.nus.edu.sg/">
                National University of Singapore
              </a>{" "}
              from 2017 to 2020. During my time there, I was the Deputy Head of
              Technology at{" "}
              <a href="https://dscnustech.github.io/">
                Google Developer Student Club NUS
              </a>
              , and the President of the{" "}
              <a href="https://www.instagram.com/nusskating/">
                NUS Skating Club
              </a>
              . I was also a{" "}
              <a href="https://github.com/DigiPie/CS1010-Tutorial-C09">
                Teaching Assistant
              </a>{" "}
              for Programming Methodology and Networking courses.
            </p>
            <p>
              I am currently working at <a href="https://padlet.com">Padlet</a>{" "}
              as a Full Stack and Support Engineer.
            </p>
          </div>
        </div>
        <section className={styles.directory}>
          <div className="container">
            <h3>Continue exploring?</h3>
            <nav className="pagination-nav">
              <div className="pagination-nav__item">
                <Link
                  className="pagination-nav__link"
                  to={useBaseUrl("projects/")}
                >
                  <div className="pagination-nav__sublabel">Check out</div>
                  <div className="pagination-nav__label">My projects</div>
                </Link>
              </div>
              <div className="pagination-nav__item pagination-nav__item--next">
                <a
                  className="pagination-nav__link"
                  href={useBaseUrl("pdf/resume.pdf")}
                >
                  <div className="pagination-nav__sublabel">Download</div>
                  <div className="pagination-nav__label">My resume</div>
                </a>
              </div>
            </nav>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default About;
