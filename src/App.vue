<script setup lang="ts">
import Button from './components/Button.vue';

const variants = ['primary', 'secondary', 'tertiary', 'danger', 'ghost'] as const;
const types    = ['default', 'outlined', 'text'] as const;
const sizes    = ['small', 'medium', 'large'] as const;
</script>

<template>
  <main class="p-8 space-y-12 font-sans">

    <!-- Matriz variante × tipo -->
    <section>
      <h2 class="text-xl font-bold mb-4 text-gray-800">Variantes × Tipos</h2>
      <div class="overflow-x-auto">
        <table class="border-collapse">
          <thead>
            <tr>
              <th class="px-4 py-2 text-left text-sm text-gray-500 font-medium w-28"></th>
              <th v-for="t in types" :key="t" class="px-4 py-2 text-sm text-gray-500 font-medium capitalize">
                {{ t }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="v in variants" :key="v">
              <td class="px-4 py-3 text-sm text-gray-500 font-medium capitalize">{{ v }}</td>
              <td v-for="t in types" :key="t" class="px-4 py-3">
                <Button :variant="v" :type="t" :label="v" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Tamaños -->
    <section>
      <h2 class="text-xl font-bold mb-4 text-gray-800">Tamaños</h2>
      <div class="flex items-center gap-4 flex-wrap">
        <Button v-for="s in sizes" :key="s" :size="s" :label="s" />
      </div>
    </section>

    <!-- Estados -->
    <section>
      <h2 class="text-xl font-bold mb-4 text-gray-800">Estados</h2>
      <div class="flex items-center gap-4 flex-wrap">
        <Button label="Normal" />
        <Button label="Disabled" disabled />
        <Button label="Cargando..." :loading="true" />
        <Button label="Cargando..." :loading="true" variant="danger" />
        <Button label="Cargando..." :loading="true" variant="secondary" type="outlined" />
      </div>
    </section>

    <!-- Ancho completo -->
    <section>
      <h2 class="text-xl font-bold mb-4 text-gray-800">Full Width</h2>
      <div class="max-w-md space-y-2">
        <Button label="Full Width Primary" full-width />
        <Button label="Full Width Danger · Outlined" variant="danger" type="outlined" full-width />
      </div>
    </section>

  </main>
</template>
