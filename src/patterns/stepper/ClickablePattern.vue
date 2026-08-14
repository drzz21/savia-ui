<script setup lang="ts">
import { ref } from 'vue';
import SStepper from '../../components/SStepper.vue';
import SCard from '../../components/SCard.vue';
import SCode from '../../components/SCode.vue';

const currentStep = ref(1);
const steps = ['Details', 'Shipping', 'Payment', 'Confirmation'];

function goToStep(index: number) {
  currentStep.value = index;
}

const code = `<script setup>
import { ref } from 'vue';

const current = ref(1);
const steps = ['Details', 'Shipping', 'Payment', 'Confirmation'];

function goToStep(index) {
  current.value = index;
}
<\/script>

<template>
  <SStepper
    :steps="steps"
    :current="current"
    @step-click="goToStep"
  />
</template>`;
</script>

<template>
  <section class="space-y-6">
    <div>
      <h3 class="text-lg font-display font-extrabold text-mist">Clickable</h3>
      <p class="text-sm text-leaf-muted mt-1">Listen to the <code class="text-rain-mint/80 text-xs bg-rain-mint/10 px-1.5 py-0.5 rounded">step-click</code> event to allow navigation by clicking on any step directly.</p>
    </div>
    <SCard>
      <div class="space-y-4">
        <SStepper :steps="steps" :current="currentStep" @step-click="goToStep" />
        <p class="text-xs text-leaf-muted">Click on any step to navigate to it.</p>
      </div>
    </SCard>
    <div class="pt-4 space-y-3">
      <p class="text-sm font-semibold text-rain-mint/80 uppercase tracking-wide">Usage</p>
      <SCode :code="code" />
    </div>
  </section>
</template>
