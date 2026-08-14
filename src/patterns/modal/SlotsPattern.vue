<script setup lang="ts">
import { ref } from 'vue';
import SModal from '../../components/SModal.vue';
import SButton from '../../components/SButton.vue';
import SBadge from '../../components/SBadge.vue';
import SCard from '../../components/SCard.vue';
import SCode from '../../components/SCode.vue';

const open = ref(false);

const code = `<SModal :open="open" @close="open = false">
  <template #header>
    <div class="flex items-center gap-2">
      <h3>Custom header</h3>
      <SBadge label="New" variant="primary" size="small" />
    </div>
  </template>

  <p>Custom body content with any markup.</p>

  <template #footer>
    <SButton label="Done" @click="open = false" />
  </template>
</SModal>`;
</script>

<template>
  <section class="space-y-6">
    <div>
      <h3 class="text-lg font-display font-extrabold text-mist">Custom slots</h3>
      <p class="text-sm text-leaf-muted mt-1">Use the <code class="text-rain-mint/80 text-xs bg-rain-mint/10 px-1.5 py-0.5 rounded">header</code>, default, and <code class="text-rain-mint/80 text-xs bg-rain-mint/10 px-1.5 py-0.5 rounded">footer</code> slots for full customization.</p>
    </div>
    <SCard>
      <SButton label="Open custom modal" variant="secondary" @click="open = true" />
      <SModal :open="open" @close="open = false">
        <template #header>
          <div class="flex items-center gap-2">
            <h3 class="font-display text-lg font-extrabold text-mist">Custom header</h3>
            <SBadge label="New" variant="primary" size="small" />
          </div>
        </template>

        <div class="space-y-3">
          <p class="text-sm text-leaf-muted">This modal uses custom slots for header, body, and footer. You can put any content you want.</p>
          <div class="flex gap-2">
            <SBadge label="Vue 3" variant="primary" />
            <SBadge label="Tailwind" variant="secondary" />
            <SBadge label="TypeScript" variant="tertiary" />
          </div>
        </div>

        <template #footer>
          <div class="flex justify-end">
            <SButton label="Done" variant="primary" size="small" @click="open = false" />
          </div>
        </template>
      </SModal>
    </SCard>
    <div class="pt-4 space-y-3">
      <p class="text-sm font-semibold text-rain-mint/80 uppercase tracking-wide">Usage</p>
      <SCode :code="code" />
    </div>
  </section>
</template>
