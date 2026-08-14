<script setup lang="ts">
import SBreadcrumbs from '../../components/SBreadcrumbs.vue';
import SCard from '../../components/SCard.vue';
import SCode from '../../components/SCode.vue';

const items = [
  { label: 'Home', href: '/' },
  { label: 'Components', href: '/components' },
  { label: 'Breadcrumbs' },
];

const code = `<SBreadcrumbs
  :items="[
    { label: 'Home', href: '/' },
    { label: 'Components', href: '/components' },
    { label: 'Breadcrumbs' },
  ]"
  @navigate="(item) => router.push(item.href)"
/>`;
</script>

<template>
  <section class="space-y-6">
    <div>
      <h3 class="text-lg font-display font-extrabold text-mist">Basic</h3>
      <p class="text-sm text-leaf-muted mt-1">A simple breadcrumb navigation. The last item is highlighted as the current page and is not clickable.</p>
    </div>
    <SCard>
      <SBreadcrumbs :items="items" />
    </SCard>
    <div class="pt-4 space-y-3">
      <p class="text-sm font-semibold text-rain-mint/80 uppercase tracking-wide">Usage</p>
      <SCode :code="code" />
    </div>
  </section>
</template>
