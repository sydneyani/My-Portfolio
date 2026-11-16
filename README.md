# Sydney Ani — Portfolio

Personal site for Sydney Ani, a BI / data warehouse developer and applied AI engineer in Houston. Page copy follows the public profile at [github.com/sydneyani](https://github.com/sydneyani/sydneyani) and the READMEs of the linked repositories.

Live site: [https://sydney-portfolio.onrender.com/](https://sydney-portfolio.onrender.com/)

This is a [Create React App](https://create-react-app.dev/) project. It is a single page with in-page links, so production assets stay at the site root for Render.

## Prerequisites

- Node.js 18 or newer
- npm

## Install

```bash
npm install
```

## Run locally

```bash
npm start
```

The development server opens at [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
```

The static bundle is written to `build/`. That directory is gitignored, along with `node_modules/` and local env files. Do not commit secrets. Render serves this build from the site root.

## Tests

```bash
CI=true npm test -- --watchAll=false
```

## Content

Experience, education, skills, and project links are limited to the public GitHub profile and the public repositories under [github.com/sydneyani](https://github.com/sydneyani). Enterprise systems at NOV/Auredia stay in private company environments. `public/resume.html` is the same published record, for the Resume button.
