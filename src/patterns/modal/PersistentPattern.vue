<script setup lang="ts">
import { ref } from 'vue';
import SModal from '../../components/SModal.vue';
import SButton from '../../components/SButton.vue';
import SCard from '../../components/SCard.vue';
import SCode from '../../components/SCode.vue';

const open = ref(false);

const code = `<!-- Cannot be closed by clicking backdrop or pressing Escape -->
<SModal :open="open" title="Important" persistent @close="open = false">
  <p>You must take action to close this modal.</p>
  <template #footer>
    <SButton label="I understand" @click="open = false" />
  </template>
</SModal>`;
</script>

<template>
  <section class="space-y-6">
    <div>
      <h3 class="text-lg font-display font-extrabold text-mist">Persistent</h3>
      <p class="text-sm text-leaf-muted mt-1">A persistent modal cannot be dismissed by clicking the backdrop or pressing Escape. The user must interact with the content to close it.</p>
    </div>
    <SCard>
      <SButton label="Open persistent modal" variant="danger" @click="open = true" />
      <SModal :open="open" title="Are you sure?" persistent @close="open = false">
        <p class="text-sm text-leaf-muted">This action cannot be undone. You must click a button to dismiss this modal — clicking outside won't work.</p>
        <template #footer>
          <div class="flex justify-end gap-3">
            <SButton label="Cancel" variant="ghost" size="small" @click="open = false" />
            <SButton label="Delete" variant="danger" size="small" @click="open = false" />
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
