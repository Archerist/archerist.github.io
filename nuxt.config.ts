// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/ui'],

  ssr:true,
  content:{
    navigation:{
      fields: ["category", "date", "brief"]
    }
  },

  compatibilityDate: '2024-12-20'
})