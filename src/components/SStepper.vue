<script setup lang="ts">
import { computed } from 'vue';

const {
	steps,
	current = 0,
	vertical = false,
} = defineProps<{
	/** Array of step labels */
	steps: string[];
	/** Current active step (0-indexed) */
	current?: number;
	/** Display steps vertically */
	vertical?: boolean;
}>();

const emit = defineEmits<{
	'step-click': [index: number];
}>();

function getStatus(index: number): 'completed' | 'active' | 'pending' {
	if (index < current) return 'completed';
	if (index === current) return 'active';
	return 'pending';
}

function handleClick(index: number) {
	emit('step-click', index);
}
</script>

<template>
	<div :class="['flex', vertical ? 'flex-col gap-0' : 'flex-row items-center gap-0']">
		<template v-for="(step, index) in steps" :key="index">
			<!-- Step -->
			<div
				:class="[
					'flex items-center gap-2 cursor-pointer group',
					vertical ? 'py-2' : '',
				]"
				@click="handleClick(index)"
			>
				<!-- Circle indicator -->
				<div
					:class="[
						'flex items-center justify-center size-8 rounded-full text-xs font-bold transition-all duration-200 shrink-0',
						getStatus(index) === 'completed'
							? 'bg-rain-mint text-garden-deep'
							: getStatus(index) === 'active'
								? 'bg-rain-mint/20 text-rain-mint border-2 border-rain-mint'
								: 'bg-leaf-muted/10 text-leaf-muted border border-leaf-muted/30 group-hover:border-leaf-muted/50',
					]"
				>
					<!-- Checkmark for completed -->
					<svg
						v-if="getStatus(index) === 'completed'"
						class="size-4"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<polyline points="20 6 9 17 4 12" />
					</svg>
					<!-- Number for active/pending -->
					<span v-else>{{ index + 1 }}</span>
				</div>

				<!-- Label -->
				<span
					:class="[
						'text-sm font-medium transition-colors duration-200 whitespace-nowrap',
						getStatus(index) === 'completed'
							? 'text-rain-mint'
							: getStatus(index) === 'active'
								? 'text-mist'
								: 'text-leaf-muted group-hover:text-mist/70',
					]"
				>
					{{ step }}
				</span>
			</div>

			<!-- Connector line -->
			<div
				v-if="index < steps.length - 1"
				:class="[
					'transition-colors duration-200',
					vertical
						? 'ml-4 w-px h-6 my-0'
						: 'flex-1 h-px min-w-4 mx-2',
					index < current
						? 'bg-rain-mint'
						: 'bg-leaf-muted/20',
				]"
			/>
		</template>
	</div>
</template>
