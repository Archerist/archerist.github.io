// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/ui'],

  ssr:true,

  compatibilityDate: '2024-12-20'
})