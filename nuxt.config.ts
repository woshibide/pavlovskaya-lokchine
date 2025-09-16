// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
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
    // default options for all fonts to ensure proper loading
    defaults: {
      weights: ['100 900'], // range for variable font
      styles: ['normal'], 
      subsets: ['latin'] // to ensure @ is included
    }
  },
  ssr: true,
  nitro: {
    preset: 'github_pages'
  },
  app: {
    baseURL: '/pavlovskaya-lokchine/'
  }
})