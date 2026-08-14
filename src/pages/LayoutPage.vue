<script setup lang="ts">
import DividerPattern from '../patterns/layout/DividerPattern.vue';
import FlexPattern from '../patterns/layout/FlexPattern.vue';
import GridPattern from '../patterns/layout/GridPattern.vue';
import SpacePattern from '../patterns/layout/SpacePattern.vue';
import MasonryPattern from '../patterns/layout/MasonryPattern.vue';
</script>

<template>
  <div class="space-y-16">
    <div class="space-y-2">
      <h2 class="font-display text-3xl font-extrabold tracking-tight text-mist">Layout</h2>
      <p class="text-sm text-leaf-muted">Primitives to arrange elements: dividers, flexbox, grids, token-based spacing and masonry flows.</p>
    </div>

    <div id="divider"><DividerPattern /></div>
    <hr class="border-leaf-muted/30 my-4" />
    <!-- <div id="flex"><FlexPattern /></div>
    <hr class="border-leaf-muted/30 my-4" />
    <div id="grid"><GridPattern /></div>
    <hr class="border-leaf-muted/30 my-4" /> -->
    <div id="space"><SpacePattern /></div>
    <hr class="border-leaf-muted/30 my-4" />
    <div id="masonry"><MasonryPattern /></div>
  </div>
</template>
