<script setup lang="ts">
import { ref } from 'vue';
import SStepper from '../../components/SStepper.vue';
import SButton from '../../components/SButton.vue';
import SCard from '../../components/SCard.vue';
import SCode from '../../components/SCode.vue';

const currentStep = ref(1);
const steps = ['Account', 'Profile', 'Review', 'Complete'];

const code = `<script setup>
import { ref } from 'vue';

const current = ref(1);
const steps = ['Account', 'Profile', 'Review', 'Complete'];
<\/script>

<template>
  <SStepper :steps="steps" :current="current" />
  <button @click="current--">Back</button>
  <button @click="current++">Next</button>
</template>`;
</script>

<template>
  <section class="space-y-6">
    <div>
      <h3 class="text-lg font-display font-extrabold text-mist">Basic</h3>
      <p class="text-sm text-leaf-muted mt-1">A horizontal stepper that shows progress through a sequence. Completed steps show a checkmark, the active step is highlighted, and pending steps are dimmed.</p>
    </div>
    <SCard>
      <div class="space-y-6">
        <SStepper :steps="steps" :current="currentStep" />
        <div class="flex gap-3">
          <SButton label="Back" variant="ghost" size="small" :disabled="currentStep === 0" @click="currentStep--" />
          <SButton label="Next" variant="primary" size="small" :disabled="currentStep === steps.length - 1" @click="currentStep++" />
          <SButton v-if="currentStep === steps.length - 1" label="Reset" variant="tertiary" size="small" @click="currentStep = 0" />
        </div>
      </div>
    </SCard>
    <div class="pt-4 space-y-3">
      <p class="text-sm font-semibold text-rain-mint/80 uppercase tracking-wide">Usage</p>
      <SCode :code="code" />
    </div>
  </section>
</template>
