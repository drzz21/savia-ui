<script setup lang="ts">
import { ref, watch, nextTick } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const menuOpen = ref(false);
const baseUrl = import.meta.env.BASE_URL;

// Secciones colapsables con sus patterns
const nav = [
  { to: '/install', label: 'Install', children: [] },
  { to: '/theme', label: 'Theme', children: [] },
  { to: '/icons', label: 'Icons', children: [] },
    {
    to: '/layout',
    label: 'Layout',
    children: [
      { hash: 'divider', label: 'Divider' },
      // { hash: 'flex', label: 'Flex' },
      // { hash: 'grid', label: 'Grid' },
      { hash: 'space', label: 'Space' },
      { hash: 'masonry', label: 'Masonry' },
    ],
  },
  {
    to: '/input-text',
    label: 'Input Text',
    children: [
      { hash: 'basic', label: 'Basic' },
      { hash: 'sizes', label: 'Sizes' },
      { hash: 'icons', label: 'Icons' },
      { hash: 'states', label: 'States' },
      { hash: 'clearable', label: 'Clearable' },
    ],
  },
  {
    to: '/checkbox',
    label: 'Checkbox',
    children: [
      { hash: 'basic', label: 'Basic' },
      { hash: 'sizes', label: 'Sizes' },
    ],
  },
  {
    to: '/radio',
    label: 'Radio',
    children: [
      { hash: 'basic', label: 'Basic' },
      { hash: 'sizes', label: 'Sizes' },
    ],
  },
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
  {
    to: '/badges',
    label: 'Badges',
    children: [
      { hash: 'variants', label: 'Variants' },
      { hash: 'types', label: 'Types' },
      { hash: 'sizes', label: 'Sizes' },
      { hash: 'pill', label: 'Pill' },
      { hash: 'dot', label: 'Dot' },
      { hash: 'composition', label: 'Composition' },
    ],
  },
  {
    to: '/accordion',
    label: 'Accordion',
    children: [
      { hash: 'basic', label: 'Basic' },
      { hash: 'multiple', label: 'Multiple' },
      { hash: 'disabled', label: 'Disabled' },
    ],
  },
  {
    to: '/file-upload',
    label: 'File Upload',
    children: [
      { hash: 'basic', label: 'Basic' },
      { hash: 'multiple', label: 'Multiple' },
      { hash: 'accept', label: 'Accept & Max size' },
      { hash: 'disabled', label: 'Disabled' },
    ],
  },
  {
    to: '/stepper',
    label: 'Stepper',
    children: [
      { hash: 'basic', label: 'Basic' },
      { hash: 'vertical', label: 'Vertical' },
      { hash: 'clickable', label: 'Clickable' },
    ],
  },
  {
    to: '/modal',
    label: 'Modal',
    children: [
      { hash: 'basic', label: 'Basic' },
      { hash: 'sizes', label: 'Sizes' },
      { hash: 'persistent', label: 'Persistent' },
      { hash: 'slots', label: 'Custom slots' },
    ],
  },
  {
    to: '/tabs',
    label: 'Tabs',
    children: [
      { hash: 'basic', label: 'Basic' },
      { hash: 'variants', label: 'Variants' },
      { hash: 'disabled', label: 'Disabled' },
    ],
  },
  {
    to: '/loader',
    label: 'Loader',
    children: [
      { hash: 'basic', label: 'Basic' },
      { hash: 'sizes', label: 'Sizes' },
      { hash: 'variants', label: 'Variants' },
    ],
  },
  {
    to: '/breadcrumbs',
    label: 'Breadcrumbs',
    children: [
      { hash: 'basic', label: 'Basic' },
      { hash: 'separators', label: 'Separators' },
      { hash: 'events', label: 'Events' },
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

// Animación de corazones al hacer click en Donate
const hearts = ref<{ id: number; x: number; y: number; size: number; delay: number }[]>([]);
let heartId = 0;

function spawnHearts() {
  const newHearts = Array.from({ length: 8 }, () => ({
    id: heartId++,
    x: Math.random() * 160 - 80,
    y: -(Math.random() * 80 + 40),
    size: Math.random() * 10 + 10,
    delay: Math.random() * 0.3,
  }));
  hearts.value.push(...newHearts);
  setTimeout(() => {
    hearts.value = hearts.value.filter((h) => !newHearts.includes(h));
  }, 1200);
}

function handleDonateClick() {
  spawnHearts();
  navigateToPage('/support');
  closeMenu();
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
            <use :href="`${baseUrl}icons.svg#leaf`" />
          </svg>
          <span class="font-display text-2xl font-extrabold tracking-tight text-mist">Savia UI</span>
        </div>

        <div class="flex items-center gap-2">
          <!-- Enlace a npm -->
          <a
            href="https://www.npmjs.com/package/savia-ui"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center size-12 rounded-[var(--radius-field)] text-leaf-muted hover:text-mist hover:bg-mist/5 transition-colors"
            aria-label="Ver paquete en npm"
          >
            <svg class="size-11" viewBox="0 0 48 48" fill="currentColor">
              <rect x="21.6" y="19.9" width="2.4" height="4.84"/>
              <path d="M2,15V29.7H14.2v2.5H24V29.7H46V15ZM14.2,27.2H11.8V19.9H9.3v7.3H4.5V17.5h9.7Zm12.3,0H21.6v2.5H16.7V17.5h9.8Zm17.1,0H41.2V19.9H38.7v7.3H36.2V19.9H33.8v7.3H28.9V17.5H43.6Z"/>
            </svg>
          </a>

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
        'fixed top-0 left-0 z-20 h-screen w-64 border-r border-leaf-muted/15 bg-garden-night flex flex-col px-3 pt-24 pb-24 overflow-y-auto transition-transform duration-300 ease-out',
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

    </aside>

    <!-- Support button (fixed bottom of sidebar) -->
    <div class="fixed bottom-0 left-0 z-30 w-52 px-3 pb-4 pt-3 hidden lg:block bg-garden-night border-r border-leaf-muted/15">
      <p class="text-[10px] text-leaf-muted/50 mb-2">v0.0.5</p>
      <!-- Corazones animados -->
      <div
        v-for="heart in hearts"
        :key="heart.id"
        class="absolute pointer-events-none heart-float"
        :style="{
          left: `calc(50% + ${heart.x}px)`,
          bottom: '40px',
          fontSize: `${heart.size}px`,
          animationDelay: `${heart.delay}s`,
        }"
      >
        <svg :width="heart.size" :height="heart.size" viewBox="0 0 24 24" fill="currentColor" class="text-bloom-coral">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </div>

      <button
        :class="[
          'flex items-center justify-center gap-2 w-full px-3 py-2.5 rounded-[var(--radius-field)] transition-colors text-sm font-medium group cursor-pointer',
          isActive('/support')
            ? 'bg-bloom-coral/20 text-bloom-coral'
            : 'bg-bloom-coral/10 hover:bg-bloom-coral/20 text-bloom-coral',
        ]"
        @click="handleDonateClick"
      >
        <svg
          class="size-4 transition-transform group-hover:scale-110"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
        <span>Support</span>
      </button>
    </div>

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

@keyframes heart-float {
  0% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  50% {
    opacity: 0.8;
    transform: translateY(-30px) scale(1.1);
  }
  100% {
    opacity: 0;
    transform: translateY(-70px) scale(0.6);
  }
}

.heart-float {
  animation: heart-float 1s ease-out forwards;
}
</style>
