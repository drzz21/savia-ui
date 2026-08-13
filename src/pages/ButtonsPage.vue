<script setup lang="ts">
import VariantsPattern from '../patterns/buttons/VariantsPattern.vue';
import TypesPattern from '../patterns/buttons/TypesPattern.vue';
import SizesPattern from '../patterns/buttons/SizesPattern.vue';
import IconsPattern from '../patterns/buttons/IconsPattern.vue';
import ShadowPattern from '../patterns/buttons/ShadowPattern.vue';
import StatesPattern from '../patterns/buttons/StatesPattern.vue';
import FullWidthPattern from '../patterns/buttons/FullWidthPattern.vue';
import EventsPattern from '../patterns/buttons/EventsPattern.vue';
</script>

<template>
  <div class="space-y-16">
    <h2 class="font-display text-3xl font-extrabold tracking-tight text-mist">Buttons</h2>

    <div id="variants"><VariantsPattern /></div>
    <hr class="border-leaf-muted/30 my-4" />
    <div id="types"><TypesPattern /></div>
    <hr class="border-leaf-muted/30 my-4" />
    <div id="sizes"><SizesPattern /></div>
    <hr class="border-leaf-muted/30 my-4" />
    <div id="icons"><IconsPattern /></div>
    <hr class="border-leaf-muted/30 my-4" />
    <div id="shadow"><ShadowPattern /></div>
    <hr class="border-leaf-muted/30 my-4" />
    <div id="states"><StatesPattern /></div>
    <hr class="border-leaf-muted/30 my-4" />
    <div id="full-width"><FullWidthPattern /></div>
    <hr class="border-leaf-muted/30 my-4" />
    <div id="events"><EventsPattern /></div>
  </div>
</template>
