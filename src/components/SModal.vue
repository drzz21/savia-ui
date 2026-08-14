<script setup lang="ts">
import { watch } from 'vue';

const {
	open = false,
	title,
	size = 'medium',
	closable = true,
	persistent = false,
} = defineProps<{
	/** Controls modal visibility */
	open: boolean;
	/** Modal title (optional, can use header slot instead) */
	title?: string;
	/** Modal width */
	size?: 'small' | 'medium' | 'large' | 'full';
	/** Show close button */
	closable?: boolean;
	/** If true, clicking the backdrop won't close the modal */
	persistent?: boolean;
}>();

const emit = defineEmits<{
	close: [];
}>();

function handleBackdropClick() {
	if (!persistent && closable) {
		emit('close');
	}
}

function handleClose() {
	if (closable) {
		emit('close');
	}
}

function handleKeydown(event: KeyboardEvent) {
	if (event.key === 'Escape' && closable && !persistent) {
		emit('close');
	}
}

// Block body scroll when open
watch(
	() => open,
	(isOpen) => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
			document.addEventListener('keydown', handleKeydown);
		} else {
			document.body.style.overflow = '';
			document.removeEventListener('keydown', handleKeydown);
		}
	},
);

const sizeClasses: Record<string, string> = {
	small: 'max-w-sm',
	medium: 'max-w-lg',
	large: 'max-w-3xl',
	full: 'max-w-[calc(100vw-2rem)] max-h-[calc(100vh-2rem)]',
};
</script>

<template>
	<Teleport to="body">
		<Transition name="modal">
			<div
				v-if="open"
				class="fixed inset-0 z-50 flex items-center justify-center p-4"
				role="dialog"
				aria-modal="true"
				:aria-labelledby="title ? 'modal-title' : undefined"
			>
				<!-- Backdrop -->
				<div
					class="absolute inset-0 bg-garden-deep/80 backdrop-blur-sm"
					@click="handleBackdropClick"
				/>

				<!-- Panel -->
				<div
					:class="[
						'relative w-full flex flex-col bg-garden-night border border-leaf-muted/15 rounded-[var(--radius-panel)] shadow-2xl overflow-hidden',
						sizeClasses[size],
					]"
				>
					<!-- Header -->
					<div class="flex items-center justify-between px-6 pt-5 pb-0">
						<slot name="header">
							<h3
								v-if="title"
								id="modal-title"
								class="font-display text-lg font-extrabold text-mist"
							>
								{{ title }}
							</h3>
						</slot>
						<button
							v-if="closable"
							class="flex items-center justify-center size-8 rounded-[var(--radius-field)] text-leaf-muted hover:text-mist hover:bg-mist/10 transition-colors cursor-pointer"
							aria-label="Close modal"
							@click="handleClose"
						>
							<svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<line x1="18" y1="6" x2="6" y2="18" />
								<line x1="6" y1="6" x2="18" y2="18" />
							</svg>
						</button>
					</div>

					<!-- Body -->
					<div class="px-6 py-5 overflow-y-auto">
						<slot />
					</div>

					<!-- Footer -->
					<div v-if="$slots.footer" class="px-6 pb-5 pt-0">
						<slot name="footer" />
					</div>
				</div>
			</div>
		</Transition>
	</Teleport>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
	transition: all 0.25s ease;
}
.modal-enter-from,
.modal-leave-to {
	opacity: 0;
}
.modal-enter-from :deep(.relative),
.modal-leave-to :deep(.relative) {
	transform: scale(0.95) translateY(10px);
}
.modal-enter-active :deep(.relative),
.modal-leave-active :deep(.relative) {
	transition: transform 0.25s ease;
}
</style>
