<script setup lang="ts">
import { ref } from 'vue';
import STabs from '../../components/STabs.vue';
import STabPanel from '../../components/STabPanel.vue';
import SCard from '../../components/SCard.vue';
import SCode from '../../components/SCode.vue';

const active1 = ref('tab1');
const active2 = ref('tab1');
const active3 = ref('tab1');
const active4 = ref('tab1');

const code = `<!-- Default -->
<STabs v-model="active" variant="default">...</STabs>

<!-- Pills -->
<STabs v-model="active" variant="pills">...</STabs>

<!-- Underline -->
<STabs v-model="active" variant="underline">...</STabs>

<!-- Boxed -->
<STabs v-model="active" variant="boxed">...</STabs>`;
</script>

<template>
  <section class="space-y-6">
    <div>
      <h3 class="text-lg font-display font-extrabold text-mist">Variants</h3>
      <p class="text-sm text-leaf-muted mt-1">Three visual styles: <code class="text-rain-mint/80 text-xs bg-rain-mint/10 px-1.5 py-0.5 rounded">default</code> (contained), <code class="text-rain-mint/80 text-xs bg-rain-mint/10 px-1.5 py-0.5 rounded">pills</code> (rounded), and <code class="text-rain-mint/80 text-xs bg-rain-mint/10 px-1.5 py-0.5 rounded">underline</code> (minimal).</p>
    </div>
    <SCard>
      <div class="space-y-8">
        <div class="space-y-2">
          <p class="text-xs text-leaf-muted uppercase tracking-wide">Default</p>
          <STabs v-model="active1" variant="default">
            <STabPanel id="tab1" label="Tab 1"><p class="text-sm text-leaf-muted">Default variant content.</p></STabPanel>
            <STabPanel id="tab2" label="Tab 2"><p class="text-sm text-leaf-muted">Second tab content.</p></STabPanel>
            <STabPanel id="tab3" label="Tab 3"><p class="text-sm text-leaf-muted">Third tab content.</p></STabPanel>
          </STabs>
        </div>
        <div class="space-y-2">
          <p class="text-xs text-leaf-muted uppercase tracking-wide">Pills</p>
          <STabs v-model="active2" variant="pills">
            <STabPanel id="tab1" label="Tab 1"><p class="text-sm text-leaf-muted">Pills variant content.</p></STabPanel>
            <STabPanel id="tab2" label="Tab 2"><p class="text-sm text-leaf-muted">Second tab content.</p></STabPanel>
            <STabPanel id="tab3" label="Tab 3"><p class="text-sm text-leaf-muted">Third tab content.</p></STabPanel>
          </STabs>
        </div>
        <div class="space-y-2">
          <p class="text-xs text-leaf-muted uppercase tracking-wide">Underline</p>
          <STabs v-model="active3" variant="underline">
            <STabPanel id="tab1" label="Tab 1"><p class="text-sm text-leaf-muted">Underline variant content.</p></STabPanel>
            <STabPanel id="tab2" label="Tab 2"><p class="text-sm text-leaf-muted">Second tab content.</p></STabPanel>
            <STabPanel id="tab3" label="Tab 3"><p class="text-sm text-leaf-muted">Third tab content.</p></STabPanel>
          </STabs>
        </div>
        <div class="space-y-2">
          <p class="text-xs text-leaf-muted uppercase tracking-wide">Boxed</p>
          <STabs v-model="active4" variant="boxed">
            <STabPanel id="tab1" label="Tab 1"><p class="text-sm text-leaf-muted">Boxed variant — enclosed tabs with bottom accent.</p></STabPanel>
            <STabPanel id="tab2" label="Tab 2"><p class="text-sm text-leaf-muted">Second tab content.</p></STabPanel>
            <STabPanel id="tab3" label="Tab 3"><p class="text-sm text-leaf-muted">Third tab content.</p></STabPanel>
          </STabs>
        </div>
      </div>
    </SCard>
    <div class="pt-4 space-y-3">
      <p class="text-sm font-semibold text-rain-mint/80 uppercase tracking-wide">Usage</p>
      <SCode :code="code" />
    </div>
  </section>
</template>
