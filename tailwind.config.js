module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily:{
        barlow: "Barlow",
      },
      colors:{
        greenjeff: '#ABB54A',
        blueczech:'#4375BF',
        redirish: '#D03F2C',
        yellowbeer:"GoldenRod"
      }
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
  ,
}

