<script setup lang="ts">
defineProps<{
  /** Padding interno del card */
  padding?: 'none' | 'small' | 'medium' | 'large';
}>();
</script>

<template>
  <div
    :class="[
      'rounded-[var(--radius-panel)] border border-leaf-muted/20 bg-garden-night shadow-[0_4px_24px_rgba(12,29,32,0.4)]',
      {
        'p-0': padding === 'none',
        'p-4': padding === 'small',
        'p-6': !padding || padding === 'medium',
        'p-10': padding === 'large',
      },
    ]"
  >
    <slot />
  </div>
</template>
