module.exports = {
  docs: [
    {
      type: "doc",
      id: "digidocs",
    },
    {
      type: "category",
      label: "Cloud",
      items: ["docker-cheatsheet", "gcp-gke-cheatsheet"],
    },
    {
      type: "category",
      label: "Networking",
      items: ["mininet-setup", "network-model"],
    },
    {
      type: "category",
      label: "Web Development",
      items: [
        {
          MongoDB: ["mongodb-setup", "mongodb-cheatsheet"],
          NodeJS: ["nodejs-auto-reload", "nodejs-set-npm-run-shell"],
        },
      ],
    },
    {
      type: "category",
      label: "Programming",
      items: [
        {
          type: "doc",
          id: "c-cheatsheet",
        },
      ],
    },
    {
      type: "category",
      label: "Tools and OS",
      items: [
        {
          Git: ["git-cheatsheet", "git-ignore-file"],
        },
        "os-ubuntu-cheatsheet",
      ],
    },
    {
      type: "category",
      label: "MacOS Tooling",
      items: ["iterm-cheatsheet"],
    },
    {
      type: "doc",
      id: "reading-list",
    },
  ],
};
