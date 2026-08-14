<script setup lang="ts">
import BasicPattern from '../patterns/loader/BasicPattern.vue';
import SizesPattern from '../patterns/loader/SizesPattern.vue';
import VariantsPattern from '../patterns/loader/VariantsPattern.vue';
</script>

<template>
  <div class="space-y-16">
    <h2 class="font-display text-3xl font-extrabold tracking-tight text-mist">Loader</h2>

    <div id="basic"><BasicPattern /></div>
    <hr class="border-leaf-muted/30 my-4" />
    <div id="sizes"><SizesPattern /></div>
    <hr class="border-leaf-muted/30 my-4" />
    <div id="variants"><VariantsPattern /></div>
  </div>
</template>
