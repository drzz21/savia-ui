<script setup lang="ts">
import { ref } from 'vue';

const { label, variant = 'primary', disabled = false } = defineProps<{
  label: string
  variant?: 'primary' | 'secondary'
  disabled?: boolean
}>()

</script>

<template>
	<button
		class="bg-blue-500 active:bg-blue-200 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
		:class="{
			'bg-blue-600 active:bg-blue-500 hover:bg-blue-700': variant === 'primary',
			'bg-gray-600 active:bg-gray-500 hover:bg-gray-700': variant === 'secondary',
			'opacity-50 cursor-not-allowed': disabled
		}"
		:disabled="disabled"
	>
		{{ label }}
	</button>
</template>

