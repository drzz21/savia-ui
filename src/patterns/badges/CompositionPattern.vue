<script setup lang="ts">
import SBadge from '../../components/SBadge.vue';
import SButton from '../../components/SButton.vue';
import SCard from '../../components/SCard.vue';
import SCode from '../../components/SCode.vue';

const code = `<!-- Badge inside an outlined button -->
<SButton variant="primary" type="outlined">
  Profile <SBadge label="9" variant="primary" size="small" pill />
</SButton>

<!-- Badge with custom content -->
<SBadge variant="secondary" size="large">
  <span class="size-5 rounded-full bg-rain-blue/40 inline-block"></span>
  <span>John Doe</span>
</SBadge>`;
</script>

<template>
  <section class="space-y-6">
    <div>
      <h3 class="text-lg font-display font-extrabold text-mist">Composition</h3>
      <p class="text-sm text-leaf-muted mt-1">Badges accept free content via the default slot. Combine them with buttons, avatars, or any custom markup.</p>
    </div>
    <SCard>
      <div class="flex flex-wrap gap-4 items-center">
        <SButton variant="primary" type="outlined">
          Profile <SBadge label="9" variant="primary" size="small" pill />
        </SButton>
        <SButton variant="secondary" type="outlined">
          Messages <SBadge label="3" variant="danger" size="small" pill />
        </SButton>
        <SBadge variant="secondary" size="large">
          <span class="size-5 rounded-full bg-rain-blue/40 inline-block"></span>
          <span>John Doe</span>
        </SBadge>
      </div>
    </SCard>
    <div class="pt-4 space-y-3">
      <p class="text-sm font-semibold text-rain-mint/80 uppercase tracking-wide">Usage</p>
      <SCode :code="code" />
    </div>
  </section>
</template>
