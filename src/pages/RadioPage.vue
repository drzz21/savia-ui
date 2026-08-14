<script setup lang="ts">
import BasicPattern from '../patterns/radio/BasicPattern.vue';
import SizesPattern from '../patterns/radio/SizesPattern.vue';
</script>

<template>
  <div class="space-y-16">
    <h2 class="font-display text-3xl font-extrabold tracking-tight text-mist">Radio</h2>

    <div id="basic"><BasicPattern /></div>
    <hr class="border-leaf-muted/30 my-4" />
    <div id="sizes"><SizesPattern /></div>
  </div>
</template>
