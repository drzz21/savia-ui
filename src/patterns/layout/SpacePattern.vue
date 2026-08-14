<script setup lang="ts">
import SSpace from '../../components/SSpace.vue';
import SButton from '../../components/SButton.vue';
import SCard from '../../components/SCard.vue';
import SCode from '../../components/SCode.vue';

const sizes = ['compact', 'base', 'spacious'] as const;

const code = `<!-- Horizontal spacing -->
<SSpace size="base">
  <SButton label="Save" />
  <SButton label="Cancel" variant="ghost" />
</SSpace>

<!-- Vertical -->
<SSpace direction="vertical" size="compact">...</SSpace>

<!-- Align -->
<SSpace size="base" align="start">...</SSpace>
<SSpace size="base" align="end">...</SSpace>

<!-- No wrap -->
<SSpace size="base" :wrap="false">...</SSpace>`;
</script>

<template>
  <section class="space-y-6">
    <div>
      <h3 class="text-lg font-display font-extrabold text-mist">Space</h3>
      <p class="text-sm text-leaf-muted mt-1">Distributes children using the design system spacing tokens — <code class="text-rain-mint/80 text-xs bg-rain-mint/10 px-1.5 py-0.5 rounded">compact</code> (8px), <code class="text-rain-mint/80 text-xs bg-rain-mint/10 px-1.5 py-0.5 rounded">base</code> (16px) and <code class="text-rain-mint/80 text-xs bg-rain-mint/10 px-1.5 py-0.5 rounded">spacious</code> (32px).</p>
    </div>
    <SCard>
      <div class="space-y-6">
        <div v-for="s in sizes" :key="s" class="space-y-2">
          <p class="text-xs text-leaf-muted uppercase tracking-wide">{{ s }}</p>
          <SSpace :size="s">
            <SButton label="Save" variant="primary" size="small" />
            <SButton label="Cancel" variant="ghost" size="small" />
            <SButton label="Delete" variant="danger" size="small" />
          </SSpace>
        </div>

        <div class="space-y-2">
          <p class="text-xs text-leaf-muted uppercase tracking-wide">Vertical</p>
          <SSpace direction="vertical" size="compact" align="start">
            <SButton label="First" variant="secondary" size="small" />
            <SButton label="Second" variant="secondary" size="small" />
          </SSpace>
        </div>

        <div class="space-y-2">
          <p class="text-xs text-leaf-muted uppercase tracking-wide">Align start</p>
          <div class="h-20 border border-leaf-muted/20 rounded-[var(--radius-field)] p-2">
            <SSpace size="base" align="start" class="h-full">
              <SButton label="A" variant="primary" size="small" />
              <SButton label="B" variant="primary" size="large" />
            </SSpace>
          </div>
        </div>

        <div class="space-y-2">
          <p class="text-xs text-leaf-muted uppercase tracking-wide">Align end</p>
          <div class="h-20 border border-leaf-muted/20 rounded-[var(--radius-field)] p-2">
            <SSpace size="base" align="end" class="h-full">
              <SButton label="A" variant="primary" size="small" />
              <SButton label="B" variant="primary" size="large" />
            </SSpace>
          </div>
        </div>

        <div class="space-y-2">
          <p class="text-xs text-leaf-muted uppercase tracking-wide">Wrap (default: true)</p>
          <div class="w-64 border border-leaf-muted/20 rounded-[var(--radius-field)] p-2">
            <SSpace size="base">
              <SButton label="One" variant="tertiary" size="small" />
              <SButton label="Two" variant="tertiary" size="small" />
              <SButton label="Three" variant="tertiary" size="small" />
              <SButton label="Four" variant="tertiary" size="small" />
              <SButton label="Five" variant="tertiary" size="small" />
            </SSpace>
          </div>
        </div>

        <div class="space-y-2">
          <p class="text-xs text-leaf-muted uppercase tracking-wide">No wrap</p>
          <div class="w-64 border border-leaf-muted/20 rounded-[var(--radius-field)] p-2 overflow-x-auto">
            <SSpace size="base" :wrap="false">
              <SButton label="One" variant="tertiary" size="small" />
              <SButton label="Two" variant="tertiary" size="small" />
              <SButton label="Three" variant="tertiary" size="small" />
              <SButton label="Four" variant="tertiary" size="small" />
              <SButton label="Five" variant="tertiary" size="small" />
            </SSpace>
          </div>
        </div>
      </div>
    </SCard>
    <div class="pt-4 space-y-3">
      <p class="text-sm font-semibold text-rain-mint/80 uppercase tracking-wide">Usage</p>
      <SCode :code="code" />
    </div>
  </section>
</template>
