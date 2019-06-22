module.exports = {
    title: 'Hello VuePress',
    themeConfig: {
      sidebar: [
        '/',
        '/docs/',
      ]
    },
     plugins: ['@vuepress/pwa'],
    postcss: {
        plugins: [
            require("tailwindcss")("./tailwind.config.js"),
            require("autoprefixer")
          ]
    }
  }