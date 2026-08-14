<script setup lang="ts">
import { computed } from 'vue';

const {
	columns = 3,
	gap = 4,
} = defineProps<{
	/** Number of masonry columns */
	columns?: number;
	/** Gap in spacing units (1 = 4px) */
	gap?: number;
}>();

const gapPx = computed(() => `${gap * 4}px`);

const masonryStyle = computed(() => ({
	columnCount: String(columns),
	columnGap: gapPx.value,
}));
</script>

<template>
	<div :style="masonryStyle">
		<slot />
	</div>
</template>

<style scoped>
div > :slotted(*) {
	margin-bottom: v-bind(gapPx);
	break-inside: avoid;
}
</style>
