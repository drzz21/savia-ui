<script setup lang="ts">
import SFileUpload from '../../components/SFileUpload.vue';
import SCard from '../../components/SCard.vue';
import SCode from '../../components/SCode.vue';

const code = `<SFileUpload
  label="Upload files"
  description="Select multiple files at once"
  multiple
  @select="(files) => console.log(files)"
/>`;
</script>

<template>
  <section class="space-y-6">
    <div>
      <h3 class="text-lg font-display font-extrabold text-mist">Multiple</h3>
      <p class="text-sm text-leaf-muted mt-1">Allow users to select multiple files at once with the <code class="text-rain-mint/80 text-xs bg-rain-mint/10 px-1.5 py-0.5 rounded">multiple</code> prop.</p>
    </div>
    <SCard>
      <SFileUpload label="Upload files" description="Select multiple files at once" multiple />
    </SCard>
    <div class="pt-4 space-y-3">
      <p class="text-sm font-semibold text-rain-mint/80 uppercase tracking-wide">Usage</p>
      <SCode :code="code" />
    </div>
  </section>
</template>
