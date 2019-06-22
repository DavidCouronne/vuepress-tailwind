module.exports = {
    title: 'Hello VuePress',
    themeConfig: {
      sidebar: [
        '/',
        '/docs/',
      ]
    },
    postcss: {
        plugins: [
            require("tailwindcss")("./tailwind.config.js"),
            require("autoprefixer")
          ]
    }
  }