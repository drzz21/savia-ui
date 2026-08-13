<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const menuOpen = ref(false);

// Bloquear scroll del body cuando el menú móvil está abierto
watch(menuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : '';
});

const nav = [
  { to: '/theme', label: 'Theme' },
  { to: '/buttons', label: 'Buttons' },
  { to: '/cards', label: 'Cards' },
  { to: '/code', label: 'Code' },
];

function closeMenu() {
  menuOpen.value = false;
}
</script>

<template>
  <div class="min-h-screen bg-garden-deep font-body text-mist">

    <!-- Header (siempre visible) -->
    <header class="fixed top-0 left-0 right-0 z-30 bg-garden-night/95 backdrop-blur-sm border-b border-leaf-muted/10 px-5 py-4 lg:left-52">
      <div class="flex items-center justify-between">
        <!-- Logo y nombre -->
        <div class="flex items-center gap-2.5">
          <svg class="size-8 text-rain-mint" aria-hidden="true">
            <use href="/icons.svg#leaf" />
          </svg>
          <span class="font-display text-2xl font-extrabold tracking-tight text-mist">Savia UI</span>
        </div>

        <!-- Botón hamburguesa (solo móvil) -->
        <button
          class="lg:hidden flex items-center justify-center size-10 rounded-[var(--radius-field)] text-leaf-muted hover:text-mist hover:bg-mist/5 transition-colors"
          :aria-label="menuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'"
          :aria-expanded="menuOpen"
          @click="menuOpen = !menuOpen"
        >
          <svg class="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path
              :d="menuOpen ? 'M6 6L18 18' : 'M4 6H20'"
              class="transition-all duration-300"
            />
            <path
              d="M4 12H20"
              :class="['transition-all duration-200', menuOpen ? 'opacity-0' : 'opacity-100']"
            />
            <path
              :d="menuOpen ? 'M6 18L18 6' : 'M4 18H20'"
              class="transition-all duration-300"
            />
          </svg>
        </button>
      </div>
    </header>

    <!-- Overlay (solo móvil, cuando menú abierto) -->
    <Transition name="fade">
      <div
        v-if="menuOpen"
        class="fixed inset-0 z-20 bg-garden-deep/60 backdrop-blur-[2px] lg:hidden"
        @click="closeMenu"
      />
    </Transition>

    <!-- Sidebar / Drawer -->
    <aside
      :class="[
        'fixed top-0 left-0 z-20 h-screen w-64 border-r border-leaf-muted/15 bg-garden-night flex flex-col px-4 pt-24 pb-8 transition-transform duration-300 ease-out',
        'lg:translate-x-0 lg:w-52 lg:z-10',
        menuOpen ? 'translate-x-0' : '-translate-x-full',
      ]"
    >
      <nav class="flex flex-col gap-1 lg:gap-1">
        <router-link
          v-for="item in nav"
          :key="item.to"
          :to="item.to"
          :class="[
            'px-4 py-3.5 lg:px-3 lg:py-2 rounded-[var(--radius-field)] text-base lg:text-sm font-medium transition-colors',
            route.path === item.to
              ? 'bg-rain-mint/10 text-rain-mint'
              : 'text-leaf-muted hover:text-mist hover:bg-mist/5',
          ]"
          @click="closeMenu"
        >
          {{ item.label }}
        </router-link>
      </nav>

      <div class="flex-1"></div>
      <p class="text-[10px] text-leaf-muted/50 px-2">v0.1.0</p>
    </aside>

    <!-- Main -->
    <main class="lg:ml-52">
      <div class="max-w-3xl px-5 pt-24 pb-14 lg:px-10 lg:pt-28">
        <router-view />
      </div>
    </main>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
