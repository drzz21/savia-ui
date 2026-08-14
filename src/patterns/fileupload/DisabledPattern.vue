<script setup lang="ts">
import SFileUpload from '../../components/SFileUpload.vue';
import SCard from '../../components/SCard.vue';
import SCode from '../../components/SCode.vue';

const code = `<SFileUpload
  label="Upload disabled"
  disabled
/>`;
</script>

<template>
  <section class="space-y-6">
    <div>
      <h3 class="text-lg font-display font-extrabold text-mist">Disabled</h3>
      <p class="text-sm text-leaf-muted mt-1">The upload zone can be disabled to prevent any interaction.</p>
    </div>
    <SCard>
      <SFileUpload label="Upload disabled" disabled />
    </SCard>
    <div class="pt-4 space-y-3">
      <p class="text-sm font-semibold text-rain-mint/80 uppercase tracking-wide">Usage</p>
      <SCode :code="code" />
    </div>
  </section>
</template>
