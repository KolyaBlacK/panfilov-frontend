export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head () {
    return {
      title: this.$t('SEO.mainTitle'),
      htmlAttrs: {
        lang: this.$i18n.locale
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: this.$t('SEO.mainDescription') },
        { hid: 'og-type', property: 'og:type', content: 'website' },
        { hid: 'og-title', property: 'og:title', content: this.$t('SEO.mainTitle') },
        { hid: 'og-description', property: 'og:description', content: this.$t('SEO.mainDescription') },
        { hid: 'og-image', property: 'og:image', content: 'https://pnflv.com/og.jpg' },
        { hid: 'og-image-type', property: 'og:image:type', content: 'image/jpeg' },
        { hid: 'og-image-width', property: 'og:image:width', content: '1280' },
        { hid: 'og-image-height', property: 'og:image:height', content: '720' },
        { hid: 'og-twitter-card', property: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
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
    '@nuxtjs/i18n',
    'nuxt-vue-select',
  ],
  strapi: {
    entities: ['clients', 'works', 'categories', 'publics'],
    url: 'http://localhost:1337'
  },
  i18n: {
    locales: [
      {code: 'ru-RU', iso: 'ru-RU', name: 'RU', file: 'ru.js'},
      {code: 'en', iso: 'en-US', name: 'EN', file: 'en.js'},
    ],
    defaultLocale: 'ru-RU',
    localeDetection: false,
    locale: 'ru-RU',
    langDir: '~/locales/',
    baseUrl: 'http://localhost:3000',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate/dist/rules']
  }
}
