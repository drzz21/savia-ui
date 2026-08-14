<script setup lang="ts">
import BasicPattern from '../patterns/checkbox/BasicPattern.vue';
import SizesPattern from '../patterns/checkbox/SizesPattern.vue';
</script>

<template>
  <div class="space-y-16">
    <h2 class="font-display text-3xl font-extrabold tracking-tight text-mist">Checkbox</h2>

    <div id="basic"><BasicPattern /></div>
    <hr class="border-leaf-muted/30 my-4" />
    <div id="sizes"><SizesPattern /></div>
  </div>
</template>
