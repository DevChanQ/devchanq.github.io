import mdPlugin, { Mode } from 'vite-plugin-markdown';

export default defineNuxtConfig({
  ssr: true,
  
  head: {
      title: 'DevJeff - make software that works',
      meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
          hid: 'description',
          name: 'description',
          content: 'my website description'
      }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  css: [
      // SCSS file in the project
      '@/assets/styles/common.scss'
  ],

  // vite config
  vite: {
    plugins: [
      mdPlugin({
        mode: [Mode.MARKDOWN]
      })
    ]
  },

  build: {
    extend(config) {
      config.resolve.extensions.push(".md");
      config.module.rules.push({
        test: /\.md$/i,
        loader: "raw-loader",
      });
    }
  }
});