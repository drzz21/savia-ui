<script setup lang="ts">
import SButton from '../../components/SButton.vue';
import SCard from '../../components/SCard.vue';
import SCode from '../../components/SCode.vue';

const code = `<SButton label="Normal" />
<SButton label="Disabled" disabled />
<SButton label="Loading..." :loading="true" />
<SButton label="Loading..." :loading="true" variant="danger" />`;
</script>

<template>
  <section class="space-y-6">
    <div>
      <h3 class="text-lg font-display font-extrabold text-mist">States</h3>
      <p class="text-sm text-leaf-muted mt-1">Disabled reduces opacity and blocks interaction. Loading shows a spinner and also blocks clicks.</p>
    </div>
    <SCard>
      <div class="flex items-center gap-4 flex-wrap">
        <SButton label="Normal" />
        <SButton label="Disabled" disabled />
        <SButton label="Loading..." :loading="true" />
        <SButton label="Loading..." :loading="true" variant="danger" />
      </div>
    </SCard>
    <div class="pt-4 space-y-3">
      <p class="text-sm font-semibold text-rain-mint/80 uppercase tracking-wide">Usage</p>
      <SCode :code="code" />
    </div>
  </section>
</template>
