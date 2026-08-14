<script setup lang="ts">
import SMasonry from '../../components/SMasonry.vue';
import SCard from '../../components/SCard.vue';
import SCode from '../../components/SCode.vue';

const heights = [80, 130, 60, 110, 90, 150, 70, 100, 120];

const code = `<SMasonry :columns="3" :gap="3">
  <div v-for="item in items" :key="item.id">
    {{ item.title }}
  </div>
</SMasonry>`;
</script>

<template>
  <section class="space-y-6">
    <div>
      <h3 class="text-lg font-display font-extrabold text-mist">Masonry</h3>
      <p class="text-sm text-leaf-muted mt-1">Flows items into columns of variable height, filling gaps naturally — ideal for galleries and card feeds.</p>
    </div>
    <SCard>
      <SMasonry :columns="3" :gap="3">
        <div
          v-for="(h, i) in heights"
          :key="i"
          class="rounded-[var(--radius-field)] bg-rain-mint/12 border border-rain-mint/20 flex items-center justify-center text-xs font-bold text-rain-mint"
          :style="{ height: `${h}px` }"
        >
          {{ i + 1 }}
        </div>
      </SMasonry>
    </SCard>
    <div class="pt-4 space-y-3">
      <p class="text-sm font-semibold text-rain-mint/80 uppercase tracking-wide">Usage</p>
      <SCode :code="code" />
    </div>
  </section>
</template>
