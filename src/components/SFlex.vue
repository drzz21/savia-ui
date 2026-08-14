<script setup lang="ts">
import { computed } from 'vue';

const {
	direction = 'row',
	justify = 'start',
	align = 'stretch',
	gap = 4,
	wrap = false,
	inline = false,
} = defineProps<{
	direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
	justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
	align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
	/** Gap in spacing units (1 = 4px) */
	gap?: number;
	wrap?: boolean;
	/** Use inline-flex instead of flex */
	inline?: boolean;
}>();

const directionMap: Record<string, string> = {
	row: 'flex-row',
	'row-reverse': 'flex-row-reverse',
	column: 'flex-col',
	'column-reverse': 'flex-col-reverse',
};

const justifyMap: Record<string, string> = {
	start: 'justify-start',
	center: 'justify-center',
	end: 'justify-end',
	between: 'justify-between',
	around: 'justify-around',
	evenly: 'justify-evenly',
};

const alignMap: Record<string, string> = {
	start: 'items-start',
	center: 'items-center',
	end: 'items-end',
	stretch: 'items-stretch',
	baseline: 'items-baseline',
};

const gapStyle = computed(() => ({ gap: `${gap * 4}px` }));
</script>

<template>
	<div
		:class="[
			inline ? 'inline-flex' : 'flex',
			directionMap[direction],
			justifyMap[justify],
			alignMap[align],
			wrap ? 'flex-wrap' : 'flex-nowrap',
		]"
		:style="gapStyle"
	>
		<slot />
	</div>
</template>
