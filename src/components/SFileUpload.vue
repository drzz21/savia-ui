<script setup lang="ts">
import { ref, computed } from 'vue';

const {
	label = 'Choose a file',
	description,
	accept,
	multiple = false,
	maxSize,
	disabled = false,
} = defineProps<{
	/** Button/label text */
	label?: string;
	/** Helper text below the drop zone */
	description?: string;
	/** Accepted file types (e.g. ".png,.jpg" or "image/*") */
	accept?: string;
	/** Allow multiple files */
	multiple?: boolean;
	/** Max file size in bytes */
	maxSize?: number;
	disabled?: boolean;
}>();

const emit = defineEmits<{
	select: [files: File[]];
	error: [message: string];
}>();

const inputRef = ref<HTMLInputElement | null>(null);
const dragging = ref(false);
const selectedFiles = ref<File[]>([]);

const formattedMaxSize = computed(() => {
	if (!maxSize) return '';
	if (maxSize >= 1048576) return `${(maxSize / 1048576).toFixed(0)} MB`;
	return `${(maxSize / 1024).toFixed(0)} KB`;
});

function openPicker() {
	if (disabled) return;
	inputRef.value?.click();
}

function handleFileChange(event: Event) {
	const input = event.target as HTMLInputElement;
	if (input.files) {
		processFiles(Array.from(input.files));
	}
	// Reset input so the same file can be selected again
	input.value = '';
}

function handleDrop(event: DragEvent) {
	if (disabled) return;
	dragging.value = false;
	const files = event.dataTransfer?.files;
	if (files) {
		processFiles(Array.from(files));
	}
}

function handleDragOver(event: DragEvent) {
	if (disabled) return;
	event.preventDefault();
	dragging.value = true;
}

function handleDragLeave() {
	dragging.value = false;
}

function processFiles(files: File[]) {
	// Validate max size
	if (maxSize) {
		const oversized = files.filter((f) => f.size > maxSize);
		if (oversized.length > 0) {
			emit('error', `File(s) exceed max size of ${formattedMaxSize.value}`);
			return;
		}
	}

	// Limit to single if not multiple
	const result = multiple ? files : files.slice(0, 1);
	selectedFiles.value = result;
	emit('select', result);
}

function removeFile(index: number) {
	selectedFiles.value.splice(index, 1);
	emit('select', [...selectedFiles.value]);
}

function formatFileSize(bytes: number) {
	if (bytes >= 1048576) return `${(bytes / 1048576).toFixed(1)} MB`;
	if (bytes >= 1024) return `${(bytes / 1024).toFixed(1)} KB`;
	return `${bytes} B`;
}
</script>

<template>
	<div class="space-y-3">
		<!-- Drop zone -->
		<div
			:class="[
				'relative flex flex-col items-center justify-center gap-3 px-6 py-8 border-2 border-dashed rounded-[var(--radius-panel)] transition-colors duration-200 text-center',
				disabled
					? 'opacity-50 cursor-not-allowed border-leaf-muted/20 bg-garden-night/50'
					: dragging
						? 'border-rain-mint bg-rain-mint/5 cursor-pointer'
						: 'border-leaf-muted/30 hover:border-rain-mint/50 hover:bg-mist/3 cursor-pointer',
			]"
			@click="openPicker"
			@drop.prevent="handleDrop"
			@dragover="handleDragOver"
			@dragleave="handleDragLeave"
		>
			<!-- Upload icon -->
			<svg class="size-8 text-leaf-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
				<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
				<polyline points="17 8 12 3 7 8" />
				<line x1="12" y1="3" x2="12" y2="15" />
			</svg>

			<div class="space-y-1">
				<p class="text-sm font-semibold text-mist">{{ label }}</p>
				<p v-if="description" class="text-xs text-leaf-muted">{{ description }}</p>
				<p v-else class="text-xs text-leaf-muted">
					Drag & drop or click to browse
					<span v-if="formattedMaxSize"> · Max {{ formattedMaxSize }}</span>
				</p>
			</div>

			<input
				ref="inputRef"
				type="file"
				class="hidden"
				:accept="accept"
				:multiple="multiple"
				:disabled="disabled"
				@change="handleFileChange"
			/>
		</div>

		<!-- File list -->
		<ul v-if="selectedFiles.length > 0" class="space-y-2">
			<li
				v-for="(file, index) in selectedFiles"
				:key="file.name + index"
				class="flex items-center justify-between gap-3 px-3 py-2 bg-garden-night rounded-[var(--radius-field)] border border-leaf-muted/15"
			>
				<div class="flex items-center gap-2 min-w-0">
					<svg class="size-4 text-rain-mint shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
						<polyline points="14 2 14 8 20 8" />
					</svg>
					<span class="text-xs text-mist truncate">{{ file.name }}</span>
					<span class="text-[10px] text-leaf-muted shrink-0">{{ formatFileSize(file.size) }}</span>
				</div>
				<button
					class="text-leaf-muted hover:text-bloom-coral transition-colors cursor-pointer"
					@click.stop="removeFile(index)"
					aria-label="Remove file"
				>
					<svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<line x1="18" y1="6" x2="6" y2="18" />
						<line x1="6" y1="6" x2="18" y2="18" />
					</svg>
				</button>
			</li>
		</ul>
	</div>
</template>
