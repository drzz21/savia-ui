<script setup lang="ts">
import { ref } from 'vue';
import SInputText from '../../components/SInputText.vue';
import SCard from '../../components/SCard.vue';
import SCode from '../../components/SCode.vue';

const small = ref('');
const medium = ref('');
const large = ref('');

const code = `<SInputText size="small" placeholder="Small" />
<SInputText size="medium" placeholder="Medium" />
<SInputText size="large" placeholder="Large" />`;
</script>

<template>
  <section class="space-y-6">
    <div>
      <h3 class="text-lg font-display font-extrabold text-mist">Sizes</h3>
      <p class="text-sm text-leaf-muted mt-1">Three sizes matching the button scale, so fields and actions align in a form row.</p>
    </div>
    <SCard>
      <div class="space-y-4">
        <SInputText v-model="small" size="small" label="Small" placeholder="Small field" />
        <SInputText v-model="medium" size="medium" label="Medium" placeholder="Medium field" />
        <SInputText v-model="large" size="large" label="Large" placeholder="Large field" />
      </div>
    </SCard>
    <div class="pt-4 space-y-3">
      <p class="text-sm font-semibold text-rain-mint/80 uppercase tracking-wide">Usage</p>
      <SCode :code="code" />
    </div>
  </section>
</template>
