<script setup lang="ts">
import { ref } from 'vue';
import SInputText from '../../components/SInputText.vue';
import SCard from '../../components/SCard.vue';
import SCode from '../../components/SCode.vue';

const query = ref('Savia UI');
const cleared = ref(false);

function handleClear() {
  cleared.value = true;
  setTimeout(() => (cleared.value = false), 1500);
}

const code = `<SInputText
  v-model="query"
  icon-left="search"
  placeholder="Search..."
  clearable
  @clear="onClear"
/>`;
</script>

<template>
  <section class="space-y-6">
    <div>
      <h3 class="text-lg font-display font-extrabold text-mist">Clearable</h3>
      <p class="text-sm text-leaf-muted mt-1">With <code class="text-rain-mint/80 text-xs bg-rain-mint/10 px-1.5 py-0.5 rounded">clearable</code>, a reset button appears while the field has a value and emits a <code class="text-rain-mint/80 text-xs bg-rain-mint/10 px-1.5 py-0.5 rounded">clear</code> event.</p>
    </div>
    <SCard>
      <div class="space-y-3">
        <SInputText v-model="query" icon-left="search" type="search" placeholder="Search..." clearable @clear="handleClear" />
        <p v-if="cleared" class="text-xs text-rain-mint bg-rain-mint/10 px-3 py-1.5 rounded-[var(--radius-field)] inline-block">
          clear event emitted
        </p>
      </div>
    </SCard>
    <div class="pt-4 space-y-3">
      <p class="text-sm font-semibold text-rain-mint/80 uppercase tracking-wide">Usage</p>
      <SCode :code="code" />
    </div>
  </section>
</template>
