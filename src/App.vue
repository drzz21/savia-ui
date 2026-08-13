<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

const nav = [
  { to: '/theme', label: 'Theme' },
  { to: '/buttons', label: 'Buttons' },
  { to: '/cards', label: 'Cards' },
];
</script>

<template>
  <div class="min-h-screen bg-garden-deep font-body text-mist flex">

    <!-- Sidebar -->
    <aside class="sticky top-0 h-screen w-52 shrink-0 border-r border-leaf-muted/15 bg-garden-night flex flex-col px-4 py-8">
      <nav class="flex flex-col gap-1">
        <router-link
          v-for="item in nav"
          :key="item.to"
          :to="item.to"
          :class="[
            'px-3 py-2 rounded-[var(--radius-field)] text-sm font-medium transition-colors',
            route.path === item.to
              ? 'bg-rain-mint/10 text-rain-mint'
              : 'text-leaf-muted hover:text-mist hover:bg-mist/5',
          ]"
        >
          {{ item.label }}
        </router-link>
      </nav>

      <div class="flex-1"></div>
      <p class="text-[10px] text-leaf-muted/50 px-2">v0.1.0</p>
    </aside>

    <!-- Main -->
    <main class="flex-1 overflow-y-auto">

      <!-- Fixed header -->
      <header class="fixed top-0 left-52 right-0 z-10 bg-garden-night/95 backdrop-blur-sm border-b border-leaf-muted/10 px-10 py-5">
        <div class="flex items-center gap-2.5">
          <svg class="size-8 text-rain-mint" aria-hidden="true">
            <use href="/icons.svg#leaf" />
          </svg>
          <span class="font-display text-2xl font-extrabold tracking-tight text-mist">Savia UI</span>
        </div>
      </header>

      <!-- Page content -->
      <div class="max-w-3xl px-10 pt-28 pb-14">
        <router-view />
      </div>

    </main>
  </div>
</template>
