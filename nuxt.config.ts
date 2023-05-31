// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    modules: [
        //'@nuxtjs/tailwindcss',
        'nuxt-icon',
    ],
    app: {
        baseURL: '/' //'/nuxt-github-pages/' // baseURL: '/<repository>/'
    },
    ssr: false

})
