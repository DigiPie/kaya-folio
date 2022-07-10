import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import clsx from "clsx";

import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCode,
  faFile,
  faGamepad,
  faLink,
  faTools,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { faChrome } from "@fortawesome/free-brands-svg-icons";

import styles from "./styles.module.css";
import projects from "../../data/_Projects";

function CategoryIcon({ category, size = "1x" }) {
  let faIcon;
  switch (category) {
    case "Project":
      faIcon = faFile;
      break;
    case "Open Source Tool":
      faIcon = faTools;
      break;
    case "Website":
      faIcon = faChrome;
      break;
    case "Game":
      faIcon = faGamepad;
      break;
    default:
      faIcon = faFile;
  }

  return <FontAwesomeIcon alt={category} size={size} icon={faIcon} />;
}

function Projects() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

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
          window.scrollTo(0, 0);
          return;
        }
      }

      setShowProjectItem(false);
    }

    handleTransition();
    mainRef.current.hidden = false;
  });

  return (
    <Layout title="Projects" description={siteConfig.tagline}>
      <header className={styles.projectPageHeader}>
        <h2 className="underlineColorSuccess">My projects</h2>
      </header>
      <main ref={mainRef} hidden={true}>
        <div className={styles.projectBody}>
          <div className="container">
            <div
              className="row margin-bottom--lg"
              style={{ display: showProjectItem ? "none" : "flex" }}
            >
              {projects.map((project) => (
                <div
                  id={project.title}
                  key={project.title + "-card"}
                  className="col col--4 margin-bottom--lg"
                >
                  <div className={styles.projectCard}>
                    {project.imageUrl ? (
                      <div className="card__image">
                        <img
                          src={useBaseUrl(project.imageUrl)}
                          alt={project.title}
                        />
                      </div>
                    ) : (
                      <div
                        className={
                          project.bgColor == "alternate"
                            ? "card__image bgColorDanger"
                            : "card__image bgColorSuccess"
                        }
                      >
                        <h2>{project.title}</h2>
                      </div>
                    )}
                    <div className="card__body">
                      <div className="avatar">
                        <div className="avatar__intro margin-left--none">
                          <h4 className="avatar__name">
                            <CategoryIcon category={project.category} />{" "}
                            {project.title}
                          </h4>
                          <p className="avatar__subtitle">{project.subtitle}</p>
                          <small className="avatar__subtitle">
                            <FontAwesomeIcon alt="Code" icon={faCalendar} />{" "}
                            {project.period}
                          </small>
                          <small className="avatar__subtitle">
                            <FontAwesomeIcon alt="Code" icon={faCode} />{" "}
                            {project.tech}
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="card__footer">
                      <Link
                        className={clsx(
                          "button button--outline button--primary",
                          styles.projectItemButton
                        )}
                        to={useBaseUrl(project.slug)}
                      >
                        Learn more
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div
              className={clsx(
                "text--center margin-bottom--xl",
                styles.projectItem
              )}
              style={{ display: showProjectItem ? "block" : "none" }}
            >
              <Link
                className={clsx(
                  "button button--outline button--primary",
                  styles.projectItemBackButton
                )}
                to={useBaseUrl("/projects")}
              >
                All projects
              </Link>
              <h1>{projectItem.title}</h1>
              <h2>{projectItem.subtitle}</h2>
              {projectItem.imageUrl && (
                <img
                  src={useBaseUrl(projectItem.imageUrl)}
                  alt={projectItem.title}
                />
              )}
              <div>
                <ul>
                  <li>
                    <CategoryIcon category={projectItem.category} />{" "}
                    {projectItem.category}
                  </li>
                  <li>
                    <FontAwesomeIcon alt="Calendar" icon={faCalendar} />{" "}
                    {projectItem.period}
                  </li>
                  <li>
                    <FontAwesomeIcon alt="Code" icon={faCode} />{" "}
                    {projectItem.tech}
                  </li>
                  {projectItem.team && (
                    <li>
                      <FontAwesomeIcon alt="Team" icon={faUsers} />{" "}
                      {projectItem.team.map((member, i) => (
                        <span key={i}>
                          {member.link && (
                            <a href={member.link}>{member.name}</a>
                          )}
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
                  "button button--outline button--primary",
                  styles.projectItemBackButton
                )}
                to={useBaseUrl("/projects")}
              >
                All projects
              </Link>
            </div>
          </div>
        </div>
        <section className={styles.directory}>
          <div className="container">
            <h3>Continue exploring?</h3>
            <nav className="pagination-nav">
              <div className="pagination-nav__item">
                <Link className="pagination-nav__link" to={useBaseUrl("docs/")}>
                  <div className="pagination-nav__sublabel">Read</div>
                  <div className="pagination-nav__label">My docs</div>
                </Link>
              </div>
              <div className="pagination-nav__item pagination-nav__item--next">
                <Link
                  className="pagination-nav__link"
                  href={useBaseUrl("about/")}
                >
                  <div className="pagination-nav__sublabel">Learn more</div>
                  <div className="pagination-nav__label">About me</div>
                </Link>
              </div>
            </nav>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Projects;
