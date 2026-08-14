<script setup lang="ts">
import { computed } from 'vue';

const {
	size = 'base',
	direction = 'horizontal',
	align = 'center',
	wrap = true,
} = defineProps<{
	/** Preset spacing between children */
	size?: 'compact' | 'base' | 'spacious';
	direction?: 'horizontal' | 'vertical';
	align?: 'start' | 'center' | 'end' | 'stretch';
	wrap?: boolean;
}>();

const sizeMap: Record<string, string> = {
	compact: 'var(--spacing-compact)',
	base: 'var(--spacing-base)',
	spacious: 'var(--spacing-spacious)',
};

const alignMap: Record<string, string> = {
	start: 'items-start',
	center: 'items-center',
	end: 'items-end',
	stretch: 'items-stretch',
};

const spaceStyle = computed(() => ({ gap: sizeMap[size] }));
</script>

<template>
	<div
		:class="[
			'flex',
			direction === 'vertical' ? 'flex-col' : 'flex-row',
			alignMap[align],
			wrap && direction === 'horizontal' ? 'flex-wrap' : '',
		]"
		:style="spaceStyle"
	>
		<slot />
	</div>
</template>
