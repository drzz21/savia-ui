<script setup lang="ts">
import SAccordion from '../../components/SAccordion.vue';
import SAccordionItem from '../../components/SAccordionItem.vue';
import SCard from '../../components/SCard.vue';
import SCode from '../../components/SCode.vue';

const code = `<SAccordion>
  <SAccordionItem title="What is Savia UI?">
    A Vue 3 component library with a nature-inspired design system.
  </SAccordionItem>
  <SAccordionItem title="How do I install it?">
    Run npm install savia-ui in your project.
  </SAccordionItem>
  <SAccordionItem title="Is it free?">
    Yes! Savia UI is open source under the MIT license.
  </SAccordionItem>
</SAccordion>`;
</script>

<template>
  <section class="space-y-6">
    <div>
      <h3 class="text-lg font-display font-extrabold text-mist">Basic</h3>
      <p class="text-sm text-leaf-muted mt-1">By default, only one item can be open at a time. Clicking another item closes the current one.</p>
    </div>
    <SCard>
      <SAccordion>
        <SAccordionItem title="What is Savia UI?">
          A Vue 3 component library built with Tailwind CSS v4 and a nature-inspired design system. It provides accessible, composable components for modern web apps.
        </SAccordionItem>
        <SAccordionItem title="How do I install it?">
          Run <code class="text-rain-mint/80 text-xs bg-rain-mint/10 px-1.5 py-0.5 rounded">npm install savia-ui</code> or use pnpm/yarn. Then import the components you need.
        </SAccordionItem>
        <SAccordionItem title="Is it free?">
          Yes! Savia UI is open source under the MIT license. You can use it in personal and commercial projects.
        </SAccordionItem>
      </SAccordion>
    </SCard>
    <div class="pt-4 space-y-3">
      <p class="text-sm font-semibold text-rain-mint/80 uppercase tracking-wide">Usage</p>
      <SCode :code="code" />
    </div>
  </section>
</template>
