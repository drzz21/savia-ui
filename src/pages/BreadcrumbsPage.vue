<script setup lang="ts">
import BasicPattern from '../patterns/breadcrumbs/BasicPattern.vue';
import SeparatorsPattern from '../patterns/breadcrumbs/SeparatorsPattern.vue';
import EventsPattern from '../patterns/breadcrumbs/EventsPattern.vue';
</script>

<template>
  <div class="space-y-16">
    <h2 class="font-display text-3xl font-extrabold tracking-tight text-mist">Breadcrumbs</h2>

    <div id="basic"><BasicPattern /></div>
    <hr class="border-leaf-muted/30 my-4" />
    <div id="separators"><SeparatorsPattern /></div>
    <hr class="border-leaf-muted/30 my-4" />
    <div id="events"><EventsPattern /></div>
  </div>
</template>
