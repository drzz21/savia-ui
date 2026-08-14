<script setup lang="ts">
import { ref } from 'vue';
import SRadio from '../../components/SRadio.vue';
import SSpace from '../../components/SSpace.vue';
import SCard from '../../components/SCard.vue';
import SCode from '../../components/SCode.vue';

const selected = ref('vue');

const code = `<script setup>
import { ref } from 'vue';
import SRadio from './components/SRadio.vue';
import SSpace from './components/SSpace.vue';

const selected = ref('vue');
<\/script>

<template>
  <SSpace direction="vertical" size="base">
    <SRadio v-model="selected" value="vue" label="Vue" name="framework" />
    <SRadio v-model="selected" value="react" label="React" name="framework" />
    <SRadio v-model="selected" value="svelte" label="Svelte" name="framework" />
    <SRadio v-model="selected" value="disabled" label="Disabled" name="framework" disabled />
  </SSpace>
</template>`;
</script>

<template>
  <section class="space-y-6">
    <div>
      <h3 class="text-lg font-display font-extrabold text-mist">Basic</h3>
      <p class="text-sm text-leaf-muted mt-1">Radio buttons with <code class="text-rain-mint/80 text-xs bg-rain-mint/10 px-1.5 py-0.5 rounded">v-model</code> binding. Only one option can be active at a time in the same group.</p>
    </div>
    <SCard>
      <SSpace direction="vertical" size="base">
        <SSpace size="spacious">
          <SRadio v-model="selected" value="vue" label="Vue" name="framework" />
          <SRadio v-model="selected" value="react" label="React" name="framework" />
          <SRadio v-model="selected" value="svelte" label="Svelte" name="framework" />
          <SRadio v-model="selected" value="angular" label="Disabled option" name="framework" disabled />
        </SSpace>
        <p class="text-xs text-leaf-muted">
          Selected: <span class="text-rain-mint font-mono">{{ selected }}</span>
        </p>
      </SSpace>
    </SCard>
    <div class="pt-4 space-y-3">
      <p class="text-sm font-semibold text-rain-mint/80 uppercase tracking-wide">Usage</p>
      <SCode :code="code" />
    </div>
  </section>
</template>
