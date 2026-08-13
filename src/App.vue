<script setup lang="ts">
import { ref, watch, computed, nextTick } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const menuOpen = ref(false);

// Secciones colapsables con sus patterns
const nav = [
  { to: '/theme', label: 'Theme', children: [] },
  {
    to: '/buttons',
    label: 'Buttons',
    children: [
      { hash: 'variants', label: 'Variants' },
      { hash: 'types', label: 'Types' },
      { hash: 'sizes', label: 'Sizes' },
      { hash: 'icons', label: 'Icons' },
      { hash: 'shadow', label: 'Shadow' },
      { hash: 'states', label: 'States' },
      { hash: 'full-width', label: 'Full Width' },
      { hash: 'events', label: 'Events' },
    ],
  },
  {
    to: '/cards',
    label: 'Cards',
    children: [
      { hash: 'padding', label: 'Padding' },
      { hash: 'composition', label: 'Composition' },
      { hash: 'stacked', label: 'Stacked' },
    ],
  },
  {
    to: '/code',
    label: 'Code',
    children: [
      { hash: 'basic', label: 'Basic' },
      { hash: 'language', label: 'Language' },
      { hash: 'copy', label: 'Copy' },
    ],
  },
];

// Track qué sección del menú está expandida
const expanded = ref<string | null>(null);

// Auto-expandir la sección activa según la ruta
watch(
  () => route.path,
  (path) => {
    const match = nav.find((item) => item.to === path);
    if (match && match.children.length > 0) {
      expanded.value = match.to;
    }
  },
  { immediate: true },
);

function toggleSection(to: string) {
  expanded.value = expanded.value === to ? null : to;
}

function navigateToPattern(parentTo: string, hash: string) {
  closeMenu();

  const scrollToEl = () => {
    nextTick(() => {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 50);
    });
  };

  if (route.path === parentTo) {
    // Ya estamos en la misma página, scroll directo
    router.replace({ path: parentTo, hash: `#${hash}` });
    scrollToEl();
  } else {
    // Navegamos a otra página, esperamos que cargue
    router.push({ path: parentTo, hash: `#${hash}` }).then(scrollToEl);
  }
}

function navigateToPage(to: string) {
  router.push(to);
  if (nav.find((n) => n.to === to)?.children.length === 0) {
    closeMenu();
  }
}

// Bloquear scroll del body cuando el menú móvil está abierto
watch(menuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : '';
});

function closeMenu() {
  menuOpen.value = false;
}

function isActive(to: string) {
  return route.path === to;
}

function isChildActive(parentTo: string, hash: string) {
  return route.path === parentTo && route.hash === `#${hash}`;
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

        <div class="flex items-center gap-2">
          <!-- Enlace a GitHub -->
          <a
            href="https://github.com/drzz21/savia-ui"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center size-12 rounded-[var(--radius-field)] text-leaf-muted hover:text-mist hover:bg-mist/5 transition-colors"
            aria-label="Ver repositorio en GitHub"
          >
            <svg class="size-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
          </a>

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
        'fixed top-0 left-0 z-20 h-screen w-64 border-r border-leaf-muted/15 bg-garden-night flex flex-col px-3 pt-24 pb-8 overflow-y-auto transition-transform duration-300 ease-out',
        'lg:translate-x-0 lg:w-52 lg:z-10',
        menuOpen ? 'translate-x-0' : '-translate-x-full',
      ]"
    >
      <nav class="flex flex-col gap-0.5">
        <div v-for="item in nav" :key="item.to">
          <!-- Botón de sección principal -->
          <button
            :class="[
              'w-full flex items-center justify-between px-4 py-3.5 lg:px-3 lg:py-2 rounded-[var(--radius-field)] text-base lg:text-sm font-medium transition-colors text-left',
              isActive(item.to)
                ? 'bg-rain-mint/10 text-rain-mint'
                : 'text-leaf-muted hover:text-mist hover:bg-mist/5',
            ]"
            @click="item.children.length > 0 ? (navigateToPage(item.to), toggleSection(item.to)) : navigateToPage(item.to)"
          >
            <span>{{ item.label }}</span>
            <!-- Chevron para secciones con hijos -->
            <svg
              v-if="item.children.length > 0"
              :class="[
                'size-4 transition-transform duration-200',
                expanded === item.to ? 'rotate-90' : '',
              ]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <!-- Sub-items (patterns) -->
          <Transition name="collapse">
            <div
              v-if="item.children.length > 0 && expanded === item.to"
              class="ml-3 mt-0.5 flex flex-col gap-0.5 border-l border-leaf-muted/15 pl-3"
            >
              <button
                v-for="child in item.children"
                :key="child.hash"
                :class="[
                  'text-left px-3 py-2.5 lg:py-1.5 rounded-[var(--radius-field)] text-sm lg:text-xs font-medium transition-colors',
                  isChildActive(item.to, child.hash)
                    ? 'text-rain-mint bg-rain-mint/5'
                    : 'text-leaf-muted/80 hover:text-mist hover:bg-mist/5',
                ]"
                @click="navigateToPattern(item.to, child.hash)"
              >
                {{ child.label }}
              </button>
            </div>
          </Transition>
        </div>
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

.collapse-enter-active,
.collapse-leave-active {
  transition: all 0.25s ease;
  overflow: hidden;
}
.collapse-enter-from,
.collapse-leave-to {
  opacity: 0;
  max-height: 0;
  transform: translateY(-4px);
}
.collapse-enter-to,
.collapse-leave-from {
  opacity: 1;
  max-height: 500px;
  transform: translateY(0);
}
</style>
