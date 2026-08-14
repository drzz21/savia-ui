<script setup lang="ts">
const {
	items,
	separator = 'chevron',
} = defineProps<{
	/** Array of breadcrumb items */
	items: { label: string; href?: string }[];
	/** Separator style between items */
	separator?: 'chevron' | 'slash' | 'dot';
}>();

const emit = defineEmits<{
	navigate: [item: { label: string; href?: string }, index: number];
}>();

function handleClick(item: { label: string; href?: string }, index: number) {
	emit('navigate', item, index);
}
</script>

<template>
	<nav aria-label="Breadcrumb">
		<ol class="flex items-center gap-1 flex-wrap">
			<li v-for="(item, index) in items" :key="index" class="flex items-center gap-1">
				<!-- Separator -->
				<span v-if="index > 0" class="text-leaf-muted/50 flex items-center" aria-hidden="true">
					<svg v-if="separator === 'chevron'" class="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<path d="M9 18l6-6-6-6" />
					</svg>
					<span v-else-if="separator === 'slash'" class="text-xs">/</span>
					<span v-else class="inline-block size-1 rounded-full bg-leaf-muted/50"></span>
				</span>

				<!-- Item -->
				<button
					v-if="index < items.length - 1 && item.href"
					class="text-sm text-leaf-muted hover:text-rain-mint transition-colors cursor-pointer"
					@click="handleClick(item, index)"
				>
					{{ item.label }}
				</button>
				<span
					v-else
					:class="[
						'text-sm font-semibold',
						index === items.length - 1 ? 'text-mist' : 'text-leaf-muted',
					]"
					:aria-current="index === items.length - 1 ? 'page' : undefined"
				>
					{{ item.label }}
				</span>
			</li>
		</ol>
	</nav>
</template>
