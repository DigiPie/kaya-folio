const internetProfiles = {
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/evanitsg/",
  },
  github: {
    label: "GitHub",
    href: "https://github.com/digipie",
  },
  email: {
    label: "Email",
    href: "mailto:evan.it.sg@gmail.com",
  },
  blog: {
    label: "Blog",
    to: "blog",
  },
  docs: {
    label: "Docs",
    to: "docs",
  },
  projects: {
    label: "Projects",
    to: "projects/",
  },
  resume: {
    label: "Resume",
    href: "https://github.com/DigiPie/Deedy-Resume/raw/master/resume.pdf",
  },
};

module.exports = {
  title: "Evan Tay",
  tagline:
    "A Software Engineer and Cloud Engineer passionate about solving Meaningful Problems.",
  url: "https://www.evantay.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.png",
  organizationName: "digipie", // Usually your GitHub org/user name.
  projectName: "kaya-folio", // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "Evan Tay",
      items: [
        { to: "blog", label: "Blog", position: "left" },
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          to: "projects/",
          activeBasePath: "projects",
          label: "Projects",
          position: "left",
        },
        {
          href: internetProfiles.resume.href,
          label: "Resume",
          position: "right",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Connect",
          items: [
            internetProfiles.linkedin,
            internetProfiles.github,
            internetProfiles.email,
          ],
        },
        {
          title: "Discover",
          items: [
            internetProfiles.blog,
            internetProfiles.docs,
            internetProfiles.projects,
            internetProfiles.resume,
          ],
        },
      ],
      copyright: `Last updated on ${new Date().toDateString()}`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/DigiPie/kaya-folio/tree/main/website",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/DigiPie/kaya-folio/tree/main/website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
