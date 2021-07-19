export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,
  // ssr: true,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  // target: 'server',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'ru',
      once: true,
    },
    titleTemplate: (title) => {
      return title
        ? `${title} | Разработка сайтов любой сложности - AXEL_VERSE`
        : 'Разработка сайтов любой сложности - AXEL_VERSE'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { hid: 'description', name: 'description', content: '' },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~assets/scss/theme.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  modern: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
    // '@nuxtjs/moment',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    // '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  // axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  fontawesome: {
    component: 'Fa',
    suffix: true,
    icons: {
      solid: ['faBars', 'faHeart', 'faArrowLeft'],
      brands: ['faJs', 'faPhp', 'faPython'],
    },
  },

  /* moment: {
    defaultLocale: 'ru',
    defaultTimezone: 'Europe/Moscow',
    locales: ['ru'],
  }, */

  render: {
    asyncScripts: true,
  },

  generate: {
    fallback: '404.html',
  },
}
