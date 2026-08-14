<script setup lang="ts">
import SLoader from '../../components/SLoader.vue';
import SCard from '../../components/SCard.vue';
import SCode from '../../components/SCode.vue';

const code = `<SLoader />
<SLoader label="Loading..." />`;
</script>

<template>
  <section class="space-y-6">
    <div>
      <h3 class="text-lg font-display font-extrabold text-mist">Basic</h3>
      <p class="text-sm text-leaf-muted mt-1">A simple spinning loader. Optionally pass a <code class="text-rain-mint/80 text-xs bg-rain-mint/10 px-1.5 py-0.5 rounded">label</code> to display text below the spinner.</p>
    </div>
    <SCard>
      <div class="flex items-center gap-8">
        <SLoader />
        <SLoader label="Loading..." />
      </div>
    </SCard>
    <div class="pt-4 space-y-3">
      <p class="text-sm font-semibold text-rain-mint/80 uppercase tracking-wide">Usage</p>
      <SCode :code="code" />
    </div>
  </section>
</template>
