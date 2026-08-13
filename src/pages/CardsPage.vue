<script setup lang="ts">
import SButton from '../components/SButton.vue';
import SCard from '../components/SCard.vue';
</script>

<template>
  <div class="space-y-12">
    <h2 class="font-display text-3xl font-extrabold tracking-tight text-mist">Cards</h2>

    <!-- Variantes de padding -->
    <div class="space-y-4">
      <h3 class="text-sm font-semibold text-leaf-muted uppercase tracking-wide">Padding</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <SCard padding="small">
          <p class="text-sm text-leaf-muted">Padding small</p>
        </SCard>
        <SCard padding="medium">
          <p class="text-sm text-leaf-muted">Padding medium</p>
        </SCard>
        <SCard padding="large">
          <p class="text-sm text-leaf-muted">Padding large</p>
        </SCard>
        <SCard padding="none">
          <div class="p-6">
            <p class="text-sm text-leaf-muted">Padding none</p>
          </div>
        </SCard>
      </div>
    </div>

    <!-- Card con contenido -->
    <div class="space-y-4">
      <h3 class="text-sm font-semibold text-leaf-muted uppercase tracking-wide">Ejemplo de uso</h3>
      <SCard padding="large">
        <div class="space-y-4">
          <h4 class="font-display text-lg font-extrabold text-mist">Panel de accion</h4>
          <p class="text-sm text-leaf-muted leading-relaxed">
            Las cards sirven como contenedores de superficie elevada sobre el fondo garden-deep.
            Usan borde tenue, radio de 22px y sombra ambiental.
          </p>
          <div class="flex gap-3 pt-2">
            <SButton label="Confirmar" size="small" icon-right="arrow-right" />
            <SButton label="Cancelar" variant="ghost" type="outlined" size="small" />
          </div>
        </div>
      </SCard>
    </div>
  </div>
</template>
