<script setup lang="ts">
import { ref } from 'vue';
import SModal from '../../components/SModal.vue';
import SButton from '../../components/SButton.vue';
import SCard from '../../components/SCard.vue';
import SCode from '../../components/SCode.vue';

const openSmall = ref(false);
const openMedium = ref(false);
const openLarge = ref(false);

const code = `<SModal :open="open" title="Small" size="small" @close="open = false">
  ...
</SModal>

<SModal :open="open" title="Medium" size="medium" @close="open = false">
  ...
</SModal>

<SModal :open="open" title="Large" size="large" @close="open = false">
  ...
</SModal>`;
</script>

<template>
  <section class="space-y-6">
    <div>
      <h3 class="text-lg font-display font-extrabold text-mist">Sizes</h3>
      <p class="text-sm text-leaf-muted mt-1">Four size options: <code class="text-rain-mint/80 text-xs bg-rain-mint/10 px-1.5 py-0.5 rounded">small</code>, <code class="text-rain-mint/80 text-xs bg-rain-mint/10 px-1.5 py-0.5 rounded">medium</code> (default), <code class="text-rain-mint/80 text-xs bg-rain-mint/10 px-1.5 py-0.5 rounded">large</code>, and <code class="text-rain-mint/80 text-xs bg-rain-mint/10 px-1.5 py-0.5 rounded">full</code>.</p>
    </div>
    <SCard>
      <div class="flex flex-wrap gap-3">
        <SButton label="Small" variant="ghost" size="small" @click="openSmall = true" />
        <SButton label="Medium" variant="ghost" size="small" @click="openMedium = true" />
        <SButton label="Large" variant="ghost" size="small" @click="openLarge = true" />
      </div>

      <SModal :open="openSmall" title="Small modal" size="small" @close="openSmall = false">
        <p class="text-sm text-leaf-muted">This is a small modal, suitable for confirmations or short messages.</p>
      </SModal>

      <SModal :open="openMedium" title="Medium modal" size="medium" @close="openMedium = false">
        <p class="text-sm text-leaf-muted">This is the default medium modal size. Good for forms and general content.</p>
      </SModal>

      <SModal :open="openLarge" title="Large modal" size="large" @close="openLarge = false">
        <p class="text-sm text-leaf-muted">This is a large modal, perfect for complex forms, tables, or rich content that needs more room.</p>
      </SModal>
    </SCard>
    <div class="pt-4 space-y-3">
      <p class="text-sm font-semibold text-rain-mint/80 uppercase tracking-wide">Usage</p>
      <SCode :code="code" />
    </div>
  </section>
</template>
