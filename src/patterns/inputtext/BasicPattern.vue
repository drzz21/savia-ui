<script setup lang="ts">
import { ref } from 'vue';
import SInputText from '../../components/SInputText.vue';
import SCard from '../../components/SCard.vue';
import SCode from '../../components/SCode.vue';

const name = ref('');
const email = ref('');

const code = `<script setup>
import { ref } from 'vue';
const name = ref('');
const email = ref('');
<\/script>

<template>
  <SInputText
    v-model="name"
    label="Full name"
    placeholder="Jane Doe"
  />

  <SInputText
    v-model="email"
    label="Email"
    type="email"
    hint="We'll never share it."
    required
  />

  <p class="text-xs text-leaf-muted">
      Full name: <span class="text-rain-mint font-mono">{{ name || '—' }}</span>
  </p>
  <p class="text-xs text-leaf-muted">
      Email: <span class="text-rain-mint font-mono">{{ email || '—' }}</span>
  </p>
</template>`;
</script>

<template>
  <section class="space-y-6">
    <div>
      <h3 class="text-lg font-display font-extrabold text-mist">Basic</h3>
      <p class="text-sm text-leaf-muted mt-1">A text field with <code class="text-rain-mint/80 text-xs bg-rain-mint/10 px-1.5 py-0.5 rounded">v-model</code>, optional label, placeholder and helper text. Mark it <code class="text-rain-mint/80 text-xs bg-rain-mint/10 px-1.5 py-0.5 rounded">required</code> to show an asterisk.</p>
    </div>
    <SCard>
      <div class="space-y-5">
        <SInputText v-model="name" label="Name" placeholder="Jane Doe" />
        <SInputText v-model="email" label="Email" type="email" placeholder="jane@example.com" hint="We'll never share it." required />
        <p class="text-xs text-leaf-muted">
          Name: <span class="text-rain-mint font-mono">{{ name || '—' }}</span>
        </p>
        <p class="text-xs text-leaf-muted">
          Email: <span class="text-rain-mint font-mono">{{ email || '—' }}</span>
        </p>
      </div>
    </SCard>
    <div class="pt-4 space-y-3">
      <p class="text-sm font-semibold text-rain-mint/80 uppercase tracking-wide">Usage</p>
      <SCode :code="code" />
    </div>
  </section>
</template>
