import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

import SocialLinks from "./components/SocialLinks";

const features = [
  {
    title: "Full Stack Software Engineer",
    imageUrl: "img/fullstack.png",
    description: (
      <>
        I am currently working as a Full Stack Engineer at{" "}
        <a href="https://padlet.com/dashboard">Padlet</a>. I was a Software
        Engineering Intern at{" "}
        <a href="https://open.gov.sg/">Open Government Products</a> during
        Summer 2020. I am currently learning more about{" "}
        <a href="https://reactjs.org/">ReactJS</a>.
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
        <a href="https://www.hashicorp.com/resources/getting-started-with-infrastructure-as-code-iac">
          Infrastructure-as-Code
        </a>
        , specifically{" "}
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
        style={{ minHeight: headerHeight }}
      >
        <div className="container">
          <div style={{ minHeight: bannerHeight }}>
            <p>Hello world, my name is</p>
            <h1>Evan Tay.</h1>
            <h2>
              I am a Full Stack Engineer @{" "}
              <a href="https://padlet.com/dashboard">Padlet</a>.
            </h2>
            <p>{siteConfig.tagline}</p>
            <SocialLinks />
          </div>
          <div>
            <Link
              className={clsx(
                "button button--outline button--secondary btn-sec",
                styles.buttonLearnMore
              )}
              to="#main"
            >
              Learn more about me
            </Link>
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
                  Shortly after graduating, I started working as a Full Stack Engineer at {" "}
                  <a href="https://padlet.com/dashboard">Padlet</a>. Here, I work on the Padlet platform which is used by millions of users across the globe.
                </p>
                <Link
                  className={clsx(
                    "button button--outline button--primary btn-sec",
                    styles.buttonAbout
                  )}
                  to={useBaseUrl("/about")}
                >
                  Read more
                </Link>
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
                  className={"button button--outline button--secondary btn-sec"}
                  to={useBaseUrl("blog/")}
                >
                  Read my blog
                </Link>
                <Link
                  className={"button button--outline button--secondary btn-sec"}
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
