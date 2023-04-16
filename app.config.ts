// app.config.ts
export default defineAppConfig({
  nuxtIcon: {
    size: '16px', // default <Icon> size applied
    class: 'font-normal h-4 w-4',
    aliases: {
      nuxt: 'logos:nuxt-icon',
      github: 'feather:github',
      spinner: 'feather:rotate-cw',
      hamburger: 'system-uicons:menu-hamburger',
      'arrow-down': 'feather:chevron-down',
      user: 'feather:user',
      heart: 'feather:heart',
      cart: 'feather:shopping-cart',
      login: 'feather:log-in',
      logout: 'feather:log-out',
      register: 'feather:user-plus',
    },
  },
})
