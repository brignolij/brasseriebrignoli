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
        ['@nuxtjs/google-fonts', {
          families: {
            'Barlow': true,
            download: true,
            inject: true
          }}]
        
    ],
    components: [
      { path: '~/components/sections', prefix: 'Section' },
      '~/components'
    ]
   /* app: {
        baseURL: '/' //'/nuxt-github-pages/' // baseURL: '/<repository>/'
    },*/
    //ssr: false

})
