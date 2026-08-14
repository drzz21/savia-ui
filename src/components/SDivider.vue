<script setup lang="ts">
const {
	label,
	vertical = false,
	variant = 'solid',
	align = 'center',
} = defineProps<{
	/** Optional text shown inside the divider (horizontal only) */
	label?: string;
	/** Render as a vertical divider */
	vertical?: boolean;
	/** Line style */
	variant?: 'solid' | 'dashed' | 'dotted';
	/** Label position (horizontal only) */
	align?: 'start' | 'center' | 'end';
}>();

const borderStyle: Record<string, string> = {
	solid: 'border-solid',
	dashed: 'border-dashed',
	dotted: 'border-dotted',
};

const alignGrow: Record<string, { before: string; after: string }> = {
	start: { before: 'w-6 shrink-0', after: 'flex-1' },
	center: { before: 'flex-1', after: 'flex-1' },
	end: { before: 'flex-1', after: 'w-6 shrink-0' },
};
</script>

<template>
	<!-- Vertical -->
	<div
		v-if="vertical"
		:class="['self-stretch border-l border-leaf-muted/20 mx-2', borderStyle[variant]]"
		role="separator"
		aria-orientation="vertical"
	/>

	<!-- Horizontal with label -->
	<div
		v-else-if="label || $slots.default"
		class="flex items-center gap-3"
		role="separator"
	>
		<div :class="['border-t border-leaf-muted/20', borderStyle[variant], alignGrow[align].before]" />
		<span class="text-xs font-semibold text-leaf-muted whitespace-nowrap">
			<slot>{{ label }}</slot>
		</span>
		<div :class="['border-t border-leaf-muted/20', borderStyle[variant], alignGrow[align].after]" />
	</div>

	<!-- Horizontal plain -->
	<div
		v-else
		:class="['w-full border-t border-leaf-muted/20', borderStyle[variant]]"
		role="separator"
		aria-orientation="horizontal"
	/>
</template>
