import React from "react";
import clsx from "clsx";

import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./styles.module.css";
import { WorkItems, EducationItems } from "../../data/_About";

function ResumeItem({ location, link, position, period, description }) {
  return (
    <div className={styles.resumeItem}>
      <h3>
        <a href={link}>{location}</a>
      </h3>
      <p>
        <b>{position}</b>
        <br />
        <i>{period}</i>
      </p>
      <div>{description}</div>
    </div>
  );
}

function About() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout title="About" description={siteConfig.tagline}>
      <header className={styles.aboutHeader}>
        <h1 className="underlineColorSuccess">About</h1>
      </header>
      <main id="main">
        <div className={styles.aboutBody}>
          <div className="container">
            <div className="row padding-bottom--lg">
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
                  from 2017 to 2020. During my time there, I was the Deputy Head
                  of Technology at{" "}
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
                  Shortly after graduating, I started working as a Full Stack
                  Engineer at <a href="https://padlet.com">Padlet</a>.
                </p>
                <div className="button-group button-group--block wideBodyMaxWidth">
                  <Link
                    className="button button--outline button--success"
                    to={useBaseUrl("#experience")}
                  >
                    My experience
                  </Link>{" "}
                  <Link
                    className="button button--outline button--success"
                    to={useBaseUrl("#education")}
                  >
                    My education
                  </Link>{" "}
                </div>
              </div>
            </div>
            <div id="experience" className="row padding-vert--lg">
              <div className={clsx("col col--3", styles.aboutSectionHeader)}>
                <h2 className="underlineColorWarning">Experience</h2>
              </div>
              <div className="col col--9">
                {WorkItems.map((props, idx) => (
                  <ResumeItem key={idx} {...props} />
                ))}
              </div>
            </div>
            <div id="education" className="row padding-vert--lg">
              <div className={clsx("col col--3", styles.aboutSectionHeader)}>
                <h2 className="underlineColorDanger">Education</h2>
              </div>
              <div className="col col--9">
                {EducationItems.map((props, idx) => (
                  <ResumeItem key={idx} {...props} />
                ))}
              </div>
            </div>
          </div>
        </div>{" "}
        <section className={styles.directoryBody}>
          <div className="container">
            <h3>Continue exploring?</h3>
            <nav className="pagination-nav">
              <div className="pagination-nav__item">
                <Link className="pagination-nav__link" to={useBaseUrl("projects/")}>
                  <div className="pagination-nav__sublabel">View my</div>
                  <div className="pagination-nav__label">Projects</div>
                </Link>
              </div>
              <div className="pagination-nav__item pagination-nav__item--next">
                <a className="pagination-nav__link" href={useBaseUrl("pdf/resume.pdf")}>
                  <div className="pagination-nav__sublabel">View my</div>
                  <div className="pagination-nav__label">Resume</div>
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
