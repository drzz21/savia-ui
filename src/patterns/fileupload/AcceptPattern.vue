<script setup lang="ts">
import SFileUpload from '../../components/SFileUpload.vue';
import SCard from '../../components/SCard.vue';
import SCode from '../../components/SCode.vue';

const code = `<!-- Only images -->
<SFileUpload
  label="Upload image"
  accept="image/*"
  description="PNG, JPG, GIF up to 5MB"
  :max-size="5242880"
/>

<!-- Only PDFs -->
<SFileUpload
  label="Upload document"
  accept=".pdf"
  description="PDF files only"
/>`;
</script>

<template>
  <section class="space-y-6">
    <div>
      <h3 class="text-lg font-display font-extrabold text-mist">Accept & Max size</h3>
      <p class="text-sm text-leaf-muted mt-1">Restrict file types with <code class="text-rain-mint/80 text-xs bg-rain-mint/10 px-1.5 py-0.5 rounded">accept</code> and limit file size with <code class="text-rain-mint/80 text-xs bg-rain-mint/10 px-1.5 py-0.5 rounded">max-size</code> (in bytes).</p>
    </div>
    <SCard>
      <div class="space-y-4">
        <SFileUpload label="Upload image" accept="image/*" description="PNG, JPG, GIF up to 5MB" :max-size="5242880" />
        <SFileUpload label="Upload document" accept=".pdf" description="PDF files only" />
      </div>
    </SCard>
    <div class="pt-4 space-y-3">
      <p class="text-sm font-semibold text-rain-mint/80 uppercase tracking-wide">Usage</p>
      <SCode :code="code" />
    </div>
  </section>
</template>
