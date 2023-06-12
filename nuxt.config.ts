// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  app: {
    head: {
      title: 'Olala App',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  modules: [
    '@nuxtjs/google-fonts'
  ],
  googleFonts:{
    download: true,
    families: {
      Ubuntu: true
    }
  }
})
