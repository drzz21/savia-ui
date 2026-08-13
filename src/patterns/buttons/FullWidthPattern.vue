<script setup lang="ts">
import SButton from '../../components/SButton.vue';
import SCard from '../../components/SCard.vue';
import SCode from '../../components/SCode.vue';

const code = `<SButton label="Sign in" icon-right="arrow-right" full-width :shadow="true" />
<SButton label="Create account" variant="secondary" type="outlined" full-width />`;
</script>

<template>
  <section class="space-y-6">
    <div>
      <h3 class="text-lg font-display font-extrabold text-mist">Full Width</h3>
      <p class="text-sm text-leaf-muted mt-1">Stretches the button to fill its container. Useful for forms, modals, and stacked action panels.</p>
    </div>
    <SCard>
      <div class="space-y-3 max-w-sm">
        <SButton label="Sign in" icon-right="arrow-right" full-width :shadow="true" />
        <SButton label="Create account" variant="secondary" type="outlined" full-width icon-right="chevron-right" />
      </div>
    </SCard>
    <div class="pt-4 space-y-3">
      <p class="text-sm font-semibold text-rain-mint/80 uppercase tracking-wide">Usage</p>
      <SCode :code="code" />
    </div>
  </section>
</template>
