import { useToast } from 'vue-toast-notification'

export default defineNuxtPlugin((/* nuxtApp */) => {
  const toast = useToast()

  return {
    provide: {
      toast,
    },
  }
})
