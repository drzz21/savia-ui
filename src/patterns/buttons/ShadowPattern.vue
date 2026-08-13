<script setup lang="ts">
import SButton from '../../components/SButton.vue';
import SCard from '../../components/SCard.vue';
import SCode from '../../components/SCode.vue';

const code = `<SButton label="Submit" :shadow="true" />
<SButton label="Info" variant="secondary" :shadow="true" />
<SButton label="Delete" variant="danger" :shadow="true" />`;
</script>

<template>
  <section class="space-y-6">
    <div>
      <h3 class="text-lg font-display font-extrabold text-mist">Shadow</h3>
      <p class="text-sm text-leaf-muted mt-1">A solid colored shadow extending below the button. Color matches the variant automatically. Grows on hover.</p>
    </div>
    <SCard>
      <div class="flex flex-wrap gap-4">
        <SButton label="Mint glow" variant="primary" :shadow="true" />
        <SButton label="Blue glow" variant="secondary" :shadow="true" />
        <SButton label="Coral glow" variant="danger" :shadow="true" />
      </div>
    </SCard>
    <div class="pt-4 space-y-3">
      <p class="text-sm font-semibold text-rain-mint/80 uppercase tracking-wide">Usage</p>
      <SCode :code="code" />
    </div>
  </section>
</template>
