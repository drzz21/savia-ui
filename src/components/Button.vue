<script setup lang="ts">
import { cva } from 'class-variance-authority'

const { label, variant = 'primary', disabled = false, type = 'default', size = 'medium' } = defineProps<{
  label: string
  variant?: 'primary' | 'secondary' | 'tertiary'
  type?: 'default' | 'outlined' | 'text'
  disabled?: boolean
  size?: 'small' | 'medium' | 'large'
  test?: string
}>()

const button = cva('font-bold py-2 px-4 rounded transition-colors cursor-pointer', {
  variants: {
    variant: { primary: '', secondary: '', tertiary: '' },
    type:    { default: '', outlined: 'border bg-transparent', text: 'bg-transparent' },
    disabled: { true: 'opacity-50 cursor-not-allowed', false: '' },
    size: { small: 'text-sm py-1 px-2', medium: 'text-base py-2 px-4', large: 'text-lg py-3 px-6' },
  },
  compoundVariants: [
    { variant: 'primary',   type: 'default',  class: 'bg-blue-600  hover:bg-blue-700  active:bg-blue-500  text-white'     },
    { variant: 'secondary', type: 'default',  class: 'bg-green-600  hover:bg-green-700  active:bg-green-500  text-white'     },
    { variant: 'tertiary',  type: 'default',  class: 'bg-purple-600 hover:bg-purple-700 active:bg-purple-500 text-white'     },
    { variant: 'primary',   type: 'outlined', class: 'bg-transparent border-blue-600  text-blue-600'  },
    { variant: 'secondary', type: 'outlined', class: 'bg-transparent border-green-600  text-green-600'  },
    { variant: 'tertiary',  type: 'outlined', class: 'bg-transparent border-purple-600 text-purple-600' },
    { variant: 'primary',   type: 'text',     class: 'text-blue-500 active:text-blue-700'  },
    { variant: 'secondary', type: 'text',     class: 'text-green-500 active:text-green-700'  },
    { variant: 'tertiary',  type: 'text',     class: 'text-purple-500 active:text-purple-700' },
  ],
  defaultVariants: { variant: 'primary', type: 'default', size: 'medium' },
})

</script>

<template>
<button :class="[button({ variant, type, size }), { 'opacity-50 cursor-not-allowed': disabled }]" :disabled="disabled">
		{{ label }}
	</button>
</template>

