// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/devtools',
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    '@vueuse/nuxt',
    '@nuxtjs/strapi',
    'nuxt-icon',
    '@vee-validate/nuxt',
  ],
  css: ['vue-toast-notification/dist/theme-default.css'],
  googleFonts: {
    families: {
      Jost: true,
    },
    download: true,
  },
  veeValidate: {
    autoImports: true,
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    },
  },
})
