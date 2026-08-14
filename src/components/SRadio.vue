<script setup lang="ts">
import { computed, useId } from 'vue';

const {
	modelValue,
	value,
	label,
	disabled = false,
	size = 'medium',
	name,
} = defineProps<{
	/** The currently selected value in the group (v-model) */
	modelValue?: string | number;
	/** This radio's value */
	value: string | number;
	label?: string;
	disabled?: boolean;
	size?: 'small' | 'medium' | 'large';
	/** HTML name attribute for the group */
	name?: string;
}>();

const emit = defineEmits<{
	'update:modelValue': [value: string | number];
}>();

const inputId = useId();
const isChecked = computed(() => modelValue === value);

const sizeMap: Record<string, { outer: string; inner: string; text: string }> = {
	small: { outer: 'size-4', inner: 'size-2', text: 'text-sm' },
	medium: { outer: 'size-5', inner: 'size-2.5', text: 'text-sm' },
	large: { outer: 'size-6', inner: 'size-3', text: 'text-base' },
};

function select() {
	if (disabled) return;
	emit('update:modelValue', value);
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
			type="radio"
			:checked="isChecked"
			:disabled="disabled"
			:value="value"
			:name="name"
			class="sr-only peer"
			@change="select"
		/>

		<!-- Custom circle -->
		<span
			:class="[
				'flex items-center justify-center rounded-full border-2 transition-all duration-150',
				sizeMap[size].outer,
				isChecked
					? 'border-rain-mint'
					: 'border-leaf-muted/40 group-hover:border-leaf-muted/70',
			]"
			aria-hidden="true"
		>
			<span
				:class="[
					'rounded-full transition-all duration-150',
					sizeMap[size].inner,
					isChecked ? 'bg-rain-mint scale-100' : 'bg-transparent scale-0',
				]"
			/>
		</span>

		<span v-if="label || $slots.default" :class="['text-mist', sizeMap[size].text]">
			<slot>{{ label }}</slot>
		</span>
	</label>
</template>
