<script setup lang="ts">
import { ref } from 'vue';
import SStepper from '../../components/SStepper.vue';
import SButton from '../../components/SButton.vue';
import SCard from '../../components/SCard.vue';
import SCode from '../../components/SCode.vue';

const currentStep = ref(2);
const steps = ['Create account', 'Verify email', 'Set up profile', 'Start using'];

const code = `<SStepper
  :steps="['Create account', 'Verify email', 'Set up profile', 'Start using']"
  :current="2"
  vertical
/>`;
</script>

<template>
  <section class="space-y-6">
    <div>
      <h3 class="text-lg font-display font-extrabold text-mist">Vertical</h3>
      <p class="text-sm text-leaf-muted mt-1">Use the <code class="text-rain-mint/80 text-xs bg-rain-mint/10 px-1.5 py-0.5 rounded">vertical</code> prop to stack steps vertically — ideal for sidebars or narrow layouts.</p>
    </div>
    <SCard>
      <div class="flex gap-8">
        <SStepper :steps="steps" :current="currentStep" vertical />
        <div class="flex flex-col gap-3">
          <SButton label="Back" variant="ghost" size="small" :disabled="currentStep === 0" @click="currentStep--" />
          <SButton label="Next" variant="primary" size="small" :disabled="currentStep === steps.length - 1" @click="currentStep++" />
        </div>
      </div>
    </SCard>
    <div class="pt-4 space-y-3">
      <p class="text-sm font-semibold text-rain-mint/80 uppercase tracking-wide">Usage</p>
      <SCode :code="code" />
    </div>
  </section>
</template>
