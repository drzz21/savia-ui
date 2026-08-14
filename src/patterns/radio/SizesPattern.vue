<script setup lang="ts">
import { ref } from 'vue';
import SRadio from '../../components/SRadio.vue';
import SSpace from '../../components/SSpace.vue';
import SCard from '../../components/SCard.vue';
import SCode from '../../components/SCode.vue';

const sm = ref('a');
const md = ref('a');
const lg = ref('a');

const code = `<script setup>
import { ref } from 'vue';
import SRadio from './components/SRadio.vue';
import SSpace from './components/SSpace.vue';

const val = ref('a');
<\/script>

<template>
  <SSpace direction="vertical" size="spacious">
    <SSpace size="spacious">
      <SRadio v-model="val" value="a" label="Option A" size="small" name="sm" />
      <SRadio v-model="val" value="b" label="Option B" size="small" name="sm" />
    </SSpace>
    <SSpace size="spacious">
      <SRadio v-model="val" value="a" label="Option A" size="medium" name="md" />
      <SRadio v-model="val" value="b" label="Option B" size="medium" name="md" />
    </SSpace>
    <SSpace size="spacious">
      <SRadio v-model="val" value="a" label="Option A" size="large" name="lg" />
      <SRadio v-model="val" value="b" label="Option B" size="large" name="lg" />
    </SSpace>
  </SSpace>
</template>`;
</script>

<template>
  <section class="space-y-6">
    <div>
      <h3 class="text-lg font-display font-extrabold text-mist">Sizes</h3>
      <p class="text-sm text-leaf-muted mt-1">Three sizes to match the overall component scale.</p>
    </div>
    <SCard>
      <SSpace direction="vertical" size="spacious">
        <SSpace size="spacious">
          <SRadio v-model="sm" value="a" label="Option A" size="small" name="sm-group" />
          <SRadio v-model="sm" value="b" label="Option B" size="small" name="sm-group" />
        </SSpace>
        <SSpace size="spacious">
          <SRadio v-model="md" value="a" label="Option A" size="medium" name="md-group" />
          <SRadio v-model="md" value="b" label="Option B" size="medium" name="md-group" />
        </SSpace>
        <SSpace size="spacious">
          <SRadio v-model="lg" value="a" label="Option A" size="large" name="lg-group" />
          <SRadio v-model="lg" value="b" label="Option B" size="large" name="lg-group" />
        </SSpace>
      </SSpace>
    </SCard>
    <div class="pt-4 space-y-3">
      <p class="text-sm font-semibold text-rain-mint/80 uppercase tracking-wide">Usage</p>
      <SCode :code="code" />
    </div>
  </section>
</template>
