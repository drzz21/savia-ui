<script setup lang="ts">
import SDivider from '../../components/SDivider.vue';
import SCard from '../../components/SCard.vue';
import SCode from '../../components/SCode.vue';

const code = `<!-- Plain -->
<SDivider />

<!-- With label -->
<SDivider label="OR" />
<SDivider label="Section" align="start" />

<!-- Line styles -->
<SDivider variant="dashed" />
<SDivider variant="dotted" />

<!-- Vertical -->
<div class="flex h-10">
  <span>Left</span>
  <SDivider vertical />
  <span>Right</span>
</div>`;
</script>

<template>
  <section class="space-y-6">
    <div>
      <h3 class="text-lg font-display font-extrabold text-mist">Divider</h3>
      <p class="text-sm text-leaf-muted mt-1">Separates content with a horizontal or vertical line. Supports an optional label and three line styles.</p>
    </div>
    <SCard>
      <div class="space-y-6">
        <div class="space-y-3">
          <p class="text-xs text-leaf-muted uppercase tracking-wide">Plain &amp; labeled</p>
          <SDivider />
          <SDivider label="OR" />
          <SDivider label="Section start" align="start" />
        </div>

        <div class="space-y-3">
          <p class="text-xs text-leaf-muted uppercase tracking-wide">Line styles</p>
          <SDivider variant="solid" label="solid" />
          <SDivider variant="dashed" label="dashed" />
          <SDivider variant="dotted" label="dotted" />
        </div>

        <div class="space-y-3">
          <p class="text-xs text-leaf-muted uppercase tracking-wide">Vertical</p>
          <div class="flex items-center h-10 text-sm text-mist">
            <span>Home</span>
            <SDivider vertical />
            <span>Docs</span>
            <SDivider vertical />
            <span>Support</span>
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
