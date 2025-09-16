// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxtjs/seo'
  ],
  site: {
    url: 'https://woshibide.github.io'
  },
  robots: {
    robotsTxt: false
  },
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
  content:{
    build: {
      markdown: {
        toc:{
          depth: 3,       // search upto h4 tags
          searchDepth: 2  // index posts
        }
      }
    }
  },
  ssr: true,
  nitro: {
    preset: 'github_pages'
  },
  app: {
    baseURL: '/pavlovskaya-lokchine/',
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    },
    head: {
      title: 'A.P–L',
      titleTemplate: '%s',
      meta: [
        { name: 'description', content: 'Emerging multidisciplinary artist focusing on moving image, sculpture, painting, and installation.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})