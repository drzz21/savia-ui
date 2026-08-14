<script setup lang="ts">
import SBreadcrumbs from '../../components/SBreadcrumbs.vue';
import SCard from '../../components/SCard.vue';
import SCode from '../../components/SCode.vue';

const items = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Category', href: '/products/category' },
  { label: 'Item' },
];

const code = `<!-- Chevron (default) -->
<SBreadcrumbs :items="items" separator="chevron" />

<!-- Slash -->
<SBreadcrumbs :items="items" separator="slash" />

<!-- Dot -->
<SBreadcrumbs :items="items" separator="dot" />`;
</script>

<template>
  <section class="space-y-6">
    <div>
      <h3 class="text-lg font-display font-extrabold text-mist">Separators</h3>
      <p class="text-sm text-leaf-muted mt-1">Three separator styles: <code class="text-rain-mint/80 text-xs bg-rain-mint/10 px-1.5 py-0.5 rounded">chevron</code> (default), <code class="text-rain-mint/80 text-xs bg-rain-mint/10 px-1.5 py-0.5 rounded">slash</code>, and <code class="text-rain-mint/80 text-xs bg-rain-mint/10 px-1.5 py-0.5 rounded">dot</code>.</p>
    </div>
    <SCard>
      <div class="space-y-4">
        <div class="space-y-1">
          <p class="text-xs text-leaf-muted uppercase tracking-wide">Chevron</p>
          <SBreadcrumbs :items="items" separator="chevron" />
        </div>
        <div class="space-y-1">
          <p class="text-xs text-leaf-muted uppercase tracking-wide">Slash</p>
          <SBreadcrumbs :items="items" separator="slash" />
        </div>
        <div class="space-y-1">
          <p class="text-xs text-leaf-muted uppercase tracking-wide">Dot</p>
          <SBreadcrumbs :items="items" separator="dot" />
        </div>
      </div>
    </SCard>
    <div class="pt-4 space-y-3">
      <p class="text-sm font-semibold text-rain-mint/80 uppercase tracking-wide">Usage</p>
      <SCode :code="code" />
    </div>
  </section>
</template>
