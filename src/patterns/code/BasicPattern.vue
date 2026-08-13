<script setup lang="ts">
import SCode from '../../components/SCode.vue';

const example = `<template>
  <div class="flex gap-4">
    <SButton label="Submit" />
    <SButton label="Cancel" variant="ghost" />
  </div>
</template>`;

const code = `<SCode :code="myCodeString" />`;
</script>

<template>
  <section class="space-y-6">
    <div>
      <h3 class="text-lg font-display font-extrabold text-mist">Basic</h3>
      <p class="text-sm text-leaf-muted mt-1">Pass any string to the code prop. The component renders it with line numbers and monospace font.</p>
    </div>
    <SCode :code="example" />
    <div class="pt-4 space-y-3">
      <p class="text-sm font-semibold text-rain-mint/80 uppercase tracking-wide">Usage</p>
      <SCode :code="code" />
    </div>
  </section>
</template>
