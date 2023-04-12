// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/devtools',
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    '@vueuse/nuxt',
    '@nuxtjs/strapi',
  ],
  googleFonts: {
    families: {
      Jost: true,
    },
  },
})
