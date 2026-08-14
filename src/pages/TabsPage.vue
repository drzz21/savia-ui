<script setup lang="ts">
import BasicPattern from '../patterns/tabs/BasicPattern.vue';
import VariantsPattern from '../patterns/tabs/VariantsPattern.vue';
import DisabledPattern from '../patterns/tabs/DisabledPattern.vue';
</script>

<template>
  <div class="space-y-16">
    <h2 class="font-display text-3xl font-extrabold tracking-tight text-mist">Tabs</h2>

    <div id="basic"><BasicPattern /></div>
    <hr class="border-leaf-muted/30 my-4" />
    <div id="variants"><VariantsPattern /></div>
    <hr class="border-leaf-muted/30 my-4" />
    <div id="disabled"><DisabledPattern /></div>
  </div>
</template>
