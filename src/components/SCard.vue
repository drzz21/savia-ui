<script setup lang="ts">
defineProps<{
  /** Padding interno del card */
  padding?: 'none' | 'small' | 'medium' | 'large';
}>();
</script>

<template>
  <div
    :class="[
      'rounded-lg border border-gray-200 bg-white shadow-sm',
      {
        'p-0': padding === 'none',
        'p-3': padding === 'small',
        'p-5': !padding || padding === 'medium',
        'p-8': padding === 'large',
      },
    ]"
  >
    <slot />
  </div>
</template>
