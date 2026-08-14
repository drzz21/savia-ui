<script setup lang="ts">
import SLoader from '../../components/SLoader.vue';
import SCard from '../../components/SCard.vue';
import SCode from '../../components/SCode.vue';

const code = `<SLoader size="small" />
<SLoader size="medium" />
<SLoader size="large" />`;
</script>

<template>
  <section class="space-y-6">
    <div>
      <h3 class="text-lg font-display font-extrabold text-mist">Sizes</h3>
      <p class="text-sm text-leaf-muted mt-1">Three sizes for different contexts — inline indicators, standard loading states, or full-page overlays.</p>
    </div>
    <SCard>
      <div class="flex items-end gap-8">
        <SLoader size="small" label="small" />
        <SLoader size="medium" label="medium" />
        <SLoader size="large" label="large" />
      </div>
    </SCard>
    <div class="pt-4 space-y-3">
      <p class="text-sm font-semibold text-rain-mint/80 uppercase tracking-wide">Usage</p>
      <SCode :code="code" />
    </div>
  </section>
</template>
