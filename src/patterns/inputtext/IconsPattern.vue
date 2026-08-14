<script setup lang="ts">
import { ref } from 'vue';
import SInputText from '../../components/SInputText.vue';
import SCard from '../../components/SCard.vue';
import SCode from '../../components/SCode.vue';

const search = ref('');
const mail = ref('');
const user = ref('');

const code = `<!-- Icon on the left -->
<SInputText icon-left="search" placeholder="Search..." />

<!-- Icon on the right -->
<SInputText icon-right="check" placeholder="Validated" />

<!-- Both -->
<SInputText icon-left="mail" icon-right="check" />`;
</script>

<template>
  <section class="space-y-6">
    <div>
      <h3 class="text-lg font-display font-extrabold text-mist">Icons</h3>
      <p class="text-sm text-leaf-muted mt-1">Pass <code class="text-rain-mint/80 text-xs bg-rain-mint/10 px-1.5 py-0.5 rounded">icon-left</code> or <code class="text-rain-mint/80 text-xs bg-rain-mint/10 px-1.5 py-0.5 rounded">icon-right</code> with the name of a symbol from the SVG sprite. Padding adjusts automatically.</p>
    </div>
    <SCard>
      <div class="space-y-4">
        <SInputText v-model="search" type="search" icon-left="search" placeholder="Search components..." />
        <SInputText v-model="mail" type="email" icon-left="mail" placeholder="jane@example.com" />
        <SInputText v-model="user" icon-left="user" icon-right="check" placeholder="Username available" />
      </div>
    </SCard>
    <div class="pt-4 space-y-3">
      <p class="text-sm font-semibold text-rain-mint/80 uppercase tracking-wide">Usage</p>
      <SCode :code="code" />
    </div>
  </section>
</template>
