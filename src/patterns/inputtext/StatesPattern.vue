<script setup lang="ts">
import { ref } from 'vue';
import SInputText from '../../components/SInputText.vue';
import SCard from '../../components/SCard.vue';
import SCode from '../../components/SCode.vue';

const invalid = ref('not-an-email');
const readonlyValue = ref('Read only value');
const disabledValue = ref('Disabled value');

const code = `<!-- Error: replaces the hint and colors the border -->
<SInputText
  v-model="email"
  label="Email"
  error="Enter a valid email address."
/>

<!-- Read only -->
<SInputText v-model="value" readonly />

<!-- Disabled -->
<SInputText v-model="value" disabled />`;
</script>

<template>
  <section class="space-y-6">
    <div>
      <h3 class="text-lg font-display font-extrabold text-mist">States</h3>
      <p class="text-sm text-leaf-muted mt-1">The <code class="text-rain-mint/80 text-xs bg-rain-mint/10 px-1.5 py-0.5 rounded">error</code> prop takes precedence over <code class="text-rain-mint/80 text-xs bg-rain-mint/10 px-1.5 py-0.5 rounded">hint</code> and sets <code class="text-rain-mint/80 text-xs bg-rain-mint/10 px-1.5 py-0.5 rounded">aria-invalid</code> for screen readers.</p>
    </div>
    <SCard>
      <div class="space-y-4">
        <SInputText v-model="invalid" label="Email" type="email" error="Enter a valid email address." />
        <SInputText v-model="readonlyValue" label="Read only" readonly />
        <SInputText v-model="disabledValue" label="Disabled" disabled />
      </div>
    </SCard>
    <div class="pt-4 space-y-3">
      <p class="text-sm font-semibold text-rain-mint/80 uppercase tracking-wide">Usage</p>
      <SCode :code="code" />
    </div>
  </section>
</template>
