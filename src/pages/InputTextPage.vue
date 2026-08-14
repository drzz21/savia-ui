<script setup lang="ts">
import BasicPattern from '../patterns/inputtext/BasicPattern.vue';
import SizesPattern from '../patterns/inputtext/SizesPattern.vue';
import IconsPattern from '../patterns/inputtext/IconsPattern.vue';
import StatesPattern from '../patterns/inputtext/StatesPattern.vue';
import ClearablePattern from '../patterns/inputtext/ClearablePattern.vue';
</script>

<template>
  <div class="space-y-16">
    <h2 class="font-display text-3xl font-extrabold tracking-tight text-mist">Input Text</h2>

    <div id="basic"><BasicPattern /></div>
    <hr class="border-leaf-muted/30 my-4" />
    <div id="sizes"><SizesPattern /></div>
    <hr class="border-leaf-muted/30 my-4" />
    <div id="icons"><IconsPattern /></div>
    <hr class="border-leaf-muted/30 my-4" />
    <div id="states"><StatesPattern /></div>
    <hr class="border-leaf-muted/30 my-4" />
    <div id="clearable"><ClearablePattern /></div>
  </div>
</template>
