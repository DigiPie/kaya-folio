module.exports = {
  docs: [
    {
      type: "doc",
      id: "contents",
    },
    {
      type: "category",
      label: "Cloud and Networking",
      items: [
        "docker-cheatsheet",
        "gcp-gke-cheatsheet",
        "mininet-setup",
        "network-model",
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
      label: "Tooling and OS",
      items: [
        {
          Git: ["git-cheatsheet", "git-ignore-file"],
        },
        {
          iTerm2: ["iterm2-zsh-setup", "iterm2-cheatsheet"],
        },
        "os-ubuntu-cheatsheet",
      ],
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
      label: "Reviews and Summaries",
      items: [
        "reading-list",
        {
          "Article Summaries": ["scaling-memcached"],
        },
        {
          "Book Reviews": ["ikigai"],
        },
      ],
    },
  ],
};
