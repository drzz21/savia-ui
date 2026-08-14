<script setup lang="ts">
import { computed, useId } from 'vue';

const {
	modelValue = false,
	label,
	disabled = false,
	indeterminate = false,
	size = 'medium',
} = defineProps<{
	modelValue?: boolean;
	label?: string;
	disabled?: boolean;
	/** Show an indeterminate (−) state instead of a check */
	indeterminate?: boolean;
	size?: 'small' | 'medium' | 'large';
}>();

const emit = defineEmits<{
	'update:modelValue': [value: boolean];
}>();

const inputId = useId();

const sizeMap: Record<string, { box: string; icon: string; text: string }> = {
	small: { box: 'size-4', icon: 'size-3', text: 'text-sm' },
	medium: { box: 'size-5', icon: 'size-3.5', text: 'text-sm' },
	large: { box: 'size-6', icon: 'size-4', text: 'text-base' },
};

function toggle() {
	if (disabled) return;
	emit('update:modelValue', !modelValue);
}
</script>

<template>
	<label
		:for="inputId"
		:class="[
			'inline-flex items-center gap-2 select-none',
			disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer group',
		]"
	>
		<input
			:id="inputId"
			type="checkbox"
			:checked="modelValue"
			:disabled="disabled"
			:indeterminate="indeterminate"
			class="sr-only peer"
			@change="toggle"
		/>

		<!-- Custom box -->
		<span
			:class="[
				'flex items-center justify-center rounded-[4px] border-2 transition-all duration-150',
				sizeMap[size].box,
				modelValue || indeterminate
					? 'bg-rain-mint border-rain-mint text-garden-deep'
					: 'border-leaf-muted/40 group-hover:border-leaf-muted/70 text-transparent',
			]"
			aria-hidden="true"
		>
			<!-- Check icon -->
			<svg v-if="modelValue && !indeterminate" :class="sizeMap[size].icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
				<polyline points="20 6 9 17 4 12" />
			</svg>
			<!-- Indeterminate icon -->
			<svg v-else-if="indeterminate" :class="sizeMap[size].icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round">
				<line x1="6" y1="12" x2="18" y2="12" />
			</svg>
		</span>

		<span v-if="label || $slots.default" :class="['text-mist', sizeMap[size].text]">
			<slot>{{ label }}</slot>
		</span>
	</label>
</template>
