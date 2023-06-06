# {{injected.manifest.projectName}}

{{injected.manifest.description}}

[![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository={{injected.settings.repository.url}}&utm_source=github&utm_medium={{injected.settings.repository.name}}&utm_campaign=devex-cs)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/import?s={{injected.settings.repository.url}}&hasTrialAvailable=1&showOptionalTeamCreation=false&project-name={{injected.settings.repository.name}}&framework=nextjs&totalProjects=1&remainingProjects=1)

(If you click this button, it will create a new repo for you that looks exactly like this one, and sets that repo up immediately for deployment on Netlify)

## Table of Contents:

- [Getting Started](#getting-started)
- [Installation options](#installation-options)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/pages/index.js`. The page auto-updates as you edit the file.

You can start editing the json configuration by modifying `src/pages/injected.json`. The page auto-updates as you edit the file.

### Installation options

**Option one:** One-click deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository={{injected.settings.repository.url}}&utm_source=github&utm_medium={{injected.settings.repository.name}}&utm_campaign=devex-cs)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/import?s={{injected.settings.repository.url}}&hasTrialAvailable=1&showOptionalTeamCreation=false&project-name={{injected.settings.repository.name}}&framework=nextjs&totalProjects=1&remainingProjects=1)

**Option two:** Manual clone

1. Clone this repo: `git clone https://github.com/netlify-templates/next-netlify-starter.git`
2. Navigate to the directory and run `npm install`
3. Run `npm run dev`
4. Make your changes
5. Connect to [Netlify](https://url.netlify.com) manually (the `netlify.toml` file is the one you'll need to make sure stays intact to make sure the export is done and pointed to the right stuff)
