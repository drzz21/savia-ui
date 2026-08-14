<script setup lang="ts">
import SBadge from '../../components/SBadge.vue';
import SCard from '../../components/SCard.vue';
import SCode from '../../components/SCode.vue';

const variants = ['primary', 'secondary', 'tertiary', 'danger', 'ghost'] as const;

const code = `<SBadge label="Online" variant="primary" dot />
<SBadge label="In progress" variant="secondary" dot />
<SBadge label="Idle" variant="tertiary" dot />
<SBadge label="Error" variant="danger" dot />
<SBadge label="Unknown" variant="ghost" dot />`;
</script>

<template>
  <section class="space-y-6">
    <div>
      <h3 class="text-lg font-display font-extrabold text-mist">Dot indicator</h3>
      <p class="text-sm text-leaf-muted mt-1">Add a colored dot to convey status at a glance — ideal for connection states, notifications, or activity indicators.</p>
    </div>
    <SCard>
      <div class="flex flex-wrap gap-3 items-center">
        <SBadge variant="primary" label="Online" dot />
        <SBadge variant="secondary" label="In progress" dot />
        <SBadge variant="tertiary" label="Idle" dot />
        <SBadge variant="danger" label="Error" dot />
        <SBadge variant="ghost" label="Unknown" dot />
      </div>
    </SCard>
    <div class="pt-4 space-y-3">
      <p class="text-sm font-semibold text-rain-mint/80 uppercase tracking-wide">Usage</p>
      <SCode :code="code" />
    </div>
  </section>
</template>
