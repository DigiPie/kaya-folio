import React from "react";

const projects = [
  {
    category: "Project",
    title: "DigiCourse",
    slug: "#digicourse",
    imageUrl: "img/projects/digicourse.png",
    subtitle: "A full-stack course platform with forum and enrolment features.",
    period: "September to November 2019",
    tech: "NodeJS, ExpressJS, PostgreSQL, Herokuapp",
    team: [
      {
        name: "Bryan Koh",
        link: "https://github.com/awarenessxz/",
      },
      {
        name: "Evan Tay",
        link: "https://github.com/DigiPie/",
      },
      {
        name: "Jacqueline Cheong",
        link: "https://github.com/Aquarinte/",
      },
      {
        name: "Lee Tze Ting",
        link: "https://github.com/halcyoneee/",
      },
    ],
    description: (
      <>
        <p>
          A course management platform where student-teacher interactions can
          take place seamlessly online.
        </p>
        <p>
          We worked on DigiCourse under National University of Singapore's{" "}
          <a href="https://nusmods.com/modules/CS2102/database-systems">
            CS2102: Database Systems
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
    links: [
      {
        name: "GitHub",
        link: "https://github.com/DigiPie/DigiCourse",
      },
    ],
  },
  {
    category: "Project",
    title: "Dynalite",
    slug: "#dynalite",
    imageUrl: "img/projects/dynalite.png",
    subtitle: "A full-stack IoT occupancy visualisation app.",
    period: "September to November 2019",
    tech:
      "Raspberry-Pi, Python, COAP, NodeJS, ExpressJS, PostgreSQL, ReactJS, Docker",
    team: [
      {
        name: "Evan Tay",
        link: "https://github.com/DigiPie/",
      },
      {
        name: "Joyce Yeo",
        link: "https://github.com/pikulet/",
      },
      {
        name: "Matthew Lee",
        link: "https://github.com/crazoter/",
      },
      {
        name: "Melodies Sim",
        link: "https://github.com/Happytreat/",
      },
    ],
    description: (
      <>
        <p>
          Dynalite is an Internet-of-Things application which performs dynamic
          visualisation of room occupancy.
        </p>
        <p>
          We worked on Dynalite under National University of Singapore's{" "}
          <a href="https://nusmods.com/modules/CS3103/computer-networks-practice">
            CS3103: Computer Networks Practice
          </a>
          . It is an Internet-of-Things application which performs dynamic
          visualisation of room occupancy.
        </p>
        <p>
          Dynalite was built using 3 Docker containers and 1 Raspberry Pi. The
          RPi reads light data and sends it via COAP to the first Docker
          container containing a backend NodeJS-ExpressJS web server.
        </p>
        <p>
          The backend server authenticates and stores the measurements into a
          PostgreSQL database stored in the second Docker container.
        </p>
        <p>
          The backend server also provides a{" "}
          <a href="https://www.evantay.com/tech/dynalite-api/occupancy">
            HTTP REST API
          </a>{" "}
          which is used by a frontend React web server in the third Docker
          container.
        </p>
      </>
    ),
    links: [
      {
        name: "GitHub",
        link: "https://github.com/DigiPie/dynalite",
      },
      {
        name: "Presentation Slides (PDF)",
        link: "pdf/dynalite.pdf",
      },
    ],
  },
  {
    category: "Project",
    title: "BrainTrain",
    slug: "#braintrain",
    imageUrl: "img/projects/braintrain.png",
    subtitle: "A spaced-repetition flashcard desktop app.",
    period: "March to April 2019",
    tech: "Java, JUnit5, JavaFx, OpenCSV",
    team: [
      {
        name: "Evan Tay",
        link: "https://github.com/DigiPie/",
      },
      {
        name: "Eugene Foo",
        link: "https://github.com/eugenefdw/",
      },
      {
        name: "Lee Tze Ting",
        link: "https://github.com/halcyoneee/",
      },
    ],
    description: (
      <>
        <p>
          BrainTrain is a spaced-repetition flashcard application which makes
          memorizing easy and effective. With BrainTrain’s{" "}
          <a href="https://www.theguardian.com/education/2016/jan/23/spaced-repetition-a-hack-to-make-your-brain-store-information">
            Spaced Repetition System (SRS)
          </a>{" "}
          optimizing your flashcard revision intervals, you will be able to
          learn more in less time.
        </p>
        <p>
          <a
            href="https://travis-ci.org/CS2103-AY1819S2-W14-1/main"
            title="Build status"
          >
            <img src="https://travis-ci.org/CS2103-AY1819S2-W14-1/main.svg?branch=master" />
          </a>{" "}
          <a
            href="https://ci.appveyor.com/project/eugenefdw/main"
            title="Build status"
          >
            <img src="https://ci.appveyor.com/api/projects/status/vl6bo937loonr7x3?svg=true" />
          </a>{" "}
          <a
            href="https://coveralls.io/github/CS2103-AY1819S2-W14-1/main?branch=master"
            title="Coverage status"
          >
            <img src="https://coveralls.io/repos/github/CS2103-AY1819S2-W14-1/main/badge.svg?branch=master" />
          </a>{" "}
          <a
            href="https://www.codacy.com/app/cs2103-w14-1/main?utm_source=github.com&utm_medium=referral&utm_content=CS2103-AY1819S2-w14-1/main&utm_campaign=Badge_Grade"
            title="Codacy code quality"
          >
            <img src="https://api.codacy.com/project/badge/Grade/d236c7af6a71427ebeae2571add1f3f4" />
          </a>
        </p>
        <p>
          We worked on BrainTrain under National University of Singapore's{" "}
          <a href="https://nusmods.com/modules/CS2103T/software-engineering">
            CS2103T: Software Engineering
          </a>
          . My primary responsibility was to design and develop the Card
          Management System. My secondary responsibility was to act as the
          project’s documentation lead. To find out more, view my{" "}
          <a href="https://digipie.github.io/BrainTrain/team/digipie.html">
            project portfolio page
          </a>
          .
        </p>
      </>
    ),
    links: [
      {
        name: "GitHub",
        link: "https://github.com/DigiPie/BrainTrain",
      },
      {
        name: "Project documentation",
        link: "https://digipie.github.io/BrainTrain/index.html",
      },
      {
        name: "Project portfolio page",
        link: "https://digipie.github.io/BrainTrain/team/digipie.html",
      },
    ],
  },
  {
    category: "Game",
    title: "Glory: Tales of Yi-Shun",
    slug: "#glory",
    imageUrl: "img/projects/glory.png",
    subtitle: "A 2D hack-n-slash action game.",
    period: "May to September 2018",
    tech: "Unity, C#",
    team: [
      {
        name: "Evan Tay",
        link: "https://github.com/DigiPie/",
      },
      {
        name: "Lim Xuan Hao",
        link: "https://github.com/Lunastryke/",
      },
    ],
    description: (
      <>
        <p>
          In Glory, you play as Yi-Shun, the last remaining swordsman of the
          great city of Sandosa. The undead warlord Ma Ti and his minions are
          advancing on the city and only you can stop them.
        </p>
        <p>
          We worked on this project under National University of Singapore's{" "}
          <a href="http://nusskylab-dev.comp.nus.edu.sg/">
            CP2106: Independent Software Development Project (Orbital){" "}
          </a>
          . This module was conducted during the summer break.
        </p>
        <p>
          We were one of the top 11 out of 211 teams which received an award
          (Honorable Mention), and a Google Chromecast each from Google
          Singapore.
        </p>
      </>
    ),
    links: [
      {
        name: "GitHub",
        link: "https://github.com/DigiPie/Glory",
      },
      {
        name: "Itch.io (Download and Play)",
        link: "https://digipie.itch.io/glory",
      },
    ],
  },
];

export default projects;
