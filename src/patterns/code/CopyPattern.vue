<script setup lang="ts">
import SCode from '../../components/SCode.vue';

const example = `npm install savia-ui
pnpm add savia-ui`;

const code = `<!-- Copy button is built-in, no extra config needed -->
<SCode :code="installCommands" language="shell" />`;
</script>

<template>
  <section class="space-y-6">
    <div>
      <h3 class="text-lg font-display font-extrabold text-mist">Copy</h3>
      <p class="text-sm text-leaf-muted mt-1">A copy button is included in the header. Click it to copy all code to the clipboard. Shows "Copied!" for 2 seconds as feedback.</p>
    </div>
    <SCode :code="example" language="shell" />
    <div class="pt-4 space-y-3">
      <p class="text-sm font-semibold text-rain-mint/80 uppercase tracking-wide">Usage</p>
      <SCode :code="code" />
    </div>
  </section>
</template>
