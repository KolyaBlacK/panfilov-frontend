export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'panfilov-frontend',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  pageTransition: 'fade',
  layoutTransition: 'fade',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/intersect-directive', mode: 'client' },
    { src: '~/plugins/vue-lazy-load.js', mode: 'client' },
    { src: '~plugins/vue-js-modal.js', mode: 'client' },
    { src: '~plugins/vee-validate.js', mode: 'client' },
    { src: '~plugins/helper.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/strapi',
    'nuxt-vue-select'
  ],
  strapi: {
    entities: ['clients', 'works', 'categories'],
    url: 'http://localhost:4000'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate/dist/rules']
  }
}
