<script setup lang="ts">
import SBadge from '../../components/SBadge.vue';
import SCard from '../../components/SCard.vue';
import SCode from '../../components/SCode.vue';

const sizes = ['small', 'medium', 'large'] as const;

const code = `<SBadge label="small" size="small" />
<SBadge label="medium" size="medium" />
<SBadge label="large" size="large" />`;
</script>

<template>
  <section class="space-y-6">
    <div>
      <h3 class="text-lg font-display font-extrabold text-mist">Sizes</h3>
      <p class="text-sm text-leaf-muted mt-1">Three size options to fit different UI contexts — from compact inline labels to prominent callouts.</p>
    </div>
    <SCard>
      <div class="flex flex-wrap gap-3 items-center">
        <SBadge v-for="s in sizes" :key="s" :size="s" :label="s" />
      </div>
    </SCard>
    <div class="pt-4 space-y-3">
      <p class="text-sm font-semibold text-rain-mint/80 uppercase tracking-wide">Usage</p>
      <SCode :code="code" />
    </div>
  </section>
</template>
