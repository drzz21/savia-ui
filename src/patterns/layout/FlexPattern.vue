<script setup lang="ts">
import SFlex from '../../components/SFlex.vue';
import SCard from '../../components/SCard.vue';
import SCode from '../../components/SCode.vue';
import SBadge from '../../components/SBadge.vue';

const code = `<!-- Row with gap -->
<SFlex :gap="3">
  <div>One</div>
  <div>Two</div>
</SFlex>

<!-- Distribute space -->
<SFlex justify="between" align="center">...</SFlex>

<!-- Stack vertically -->
<SFlex direction="column" :gap="2">...</SFlex>

<!-- Wrap overflow -->
<SFlex wrap :gap="2">...</SFlex>`;

const justifyOptions = ['start', 'center', 'end', 'between', 'around', 'evenly'] as const;
</script>

<template>
  <section class="space-y-6">
    <div>
      <h3 class="text-lg font-display font-extrabold text-mist">Flex</h3>
      <p class="text-sm text-leaf-muted mt-1">A flexbox wrapper with props for <code class="text-rain-mint/80 text-xs bg-rain-mint/10 px-1.5 py-0.5 rounded">direction</code>, <code class="text-rain-mint/80 text-xs bg-rain-mint/10 px-1.5 py-0.5 rounded">justify</code>, <code class="text-rain-mint/80 text-xs bg-rain-mint/10 px-1.5 py-0.5 rounded">align</code>, <code class="text-rain-mint/80 text-xs bg-rain-mint/10 px-1.5 py-0.5 rounded">gap</code> and <code class="text-rain-mint/80 text-xs bg-rain-mint/10 px-1.5 py-0.5 rounded">wrap</code>.</p>
    </div>
    <SCard>
      <div class="space-y-6">
        <div class="space-y-2">
          <p class="text-xs text-leaf-muted uppercase tracking-wide">Justify</p>
          <div class="space-y-2">
            <div v-for="j in justifyOptions" :key="j" class="space-y-1">
              <p class="text-[10px] text-leaf-muted/70 font-mono">{{ j }}</p>
              <SFlex :justify="j" :gap="2" class="bg-garden-deep/60 rounded-[var(--radius-field)] p-2">
                <div class="size-8 rounded bg-rain-mint/30" />
                <div class="size-8 rounded bg-rain-blue/30" />
                <div class="size-8 rounded bg-bloom-coral/30" />
              </SFlex>
            </div>
          </div>
        </div>

        <div class="space-y-2">
          <p class="text-xs text-leaf-muted uppercase tracking-wide">Column direction</p>
          <SFlex direction="column" :gap="2" class="bg-garden-deep/60 rounded-[var(--radius-field)] p-2">
            <div class="h-8 rounded bg-rain-mint/30" />
            <div class="h-8 rounded bg-rain-blue/30" />
          </SFlex>
        </div>

        <div class="space-y-2">
          <p class="text-xs text-leaf-muted uppercase tracking-wide">Wrap</p>
          <SFlex wrap :gap="2" class="bg-garden-deep/60 rounded-[var(--radius-field)] p-2 max-w-xs">
            <SBadge v-for="n in 12" :key="n" :label="`Tag ${n}`" variant="tertiary" />
          </SFlex>
        </div>
      </div>
    </SCard>
    <div class="pt-4 space-y-3">
      <p class="text-sm font-semibold text-rain-mint/80 uppercase tracking-wide">Usage</p>
      <SCode :code="code" />
    </div>
  </section>
</template>
