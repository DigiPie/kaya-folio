---
title: NodeJS Auto-reload server
---

Published on December 23, 2020

_This document was migrated from [DigiDocs](https://digipie.github.io/digidocs/nodejs/auto-reload/)_

**Problem:** Manually reloading the NodeJS server by hitting `Ctrl + C` and entering `npm start` repeatedly in development is exhausting.

**Solution:** Automatically reload the server each time there is a change!

## Nodemon

:::note Cite

Nodemon is a utility that will monitor for any changes in your source and automatically restart your server.

:::

### How-to-use

```bash
npm i -g nodemon
```

1. Install `nodemon`: `npm i -g nodemon`.
2. Replace `node` with `nodemon` in your command. For example, change `node index.js` to `nodemon index.js`. That's it.

### Add to npm scripts

You can also add it to npm scripts to make life even easier.

```json
{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  }
}
```

After doing so, you can enter `npm run dev` subsequently, which will resolve to `nodemon index.js`.

## Resources

- [Original copy of this document at DigiDocs](https://digipie.github.io/digidocs/nodejs/auto-reload/)
- [Nodemon's landing page](https://nodemon.io/)
