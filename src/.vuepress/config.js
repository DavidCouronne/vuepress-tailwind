

module.exports = {
    title: 'Hello VuePress',
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/content/' },
        { text: 'External', link: 'https://google.com' },
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


