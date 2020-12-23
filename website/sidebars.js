module.exports = {
  docs: [
    {
      type: "doc",
      id: "digidocs",
    },
    {
      type: "category",
      label: "Networking",
      items: [
        {
          Mininet: ["mininet-setup"],
        },
        "network-model",
      ],
    },
    {
      type: "category",
      label: "Web Dev",
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
      type: "doc",
      id: "reading-list",
    },
  ],
};
