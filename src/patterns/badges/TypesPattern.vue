<script setup lang="ts">
import SBadge from '../../components/SBadge.vue';
import SCard from '../../components/SCard.vue';
import SCode from '../../components/SCode.vue';

const types = ['default', 'outlined', 'text'] as const;

const code = `<SBadge label="default" type="default" />
<SBadge label="outlined" type="outlined" />
<SBadge label="text" type="text" />`;
</script>

<template>
  <section class="space-y-6">
    <div>
      <h3 class="text-lg font-display font-extrabold text-mist">Types</h3>
      <p class="text-sm text-leaf-muted mt-1">Three rendering types: filled background (default), outlined with border, and text-only for minimal presence.</p>
    </div>
    <SCard>
      <div class="flex flex-wrap gap-3 items-center">
        <SBadge v-for="t in types" :key="t" :type="t" :label="t" />
      </div>
    </SCard>
    <div class="pt-4 space-y-3">
      <p class="text-sm font-semibold text-rain-mint/80 uppercase tracking-wide">Usage</p>
      <SCode :code="code" />
    </div>
  </section>
</template>
