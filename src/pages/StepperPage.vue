<script setup lang="ts">
import BasicPattern from '../patterns/stepper/BasicPattern.vue';
import VerticalPattern from '../patterns/stepper/VerticalPattern.vue';
import ClickablePattern from '../patterns/stepper/ClickablePattern.vue';
</script>

<template>
  <div class="space-y-16">
    <h2 class="font-display text-3xl font-extrabold tracking-tight text-mist">Stepper</h2>

    <div id="basic"><BasicPattern /></div>
    <hr class="border-leaf-muted/30 my-4" />
    <div id="vertical"><VerticalPattern /></div>
    <hr class="border-leaf-muted/30 my-4" />
    <div id="clickable"><ClickablePattern /></div>
  </div>
</template>
