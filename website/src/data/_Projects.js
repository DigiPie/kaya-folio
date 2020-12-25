import React from "react";

const projects = [
  {
    title: "DigiCourse",
    slug: "#digicourse",
    imageUrl: "img/projects/digicourse.png",
    links: [
      {
        name: "GitHub",
        link: "https://github.com/DigiPie/DigiCourse",
      },
    ],
    subtitle: "A full-stack course platform with forum and enrolment features.",
    period: "September to November 2019",
    tech: "NodeJS, ExpressJS, PostgreSQL, Herokuapp",
    team: [
      {
        name: "Evan Tay",
        link: "https://github.com/DigiPie/",
      },
      {
        name: "Lee Tze Ting",
        link: "https://github.com/halcyoneee/",
      },
      {
        name: "Jacqueline Cheong",
        link: "https://github.com/Aquarinte/",
      },
      {
        name: "Bryan Koh",
        link: "https://github.com/awarenessxz/",
      },
    ],
    description: (
      <>
        <p>
          A course management platform where student-teacher interactions can
          take place seamlessly online.
        </p>
        <p>
          We worked on DigiCourse under the National University of Singapore's{" "}
          <a href="https://nusmods.com/modules/CS2102/database-systems">
            CS2102: Database Systems module
          </a>
          . It is a database-centric project which features two major
          components, a course enrolment system, and a forum system.
        </p>
        <p>
          DigiCourse is continuously deployed from Github to Herokuapp, with the
          aid of Heroku build-packs such as the{" "}
          <a href="https://evantay.com/psql-heroku-buildpack">
            psql-heroku-buildpack
          </a>
          . I wrote this build pack to automate the execution of a PostgreSQL
          setup script file on deployment to Heroku.
        </p>
      </>
    ),
  },
];

export default projects;
