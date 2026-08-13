<script setup lang="ts">
import SButton from '../../components/SButton.vue';
import SCard from '../../components/SCard.vue';
import SCode from '../../components/SCode.vue';

const sizes = ['small', 'medium', 'large'] as const;

const code = `<SButton label="small" size="small" />
<SButton label="medium" size="medium" />
<SButton label="large" size="large" />`;
</script>

<template>
  <section class="space-y-6">
    <div>
      <h3 class="text-lg font-display font-extrabold text-mist">Sizes</h3>
      <p class="text-sm text-leaf-muted mt-1">Three sizes control padding, font-size, and icon dimensions. Use small for dense UIs, large for hero CTAs.</p>
    </div>
    <SCard>
      <div class="flex items-center gap-4 flex-wrap">
        <SButton v-for="s in sizes" :key="s" :size="s" :label="s" />
      </div>
    </SCard>
    <div class="pt-4 space-y-3">
      <p class="text-sm font-semibold text-rain-mint/80 uppercase tracking-wide">Usage</p>
      <SCode :code="code" />
    </div>
  </section>
</template>
