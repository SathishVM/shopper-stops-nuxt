<script lang="ts" setup>
import { InputHTMLAttributes } from 'vue'

type InputSize = 'big' | 'medium' | 'small'

interface Props extends InputHTMLAttributes {
  name: string
  size?: InputSize
}

const props = withDefaults(defineProps<Props>(), {
  size: 'medium',
  type: 'text',
})

const { value, errorMessage } = useField(props.name)

const inputClasses = computed(() => [
  props.size === 'big' && 'py-4 px-6',
  props.size === 'medium' && 'py-3 px-5',
  props.size === 'small' && 'py-2 px-3',
])

const inputErrorClasses = computed(() => [
  errorMessage.value && '!border-danger transition-colors duration-1000',
])
</script>

<template>
  <input
    class="w-full"
    :class="[...inputClasses, ...inputErrorClasses]"
    :type="type"
    :placeholder="placeholder"
    v-model="value"
    v-bind="$attrs"
  />
  <span
    class="inline-block mt-1 mb-2 text-danger"
    :class="{ 'transition-opacity duration-1000': errorMessage }"
    v-show="errorMessage"
  >
    {{ errorMessage }}
  </span>
</template>
