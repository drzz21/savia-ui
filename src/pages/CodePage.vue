<script setup lang="ts">
import BasicPattern from '../patterns/code/BasicPattern.vue';
import LanguagePattern from '../patterns/code/LanguagePattern.vue';
import CopyPattern from '../patterns/code/CopyPattern.vue';
</script>

<template>
  <div class="space-y-16">
    <h2 class="font-display text-3xl font-extrabold tracking-tight text-mist">Code</h2>

    <BasicPattern />
    <hr class="border-leaf-muted/30 my-4" />
    <LanguagePattern />
    <hr class="border-leaf-muted/30 my-4" />
    <CopyPattern />
  </div>
</template>
