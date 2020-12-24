import React from "react";
import { useLocation } from "react-router-dom";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCode,
  faLink,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.css";
import projects from "../../data/_Projects";

const TITLE = "Projects";
const DESCRIPTION = "Check out my notable projects and contributions";

function Projects() {
  const slug = useLocation();

  if (slug.hash) {
    const project = projects.find((project) => project.slug == slug.hash);

    return (
      <Layout title={TITLE} description={DESCRIPTION}>
        <header className={clsx("hero", styles.heroBanner)}>
          <div className="container">
            <h1>{TITLE}</h1>
            <p>{DESCRIPTION}</p>
          </div>
        </header>
        <main className="container margin-vert--lg">
          <div
            className={clsx(
              "text--center margin-bottom--xl",
              styles.projectItem
            )}
          >
            <Link
              className={clsx(
                "button button--outline button--secondary",
                styles.buttonBack
              )}
              to="/projects"
            >
              All projects
            </Link>
            <h1>{project.title}</h1>
            <h2>{project.subtitle}</h2>
            <img src={project.image} alt={project.title} />
            <div>
              <ul>
                <li>
                  <FontAwesomeIcon alt="Calendar" icon={faCalendar} />{" "}
                  {project.period}
                </li>
                <li>
                  <FontAwesomeIcon alt="Code" icon={faCode} /> {project.tech}
                </li>
                <li>
                  <FontAwesomeIcon alt="Team" icon={faUsers} />{" "}
                  {project.team.map((member, i) => (
                    <span key={i}>
                      {member.link && <a href={member.link}>{member.name}</a>}
                      {!member.link && member.name}
                      {i < project.team.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </li>
              </ul>
              <b>Description</b>
              <div>{project.description}</div>
              {project.links && (
                <>
                  <b>Links</b>
                  <ul>
                    {project.links.map((link, i) => (
                      <li key={i}>
                        <a href={link.link}>
                          <FontAwesomeIcon alt="Link" icon={faLink} />{" "}
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
            <Link
              className={clsx(
                "button button--outline button--secondary",
                styles.buttonBack
              )}
              to="/projects"
            >
              All projects
            </Link>
          </div>
        </main>
      </Layout>
    );
  } else {
    return (
      <Layout title={TITLE} description={DESCRIPTION}>
        <header className={clsx("hero", styles.heroBanner)}>
          <div className="container">
            <h1>{TITLE}</h1>
            <p>{DESCRIPTION}</p>
          </div>
        </header>
        <main className="container margin-vert--lg">
          <div className="row">
            {projects.map((project) => (
              <div key={project.title} className="col col--4 margin-bottom--lg">
                <div className={styles.projectCard}>
                  <div className="card__image">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="card__body">
                    <div className="avatar">
                      <div className="avatar__intro margin-left--none">
                        <h4 className="avatar__name">{project.title}</h4>
                        <small className="avatar__subtitle">
                          {project.subtitle}
                        </small>
                      </div>
                    </div>
                  </div>
                  <Link
                    className={clsx(
                      "button button--outline button--secondary btnSec",
                      styles.buttonLearnMore
                    )}
                    to={project.slug}
                  >
                    Read more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </main>
      </Layout>
    );
  }
}

export default Projects;
