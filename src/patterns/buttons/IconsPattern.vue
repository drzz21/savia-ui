<script setup lang="ts">
import SButton from '../../components/SButton.vue';
import SCard from '../../components/SCard.vue';
import SCode from '../../components/SCode.vue';

const code = `<SButton label="Back" icon-left="arrow-left" type="outlined" />
<SButton label="Next" icon-right="arrow-right" />
<SButton label="Navigate" icon-right="chevron-right" variant="secondary" type="outlined" />`;
</script>

<template>
  <section class="space-y-6">
    <div>
      <h3 class="text-lg font-display font-extrabold text-mist">Icons</h3>
      <p class="text-sm text-leaf-muted mt-1">Add icons on either side using SVG sprite symbol names. Icons scale with the button size automatically.</p>
    </div>
    <SCard>
      <div class="flex flex-wrap gap-3">
        <SButton label="Back" variant="primary" type="outlined" icon-left="arrow-left" />
        <SButton label="Next" variant="primary" icon-right="arrow-right" />
        <SButton label="Navigate" variant="secondary" type="outlined" icon-right="chevron-right" />
      </div>
    </SCard>
    <div class="pt-4 space-y-3">
      <p class="text-sm font-semibold text-rain-mint/80 uppercase tracking-wide">Usage</p>
      <SCode :code="code" />
    </div>
  </section>
</template>
