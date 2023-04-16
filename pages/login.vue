<script lang="ts" setup>
import { Form as VeeForm } from 'vee-validate'
import { InferType, object as yupObject, string as yupString } from 'yup'

const auth = useStrapiAuth()

const loginSchema = yupObject({
  identifier: yupString().required().email().label('Email'),
  password: yupString().required().min(6).label('Password'),
})

type LoginValues = InferType<typeof loginSchema>

const passwordType = ref('password')
const togglePassword = () => {
  if (passwordType.value === 'password') passwordType.value = 'text'
  else passwordType.value = 'password'
}

const isUserLogging = ref(false)

async function login(values: LoginValues) {
  isUserLogging.value = true

  try {
    await auth.login(values)
    const redirect = useCookie('redirect')

    reloadNuxtApp({ path: redirect.value ? redirect.value : '/' })
  } catch (error) {
    isUserLogging.value = false
    console.log(error)
  }
}

const [showResetPasswordModal, toggleResetPasswordModal] = useToggle(false)

async function resetPassword() {}
</script>

<template>
  <div class="bg-gray-100 md:py-6 sm:py-12">
    <div
      class="p-4 mx-auto space-y-5 bg-white shadow-sm md:w-6/12 sm:w-128 sm:p-5"
    >
      <h2 class="font-medium text-center">Log Into Your Account</h2>

      <VeeForm
        class="space-y-3"
        @submit="(values) => login(values as LoginValues)"
        :validation-schema="loginSchema"
      >
        <SInput
          type="email"
          name="identifier"
          placeholder="Enter Email Address"
        />

        <SInput
          :type="passwordType"
          name="password"
          placeholder="Enter Password"
        />

        <div class="flex items-center space-x-2">
          <input type="checkbox" id="togglePassword" @click="togglePassword" />
          <label for="togglePassword">
            {{ passwordType === 'password' ? 'Show' : 'Hide' }} Password
          </label>
        </div>

        <div class="flex items-center justify-between">
          <NuxtLink class="text-gray-500 hover:text-black" to="/register">
            Create New Account?
          </NuxtLink>
          <button
            type="button"
            class="text-gray-500 cursor-pointer hover:text-black"
            @click="toggleResetPasswordModal()"
          >
            Forgot Password?
          </button>
        </div>

        <SButton
          class="!mt-5 w-full uppercase"
          color="dark"
          type="submit"
          :disabled="isUserLogging"
          :loading="isUserLogging"
        >
          {{ isUserLogging ? 'Logging...' : 'Submit' }}
        </SButton>
      </VeeForm>
    </div>
  </div>
</template>
