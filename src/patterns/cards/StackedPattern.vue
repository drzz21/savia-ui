<script setup lang="ts">
import SCard from '../../components/SCard.vue';
import SCode from '../../components/SCode.vue';

const code = `<div class="space-y-4">
  <SCard>
    <p>First item</p>
  </SCard>
  <SCard>
    <p>Second item</p>
  </SCard>
  <SCard>
    <p>Third item</p>
  </SCard>
</div>`;
</script>

<template>
  <section class="space-y-6">
    <div>
      <h3 class="text-lg font-display font-extrabold text-mist">Stacked</h3>
      <p class="text-sm text-leaf-muted mt-1">Stack cards vertically with spacing between them. Useful for lists, feeds, or sequential content blocks.</p>
    </div>
    <div class="space-y-4">
      <SCard>
        <p class="text-sm text-mist">Lorem ipsum dolor sit amet</p>
      </SCard>
      <SCard>
        <p class="text-sm text-mist">Consectetur adipiscing elit</p>
      </SCard>
      <SCard>
        <p class="text-sm text-mist">Sed do eiusmod tempor incididunt</p>
      </SCard>
    </div>
    <div class="pt-4 space-y-3">
      <p class="text-sm font-semibold text-rain-mint/80 uppercase tracking-wide">Usage</p>
      <SCode :code="code" />
    </div>
  </section>
</template>
