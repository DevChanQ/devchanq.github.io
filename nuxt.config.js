export default {
  target: 'static',
  
  head: {
      title: 'DevJeff - Programmer who strives for the best',
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

  components: true,

  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  plugins: [
    '~/plugins/agent.js',
    '~/plugins/scrype.client.js',
    '~/plugins/components.client.js',
    '~/plugins/ga.client.js',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },
}