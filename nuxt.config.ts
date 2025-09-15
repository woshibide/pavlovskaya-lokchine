// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    baseURL: '/pavlovskaya/'
  },
  nitro: {
    preset: 'github-pages'
  },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image'
  ],
  fonts: {
    adobe: {
      id: ['ucs2fqt']
    },
  }
})