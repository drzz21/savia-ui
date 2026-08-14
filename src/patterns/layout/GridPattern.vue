<script setup lang="ts">
import SGrid from '../../components/SGrid.vue';
import SCard from '../../components/SCard.vue';
import SCode from '../../components/SCode.vue';

const code = `<!-- Fixed columns -->
<SGrid :cols="3" :gap="4">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</SGrid>

<!-- Responsive auto-fit -->
<SGrid min-item-width="160px" :gap="3">
  <div v-for="n in 8">{{ n }}</div>
</SGrid>`;
</script>

<template>
  <section class="space-y-6">
    <div>
      <h3 class="text-lg font-display font-extrabold text-mist">Grid</h3>
      <p class="text-sm text-leaf-muted mt-1">A CSS grid wrapper. Use <code class="text-rain-mint/80 text-xs bg-rain-mint/10 px-1.5 py-0.5 rounded">cols</code> for a fixed layout or <code class="text-rain-mint/80 text-xs bg-rain-mint/10 px-1.5 py-0.5 rounded">min-item-width</code> for a responsive auto-fit grid.</p>
    </div>
    <SCard>
      <div class="space-y-6">
        <div class="space-y-2">
          <p class="text-xs text-leaf-muted uppercase tracking-wide">Fixed — 4 columns</p>
          <SGrid :cols="4" :gap="3">
            <div
              v-for="n in 8"
              :key="n"
              class="h-12 rounded-[var(--radius-field)] bg-rain-mint/15 flex items-center justify-center text-xs text-rain-mint font-bold"
            >
              {{ n }}
            </div>
          </SGrid>
        </div>

        <div class="space-y-2">
          <p class="text-xs text-leaf-muted uppercase tracking-wide">Responsive — auto-fit 140px</p>
          <SGrid min-item-width="140px" :gap="3">
            <div
              v-for="n in 6"
              :key="n"
              class="h-12 rounded-[var(--radius-field)] bg-rain-blue/15 flex items-center justify-center text-xs text-rain-blue font-bold"
            >
              Item {{ n }}
            </div>
          </SGrid>
        </div>
      </div>
    </SCard>
    <div class="pt-4 space-y-3">
      <p class="text-sm font-semibold text-rain-mint/80 uppercase tracking-wide">Usage</p>
      <SCode :code="code" />
    </div>
  </section>
</template>
