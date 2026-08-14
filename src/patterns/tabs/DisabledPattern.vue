<script setup lang="ts">
import { ref } from 'vue';
import STabs from '../../components/STabs.vue';
import STabPanel from '../../components/STabPanel.vue';
import SCard from '../../components/SCard.vue';
import SCode from '../../components/SCode.vue';

const active = ref('general');

const code = `<STabs v-model="active">
  <STabPanel id="general" label="General">
    General settings.
  </STabPanel>
  <STabPanel id="advanced" label="Advanced" disabled>
    Locked content.
  </STabPanel>
  <STabPanel id="about" label="About">
    About this app.
  </STabPanel>
</STabs>`;
</script>

<template>
  <section class="space-y-6">
    <div>
      <h3 class="text-lg font-display font-extrabold text-mist">Disabled</h3>
      <p class="text-sm text-leaf-muted mt-1">Individual tabs can be disabled to prevent selection.</p>
    </div>
    <SCard>
      <STabs v-model="active">
        <STabPanel id="general" label="General">
          <p class="text-sm text-leaf-muted">General settings and preferences.</p>
        </STabPanel>
        <STabPanel id="advanced" label="Advanced" disabled>
          <p class="text-sm text-leaf-muted">This content is locked.</p>
        </STabPanel>
        <STabPanel id="about" label="About">
          <p class="text-sm text-leaf-muted">About this application and version info.</p>
        </STabPanel>
      </STabs>
    </SCard>
    <div class="pt-4 space-y-3">
      <p class="text-sm font-semibold text-rain-mint/80 uppercase tracking-wide">Usage</p>
      <SCode :code="code" />
    </div>
  </section>
</template>
