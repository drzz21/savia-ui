<script setup lang="ts">
import SButton from '../../components/SButton.vue';
import SCard from '../../components/SCard.vue';
import SCode from '../../components/SCode.vue';

const code = `<SCard padding="large">
  <h4>Panel title</h4>
  <p>Description text inside the card.</p>
  <div class="flex gap-3">
    <SButton label="Confirm" size="small" icon-right="arrow-right" />
    <SButton label="Cancel" variant="ghost" type="outlined" size="small" />
  </div>
</SCard>`;
</script>

<template>
  <section class="space-y-6">
    <div>
      <h3 class="text-lg font-display font-extrabold text-mist">Composition</h3>
      <p class="text-sm text-leaf-muted mt-1">Cards are slotted containers. Compose headings, text, buttons, and any content inside them freely.</p>
    </div>
    <SCard padding="large">
      <div class="space-y-4">
        <h4 class="font-display text-lg font-extrabold text-mist">Action panel</h4>
        <p class="text-sm text-leaf-muted leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          euismod nisi vel augue tincidunt, at cursus libero fermentum.
        </p>
        <div class="flex gap-3 pt-2">
          <SButton label="Confirm" size="small" icon-right="arrow-right" />
          <SButton label="Cancel" variant="ghost" type="outlined" size="small" />
        </div>
      </div>
    </SCard>
    <div class="pt-4 space-y-3">
      <p class="text-sm font-semibold text-rain-mint/80 uppercase tracking-wide">Usage</p>
      <SCode :code="code" />
    </div>
  </section>
</template>
