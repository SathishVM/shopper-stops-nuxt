<script lang="ts" setup>
import {
  InferType,
  object as yupObject,
  string as yupString,
  ref as yupRef,
} from 'yup'

const auth = useStrapiAuth()

const registerSchema = yupObject({
  username: yupString().trim().required().min(3).label('Username'),
  email: yupString().trim().required().email().label('Email'),
  password: yupString().trim().required().min(6).label('Password'),
  confirmPassword: yupString()
    .oneOf([yupRef('password')], "Confirm password doesn't match the password")
    .required()
    .label('Confirm Password'),
})

type RegisterValues = InferType<typeof registerSchema>

const creatingNewUser = ref(false)

async function register(values: RegisterValues) {
  creatingNewUser.value = true

  try {
    await auth.register(values)

    const redirect = useCookie('redirect')
    reloadNuxtApp({ path: redirect.value ? redirect.value : '/' })
  } catch (error) {
    creatingNewUser.value = false
    // console.log(error)
  }
}
</script>

<template>
  <div class="bg-gray-100 md:py-6 sm:py-12">
    <div
      class="p-4 mx-auto space-y-5 bg-white shadow-sm md:w-6/12 sm:w-128 sm:p-5"
    >
      <h2 class="font-medium text-center">Create your account</h2>

      <VeeForm
        class="space-y-3"
        @submit="(values) => register(values as RegisterValues)"
        :validation-schema="registerSchema"
      >
        <SInput type="text" name="username" placeholder="Enter Username" />

        <SInput type="email" name="email" placeholder="Enter Email Address" />

        <SInput type="password" name="password" placeholder="Enter Password" />

        <SInput
          type="password"
          name="confirmPassword"
          placeholder="Enter Confirm Password"
        />

        <div>
          <NuxtLink to="/login" class="text-gray-500 hover:text-black"
            >Already have an account? Login here.</NuxtLink
          >
        </div>
        <SButton
          class="w-full"
          :disabled="creatingNewUser"
          :loading="creatingNewUser"
        >
          {{ creatingNewUser ? 'Creating new account' : 'Submit' }}
        </SButton>
      </VeeForm>
    </div>
  </div>
</template>
