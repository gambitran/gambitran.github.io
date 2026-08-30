# tantran.io

Source code for my main website — a React + TypeScript + Material UI landing page (Tan Tran • SRE | DevOps | IT).

Served at the root of this repo on GitHub Pages, deployed automatically via GitHub Actions.

## Local development

Requires Node.js 22+ and Corepack (Yarn 4).

```sh
yarn install   # install dependencies
yarn dev       # start dev server
yarn build     # production build to dist/
yarn preview   # preview the production build
```

## Deployment

Pushing to `main` triggers `.github/workflows/static.yml`, which installs dependencies, runs `yarn build`, and deploys `dist/` to GitHub Pages.
