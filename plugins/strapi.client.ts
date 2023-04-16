import type { Strapi4Error } from '@nuxtjs/strapi/dist/runtime/types/v4'
import { useToast } from 'vue-toast-notification'

export default defineNuxtPlugin((nuxtApp) => {
  const toast = useToast()

  nuxtApp.hook('strapi:error' as any, (e: Strapi4Error) => {
    toast.error(e.error.message, {
      position: 'top',
    })
  })
})
