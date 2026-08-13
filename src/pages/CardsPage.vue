<script setup lang="ts">
import PaddingPattern from '../patterns/cards/PaddingPattern.vue';
import CompositionPattern from '../patterns/cards/CompositionPattern.vue';
import StackedPattern from '../patterns/cards/StackedPattern.vue';
</script>

<template>
  <div class="space-y-16">
    <h2 class="font-display text-3xl font-extrabold tracking-tight text-mist">Cards</h2>

    <div id="padding"><PaddingPattern /></div>
    <hr class="border-leaf-muted/30 my-4" />
    <div id="composition"><CompositionPattern /></div>
    <hr class="border-leaf-muted/30 my-4" />
    <div id="stacked"><StackedPattern /></div>
  </div>
</template>
