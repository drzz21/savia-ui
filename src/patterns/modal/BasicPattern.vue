<script setup lang="ts">
import { ref } from 'vue';
import SModal from '../../components/SModal.vue';
import SButton from '../../components/SButton.vue';
import SCard from '../../components/SCard.vue';
import SCode from '../../components/SCode.vue';

const open = ref(false);

const code = `<script setup>
import { ref } from 'vue';
const open = ref(false);
<\/script>

<template>
  <SButton label="Open modal" @click="open = true" />
  <SModal :open="open" title="Welcome" @close="open = false">
    <p>This is the modal content.</p>
    <template #footer>
      <SButton label="Close" variant="ghost" @click="open = false" />
    </template>
  </SModal>
</template>`;
</script>

<template>
  <section class="space-y-6">
    <div>
      <h3 class="text-lg font-display font-extrabold text-mist">Basic</h3>
      <p class="text-sm text-leaf-muted mt-1">A simple modal with title, content, and footer. Click the backdrop or press Escape to close.</p>
    </div>
    <SCard>
      <SButton label="Open modal" variant="primary" @click="open = true" />
      <SModal :open="open" title="Welcome" @close="open = false">
        <p class="text-sm text-leaf-muted">This is a basic modal with some content. Click outside or press Escape to close it.</p>
        <template #footer>
          <div class="flex justify-end gap-3">
            <SButton label="Cancel" variant="ghost" size="small" @click="open = false" />
            <SButton label="Confirm" variant="primary" size="small" @click="open = false" />
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
