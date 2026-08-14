<script setup lang="ts">
import { ref } from 'vue';
import SCheckbox from '../../components/SCheckbox.vue';
import SSpace from '../../components/SSpace.vue';
import SCard from '../../components/SCard.vue';
import SCode from '../../components/SCode.vue';

const sm = ref(true);
const md = ref(true);
const lg = ref(true);

const code = `<script setup>
import { ref } from 'vue';
import SCheckbox from './components/SCheckbox.vue';
import SSpace from './components/SSpace.vue';

const val = ref(true);
<\/script>

<template>
  <SSpace size="spacious">
    <SCheckbox v-model="val" label="Small" size="small" />
    <SCheckbox v-model="val" label="Medium" size="medium" />
    <SCheckbox v-model="val" label="Large" size="large" />
  </SSpace>
</template>`;
</script>

<template>
  <section class="space-y-6">
    <div>
      <h3 class="text-lg font-display font-extrabold text-mist">Sizes</h3>
      <p class="text-sm text-leaf-muted mt-1">Three size presets matching the rest of the system.</p>
    </div>
    <SCard>
      <SSpace size="spacious">
        <SCheckbox v-model="sm" label="Small checkbox" size="small" />
        <SCheckbox v-model="md" label="Medium checkbox" size="medium" />
        <SCheckbox v-model="lg" label="Large checkbox" size="large" />
      </SSpace>
    </SCard>
    <div class="pt-4 space-y-3">
      <p class="text-sm font-semibold text-rain-mint/80 uppercase tracking-wide">Usage</p>
      <SCode :code="code" />
    </div>
  </section>
</template>
