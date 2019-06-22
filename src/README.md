---
home: true
heroText: Vuepress Tailwind Starter
tagline: Simple starter with Tailwind CSS
actionText: Get Started →
actionLink: /docs/
features:
- title: Simplicity First
  details: Minimal setup with markdown-centered project structure helps you focus on writing.
- title: Vue-Powered
  details: Enjoy the dev experience of Vue + webpack, use Vue components in markdown, and develop custom themes with Vue.
- title: Performant
  details: VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.
footer: MIT Licensed | Copyright © 2019-present Evan You
---
[test](www.google.fr)

Hello Vuepres

```bash
# install globally
yarn global add vuepress@next # OR npm install -g vuepress@next

# create a markdown file
echo '# Hello VuePress' > README.md

# start writing
vuepress dev

# build
vuepress build
```

```bash
# Require Tailwind as a dev dependency
yarn add tailwindcss -D

# Write the initial config file
./node_modules/.bin/tailwind init tailwind.config.js
```

```bash
# .vuepress/styles/palette.styl
@tailwind base;

@tailwind components;

@tailwind utilities;
```

```bash
# Build for production
vuepress build
# Install browser-sync globally to view a local server
yarn global add browser-sync
# Start a server from the '.vuepress/dist' directory
browser-sync start --server '.vuepress/dist' --files='**/*'
```
