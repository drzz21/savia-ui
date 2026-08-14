<script setup lang="ts">
import BasicPattern from '../patterns/modal/BasicPattern.vue';
import SizesPattern from '../patterns/modal/SizesPattern.vue';
import PersistentPattern from '../patterns/modal/PersistentPattern.vue';
import SlotsPattern from '../patterns/modal/SlotsPattern.vue';
</script>

<template>
  <div class="space-y-16">
    <h2 class="font-display text-3xl font-extrabold tracking-tight text-mist">Modal</h2>

    <div id="basic"><BasicPattern /></div>
    <hr class="border-leaf-muted/30 my-4" />
    <div id="sizes"><SizesPattern /></div>
    <hr class="border-leaf-muted/30 my-4" />
    <div id="persistent"><PersistentPattern /></div>
    <hr class="border-leaf-muted/30 my-4" />
    <div id="slots"><SlotsPattern /></div>
  </div>
</template>
