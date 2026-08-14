<script setup lang="ts">
import SAccordion from '../../components/SAccordion.vue';
import SAccordionItem from '../../components/SAccordionItem.vue';
import SCard from '../../components/SCard.vue';
import SCode from '../../components/SCode.vue';

const code = `<SAccordion>
  <SAccordionItem title="Available section">
    This one works normally.
  </SAccordionItem>
  <SAccordionItem title="Disabled section" disabled>
    You won't see this content.
  </SAccordionItem>
</SAccordion>`;
</script>

<template>
  <section class="space-y-6">
    <div>
      <h3 class="text-lg font-display font-extrabold text-mist">Disabled</h3>
      <p class="text-sm text-leaf-muted mt-1">Individual items can be disabled to prevent interaction. Disabled items appear dimmed and cannot be toggled.</p>
    </div>
    <SCard>
      <SAccordion>
        <SAccordionItem title="Available section">
          This section works normally and can be toggled open and closed.
        </SAccordionItem>
        <SAccordionItem title="Disabled section" disabled>
          You won't be able to see this content because the item is disabled.
        </SAccordionItem>
        <SAccordionItem title="Another available section">
          This one also works normally.
        </SAccordionItem>
      </SAccordion>
    </SCard>
    <div class="pt-4 space-y-3">
      <p class="text-sm font-semibold text-rain-mint/80 uppercase tracking-wide">Usage</p>
      <SCode :code="code" />
    </div>
  </section>
</template>
