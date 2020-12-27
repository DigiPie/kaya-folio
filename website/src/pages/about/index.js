import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";

import SocialLinks from "../components/_SocialLinks";
import { AboutBody, WorkItems, EducationItems } from "../../data/_About";

const TITLE = "About";
const DESCRIPTION = "Check out my notable projects and contributions";

function ResumeItem({ location, link, position, period, description }) {
  return (
    <div className={styles.resumeItem}>
      <h3>
        <a href={link}>{location}</a>
      </h3>
      <p>
        <b>{position}</b> <span>•</span> <i>{period}</i>
      </p>
      <div>{description}</div>
    </div>
  );
}

function About() {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <header className={styles.aboutHeader}>
        <h1>{TITLE}</h1>
        <SocialLinks />
      </header>
      <main id="main">
        <div className={styles.aboutBody}>
          <div className="container">
            <div className="row">
              <div className={clsx("col col--3", styles.profilePic)}>
                <img src="img/profilepic.jpg" />
              </div>
              <div className="col col--9">
                <AboutBody />
              </div>
            </div>
            <div id="experience" className="row" style={{ paddingTop: "4rem" }}>
              <div className={clsx("col col--3", styles.aboutSectionHeader)}>
                <h2>Experience</h2>
              </div>
              <div className="col col--9">
                {WorkItems.map((props, idx) => (
                  <ResumeItem key={idx} {...props} />
                ))}
              </div>
            </div>
            <div id="education" className="row" style={{ paddingTop: "4rem" }}>
              <div className={clsx("col col--3", styles.aboutSectionHeader)}>
                <h2>Education</h2>
              </div>
              <div className="col col--9">
                {EducationItems.map((props, idx) => (
                  <ResumeItem key={idx} {...props} />
                ))}
              </div>
            </div>
            <div className="row">
              <a
                className="button button--outline button--primary btnSec"
                href="https://github.com/DigiPie/Deedy-Resume/raw/master/resume.pdf"
                style={{ margin: "0 auto" }}
              >
                View my resume
              </a>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default About;
