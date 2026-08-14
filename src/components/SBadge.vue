<script setup lang="ts">
import { cva } from 'class-variance-authority';

const {
	label,
	variant = 'primary',
	type = 'default',
	size = 'medium',
	dot = false,
	pill = false,
} = defineProps<{
	label?: string;
	variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'ghost';
	type?: 'default' | 'outlined' | 'text';
	size?: 'small' | 'medium' | 'large';
	/** Shows a small dot indicator alongside text */
	dot?: boolean;
	/** Makes the badge fully rounded (pill shape). Default is squared with slight radius. */
	pill?: boolean;
}>();

const badge = cva(
	'inline-flex items-center gap-1.5 font-bold font-body transition-colors duration-200',
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
				small: 'text-[10px] px-1.5 py-0.5',
				medium: 'text-xs px-2 py-0.5',
				large: 'text-sm px-2.5 py-1',
			},
			pill: {
				true: 'rounded-full',
				false: 'rounded-[4px]',
			},
		},
		compoundVariants: [
			// ── primary ─────────────────────────────────────────────────
			{ variant: 'primary', type: 'default', class: 'bg-rain-mint/15 text-rain-mint' },
			{ variant: 'primary', type: 'outlined', class: 'border-rain-mint/40 text-rain-mint' },
			{ variant: 'primary', type: 'text', class: 'text-rain-mint' },
			// ── secondary ───────────────────────────────────────────────
			{ variant: 'secondary', type: 'default', class: 'bg-rain-blue/15 text-rain-blue' },
			{ variant: 'secondary', type: 'outlined', class: 'border-rain-blue/40 text-rain-blue' },
			{ variant: 'secondary', type: 'text', class: 'text-rain-blue' },
			// ── tertiary ────────────────────────────────────────────────
			{ variant: 'tertiary', type: 'default', class: 'bg-leaf-muted/15 text-leaf-muted' },
			{ variant: 'tertiary', type: 'outlined', class: 'border-leaf-muted/40 text-leaf-muted' },
			{ variant: 'tertiary', type: 'text', class: 'text-leaf-muted' },
			// ── danger ──────────────────────────────────────────────────
			{ variant: 'danger', type: 'default', class: 'bg-bloom-coral/15 text-bloom-coral' },
			{ variant: 'danger', type: 'outlined', class: 'border-bloom-coral/40 text-bloom-coral' },
			{ variant: 'danger', type: 'text', class: 'text-bloom-coral' },
			// ── ghost ───────────────────────────────────────────────────
			{ variant: 'ghost', type: 'default', class: 'bg-mist/10 text-mist' },
			{ variant: 'ghost', type: 'outlined', class: 'border-leaf-muted/30 text-mist' },
			{ variant: 'ghost', type: 'text', class: 'text-mist' },
		],
		defaultVariants: {
			variant: 'primary',
			type: 'default',
			size: 'medium',
			pill: false,
		},
	},
);

const dotColor: Record<string, string> = {
	primary: 'bg-rain-mint',
	secondary: 'bg-rain-blue',
	tertiary: 'bg-leaf-muted',
	danger: 'bg-bloom-coral',
	ghost: 'bg-mist',
};
</script>

<template>
	<span :class="badge({ variant, type, size, pill })">
		<span
			v-if="dot"
			:class="['size-1.5 rounded-full', dotColor[variant]]"
			aria-hidden="true"
		/>
		<slot>{{ label }}</slot>
	</span>
</template>
