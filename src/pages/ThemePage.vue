<script setup lang="ts">
import SCard from '../components/SCard.vue';
</script>

<template>
  <div class="space-y-12">
    <h2 class="font-display text-3xl font-extrabold tracking-tight text-mist">Theme</h2>

    <h3 class="font-display text-2xl font-bold tracking-tight text-mist">Default values</h3>

    <!-- Color palette -->
    <div class="space-y-4">
      <h3 class="text-sm font-semibold text-leaf-muted uppercase tracking-wide">Color palette</h3>
      <div class="grid grid-cols-4 gap-3">
        <div class="space-y-1.5">
          <div class="h-14 rounded-[var(--radius-field)] bg-garden-night border border-leaf-muted/20"></div>
          <p class="text-[11px] text-leaf-muted">garden-night</p>
        </div>
        <div class="space-y-1.5">
          <div class="h-14 rounded-[var(--radius-field)] bg-garden-deep border border-leaf-muted/20"></div>
          <p class="text-[11px] text-leaf-muted">garden-deep</p>
        </div>
        <div class="space-y-1.5">
          <div class="h-14 rounded-[var(--radius-field)] bg-rain-mint"></div>
          <p class="text-[11px] text-leaf-muted">rain-mint</p>
        </div>
        <div class="space-y-1.5">
          <div class="h-14 rounded-[var(--radius-field)] bg-rain-blue"></div>
          <p class="text-[11px] text-leaf-muted">rain-blue</p>
        </div>
        <div class="space-y-1.5">
          <div class="h-14 rounded-[var(--radius-field)] bg-bloom-coral"></div>
          <p class="text-[11px] text-leaf-muted">bloom-coral</p>
        </div>
        <div class="space-y-1.5">
          <div class="h-14 rounded-[var(--radius-field)] bg-mist"></div>
          <p class="text-[11px] text-leaf-muted">mist</p>
        </div>
        <div class="space-y-1.5">
          <div class="h-14 rounded-[var(--radius-field)] bg-leaf-muted"></div>
          <p class="text-[11px] text-leaf-muted">leaf-muted</p>
        </div>
        <div class="space-y-1.5">
          <div class="h-14 rounded-[var(--radius-field)] bg-error"></div>
          <p class="text-[11px] text-leaf-muted">error</p>
        </div>
      </div>
    </div>

    <!-- Typography -->
    <div class="space-y-4">
      <h3 class="text-sm font-semibold text-leaf-muted uppercase tracking-wide">Typography</h3>
      <SCard>
        <div class="space-y-4">
          <div>
            <p class="text-xs text-leaf-muted mb-1">Display — Figtree 800</p>
            <p class="font-display text-4xl font-extrabold tracking-[-0.04em] leading-[0.98]">Lorem ipsum dolor sit</p>
          </div>
          <div class="border-t border-leaf-muted/10 pt-4">
            <p class="text-xs text-leaf-muted mb-1">Body — Nunito Sans 500</p>
            <p class="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
          </div>
        </div>
      </SCard>
    </div>

    <!-- Radius and spacing -->
    <!-- <div class="space-y-4">
      <h3 class="text-sm font-semibold text-leaf-muted uppercase tracking-wide">Radius & spacing</h3>
      <SCard>
        <div class="flex gap-6 items-end">
          <div class="text-center space-y-2">
            <div class="w-16 h-10 bg-rain-mint/20 border border-rain-mint/40 rounded-[var(--radius-field)]"></div>
            <p class="text-[11px] text-leaf-muted">field · 14px</p>
          </div>
          <div class="text-center space-y-2">
            <div class="w-20 h-14 bg-rain-mint/20 border border-rain-mint/40 rounded-[var(--radius-panel)]"></div>
            <p class="text-[11px] text-leaf-muted">panel · 22px</p>
          </div>
        </div>
      </SCard>
    </div> -->
  </div>
</template>
