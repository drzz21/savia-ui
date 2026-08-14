<script setup lang="ts">
import { computed } from 'vue';

const {
	cols = 3,
	gap = 4,
	align = 'stretch',
	minItemWidth,
} = defineProps<{
	/** Number of columns (ignored when minItemWidth is set) */
	cols?: number;
	/** Gap in spacing units (1 = 4px) */
	gap?: number;
	align?: 'start' | 'center' | 'end' | 'stretch';
	/** Auto-fit columns with a minimum item width (e.g. "180px") */
	minItemWidth?: string;
}>();

const alignMap: Record<string, string> = {
	start: 'items-start',
	center: 'items-center',
	end: 'items-end',
	stretch: 'items-stretch',
};

const gridStyle = computed(() => ({
	gap: `${gap * 4}px`,
	gridTemplateColumns: minItemWidth
		? `repeat(auto-fit, minmax(${minItemWidth}, 1fr))`
		: `repeat(${cols}, minmax(0, 1fr))`,
}));
</script>

<template>
	<div :class="['grid', alignMap[align]]" :style="gridStyle">
		<slot />
	</div>
</template>
