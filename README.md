# Uncounted Deaths Project

## Code Overview

The website is written in Typescript and based off a CRA template. The central part of the website lives in `pages/MasterPage.tsx`. Pages are located under `/pages`, components under `/components` and assets are located in `/assets` along with an `assets.index.ts` file that exports each asset as a basic central asset manager.

## Requirements

- Node >= 10
- `npm` >= 6
- Wrangler CLI(If you want to deploy to CloudFlare

## Quick Setup

1. `npm install`
2. `npm start`
3. Code!

### Main Libraries & Frameworks

The project was bootstrapped with CRA and uses Ant Design as a basic styling framework -- although many styles are overridden.

Styling is provided via `less` modules and type checked if you have VS Code.

### Deployment

Deployment happens automatically via Github Actions when a push to `react_transfer` occurs. Changes are compiled then pushed to the hosting provider. We're currently using Cloudflare Pages for hosting.

#### Staging Deployment

If you open a PR to `react_transfer` a bot will comment within about 15min to provide a link to a staging preview of the website.

### VSCode Configurations Eslint + Prettier

The `.vscode/` is currently gitignored so that there will be no conflict between each other's workspace; however, if you want for VSCode to automatically lint the file you save, add the following inside your workspace json (`.vscode/settings.json`):

```
{
  "typescript.preferences.importModuleSpecifier": "relative",
  "typescript.tsdk": "node_module\\typescript\\lib",
  "editor.codeActionsOnSave": ["source.fixAll.eslint"],
  "eslint.format.enable": true,
  "editor.tabSize": 2,
}
```

## Project Bootstrapping

This projected was created with `create-react-app` with a typescript template. In addition, it uses the `antD` design library with `less` and `css-modules`. This was partially setup using the docs from `ant` and following [this](https://www.aleksandrhovhannisyan.com/blog/dev/how-to-set-up-react-typescript-ant-design-less-css-modules-and-eslint/) tutorial.

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
