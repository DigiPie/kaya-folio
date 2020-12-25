import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
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
  const mainRef = useRef(null);
  const [showProjectItem, setShowProjectItem] = useState(false);
  const [projectItem, setProjectItem] = useState(projects[0]);
  const slug = useLocation();

  useEffect(() => {
    function handleTransition() {
      if (slug.hash) {
        const project = projects.find((project) => project.slug == slug.hash);

        if (project) {
          setProjectItem(project);
          setShowProjectItem(true);
          return;
        }
      }

      setShowProjectItem(false);
    }

    handleTransition();
    mainRef.current.hidden = false;
  });

  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <header className={clsx("hero", styles.heroBanner)}>
        <div className="container">
          <h1>{TITLE}</h1>
          <p>{DESCRIPTION}</p>
        </div>
      </header>
      <main className="container margin-vert--lg" ref={mainRef} hidden={true}>
        <div
          className="row"
          style={{ display: showProjectItem ? "none" : "block" }}
        >
          {projects.map((project) => (
            <div
              key={project.title + "-card"}
              className="col col--4 margin-bottom--lg"
            >
              <div className={styles.projectCard}>
                <div className="card__image">
                  <img src={useBaseUrl(project.imageUrl)} alt={project.title} />
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
        <div
          className={clsx("text--center margin-bottom--xl", styles.projectItem)}
          style={{ display: showProjectItem ? "block" : "none" }}
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
          <h1>{projectItem.title}</h1>
          <h2>{projectItem.subtitle}</h2>
          <img src={useBaseUrl(projectItem.imageUrl)} alt={projectItem.title} />
          <div>
            <ul>
              <li>
                <FontAwesomeIcon alt="Calendar" icon={faCalendar} />{" "}
                {projectItem.period}
              </li>
              <li>
                <FontAwesomeIcon alt="Code" icon={faCode} /> {projectItem.tech}
              </li>
              {projectItem.team && (
                <li>
                  <FontAwesomeIcon alt="Team" icon={faUsers} />{" "}
                  {projectItem.team.map((member, i) => (
                    <span key={i}>
                      {member.link && <a href={member.link}>{member.name}</a>}
                      {!member.link && member.name}
                      {i < projectItem.team.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </li>
              )}
            </ul>
            <b>Description</b>
            <div>{projectItem.description}</div>
            {projectItem.links && (
              <>
                <b>Links</b>
                <ul>
                  {projectItem.links.map((link, i) => (
                    <li key={i}>
                      <a href={link.link}>
                        <FontAwesomeIcon alt="Link" icon={faLink} /> {link.name}
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
}

export default Projects;
