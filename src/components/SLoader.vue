<script setup lang="ts">
import { cva } from 'class-variance-authority';

const {
	size = 'medium',
	variant = 'primary',
	label,
} = defineProps<{
	size?: 'small' | 'medium' | 'large';
	variant?: 'primary' | 'secondary' | 'mist';
	/** Optional label displayed below the spinner */
	label?: string;
}>();

const sizeMap: Record<string, string> = {
	small: 'size-4',
	medium: 'size-6',
	large: 'size-10',
};

const colorMap: Record<string, string> = {
	primary: 'text-rain-mint',
	secondary: 'text-rain-blue',
	mist: 'text-mist',
};

const labelSizeMap: Record<string, string> = {
	small: 'text-[10px]',
	medium: 'text-xs',
	large: 'text-sm',
};
</script>

<template>
	<div class="inline-flex flex-col items-center gap-2" role="status" aria-live="polite">
		<svg
			:class="['animate-spin', sizeMap[size], colorMap[variant]]"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			aria-hidden="true"
		>
			<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
			<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
		</svg>
		<span v-if="label" :class="['text-leaf-muted', labelSizeMap[size]]">{{ label }}</span>
	</div>
</template>
