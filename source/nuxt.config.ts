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
        // baseURL: '/nuxt-github-pages/' // baseURL: '/<repository>/'
    },
    generate: {
        nojekyll: true, //not working on this version    
        fallback: '404.html',
    },
    ssr: false, //When false  
    target: "static", // and static, nuxt generates a SPA

})
