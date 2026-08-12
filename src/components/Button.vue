<script setup lang="ts">
import { cva } from 'class-variance-authority';

const {
	label,
	variant = 'primary',
	disabled = false,
	loading = false,
	type = 'default',
	size = 'medium',
	fullWidth = false,
	iconLeft,
	iconRight,
} = defineProps<{
	label?: string;
	variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'ghost';
	type?: 'default' | 'outlined' | 'text';
	disabled?: boolean;
	loading?: boolean;
	size?: 'small' | 'medium' | 'large';
	fullWidth?: boolean;
	/** Nombre del símbolo SVG del sprite público (icons.svg) */
	iconLeft?: string;
	iconRight?: string;
}>();

const emit = defineEmits<{
	click: [event: MouseEvent];
}>();

function handleClick(event: MouseEvent) {
	if (disabled || loading) return;
	emit('click', event);
}

const button = cva(
	'inline-flex items-center justify-center gap-2 font-bold rounded transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2',
	{
		variants: {
			variant: {
				primary: '',
				secondary: '',
				tertiary: '',
				danger: '',
				ghost: '',
			},
			type: {
				default: '',
				outlined: 'border bg-transparent',
				text: 'bg-transparent',
			},
			size: {
				small:  'text-sm py-1 px-2 [&_svg]:size-4',
				medium: 'text-base py-2 px-4 [&_svg]:size-5',
				large:  'text-lg py-3 px-6 [&_svg]:size-6',
			},
			fullWidth: {
				true: 'w-full',
				false: '',
			},
		},
		compoundVariants: [
			// ── primary ──────────────────────────────────────────────────
			{ variant: 'primary',   type: 'default',  class: 'bg-blue-600   hover:bg-blue-700   active:bg-blue-500   text-white focus-visible:outline-blue-600' },
			{ variant: 'primary',   type: 'outlined', class: 'border-blue-600   text-blue-600   hover:bg-blue-50   active:bg-blue-100' },
			{ variant: 'primary',   type: 'text',     class: 'text-blue-600   hover:bg-blue-50   active:bg-blue-100' },
			// ── secondary ────────────────────────────────────────────────
			{ variant: 'secondary', type: 'default',  class: 'bg-green-600  hover:bg-green-700  active:bg-green-500  text-white focus-visible:outline-green-600' },
			{ variant: 'secondary', type: 'outlined', class: 'border-green-600  text-green-600  hover:bg-green-50  active:bg-green-100' },
			{ variant: 'secondary', type: 'text',     class: 'text-green-600  hover:bg-green-50  active:bg-green-100' },
			// ── tertiary ─────────────────────────────────────────────────
			{ variant: 'tertiary',  type: 'default',  class: 'bg-purple-600 hover:bg-purple-700 active:bg-purple-500 text-white focus-visible:outline-purple-600' },
			{ variant: 'tertiary',  type: 'outlined', class: 'border-purple-600 text-purple-600 hover:bg-purple-50 active:bg-purple-100' },
			{ variant: 'tertiary',  type: 'text',     class: 'text-purple-600 hover:bg-purple-50 active:bg-purple-100' },
			// ── danger ───────────────────────────────────────────────────
			{ variant: 'danger',    type: 'default',  class: 'bg-red-600    hover:bg-red-700    active:bg-red-500    text-white focus-visible:outline-red-600' },
			{ variant: 'danger',    type: 'outlined', class: 'border-red-600    text-red-600    hover:bg-red-50    active:bg-red-100' },
			{ variant: 'danger',    type: 'text',     class: 'text-red-600    hover:bg-red-50    active:bg-red-100' },
			// ── ghost ────────────────────────────────────────────────────
			{ variant: 'ghost',     type: 'default',  class: 'bg-transparent text-gray-700 hover:bg-gray-100 active:bg-gray-200 focus-visible:outline-gray-400' },
			{ variant: 'ghost',     type: 'outlined', class: 'border-gray-400  text-gray-700 hover:bg-gray-100 active:bg-gray-200' },
			{ variant: 'ghost',     type: 'text',     class: 'text-gray-600   hover:bg-gray-100 active:bg-gray-200' },
		],
		defaultVariants: {
			variant: 'primary',
			type: 'default',
			size: 'medium',
			fullWidth: false,
		},
	},
);
</script>

<template>
	<button
		:class="[
			button({ variant, type, size, fullWidth }),
			{ 'opacity-50 cursor-not-allowed': disabled || loading },
		]"
		:disabled="disabled || loading"
		:aria-busy="loading || undefined"
		@click="handleClick"
	>
		<!-- Spinner de carga -->
		<svg
			v-if="loading"
			class="animate-spin"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			aria-hidden="true"
		>
			<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
			<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
		</svg>

		<!-- Icono izquierdo (sprite SVG) -->
		<svg v-else-if="iconLeft" aria-hidden="true">
			<use :href="`/icons.svg#${iconLeft}`" />
		</svg>

		<!-- Label o slot personalizado -->
		<slot>{{ label }}</slot>

		<!-- Icono derecho (sprite SVG) -->
		<svg v-if="!loading && iconRight" aria-hidden="true">
			<use :href="`/icons.svg#${iconRight}`" />
		</svg>
	</button>
</template>
