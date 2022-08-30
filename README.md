# Uncounted Deaths Project

## Code Overview

The website is written in Typescript and based off a CRA template. The central part of the website lives in `pages/MasterPage.tsx`. Pages are located under `/pages`, components under `/components` and assets are located in `/assets` along with an `assets.index.ts` file that exports each asset as a basic central asset manager.

## Requirements

- Node >= 17
- `npm` >= 6
- Wrangler CLI(If you want to work with the KV storage used by the serverless Function

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

# Project Structure Overview

This project has pages, those which have a URL route stored under `src/pages`. Components, of any kind live in `src/pages`. Assets, such as logos and images live in `src/assets`. Content for pages, such as copy, links to articles are (mostly) stored in `src/content/`. Some are embedded directly in pages but an attempt to no do that was made. `src/data` contains data used for charts and related data displays. Styles are stored in `src/styles/` and are mostly 1:1 for each page or component but isn't always the case. 

## Hosting

The website is hosted in Cloudflare pages under Andrew's email. He should have keys(2FA required). It is automatically deployed on pushes to the `main` branch. In addition, preview builds are made for all branches and PRs. 

### Hosting Restrictions

We use Cloudflare Zero Access to control access to the website and preview builds. Currently, anyone in the Github team on UncountedDeaths github organization(The one called "CEID Team") is allowed access to the website and preview builds. In addition, emails can be manually added directly on Cloudflare. You can add people to individual sub-domains, just the TLD or all domains. Check the various access control groups and applications on the Cloudflare Zero Access page. 

### Serverless Functions

The county dashboard `src/components/CountyDashboard.tsx` leverages Cloudflare serverless functions. It's being used an API "light". Simply it returns all the charts for a specific state so that we don't have to load an entire JSON file with this content(making initial website load slow). 

You can find the function in `/functions`. Docs can be found online with Cloudflare. Functions are related but different than Cloudflare workers.

### Domain Names

There are multiple domain names, only one "added" to Cloudflare. The others can be re-directed to the Cloudflare added URL via DNS to avoid paying for multiple. This has not been done yet.

### Image Hosting

Most images(all should be -- but we haven't gotten there) are stored in Cloudflare's image hosting service. This service optimizes images and delivers correctly sized and formatted images for each device. All images should be stored here.


# Graphs and Charts

Most charts were built using Datawrapper.de which generates graphs and provides an embed URL. Those graphs(all the ones of the nation or specific state) are serviced via a dynamic `iframe` that resizes based on the users browser window size. 

The bar graphs are custom and interact with events emitted by the datawrapper.de graphs.

## Graph Generation

Since there are two years of charts, four types of charts and 50 states we could not manually build each graph. Thus, we built base "template" graphs that were then adapted and applied to each individual state. A script was used to generate these graphs and can be found in `datawrapper_utils` directory. Both the templates used(with modifications to support the script), code for generation and JSON files that represent the output are stored in that directory. There is a specific readme for more details.

This script could be modified to update the current graphs instead of generating all new graphs if a style want's to be updated.

## Graph Data

All the datawrapper graphs pull data from [here](https://github.com/UncountedDeaths/UncountedDeathsData) and will update as the data at that repo updates IF the data maintains exactly the same form.

# How to contribute

All work should be done in feature branches in small increments and a pull request(PR) should be opened to `main`. You should allow the status checks to run(code style) and check the preview build of the website to make sure it looks correct. On passing both of these tests, it can be merged into `main` where it will be automatically deployed.

## Next Steps

In geneal, the website is in a good position, there are a few things that should be changed.

1. The LESS files should be re-organized and simplified. Some files are shared across multiple components which is not a great idea. 
2. Some Media or Publication's on each respective pages use thumbnail images that are not stored in the Cloudflare Image CDN. THis should be changed and they should be uploaded to the cloudflare image service.
3. The logo could be further optimized from it's current state.
4. Add the ability to directly link to specific chart combinations.
5. Improve the bar chart interaction. The basic version has been built but optimizations could be done to make it perform better -- especially on mobile devices.
6. Setup a CMS(Content Management System). There is a lot of written content on the website and updating it via the files is not a great way to handle it. In addition, it increases the load on developers which could be better spent on new features. Thus, moving to a CMS would be a good idea and allow better control of written content by another team. 
7. Standardize file naming -- Not all files have the same name format.


## Project Bootstrapping

This projected was created with `create-react-app` with a typescript template. In addition, it uses the `antD` design library with `less` and `css-modules`. This was partially setup using the docs from `ant` and following [this](https://www.aleksandrhovhannisyan.com/blog/dev/how-to-set-up-react-typescript-ant-design-less-css-modules-and-eslint/) tutorial.

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project was based on the CRANE Project Website