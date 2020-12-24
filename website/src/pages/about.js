import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

import SocialLinks from "./components/_SocialLinks";

const workItems = [
  {
    location: "Padlet",
    link: "https://www.padlet.com",
    position: "Full Stack Engineer",
    period: "January 2021 to Present",
    description: <>I work on the Padlet platform which is used by millions
    of users across the globe.</>,
  },
  {
    location: "National University of Singapore, School of Computing",
    link: "https://www.comp.nus.edu.sg/",
    position: "Teaching Assistant",
    period: "January 2018 to December 2020",
    description: (
      <>
        <a href="https://nusmods.com/modules/CS3103/computer-networks-practice">
          CS3103: Computer Networks Practice
        </a>{" "}
        • August to December 2020
        <br />
        Conducted weekly 2-hour labs for 16 students, covering common network
        concepts such as IPSec-VPN and IoT protocols like MQTT.
        <br />
        <br />
        <a href="https://nusmods.com/modules/CS1010/programming-methodology">
          CS1010: Programming Methodology
        </a>{" "}
        • August to December 2018
        <br />
        Conducted weekly 2-hour tutorials for 14 students, covering fundamental
        programming concepts, C and Vim.
        <br />
        <br />
        <a href="https://nusmods.com/modules/CS2030/programming-methodology-ii">
          CS2030: Programming Methodology II
        </a>{" "}
        • January to May 2018
        <br />
        Prepared lab materials for over 200 students, covering Object-Oriented
        Programming and Functional Programming in Java.
      </>
    ),
  },
  {
    location: "Open Government Products, GovTech Singapore",
    link: "https://www.open.gov.sg",
    position: "Software Engineer Intern",
    period: "May to August 2020",
    description: (
      <>
        Open Government Products is an in-house team of engineers, designers,
        and product managers who build technology for the public good.
        <br />
        <br />I worked on Vault.gov.sg, a Whole-of-Government data discovery and
        sharing platform. I worked as a Full-Stack Software Engineer (Backend:
        MySQL, NodeJS-ExpressJS; Frontend: ReactJS-NextJS) and Cloud Engineer
        (AWS EB, RDS, S3).
      </>
    ),
  },
  {
    location: "Google Cloud Student Sprint Program",
    link: "https://events.withgoogle.com/cssp/",
    position: "Program Participant",
    period: "May to August 2020",
    description: (
      <>
        I was one of only 60 university students in Singapore chosen for this
        intensive 10-week Google Cloud summer experience. Under the guidance of
        a Google mentor, I learned how to deploy and monitor enterprise
        solutions on the Google Cloud Platform.
        <br />
        <br />I got certified as a{" "}
        <a href="https://cloud.google.com/certification/cloud-engineer">
          Google Cloud Certified Associate Cloud Engineer
        </a>{" "}
        as part of this program.
      </>
    ),
  },
  {
    location: "Government Digital Services, GovTech Singapore",
    link: "https://www.hive.tech.gov.sg/",
    position: "DevOps Associate Consultant",
    period: "July to September 2015",
    description: (
      <>
        Digital transformation within the public sector is at the heart of what
        GovTech does.
        <br />
        <br />I worked as a Cloud System Administrator under the DevOps team at
        the Government Digital Services division.
      </>
    ),
  },
  {
    location: "DigiPen Institute of Technology, Seattle",
    link: "https://www.digipen.edu/",
    position: "Overseas Industrial Training Programme",
    period: "May to July 2014",
    description: (
      <>
        I was one of only three students in my school batch selected for this
        programme. I worked in a team of 4 on a 2D puzzle game using DigiPen's
        proprietary Zero engine.
      </>
    ),
  },
];

const educationItems = [
  {
    location: "National University of Singapore, School of Computing",
    link: "https://www.comp.nus.edu.sg/",
    position: "Bachelor of Computing in Computer Science",
    period: "August 2017 to December 2020",
    description: (
      <>
        <b>Academics</b>
        <ul>
          <li>Specialisations in Software Engineering and Networking</li>
          <li>
            <a href="http://rc4.nus.edu.sg/">
              Residential College 4 Systems Dynamics Programme
            </a>
          </li>
        </ul>
        <b>Achievements</b>
        <ul>
          <li>
            NUS Students' Sports Club's Colours Award for Outstanding
            Contributions 2019
          </li>
          <li>
            NUS Orbital 2018 Honorable Mention Award (Top 11 of 211 teams)
          </li>
          <li>
            <a href="http://bit.ly/2hSzWbv">IMDA SG: Digital Scholarship</a>
          </li>
        </ul>
        <b>Certifications</b>
        <ul>
          <li>
            <a href="https://www.youracclaim.com/badges/681b95e4-178e-4d95-af41-dcdc6dbb9442/public_url">
              AWS Certified Cloud Practitioner (2020)
            </a>
          </li>
          <li>
            <a href="https://www.credential.net/a3645798-b27d-401a-a412-7f1c94ba7e6a">
              Google Cloud Certified Associate Cloud Engineer (2020)
            </a>
          </li>
        </ul>
        <b>Courses</b>
        <ul>
          <li>
            <a href="https://www.udemy.com/certificate/UC-a6e7af40-8f26-4c13-846f-636b88ce326e/">
              Udemy AWS CloudFormation Master Class (2020)
            </a>
          </li>
          <li>
            <a href="https://www.udemy.com/certificate/UC-e3c08245-a935-45b7-91da-6cc690f3dd30/">
              Udemy Node with React: Fullstack Web Development (2020)
            </a>
          </li>
          <li>
            <a href="https://courses.edx.org/certificates/e9c965d9096b4eb6b9db7e331dce8cf2">
              HarvardX PH125.1x: Data Science: R Basics (2018)
            </a>
          </li>
        </ul>
        <b>Activities</b>
        <ul>
          <li>
            <a href="https://dscnustech.github.io/">
              Deputy Head of Tech of NUS Google Developer Student Club
            </a>
            : Co-organised and emceed for the first-ever Hack For Good 2020 in
            which 28 teams participated.
          </li>
          <li>
            <a href="https://www.instagram.com/nusskating/">
              President of NUS Skating Club
            </a>
            : Organised NUS Skate Challenge 2019 in which over 60 university,
            polytechnic, ITE and primary school students participated.
          </li>
        </ul>
      </>
    ),
  },
  {
    location: "Stanford University, California",
    link: "https://summer.stanford.edu/ihp",
    position: "International Honors Program Participant",
    period: "June to August 2019",
    description: (
      <>
        I was one of only 10 NUS students selected for this prestigious summer
        programme.
        <br />
        <br />
        <b>Courses</b>
        <ul>
          <li>
            CME 106: Introduction to Probability and Statistics for Engineers
          </li>
          <li>CS 161: Design and Analysis of Algorithms</li>
        </ul>
      </>
    ),
  },
  {
    location: "Singapore Polytechnic",
    link: "https://www.sp.edu.sg/",
    position: "Diploma with Merit in Information Technology (3.907/4.0)",
    period: "2012 to 2015",
    description: (
      <>
        <b>Achievements</b>
        <ul>
          <li>
            <a href="https://youtu.be/zxQKmwpGDag?t=80">
              Featured in Graduates of 2015 video
            </a>
          </li>
          <li>
            2nd place for{" "}
            <a href="http://www.isobarcreate.com/">
              Isobar Create32 Hackathon SG
            </a>
          </li>
          <li>Diploma with Merit and Accenture Technology Prize</li>
          <li>
            <a href="http://bit.ly/2hSzWbv">
              IMDA Integrated Infocomm Scholarship (Polytechnic)
            </a>
          </li>
        </ul>
        <b>Certifications</b>
        <ul>
          <li>
            <a href="https://www.youracclaim.com/badges/71496e7f-e632-442b-b8c9-42b7b7281b95/linked_in_profile">
              Oracle Certified Associate, Java SE 7 Programmer (2014)
            </a>
          </li>
          <li>
            <a href="https://www.youracclaim.com/badges/d587a4e6-72a6-4000-83bf-551596f667a8/linked_in_profile">
              Adobe Certified Associate in Visual Communication Using Adobe
              Photoshop CS6 (2013)
            </a>
          </li>
        </ul>
        <b>Activities</b>
        <ul>
          <li>
            <b>Microsoft Student Partner</b>: Conducted a Windows 8 app
            development workshop.
          </li>
          <li>
            <b>SP Guitarists Club Classical Ensemble Exco</b>: Assisted the
            Conductor as a Sectional Leader.
          </li>
        </ul>
      </>
    ),
  },
];

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
    <Layout description="Description will go into a meta tag in <head />">
      <header
        className={clsx("hero", styles.heroBanner)}
        style={{ minHeight: headerHeight }}
      >
        <div className="container">
          <div style={{ minHeight: bannerHeight }}>
            <p>More about</p>
            <h1 className="colorWarning">Evan Tay.</h1>
            <p>
              I am a Full Stack Software Engineer and Certified Cloud Engineer
              for GCP and AWS.
            </p>
            <SocialLinks />
          </div>
          <div>
            <Link
              className={clsx(
                "button button--outline button--secondary btnSec",
                styles.buttonLearnMore
              )}
              to="#experience"
            >
              Experience
            </Link>{" "}
            <Link
              className={clsx(
                "button button--outline button--secondary btnSec",
                styles.buttonLearnMore
              )}
              to="#education"
            >
              Education
            </Link>{" "}
          </div>
        </div>
      </header>
      <main id="main">
        <div className={styles.about}>
          <div className="container">
            <div className="row">
              <div className={clsx("col col--3", styles.profilePic)}>
                <img src="img/profilepic.jpg" />
              </div>
              <div className="col col--9">
                <h1>Evan Tay</h1>
                <p>
                  Hello! I'm Evan, a Full Stack Software Engineer and Certified
                  Cloud Engineer based in Singapore.
                </p>
                <p>
                  I love building cool, fun and meaningful things with tech,
                  whether that be <Link to={useBaseUrl("#")}>websites</Link>,{" "}
                  <Link to={useBaseUrl("#")}>applications</Link> or{" "}
                  <a href="https://digipie.itch.io/">games</a>. To me, coding is
                  the closest thing to magic we have in this world.
                </p>
                <p>
                  I was a Computer Science major at the{" "}
                  <a href="https://www.comp.nus.edu.sg/">
                    National University of Singapore
                  </a>{" "}
                  from 2017 to 2020. During my time there, I was the Deputy Head
                  of Technology at{" "}
                  <a href="https://dscnustech.github.io/">
                    Google Developer Student Club NUS
                  </a>
                  , and also the President of the{" "}
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
                  Engineer at <a href="https://padlet.com/dashboard">Padlet</a>.
                </p>
              </div>
            </div>
            <div id="experience" className="row" style={{ paddingTop: "4rem" }}>
              <div className={clsx("col col--3", styles.headerAbout)}>
                <h2>Experience</h2>
              </div>
              <div className="col col--9">
                {workItems.map((props, idx) => (
                  <ResumeItem key={idx} {...props} />
                ))}
              </div>
            </div>
            <div id="education" className="row" style={{ paddingTop: "4rem" }}>
              <div className={clsx("col col--3", styles.headerAbout)}>
                <h2>Education</h2>
              </div>
              <div className="col col--9">
                {educationItems.map((props, idx) => (
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
