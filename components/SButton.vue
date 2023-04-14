<script lang="ts" setup>
type ButtonColor =
  | 'primary'
  | 'success'
  | 'danger'
  | 'info'
  | 'warning'
  | 'dark'
  | 'white'

type ButtonSize = 'big' | 'medium' | 'small'

type Props = {
  color?: ButtonColor
  size?: ButtonSize
  disabled?: boolean
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  color: 'dark',
  size: 'medium',
  disabled: false,
  loading: false,
})

const btnClasses = computed(() => {
  return [
    'btn',
    props.color && `btn-${props.color}`,
    props.size && `btn-${props.size}`,
    props.disabled && 'btn-disabled',
  ]
})
</script>

<template>
  <button :class="btnClasses" :disabled="disabled">
    <Icon name="spinner" v-if="loading" class="animate-spin" />
    <span>
      <slot />
    </span>
  </button>
</template>

<style lang="postcss" scoped>
.btn {
  @apply inline-flex items-center justify-center space-x-3 font-medium;
}
.btn-big {
  @apply py-4 px-6;
}
.btn-medium {
  @apply py-3 px-5;
}
.btn-small {
  @apply py-2 px-3;
}
.btn-primary,
.btn-success,
.btn-danger,
.btn-info,
.btn-warning,
.btn-dark {
  @apply text-white;
}
.btn-disabled {
  @apply cursor-not-allowed;
}
.btn-primary {
  @apply bg-primary hover:bg-primary--400 focus:bg-primary--400;
}
.btn-secondary {
  @apply bg-secondary hover:bg-secondary--400 focus:bg-secondary--400;
}
.btn-success {
  @apply bg-success hover:bg-success--400 focus:bg-success--400;
}
.btn-info {
  @apply bg-info hover:bg-info--400 focus:bg-info--400;
}
.btn-warning {
  @apply bg-warning hover:bg-warning--400 focus:bg-warning--400;
}
.btn-danger {
  @apply bg-danger hover:bg-danger--400 focus:bg-danger--400;
}
.btn-dark {
  @apply bg-dark hover:bg-gray-800 focus:bg-gray-800;
}
.btn-white {
  @apply bg-white text-dark hover:bg-gray-50 focus:bg-gray-50;
}
</style>
