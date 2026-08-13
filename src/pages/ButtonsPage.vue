<script setup lang="ts">
import SButton from '../components/SButton.vue';
import SCard from '../components/SCard.vue';

const variants = ['primary', 'secondary', 'tertiary', 'danger', 'ghost'] as const;
const types    = ['default', 'outlined', 'text'] as const;
const sizes    = ['small', 'medium', 'large'] as const;
</script>

<template>
  <div class="space-y-12">
    <h2 class="font-display text-3xl font-extrabold tracking-tight text-mist">Botones</h2>

    <!-- Matriz variantes x tipos -->
    <div class="space-y-4">
      <h3 class="text-sm font-semibold text-leaf-muted uppercase tracking-wide">Variantes × Tipos</h3>
      <SCard padding="large">
        <div class="overflow-x-auto">
          <table class="border-collapse w-full">
            <thead>
              <tr>
                <th class="px-3 py-2 text-left text-xs text-leaf-muted font-medium w-24"></th>
                <th v-for="t in types" :key="t" class="px-3 py-2 text-xs text-leaf-muted font-medium capitalize">
                  {{ t }}
                </th>
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
    </div>

    <!-- Tamanos -->
    <div class="space-y-4">
      <h3 class="text-sm font-semibold text-leaf-muted uppercase tracking-wide">Tamanos</h3>
      <SCard>
        <div class="flex items-center gap-4 flex-wrap">
          <SButton v-for="s in sizes" :key="s" :size="s" :label="s" />
        </div>
      </SCard>
    </div>

    <!-- Con iconos -->
    <div class="space-y-4">
      <h3 class="text-sm font-semibold text-leaf-muted uppercase tracking-wide">Con iconos</h3>
      <SCard>
        <div class="flex flex-wrap gap-3">
          <SButton label="Anterior" variant="primary" type="outlined" icon-left="arrow-left" />
          <SButton label="Siguiente" variant="primary" icon-right="arrow-right" />
          <SButton label="Navegar" variant="secondary" type="outlined" icon-right="chevron-right" />
        </div>
      </SCard>
    </div>

    <!-- Glow -->
    <div class="space-y-4">
      <h3 class="text-sm font-semibold text-leaf-muted uppercase tracking-wide">Glow</h3>
      <SCard>
        <div class="flex flex-wrap gap-4">
          <SButton label="Mint glow" variant="primary" :glow="true" />
          <SButton label="Blue glow" variant="secondary" :glow="true" />
          <SButton label="Coral glow" variant="danger" :glow="true" />
        </div>
      </SCard>
    </div>

        <!-- Shadow -->
    <div class="space-y-4">
      <h3 class="text-sm font-semibold text-leaf-muted uppercase tracking-wide">Shadow</h3>
      <SCard>
        <div class="flex flex-wrap gap-4">
          <SButton label="Mint glow" variant="primary" :shadow="true" />
          <SButton label="Blue glow" variant="secondary" :shadow="true" />
          <SButton label="Coral glow" variant="danger" :shadow="true" />
        </div>
      </SCard>
    </div>

    <!-- Estados -->
    <div class="space-y-4">
      <h3 class="text-sm font-semibold text-leaf-muted uppercase tracking-wide">Estados</h3>
      <SCard>
        <div class="flex items-center gap-4 flex-wrap">
          <SButton label="Normal" />
          <SButton label="Disabled" disabled />
          <SButton label="Cargando..." :loading="true" />
          <SButton label="Cargando..." :loading="true" variant="danger" />
        </div>
      </SCard>
    </div>

    <!-- Full width -->
    <div class="space-y-4">
      <h3 class="text-sm font-semibold text-leaf-muted uppercase tracking-wide">Full width</h3>
      <SCard>
        <div class="space-y-3">
          <SButton label="Acceder al portal" icon-right="arrow-right" full-width :shadow="true" />
          <SButton label="Crear cuenta" variant="secondary" type="outlined" full-width icon-right="chevron-right" />
        </div>
      </SCard>
    </div>
  </div>
</template>
