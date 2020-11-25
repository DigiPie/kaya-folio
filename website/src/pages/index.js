import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";
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
        <FontAwesomeIcon alt={alt} title={alt} icon={faIcon} size="2x" />
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
  return (
    <Layout description="Description will go into a meta tag in <head />">
      <header className={clsx("hero", styles.heroBanner)}>
        <div className="container">
          <img
            src="img/profilepic.jpg"
            style={{
              borderRadius: "50%",
              maxWidth: 128,
            }}
          />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <ul className={styles.socialLinkList}>
            {socialLinks.map((props, idx) => (
              <SocialLink key={idx} {...props} />
            ))}
          </ul>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <p className="text--center">
          <a href="http://www.freepik.com">Graphics designed by slidesgo / Freepik</a>
        </p>
      </main>
    </Layout>
  );
}

export default Home;
