<script setup lang="ts">
import { ref } from 'vue';
import SBreadcrumbs from '../../components/SBreadcrumbs.vue';
import SCard from '../../components/SCard.vue';
import SCode from '../../components/SCode.vue';

const items = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Settings', href: '/settings' },
  { label: 'Profile', href: '/profile' },
  { label: 'Edit' },
];

const lastClicked = ref('');

function handleNavigate(item: { label: string; href?: string }) {
  lastClicked.value = `Navigated to: ${item.label} (${item.href})`;
}

const code = `<script setup>
function handleNavigate(item, index) {
  router.push(item.href);
}
<\/script>

<template>
  <SBreadcrumbs
    :items="items"
    @navigate="handleNavigate"
  />
</template>`;
</script>

<template>
  <section class="space-y-6">
    <div>
      <h3 class="text-lg font-display font-extrabold text-mist">Events</h3>
      <p class="text-sm text-leaf-muted mt-1">Listen to the <code class="text-rain-mint/80 text-xs bg-rain-mint/10 px-1.5 py-0.5 rounded">navigate</code> event to handle navigation programmatically.</p>
    </div>
    <SCard>
      <div class="space-y-3">
        <SBreadcrumbs :items="items" @navigate="handleNavigate" />
        <p v-if="lastClicked" class="text-xs text-rain-mint bg-rain-mint/10 px-3 py-1.5 rounded-[var(--radius-field)] inline-block">{{ lastClicked }}</p>
      </div>
    </SCard>
    <div class="pt-4 space-y-3">
      <p class="text-sm font-semibold text-rain-mint/80 uppercase tracking-wide">Usage</p>
      <SCode :code="code" />
    </div>
  </section>
</template>
