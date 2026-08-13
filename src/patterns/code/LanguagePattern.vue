<script setup lang="ts">
import SCode from '../../components/SCode.vue';

const tsCode = `interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
}`;

const cssCode = `:root {
  --color-rain-mint: #B7E1CB;
  --color-garden-deep: #0C1D20;
  --radius-field: 14px;
}`;

const code = `<SCode :code="tsExample" language="typescript" />
<SCode :code="cssExample" language="css" />`;
</script>

<template>
  <section class="space-y-6">
    <div>
      <h3 class="text-lg font-display font-extrabold text-mist">Language</h3>
      <p class="text-sm text-leaf-muted mt-1">Set the language prop to display a label in the header. Defaults to "vue".</p>
    </div>
    <div class="space-y-4">
      <SCode :code="tsCode" language="typescript" />
      <SCode :code="cssCode" language="css" />
    </div>
    <div class="pt-4 space-y-3">
      <p class="text-sm font-semibold text-rain-mint/80 uppercase tracking-wide">Usage</p>
      <SCode :code="code" />
    </div>
  </section>
</template>
