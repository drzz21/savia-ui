<script setup lang="ts">
import SButton from '../../components/SButton.vue';
import SCard from '../../components/SCard.vue';
import SCode from '../../components/SCode.vue';

const variants = ['primary', 'secondary', 'tertiary', 'danger', 'ghost'] as const;

const code = `<SButton label="primary" variant="primary" />
<SButton label="secondary" variant="secondary" />
<SButton label="tertiary" variant="tertiary" />
<SButton label="danger" variant="danger" />
<SButton label="ghost" variant="ghost" />`;
</script>

<template>
  <section class="space-y-6">
    <div>
      <h3 class="text-lg font-display font-extrabold text-mist">Variants</h3>
      <p class="text-sm text-leaf-muted mt-1">Five color variants mapped to intent: primary action, secondary info, tertiary neutral, danger/destructive, and ghost for subtle contexts.</p>
    </div>
    <SCard>
      <div class="flex flex-wrap gap-3">
        <SButton v-for="v in variants" :key="v" :variant="v" :label="v" size="small" />
      </div>
    </SCard>
    <div class="pt-4 space-y-3">
      <p class="text-sm font-semibold text-rain-mint/80 uppercase tracking-wide">Usage</p>
      <SCode :code="code" />
    </div>
  </section>
</template>
