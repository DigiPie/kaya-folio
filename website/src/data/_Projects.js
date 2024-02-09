import React from "react";

const projects = [
  {
    category: "Project",
    title: "nodejs-mysql-cloudformation",
    slug: "#nodejs-mysql-cloudformation",
    subtitle:
      "An example for deploying a NodeJS app to Beanstalk using AWS CloudFormation.",
    period: "November 2020",
    tech: "AWS CloudFormation",
    description: (
      <>
        <p>
          An example of how you can perform Infrastructure-As-Code (IaC) using
          AWS CloudFormation and Continuous-Integration/Continuous-Deployment
          (CI/CD) using AWS CodePipeline.
        </p>
        <p>
          This example deploys the NodeJS-ExpressJS-MySQL
          Create-Read-Update-Delete (CRUD) application at{" "}
          <a href="https://github.com/DigiPie/nodejs-mysql-aws-beanstalk">
            DigiPie/nodejs-mysql-aws-beanstalk
          </a>
          , by using the CloudFormation IaC templates in this repository and
          setting up a simple AWS CodePipeline.
        </p>
        <p>
          I worked on this project to learn more about the{" "}
          <a href="https://www.hashicorp.com/resources/getting-started-with-infrastructure-as-code-iac">
            Infrastructure-as-Code
          </a>{" "}
          concept and{" "}
          <a href="https://aws.amazon.com/cloudformation/">
            AWS CloudFormation
          </a>
          .
        </p>
      </>
    ),
    links: [
      {
        name: "GitHub repository",
        link: "https://github.com/DigiPie/nodejs-mysql-cloudformation",
      },
    ],
  },
  {
    category: "Website",
    title: "KayaFolio",
    slug: "#kaya-folio",
    imageUrl: "img/projects/kayafolio.png",
    subtitle:
      "A software engineer portfolio template built with Docusaurus 3.0 and ReactJS.",
    period: "October 2020 to Present",
    tech: "Docusaurus 3.0, ReactJS",
    description: (
      <>
        <p>
          I first started this portfolio template project back in October 2020.
          The template has gone through numerous iterations ever since, and is
          still updated presently.
        </p>
        <p>
          I built it using{" "}
          <a href="https://docusaurus.io/" target="_blank">
            Docusaurus 3.0
          </a>{" "}
          and{" "}
          <a href="https://reactjs.org/" target="_blank">
            ReactJS
          </a>
          .
        </p>
        <p>
          <a href="https://github.com/DigiPie/kaya-folio/workflows/deploy-docusaurus/badge.svg">
            <img src="https://github.com/DigiPie/kaya-folio/workflows/deploy-docusaurus/badge.svg" />
          </a>{" "}
          <a href="https://camo.githubusercontent.com/399d62140ec640c832d3c3390f39e2df16086f415f7a6723bd803baca2062627/68747470733a2f2f696d672e736869656c64732e696f2f776562736974653f75726c3d68747470732533412532462532466576616e7461792e636f6d">
            <img src="https://camo.githubusercontent.com/399d62140ec640c832d3c3390f39e2df16086f415f7a6723bd803baca2062627/68747470733a2f2f696d672e736869656c64732e696f2f776562736974653f75726c3d68747470732533412532462532466576616e7461792e636f6d" />
          </a>
        </p>
        <p>
          I wrote this template for my own use but you are free to use it as
          long as you credit me. Check out the{" "}
          <a href="https://github.com/DigiPie/kaya-folio">GitHub repository</a>{" "}
          for how to do so.
        </p>
      </>
    ),
    links: [
      {
        name: "GitHub repository",
        link: "https://github.com/DigiPie/kaya-folio",
      },
      {
        name: "Website",
        link: "https://evantay.com/",
      },
      {
        name: "Blog post: History of EvanTay.com",
        link: "http://evantay.com/blog/history",
      },
    ],
  },
  {
    category: "Project",
    title: "mocha-chai-mongoose",
    slug: "#mocha-chai-mongoose",
    imageUrl: "img/projects/mochai.png",
    subtitle: "An example for testing a NodeJS-MongoDB app with Mocha-Chai.",
    period: "April 2020",
    tech: "Mocha, Chai, NodeJS, ExpressJS, MongoDB",
    description: (
      <>
        <p>
          An up-to-date 2020 example of how you can use Mocha and Chai to
          perform API testing for a Node-ExpressJS-Mongoose app. You will be
          able to test your code locally and also automatically using Github
          Action.
        </p>
        <p>
          <a
            href="https://github.com/DigiPie/mocha-chai-mongoose/workflows/Node.js%20CI/badge.svg"
            title="Node.js CI"
          >
            <img src="https://github.com/DigiPie/mocha-chai-mongoose/workflows/Node.js%20CI/badge.svg" />
          </a>
        </p>
        <p>
          I worked on this project to learn more about API testing using{" "}
          <a href="https://mochajs.org/">Mocha</a> and{" "}
          <a href="https://www.chaijs.com/">Chai</a>, and also to practice
          setting up a NodeJS-ExpressJS-Mongoose backend application.
        </p>
      </>
    ),
    links: [
      {
        name: "GitHub repository",
        link: "https://github.com/DigiPie/mocha-chai-mongoose",
      },
    ],
  },
  {
    category: "Open Source Tool",
    title: "Mongo-Action",
    slug: "#mongo-action",
    imageUrl: "img/projects/mongo-action.png",
    subtitle: "A  Github action which creates a mongo Docker container.",
    period: "March 2020",
    tech: "GitHub Action, NodeJS, Docker",
    description: (
      <>
        <p>
          mongo-action is a Github Action which creates a mongo Docker container
          using the official{" "}
          <a href="https://hub.docker.com/_/mongo">Dockerhub image</a>. The
          MongoDB instance's port will be exposed to other containers and also
          to the host running the Github Workflow.
        </p>
        <p>
          <a
            href="https://github.com/DigiPie/mongo-action/workflows/mongo-action%20CI/badge.svg"
            title="mongo-action CI"
          >
            <img src="https://github.com/DigiPie/mongo-action/workflows/mongo-action%20CI/badge.svg" />
          </a>
        </p>
        <p>
          I created this Github Action to learn more about Continuous
          Integration tooling, and to simplify automated testing for my own{" "}
          <a href="https://github.com/DigiPie/mocha-chai-mongoose">
            Node-ExpressJS-Mongoose
          </a>{" "}
          project.
        </p>
        <p>
          By using this Github Action, there is no longer a need to provision a
          test database on MongoDB Atlas or elsewhere. Furthermore, each test
          will run on a fresh, isolated copy of a MongoDB instance.
        </p>
        <p>
          I submitted this to the{" "}
          <a href="https://githubhackathon.com/">
            Github Hackathon for Github Actions
          </a>
          .
        </p>
      </>
    ),
    links: [
      {
        name: "GitHub repository",
        link: "https://github.com/DigiPie/mongo-action",
      },
      {
        name: "GitHub Marketplace",
        link: "https://github.com/marketplace/actions/mongo-action",
      },
    ],
  },
  {
    category: "Website",
    title: "Google Developer Student Club NUS",
    slug: "#dsc-nus",
    imageUrl: "img/projects/dscnustech.png",
    subtitle:
      "DSC NUS tech team's website for workshop registration and materials.",
    period: "January to March 2020",
    tech: "Jekyll, Bootstrap, Github pages",
    team: [
      {
        name: "Andre Wong",
        link: "https://github.com/AndreWongZH/",
      },
      {
        name: "Evan Tay",
        link: "https://github.com/DigiPie/",
      },
      {
        name: "Melodies Sim",
        link: "https://github.com/Happytreat/",
      },
    ],
    description: (
      <>
        <p>
          Developer Student Club, National University of Singapore is made up of
          people from diverse backgrounds, majors, years of study, genders and
          races. We come together to push our mission of #techforgood.
        </p>
        <p>
          The Technology team is responsible for the execution of DSC-NUS
          workshops and thematic tech events. I co-lead the team as the Deputy
          Head of Technology.
        </p>
        <p>
          We created this website to act as a one-stop portal for NUS students
          to find out more about our workshops, register for them, and access
          past workshop materials.
        </p>
      </>
    ),
    links: [
      {
        name: "GitHub repository",
        link: "https://github.com/dscnustech/dscnustech.github.io",
      },
      {
        name: "Website",
        link: "https://dscnustech.github.io/",
      },
    ],
  },
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
          <a href="https://github.com/DigiPie/psql-heroku-buildpack">
            psql-heroku-buildpack
          </a>
          . I wrote this build pack to automate the execution of a PostgreSQL
          setup script file on deployment to Heroku.
        </p>
      </>
    ),
    links: [
      {
        name: "GitHub repository",
        link: "https://github.com/DigiPie/DigiCourse",
      },
    ],
  },
  {
    category: "Project",
    title: "Dynalite",
    slug: "#dynalite",
    imageUrl: "img/projects/dynalite.png",
    subtitle:
      "A full-stack Internet-of-Things occupancy visualisation application.",
    period: "September to November 2019",
    tech: "Raspberry-Pi, Python, COAP, NodeJS, ExpressJS, PostgreSQL, ReactJS, Docker",
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
          The backend server also provides a HTTP REST API which is used by a
          frontend React web server in the third Docker container.
        </p>
      </>
    ),
    links: [
      {
        name: "GitHub repository",
        link: "https://github.com/DigiPie/dynalite",
      },
      {
        name: "Presentation Slides (PDF)",
        link: "https://evantay.com/pdf/dynalite.pdf",
      },
    ],
  },
  {
    category: "Open Source Tool",
    title: "psql-heroku-buildpack",
    slug: "#psql-heroku-buildpack",
    subtitle:
      "A Heroku buildpack which executes a PostgreSQL script file on deployment.",
    period: "September 2019",
    tech: "Herokuapp, PostgreSQL",
    description: (
      <>
        <p>
          psql-heroku-buildpack is a buildpack which executes a PostgreSQL
          script file on deployment to Heroku.
        </p>
        <p>
          I developed this buildpack while working on DigiCourse, a full-stack
          application built on PostgreSQL. I wrote this build pack to automate
          the execution of a PostgreSQL setup script file in the Git repo on
          deployment to Heroku from Github.
        </p>
      </>
    ),
    links: [
      {
        name: "GitHub repository",
        link: "https://github.com/DigiPie/psql-heroku-buildpack",
      },
    ],
    bgColor: "alternate",
  },
  {
    category: "Project",
    title: "BrainTrain",
    slug: "#braintrain",
    imageUrl: "img/projects/braintrain.png",
    subtitle:
      "A spaced-repetition flashcard desktop application built in Java and JUnit5.",
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
        name: "GitHub repository",
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
    subtitle:
      "A 2D hack-and-slash action survival game built using Unity and C#.",
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
        name: "GitHub repository",
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
