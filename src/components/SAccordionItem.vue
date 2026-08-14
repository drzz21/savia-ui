<script setup lang="ts">
import { inject, computed } from 'vue';

const props = defineProps<{
	title: string;
	/** Unique identifier for this item (defaults to title) */
	id?: string;
	disabled?: boolean;
}>();

const itemId = computed(() => props.id ?? props.title);

const accordion = inject<{
	toggle: (id: string) => void;
	isOpen: (id: string) => boolean;
}>('accordion');

const isOpen = computed(() => accordion?.isOpen(itemId.value) ?? false);

function handleToggle() {
	if (props.disabled) return;
	accordion?.toggle(itemId.value);
}
</script>

<template>
	<div class="bg-garden-night">
		<button
			:class="[
				'w-full flex items-center justify-between px-4 py-3 text-left transition-colors duration-200',
				props.disabled
					? 'opacity-50 cursor-not-allowed'
					: 'cursor-pointer hover:bg-mist/5',
			]"
			:aria-expanded="isOpen"
			:disabled="props.disabled"
			@click="handleToggle"
		>
			<span class="text-sm font-semibold text-mist">{{ title }}</span>
			<svg
				:class="[
					'size-4 text-leaf-muted transition-transform duration-200',
					isOpen ? 'rotate-180' : '',
				]"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path d="M6 9l6 6 6-6" />
			</svg>
		</button>
		<Transition name="accordion">
			<div v-show="isOpen" class="overflow-hidden">
				<div class="px-4 pb-4 pt-1 text-sm text-leaf-muted leading-relaxed">
					<slot />
				</div>
			</div>
		</Transition>
	</div>
</template>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
	transition: all 0.25s ease;
	overflow: hidden;
}
.accordion-enter-from,
.accordion-leave-to {
	opacity: 0;
	max-height: 0;
	padding-top: 0;
	padding-bottom: 0;
}
.accordion-enter-to,
.accordion-leave-from {
	opacity: 1;
	max-height: 500px;
}
</style>
