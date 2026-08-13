<script setup lang="ts">
import SButton from '../../components/SButton.vue';
import SCard from '../../components/SCard.vue';
import SCode from '../../components/SCode.vue';

const variants = ['primary', 'secondary', 'tertiary', 'danger', 'ghost'] as const;
const types    = ['default', 'outlined', 'text'] as const;

const code = `<SButton label="Save" type="default" />
<SButton label="Cancel" type="outlined" />
<SButton label="Learn more" type="text" />`;
</script>

<template>
  <section class="space-y-6">
    <div>
      <h3 class="text-lg font-display font-extrabold text-mist">Types</h3>
      <p class="text-sm text-leaf-muted mt-1">Each variant supports three visual types: default (filled), outlined (border only), and text (no background).</p>
    </div>
    <SCard padding="large">
      <div class="overflow-x-auto">
        <table class="border-collapse w-full">
          <thead>
            <tr>
              <th class="px-3 py-2 text-left text-xs text-leaf-muted font-medium w-24"></th>
              <th v-for="t in types" :key="t" class="px-3 py-2 text-xs text-leaf-muted font-medium capitalize">{{ t }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="v in variants" :key="v">
              <td class="px-3 py-3 text-xs text-leaf-muted font-medium capitalize">{{ v }}</td>
              <td v-for="t in types" :key="t" class="px-3 py-3">
                <SButton :variant="v" :type="t" :label="v" size="small" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </SCard>
    <div class="pt-4 space-y-3">
      <p class="text-sm font-semibold text-rain-mint/80 uppercase tracking-wide">Usage</p>
      <SCode :code="code" />
    </div>
  </section>
</template>
