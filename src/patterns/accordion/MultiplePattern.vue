<script setup lang="ts">
import SAccordion from '../../components/SAccordion.vue';
import SAccordionItem from '../../components/SAccordionItem.vue';
import SCard from '../../components/SCard.vue';
import SCode from '../../components/SCode.vue';

const code = `<SAccordion multiple>
  <SAccordionItem title="Section A">
    Content A — stays open when you open others.
  </SAccordionItem>
  <SAccordionItem title="Section B">
    Content B — can be open at the same time.
  </SAccordionItem>
  <SAccordionItem title="Section C">
    Content C — independent toggle.
  </SAccordionItem>
</SAccordion>`;
</script>

<template>
  <section class="space-y-6">
    <div>
      <h3 class="text-lg font-display font-extrabold text-mist">Multiple</h3>
      <p class="text-sm text-leaf-muted mt-1">Pass the <code class="text-rain-mint/80 text-xs bg-rain-mint/10 px-1.5 py-0.5 rounded">multiple</code> prop to allow several items to remain open simultaneously.</p>
    </div>
    <SCard>
      <SAccordion multiple>
        <SAccordionItem title="Section A">
          This section stays open when you open others. Each item toggles independently.
        </SAccordionItem>
        <SAccordionItem title="Section B">
          You can have all sections open at the same time. Useful for FAQ pages or settings panels.
        </SAccordionItem>
        <SAccordionItem title="Section C">
          Each item toggles independently without affecting the others.
        </SAccordionItem>
      </SAccordion>
    </SCard>
    <div class="pt-4 space-y-3">
      <p class="text-sm font-semibold text-rain-mint/80 uppercase tracking-wide">Usage</p>
      <SCode :code="code" />
    </div>
  </section>
</template>
