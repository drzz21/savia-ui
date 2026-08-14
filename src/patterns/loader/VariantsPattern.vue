<script setup lang="ts">
import SLoader from '../../components/SLoader.vue';
import SCard from '../../components/SCard.vue';
import SCode from '../../components/SCode.vue';

const code = `<SLoader variant="primary" />
<SLoader variant="secondary" />
<SLoader variant="mist" />`;
</script>

<template>
  <section class="space-y-6">
    <div>
      <h3 class="text-lg font-display font-extrabold text-mist">Variants</h3>
      <p class="text-sm text-leaf-muted mt-1">Color variants to match different backgrounds and contexts.</p>
    </div>
    <SCard>
      <div class="flex items-end gap-8">
        <SLoader variant="primary" label="primary" />
        <SLoader variant="secondary" label="secondary" />
        <SLoader variant="mist" label="mist" />
      </div>
    </SCard>
    <div class="pt-4 space-y-3">
      <p class="text-sm font-semibold text-rain-mint/80 uppercase tracking-wide">Usage</p>
      <SCode :code="code" />
    </div>
  </section>
</template>
