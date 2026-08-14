<script setup lang="ts">
import VariantsPattern from '../patterns/badges/VariantsPattern.vue';
import TypesPattern from '../patterns/badges/TypesPattern.vue';
import SizesPattern from '../patterns/badges/SizesPattern.vue';
import PillPattern from '../patterns/badges/PillPattern.vue';
import DotPattern from '../patterns/badges/DotPattern.vue';
import CompositionPattern from '../patterns/badges/CompositionPattern.vue';
</script>

<template>
  <div class="space-y-16">
    <h2 class="font-display text-3xl font-extrabold tracking-tight text-mist">Badges</h2>

    <div id="variants"><VariantsPattern /></div>
    <hr class="border-leaf-muted/30 my-4" />
    <div id="types"><TypesPattern /></div>
    <hr class="border-leaf-muted/30 my-4" />
    <div id="sizes"><SizesPattern /></div>
    <hr class="border-leaf-muted/30 my-4" />
    <div id="pill"><PillPattern /></div>
    <hr class="border-leaf-muted/30 my-4" />
    <div id="dot"><DotPattern /></div>
    <hr class="border-leaf-muted/30 my-4" />
    <div id="composition"><CompositionPattern /></div>
  </div>
</template>
