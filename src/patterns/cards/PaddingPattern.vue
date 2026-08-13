<script setup lang="ts">
import SCard from '../../components/SCard.vue';
import SCode from '../../components/SCode.vue';

const code = `<SCard padding="small">...</SCard>
<SCard padding="medium">...</SCard>
<SCard padding="large">...</SCard>
<SCard padding="none">...</SCard>`;
</script>

<template>
  <section class="space-y-6">
    <div>
      <h3 class="text-lg font-display font-extrabold text-mist">Padding</h3>
      <p class="text-sm text-leaf-muted mt-1">Four padding levels control internal spacing. Default is medium. Use none for custom layouts inside the card.</p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <SCard padding="small">
        <p class="text-sm text-leaf-muted">Padding small</p>
      </SCard>
      <SCard padding="medium">
        <p class="text-sm text-leaf-muted">Padding medium</p>
      </SCard>
      <SCard padding="large">
        <p class="text-sm text-leaf-muted">Padding large</p>
      </SCard>
      <SCard padding="none">
        <div class="p-6">
          <p class="text-sm text-leaf-muted">Padding none</p>
        </div>
      </SCard>
    </div>
    <div class="pt-4 space-y-3">
      <p class="text-sm font-semibold text-rain-mint/80 uppercase tracking-wide">Usage</p>
      <SCode :code="code" />
    </div>
  </section>
</template>
