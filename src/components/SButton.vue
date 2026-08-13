<script setup lang="ts">
import { cva } from 'class-variance-authority';
import { computed } from 'vue';

const {
	label,
	variant = 'primary',
	disabled = false,
	loading = false,
	type = 'default',
	size = 'medium',
	fullWidth = false,
	shadow = false,
	iconLeft,
	iconRight,
} = defineProps<{
	label: string;
	variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'ghost';
	type?: 'default' | 'outlined' | 'text';
	disabled?: boolean;
	loading?: boolean;
	size?: 'small' | 'medium' | 'large';
	fullWidth?: boolean;
	/** Agrega una sombra coloreada debajo del botón, usando el color de la variante */
	shadow?: boolean;
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
	'inline-flex items-center justify-center gap-2 font-bold font-body rounded-[var(--radius-field)] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2',
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
				small:  'text-sm py-1.5 px-3 [&_svg]:size-4',
				medium: 'text-base py-2.5 px-5 [&_svg]:size-5',
				large:  'text-lg py-3.5 px-7 [&_svg]:size-6',
			},
			fullWidth: {
				true: 'w-full',
				false: '',
			},
		},
		compoundVariants: [
			// ── primary (rain-mint bg, garden-deep text) ─────────────────
			{ variant: 'primary',   type: 'default',  class: 'bg-rain-mint text-garden-deep hover:brightness-110 active:translate-y-0.5 active:brightness-95 focus-visible:outline-rain-mint' },
			{ variant: 'primary',   type: 'outlined', class: 'border-rain-mint text-rain-mint hover:bg-rain-mint/10 active:bg-rain-mint/20' },
			{ variant: 'primary',   type: 'text',     class: 'text-rain-mint hover:bg-rain-mint/10 active:bg-rain-mint/20' },
			// ── secondary (rain-blue bg, garden-deep text) ───────────────
			{ variant: 'secondary', type: 'default',  class: 'bg-rain-blue text-garden-deep hover:brightness-110 active:translate-y-0.5 active:brightness-95 focus-visible:outline-rain-blue' },
			{ variant: 'secondary', type: 'outlined', class: 'border-rain-blue text-rain-blue hover:bg-rain-blue/10 active:bg-rain-blue/20' },
			{ variant: 'secondary', type: 'text',     class: 'text-rain-blue hover:bg-rain-blue/10 active:bg-rain-blue/20' },
			// ── tertiary (leaf-muted bg, garden-deep text) ───────────────
			{ variant: 'tertiary',  type: 'default',  class: 'bg-leaf-muted text-garden-deep hover:brightness-110 active:translate-y-0.5 active:brightness-95 focus-visible:outline-leaf-muted' },
			{ variant: 'tertiary',  type: 'outlined', class: 'border-leaf-muted text-leaf-muted hover:bg-leaf-muted/10 active:bg-leaf-muted/20' },
			{ variant: 'tertiary',  type: 'text',     class: 'text-leaf-muted hover:bg-leaf-muted/10 active:bg-leaf-muted/20' },
			// ── danger (bloom-coral bg, garden-deep text) ────────────────
			{ variant: 'danger',    type: 'default',  class: 'bg-bloom-coral text-garden-deep hover:brightness-110 active:translate-y-0.5 active:brightness-95 focus-visible:outline-bloom-coral' },
			{ variant: 'danger',    type: 'outlined', class: 'border-bloom-coral text-bloom-coral hover:bg-bloom-coral/10 active:bg-bloom-coral/20' },
			{ variant: 'danger',    type: 'text',     class: 'text-bloom-coral hover:bg-bloom-coral/10 active:bg-bloom-coral/20' },
			// ── ghost (transparent, mist text on dark surfaces) ──────────
			{ variant: 'ghost',     type: 'default',  class: 'bg-transparent text-mist hover:bg-mist/10 active:bg-mist/15 focus-visible:outline-leaf-muted' },
			{ variant: 'ghost',     type: 'outlined', class: 'border-leaf-muted text-mist hover:bg-mist/10 active:bg-mist/15' },
			{ variant: 'ghost',     type: 'text',     class: 'text-leaf-muted hover:bg-mist/10 active:bg-mist/15' },
		],
		defaultVariants: {
			variant: 'primary',
			type: 'default',
			size: 'medium',
			fullWidth: false,
		},
	},
);

/** Shadow classes mapped by variant color */
const shadowClass = computed(() => {
	if (!shadow) return '';
	const map: Record<string, string> = {
		primary: 'shadow-[0_4px_20px_rgba(183,225,203,0.4)] hover:shadow-[0_6px_28px_rgba(183,225,203,0.5)]',
		secondary: 'shadow-[0_4px_20px_rgba(121,181,217,0.4)] hover:shadow-[0_6px_28px_rgba(121,181,217,0.5)]',
		tertiary: 'shadow-[0_4px_20px_rgba(145,170,160,0.35)] hover:shadow-[0_6px_28px_rgba(145,170,160,0.45)]',
		danger: 'shadow-[0_4px_20px_rgba(255,131,108,0.4)] hover:shadow-[0_6px_28px_rgba(255,131,108,0.5)]',
		ghost: '',
	};
	return map[variant] ?? '';
});
</script>

<template>
	<button
		:class="[
			button({ variant, type, size, fullWidth }),
			shadowClass,
			disabled || loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
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
