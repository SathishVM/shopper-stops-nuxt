// app.config.ts
export default defineAppConfig({
  nuxtIcon: {
    size: '24px', // default <Icon> size applied
    class: 'font-normal h-4 w-4',
    aliases: {
      nuxt: 'logos:nuxt-icon',
      github: 'feather:github',
      spinner: 'feather:rotate-cw',
    },
  },
})
