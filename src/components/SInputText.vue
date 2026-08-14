<script setup lang="ts">
import { computed, useId } from 'vue';
import { cva } from 'class-variance-authority';

const baseUrl = import.meta.env.BASE_URL;

const {
	modelValue = '',
	label,
	placeholder,
	hint,
	error,
	type = 'text',
	size = 'medium',
	disabled = false,
	readonly = false,
	required = false,
	clearable = false,
	fullWidth = false,
	iconLeft,
	iconRight,
	maxlength,
} = defineProps<{
	/** Input value (v-model) */
	modelValue?: string;
	/** Label shown above the field */
	label?: string;
	placeholder?: string;
	/** Helper text below the field */
	hint?: string;
	/** Error message — replaces the hint and turns the field red */
	error?: string;
	type?: 'text' | 'email' | 'password' | 'search' | 'tel' | 'url' | 'number';
	size?: 'small' | 'medium' | 'large';
	disabled?: boolean;
	readonly?: boolean;
	required?: boolean;
	/** Shows a button to clear the value when not empty */
	clearable?: boolean;
	fullWidth?: boolean;
	/** Name of the SVG symbol from the public sprite (icons.svg) */
	iconLeft?: string;
	iconRight?: string;
	maxlength?: number;
}>();

const emit = defineEmits<{
	'update:modelValue': [value: string];
	input: [event: Event];
	focus: [event: FocusEvent];
	blur: [event: FocusEvent];
	clear: [];
}>();

const inputId = useId();
const hasError = computed(() => Boolean(error));
const showClear = computed(
	() => clearable && modelValue.length > 0 && !disabled && !readonly,
);

const field = cva(
	'w-full font-body bg-garden-night text-mist placeholder:text-leaf-muted/50 border rounded-[var(--radius-field)] transition-colors duration-200 focus:outline-2 focus:outline-offset-0 [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none',
	{
		variants: {
			size: {
				small: 'text-sm py-1.5 px-3',
				medium: 'text-base py-2.5 px-4',
				large: 'text-lg py-3 px-5',
			},
			state: {
				default: 'border-leaf-muted/25 hover:border-leaf-muted/40 focus:border-rain-mint focus:outline-rain-mint/30',
				error: 'border-bloom-coral/60 focus:border-bloom-coral focus:outline-bloom-coral/30',
				disabled: 'border-leaf-muted/15 opacity-50 cursor-not-allowed',
			},
		},
		defaultVariants: {
			size: 'medium',
			state: 'default',
		},
	},
);

const iconSizeMap: Record<string, string> = {
	small: 'size-4',
	medium: 'size-5',
	large: 'size-6',
};

/** Horizontal padding compensation when an icon is present */
const iconPadMap: Record<string, { left: string; right: string }> = {
	small: { left: 'pl-9', right: 'pr-9' },
	medium: { left: 'pl-11', right: 'pr-11' },
	large: { left: 'pl-13', right: 'pr-13' },
};

const iconOffsetMap: Record<string, string> = {
	small: 'left-3',
	medium: 'left-4',
	large: 'left-5',
};

const iconOffsetRightMap: Record<string, string> = {
	small: 'right-3',
	medium: 'right-4',
	large: 'right-5',
};

const state = computed(() => {
	if (disabled) return 'disabled';
	if (hasError.value) return 'error';
	return 'default';
});

function handleInput(event: Event) {
	const target = event.target as HTMLInputElement;
	emit('update:modelValue', target.value);
	emit('input', event);
}

function handleClear() {
	emit('update:modelValue', '');
	emit('clear');
}
</script>

<template>
	<div :class="['flex flex-col gap-1.5', fullWidth ? 'w-full' : 'w-full max-w-xs']">
		<!-- Label -->
		<label
			v-if="label"
			:for="inputId"
			class="text-sm font-semibold text-mist"
		>
			{{ label }}
			<span v-if="required" class="text-bloom-coral" aria-hidden="true">*</span>
		</label>

		<!-- Field wrapper -->
		<div class="relative flex items-center">
			<!-- Left icon -->
			<svg
				v-if="iconLeft"
				:class="[
					'absolute pointer-events-none text-leaf-muted',
					iconSizeMap[size],
					iconOffsetMap[size],
				]"
				aria-hidden="true"
			>
				<use :href="`${baseUrl}icons.svg#${iconLeft}`" />
			</svg>

			<input
				:id="inputId"
				:class="[
					field({ size, state }),
					iconLeft ? iconPadMap[size].left : '',
					iconRight || showClear ? iconPadMap[size].right : '',
				]"
				:type="type"
				:value="modelValue"
				:placeholder="placeholder"
				:disabled="disabled"
				:readonly="readonly"
				:required="required"
				:maxlength="maxlength"
				:aria-invalid="hasError || undefined"
				:aria-describedby="error || hint ? `${inputId}-desc` : undefined"
				@input="handleInput"
				@focus="emit('focus', $event)"
				@blur="emit('blur', $event)"
			/>

			<!-- Clear button -->
			<button
				v-if="showClear"
				type="button"
				:class="[
					'absolute text-leaf-muted hover:text-mist transition-colors cursor-pointer',
					iconOffsetRightMap[size],
				]"
				aria-label="Clear input"
				@click="handleClear"
			>
				<svg :class="iconSizeMap[size]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<line x1="18" y1="6" x2="6" y2="18" />
					<line x1="6" y1="6" x2="18" y2="18" />
				</svg>
			</button>

			<!-- Right icon -->
			<svg
				v-else-if="iconRight"
				:class="[
					'absolute pointer-events-none text-leaf-muted',
					iconSizeMap[size],
					iconOffsetRightMap[size],
				]"
				aria-hidden="true"
			>
				<use :href="`${baseUrl}icons.svg#${iconRight}`" />
			</svg>
		</div>

		<!-- Hint / error -->
		<p
			v-if="error || hint"
			:id="`${inputId}-desc`"
			:class="['text-xs', hasError ? 'text-bloom-coral' : 'text-leaf-muted']"
		>
			{{ error || hint }}
		</p>
	</div>
</template>
