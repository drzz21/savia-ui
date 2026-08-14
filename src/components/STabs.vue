<script setup lang="ts">
import { ref, provide, computed, watch } from 'vue';

const {
	modelValue,
	variant = 'default',
} = defineProps<{
	/** Active tab id (v-model) */
	modelValue?: string;
	/** Visual style */
	variant?: 'default' | 'pills' | 'underline' | 'boxed';
}>();

const emit = defineEmits<{
	'update:modelValue': [value: string];
}>();

const tabs = ref<{ id: string; label: string; disabled?: boolean }[]>([]);
const activeTab = computed(() => modelValue ?? tabs.value[0]?.id ?? '');

function registerTab(tab: { id: string; label: string; disabled?: boolean }) {
	if (!tabs.value.find((t) => t.id === tab.id)) {
		tabs.value.push(tab);
	}
}

function selectTab(id: string) {
	emit('update:modelValue', id);
}

provide('tabs', {
	activeTab,
	registerTab,
});

const variantClasses: Record<string, { wrapper: string; tab: string; active: string }> = {
	default: {
		wrapper: 'bg-garden-night/50 rounded-[var(--radius-field)] p-1 gap-1',
		tab: 'rounded-[var(--radius-field)] px-3 py-1.5',
		active: 'bg-rain-mint/15 text-rain-mint',
	},
	pills: {
		wrapper: 'gap-2',
		tab: 'rounded-full px-4 py-1.5',
		active: 'bg-rain-mint text-garden-deep',
	},
	underline: {
		wrapper: 'border-b border-leaf-muted/20 gap-0',
		tab: 'px-4 py-2 border-b-2 border-transparent -mb-px',
		active: 'border-rain-mint text-rain-mint',
	},
	boxed: {
		wrapper: 'gap-0 items-stretch bg-garden-night/50 px-2 pt-2 border-b-[0px] border-rain-mint/70',
		tab: 'px-5 py-2 rounded-t-md relative',
		active: 'bg-garden-night text-mist border-b-[3px] border-rain-mint mb-[0px]',
	},
};
</script>

<template>
	<div :class="[
		variant === 'boxed' ? 'border border-leaf-muted/25 rounded-lg bg-garden-night overflow-hidden' : 'space-y-4',
	]">
		<!-- Tab headers -->
		<div :class="['flex items-center', variantClasses[variant].wrapper]">
			<button
				v-for="tab in tabs"
				:key="tab.id"
				:class="[
					'text-sm font-semibold transition-colors duration-200 cursor-pointer whitespace-nowrap',
					variantClasses[variant].tab,
					activeTab === tab.id
						? variantClasses[variant].active
						: 'text-leaf-muted hover:text-mist',
					tab.disabled ? 'opacity-40 cursor-not-allowed' : '',
				]"
				:disabled="tab.disabled"
				@click="!tab.disabled && selectTab(tab.id)"
			>
				{{ tab.label }}
			</button>
		</div>

		<!-- Tab panels -->
		<div :class="variant === 'boxed' ? 'p-4 border-t border-leaf-muted/15' : ''">
			<slot />
		</div>
	</div>
</template>
