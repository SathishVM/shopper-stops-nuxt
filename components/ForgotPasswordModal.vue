<script lang="ts" setup>
import { Form as VeeForm } from 'vee-validate'
import { InferType, object as yupObject, string as yupString } from 'yup'

defineProps<{ show: boolean }>()
const emit = defineEmits(['close'])

function closeModal() {
  emit('close')
}

const auth = useStrapiAuth()
const toast = useNuxtApp().$toast

const forgotPasswordSchema = yupObject({
  email: yupString().required().email().label('Email'),
})

type ForgotPasswordData = InferType<typeof forgotPasswordSchema>

const disableSubmitBtn = ref(false)

async function forgotPassword(values: ForgotPasswordData) {
  disableSubmitBtn.value = true

  try {
    await auth.forgotPassword(values)

    toast.success('Reset password link sent to you email')

    disableSubmitBtn.value = false
    closeModal()
  } catch (error) {
    disableSubmitBtn.value = false
  }
}
</script>

<template>
  <ClientOnly>
    <HeadlessTransitionRoot appear :show="show" as="template">
      <HeadlessDialog as="div" @close="closeModal" class="relative z-10">
        <HeadlessTransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </HeadlessTransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div
            class="flex items-center justify-center min-h-full p-4 text-center"
          >
            <HeadlessTransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <HeadlessDialogPanel
                class="w-full max-w-md py-3 overflow-hidden text-left align-middle transition-all transform bg-white rounded-none shadow-xl"
              >
                <h4 class="pb-2 font-medium text-center border-b">
                  Forgot Password?
                </h4>

                <div class="p-4 space-y-4">
                  <p class="text-gray-500 sm:text-center">
                    Please enter your Email Address. You will receive a link to
                    create a new password via Email.
                  </p>

                  <VeeForm
                    class="space-y-4"
                    @submit="values => forgotPassword(values as ForgotPasswordData)"
                    :validation-schema="forgotPasswordSchema"
                  >
                    <SInput
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email Address"
                    />

                    <div class="flex justify-center">
                      <SButton
                        color="dark"
                        type="submit"
                        :disabled="disableSubmitBtn"
                        :loading="disableSubmitBtn"
                      >
                        {{
                          disableSubmitBtn
                            ? 'Sending Reset Link...'
                            : 'Reset Password'
                        }}
                      </SButton>
                    </div>
                  </VeeForm>
                </div>
              </HeadlessDialogPanel>
            </HeadlessTransitionChild>
          </div>
        </div>
      </HeadlessDialog>
    </HeadlessTransitionRoot>
  </ClientOnly>
</template>
