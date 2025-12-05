// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },

  modules: [
    '@nuxtjs/tailwindcss'
  ],

  app: {
    baseURL: '/nuxt3-minimal-starter/'
  },

  nitro: {
    output: {
      dir: 'docs',
      publicDir: 'docs'
    }
  }
})
