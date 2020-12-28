const math = require("remark-math");
const katex = require("rehype-katex");

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
    to: "projects",
  },
  about: {
    label: "About",
    to: "about",
  },
  resume: {
    label: "Resume",
    href: "https://digipie.github.io/kaya-folio/pdf/resume.pdf",
  },
};

module.exports = {
  title: "Evan Tay",
  tagline:
    "I am a Software Engineer and Cloud Engineer passionate about solving Meaningful Problems.",
  url: "https://digipie.github.io/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.png",
  organizationName: "digipie",
  projectName: "kaya-folio",
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      hideOnScroll: true,
      title: "Evan Tay",
      items: [
        { to: "blog", label: "Blog", position: "left" },
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "projects", label: "Projects", position: "left" },
        { to: "about", label: "About", position: "right" },
        {
          href: "https://digipie.github.io/kaya-folio/pdf/resume.pdf",
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
            internetProfiles.about,
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
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          remarkPlugins: [math],
          rehypePlugins: [katex],
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
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",
      crossorigin: "anonymous",
    },
  ],
};
