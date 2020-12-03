import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import styles from "./styles.module.css";

const socialLinks = [
  {
    faIcon: faLinkedinIn,
    alt: "Linkedin",
    url: "https://www.linkedin.com/in/evanitsg/",
  },
  {
    faIcon: faGithub,
    alt: "GitHub",
    url: "https://github.com/digipie",
  },
  {
    faIcon: faEnvelopeOpen,
    alt: "Email",
    url: "mailto:evan.it.sg@gmail.com",
  },
];

function SocialLink({ faIcon, alt, url }) {
  const formattedUrl = useBaseUrl(url);
  return (
    <li>
      <a href={formattedUrl}>
        <FontAwesomeIcon alt={alt} title={alt} icon={faIcon} size="1x" /> {alt}
      </a>
    </li>
  );
}

const features = [
  {
    title: "Full-Stack Software Engineer",
    imageUrl: "img/fullstack.png",
    description: (
      <>
        I was a Full-Stack Software Engineer Intern at{" "}
        <a href="https://open.gov.sg/">Open Government Products</a> for Summer
        2020. I am currently learning more about{" "}
        <a href="https://reactjs.org/">ReactJS</a> and{" "}
        <a href="https://v2.docusaurus.io/">Docusaurus 2</a>.
      </>
    ),
  },
  {
    title: "Certified Cloud Engineer",
    imageUrl: "img/cloud.png",
    description: (
      <>
        I am a{" "}
        <a href="https://www.credential.net/a3645798-b27d-401a-a412-7f1c94ba7e6a">
          Google Certified Associate Cloud Engineer
        </a>{" "}
        and{" "}
        <a href="https://www.youracclaim.com/badges/681b95e4-178e-4d95-af41-dcdc6dbb9442/public_url">
          AWS Certified Cloud Practitioner
        </a>
        . I am currently learning more about{" "}
        <a href="https://www.udemy.com/certificate/UC-a6e7af40-8f26-4c13-846f-636b88ce326e/">
          AWS CloudFormation
        </a>{" "}
        and <a href="http://terraform.io/">Hashicorp Terraform</a>.
      </>
    ),
  },
];

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
    <Layout description="Description will go into a meta tag in <head />">
      <header
        className={clsx("hero", styles.heroBanner)}
        style={{ height: headerHeight }}
      >
        <div className="container">
          <div style={{ minHeight: bannerHeight }}>
            <h1>Hello world</h1>
            <p>{siteConfig.tagline}</p>
            <ul className={styles.socialLinkList}>
              {socialLinks.map((props, idx) => (
                <SocialLink key={idx} {...props} />
              ))}
            </ul>
          </div>
          <div className="row">
            <a className={styles.landingScrolldown} href="#main">
              <FontAwesomeIcon
                alt="Scroll down"
                title="Scroll down"
                icon={faArrowCircleDown}
                size="1x"
              />
            </a>
          </div>
        </div>
      </header>
      <main id="main">
        <div className={styles.about}>
          <div className="container">
            <div className="row">
              <div className="col col--3">
                <img src="img/profilepic.jpg" className={styles.profilePic} />
              </div>
              <div className="col col--9">
                <h1>Evan Tay</h1>
                <p>
                  Hello! I graduated from{" "}
                  <a href="https://www.nus.edu.sg/">
                    National University of Singapore
                  </a>{" "}
                  as a{" "}
                  <a href="https://www.comp.nus.edu.sg/">
                    Computer Science major
                  </a>{" "}
                  in 2020. I was the{" "}
                  <a href="https://dscnustech.github.io">
                    Deputy Head of Technology
                  </a>{" "}
                  at{" "}
                  <a href="https://dscnustech.github.io/">
                    Google Developer Student Club NUS
                  </a>
                  , and the{" "}
                  <a href="https://www.instagram.com/nusskating/">
                    President of the NUS Skating Club
                  </a>
                  . I was also a{" "}
                  <a href="https://github.com/DigiPie/CS1010-Tutorial-C09">
                    Teaching Assistant
                  </a>{" "}
                  for 3 different courses, and an{" "}
                  <a href="https://www.imda.gov.sg">
                    IMDA scholarship recipient
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
              <div className={styles.buttons}>
                <Link
                  className={
                    "button button--outline button--secondary btn-sec"
                  }
                  to={useBaseUrl("blog/")}
                >
                  Read my blog
                </Link>
                <Link
                  className={
                    "button button--outline button--secondary btn-sec"
                  }
                  to={useBaseUrl("docs/")}
                >
                  Read my docs
                </Link>
              </div>
              <p className="text--center small">
                <a href="http://www.freepik.com">
                  Graphics designed by slidesgo / Freepik
                </a>
              </p>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
