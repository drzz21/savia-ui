<script setup lang="ts">
import { provide, ref } from 'vue';

const {
	multiple = false,
} = defineProps<{
	/** Allow multiple items to be open simultaneously */
	multiple?: boolean;
}>();

const openItems = ref<Set<string>>(new Set());

function toggle(id: string) {
	if (openItems.value.has(id)) {
		openItems.value.delete(id);
	} else {
		if (!multiple) {
			openItems.value.clear();
		}
		openItems.value.add(id);
	}
	// Trigger reactivity
	openItems.value = new Set(openItems.value);
}

function isOpen(id: string) {
	return openItems.value.has(id);
}

provide('accordion', { toggle, isOpen });
</script>

<template>
	<div class="flex flex-col divide-y divide-leaf-muted/15 rounded-[var(--radius-field)] border border-leaf-muted/15 overflow-hidden">
		<slot />
	</div>
</template>
