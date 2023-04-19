import type { Strapi4Error } from '@nuxtjs/strapi/dist/runtime/types/v4'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('strapi:error' as any, (e: Strapi4Error) => {
    alert(e.error.message)
  })
})
