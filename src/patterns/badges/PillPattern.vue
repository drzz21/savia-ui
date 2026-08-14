<script setup lang="ts">
import SBadge from '../../components/SBadge.vue';
import SCard from '../../components/SCard.vue';
import SCode from '../../components/SCode.vue';

const variants = ['primary', 'secondary', 'tertiary', 'danger', 'ghost'] as const;

const code = `<!-- Default (squared) -->
<SBadge label="Default" />

<!-- Pill (rounded) -->
<SBadge label="Pill" pill />`;
</script>

<template>
  <section class="space-y-6">
    <div>
      <h3 class="text-lg font-display font-extrabold text-mist">Pill</h3>
      <p class="text-sm text-leaf-muted mt-1">By default badges have a squared shape with slight radius. Add the <code class="text-rain-mint/80 text-xs bg-rain-mint/10 px-1.5 py-0.5 rounded">pill</code> prop to make them fully rounded.</p>
    </div>
    <SCard>
      <div class="space-y-4">
        <div>
          <p class="text-xs text-leaf-muted mb-2 uppercase tracking-wide">Default (squared)</p>
          <div class="flex flex-wrap gap-3 items-center">
            <SBadge v-for="v in variants" :key="v" :variant="v" :label="v" />
          </div>
        </div>
        <div>
          <p class="text-xs text-leaf-muted mb-2 uppercase tracking-wide">Pill (rounded)</p>
          <div class="flex flex-wrap gap-3 items-center">
            <SBadge v-for="v in variants" :key="v" :variant="v" :label="v" pill />
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
