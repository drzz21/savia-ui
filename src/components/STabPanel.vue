<script setup lang="ts">
import { inject, computed, onMounted } from 'vue';

const props = defineProps<{
	/** Unique tab identifier */
	id: string;
	/** Tab label shown in the header */
	label: string;
	/** Disable this tab */
	disabled?: boolean;
}>();

const tabs = inject<{
	activeTab: { value: string };
	registerTab: (tab: { id: string; label: string; disabled?: boolean }) => void;
}>('tabs');

onMounted(() => {
	tabs?.registerTab({ id: props.id, label: props.label, disabled: props.disabled });
});

const isActive = computed(() => tabs?.activeTab.value === props.id);
</script>

<template>
	<div v-show="isActive" role="tabpanel">
		<slot />
	</div>
</template>
