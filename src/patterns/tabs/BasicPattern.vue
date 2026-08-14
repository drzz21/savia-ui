<script setup lang="ts">
import { ref } from 'vue';
import STabs from '../../components/STabs.vue';
import STabPanel from '../../components/STabPanel.vue';
import SCard from '../../components/SCard.vue';
import SCode from '../../components/SCode.vue';

const active = ref('overview');

const code = `<script setup>
import { ref } from 'vue';
const active = ref('overview');
<\/script>

<template>
  <STabs v-model="active">
    <STabPanel id="overview" label="Overview">
      Overview content here.
    </STabPanel>
    <STabPanel id="features" label="Features">
      Features content here.
    </STabPanel>
    <STabPanel id="pricing" label="Pricing">
      Pricing content here.
    </STabPanel>
  </STabs>
</template>`;
</script>

<template>
  <section class="space-y-6">
    <div>
      <h3 class="text-lg font-display font-extrabold text-mist">Basic</h3>
      <p class="text-sm text-leaf-muted mt-1">A simple tabbed interface. Only one panel is visible at a time. Uses <code class="text-rain-mint/80 text-xs bg-rain-mint/10 px-1.5 py-0.5 rounded">v-model</code> for controlled state.</p>
    </div>
    <SCard>
      <STabs v-model="active">
        <STabPanel id="overview" label="Overview">
          <p class="text-sm text-leaf-muted">This is the overview panel. It shows general information about the topic.</p>
        </STabPanel>
        <STabPanel id="features" label="Features">
          <p class="text-sm text-leaf-muted">Here you can find all the features listed with details and descriptions.</p>
        </STabPanel>
        <STabPanel id="pricing" label="Pricing">
          <p class="text-sm text-leaf-muted">Pricing plans and billing information are displayed in this panel.</p>
        </STabPanel>
      </STabs>
    </SCard>
    <div class="pt-4 space-y-3">
      <p class="text-sm font-semibold text-rain-mint/80 uppercase tracking-wide">Usage</p>
      <SCode :code="code" />
    </div>
  </section>
</template>
