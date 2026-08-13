<script setup lang="ts">
import VariantsPattern from '../patterns/buttons/VariantsPattern.vue';
import TypesPattern from '../patterns/buttons/TypesPattern.vue';
import SizesPattern from '../patterns/buttons/SizesPattern.vue';
import IconsPattern from '../patterns/buttons/IconsPattern.vue';
import ShadowPattern from '../patterns/buttons/ShadowPattern.vue';
import StatesPattern from '../patterns/buttons/StatesPattern.vue';
import FullWidthPattern from '../patterns/buttons/FullWidthPattern.vue';
</script>

<template>
  <div class="space-y-16">
    <h2 class="font-display text-3xl font-extrabold tracking-tight text-mist">Buttons</h2>

    <VariantsPattern />
    <hr class="border-leaf-muted/30 my-4" />
    <TypesPattern />
    <hr class="border-leaf-muted/30 my-4" />
    <SizesPattern />
    <hr class="border-leaf-muted/30 my-4" />
    <IconsPattern />
    <hr class="border-leaf-muted/30 my-4" />
    <ShadowPattern />
    <hr class="border-leaf-muted/30 my-4" />
    <StatesPattern />
    <hr class="border-leaf-muted/30 my-4" />
    <FullWidthPattern />
  </div>
</template>
