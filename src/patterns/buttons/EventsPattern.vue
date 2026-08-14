<script setup lang="ts">
import SButton from '../../components/SButton.vue';
import SCard from '../../components/SCard.vue';
import SCode from '../../components/SCode.vue';

function handleClick(event: MouseEvent) {
  alert(`Click! Coordinates: (${event.clientX}, ${event.clientY})`);
}

const code = `<script setup lang="ts">
${'import'} SButton from './components/SButton.vue';

function handleClick(event: MouseEvent) {
  alert(\`Click! Coordinates: (\${event.clientX}, \${event.clientY})\`);
}
<\/script>

<template>
  <SButton label="Haz click" @click="handleClick" />
</template>`;
</script>

<template>
  <section class="space-y-6">
    <div>
      <h3 class="text-lg font-display font-extrabold text-mist">Events</h3>
      <p class="text-sm text-leaf-muted mt-1">SButton emits a <code class="text-rain-mint/80 text-xs bg-rain-mint/10 px-1.5 py-0.5 rounded">click</code> event with the native MouseEvent. Disabled or loading buttons do not emit.</p>
    </div>
    <SCard>
      <div class="flex flex-wrap gap-3">
        <SButton label="Click me!" variant="primary" @click="handleClick" />
        <SButton label="Secondary" variant="secondary" @click="handleClick" />
        <SButton label="Disabled (does'nt emit)" variant="ghost" disabled @click="handleClick" />
      </div>
    </SCard>
    <div class="pt-4 space-y-3">
      <p class="text-sm font-semibold text-rain-mint/80 uppercase tracking-wide">Usage</p>
      <SCode :code="code" />
    </div>
  </section>
</template>
