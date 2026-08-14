<script setup lang="ts">
import { ref } from 'vue';
import SCheckbox from '../../components/SCheckbox.vue';
import SSpace from '../../components/SSpace.vue';
import SCard from '../../components/SCard.vue';
import SCode from '../../components/SCode.vue';

const agree = ref(false);
const news = ref(true);
const disabled = ref(false);
const indeterminate = ref(true);

const code = `<script setup>
import { ref } from 'vue';
import SCheckbox from './components/SCheckbox.vue';
import SSpace from './components/SSpace.vue';

const agree = ref(false);
const news = ref(true);
<\/script>

<template>
  <SSpace direction="vertical" size="base">
    <SCheckbox v-model="agree" label="I agree to the terms" />
    <SCheckbox v-model="news" label="Subscribe to newsletter" />
    <SCheckbox label="Disabled" disabled />
    <SCheckbox label="Indeterminate" indeterminate />
  </SSpace>
</template>`;
</script>

<template>
  <section class="space-y-6">
    <div>
      <h3 class="text-lg font-display font-extrabold text-mist">Basic</h3>
      <p class="text-sm text-leaf-muted mt-1">A custom checkbox with <code class="text-rain-mint/80 text-xs bg-rain-mint/10 px-1.5 py-0.5 rounded">v-model</code> binding. Supports <code class="text-rain-mint/80 text-xs bg-rain-mint/10 px-1.5 py-0.5 rounded">disabled</code> and <code class="text-rain-mint/80 text-xs bg-rain-mint/10 px-1.5 py-0.5 rounded">indeterminate</code> states.</p>
    </div>
    <SCard>
      <SSpace direction="vertical" size="base">
        <SCheckbox v-model="agree" label="I agree to the terms" />
        <SCheckbox v-model="news" label="Subscribe to newsletter" />
        <SCheckbox v-model="disabled" label="Disabled checkbox" disabled />
        <SCheckbox v-model="indeterminate" label="Indeterminate state" indeterminate />
      </SSpace>
    </SCard>
    <div class="pt-4 space-y-3">
      <p class="text-sm font-semibold text-rain-mint/80 uppercase tracking-wide">Usage</p>
      <SCode :code="code" />
    </div>
  </section>
</template>
