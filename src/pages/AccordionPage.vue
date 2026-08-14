<script setup lang="ts">
import BasicPattern from '../patterns/accordion/BasicPattern.vue';
import MultiplePattern from '../patterns/accordion/MultiplePattern.vue';
import DisabledPattern from '../patterns/accordion/DisabledPattern.vue';
</script>

<template>
  <div class="space-y-16">
    <h2 class="font-display text-3xl font-extrabold tracking-tight text-mist">Accordion</h2>

    <div id="basic"><BasicPattern /></div>
    <hr class="border-leaf-muted/30 my-4" />
    <div id="multiple"><MultiplePattern /></div>
    <hr class="border-leaf-muted/30 my-4" />
    <div id="disabled"><DisabledPattern /></div>
  </div>
</template>
