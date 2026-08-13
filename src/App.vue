<script setup lang="ts">
import { ref } from 'vue';
import SButton from './components/SButton.vue';
import SCard from './components/SCard.vue';

const variants = ['primary', 'secondary', 'tertiary', 'danger', 'ghost'] as const;
const types    = ['default', 'outlined', 'text'] as const;
const sizes    = ['small', 'medium', 'large'] as const;

const activeSection = ref('tema');

const nav = [
  { id: 'tema', label: 'Tema' },
  { id: 'botones', label: 'Botones' },
  { id: 'cards', label: 'Cards' },
];
</script>

<template>
  <div class="min-h-screen bg-garden-deep font-body text-mist flex">

    <!-- ═══ Sidebar ═══ -->
    <aside class="sticky top-0 h-screen w-52 shrink-0 border-r border-leaf-muted/15 bg-garden-night flex flex-col px-4 py-8">

      <!-- Nav links -->
      <nav class="flex flex-col gap-1">
        <a
          v-for="item in nav"
          :key="item.id"
          :href="`#${item.id}`"
          :class="[
            'px-3 py-2 rounded-[var(--radius-field)] text-sm font-medium transition-colors',
            activeSection === item.id
              ? 'bg-rain-mint/10 text-rain-mint'
              : 'text-leaf-muted hover:text-mist hover:bg-mist/5',
          ]"
          @click="activeSection = item.id"
        >
          {{ item.label }}
        </a>
      </nav>

      <!-- Spacer -->
      <div class="flex-1"></div>

      <!-- Footer mark -->
      <p class="text-[10px] text-leaf-muted/50 px-2">v0.1.0</p>
    </aside>

    <!-- ═══ Main content ═══ -->
    <main class="flex-1 overflow-y-auto">

      <!-- Fixed top header -->
      <header class="fixed top-0 left-52 right-0 z-10 bg-garden-night/95 backdrop-blur-sm border-b border-leaf-muted/10 px-10 py-5">
        <div class="flex items-center gap-2.5">
          <svg class="size-10 text-rain-mint" aria-hidden="true">
            <use href="/icons.svg#leaf" />
          </svg>
          <span class="font-display text-3xl font-extrabold tracking-tight text-mist">Savia UI</span>
        </div>
      </header>

      <div class="max-w-3xl px-10 pt-28 pb-14 space-y-24">

        <!-- ═══ SECCION: Tema ═══ -->
        <section id="tema" class="space-y-10 scroll-mt-14">
          <h2 class="font-display text-3xl font-extrabold tracking-tight text-mist">Tema</h2>

          <!-- Paleta -->
          <div class="space-y-4">
            <h3 class="text-sm font-semibold text-leaf-muted uppercase tracking-wide">Paleta de colores</h3>
            <div class="grid grid-cols-4 gap-3">
              <div class="space-y-1.5">
                <div class="h-14 rounded-[var(--radius-field)] bg-garden-night border border-leaf-muted/20"></div>
                <p class="text-[11px] text-leaf-muted">garden-night</p>
              </div>
              <div class="space-y-1.5">
                <div class="h-14 rounded-[var(--radius-field)] bg-garden-deep border border-leaf-muted/20"></div>
                <p class="text-[11px] text-leaf-muted">garden-deep</p>
              </div>
              <div class="space-y-1.5">
                <div class="h-14 rounded-[var(--radius-field)] bg-rain-mint"></div>
                <p class="text-[11px] text-leaf-muted">rain-mint</p>
              </div>
              <div class="space-y-1.5">
                <div class="h-14 rounded-[var(--radius-field)] bg-rain-blue"></div>
                <p class="text-[11px] text-leaf-muted">rain-blue</p>
              </div>
              <div class="space-y-1.5">
                <div class="h-14 rounded-[var(--radius-field)] bg-bloom-coral"></div>
                <p class="text-[11px] text-leaf-muted">bloom-coral</p>
              </div>
              <div class="space-y-1.5">
                <div class="h-14 rounded-[var(--radius-field)] bg-mist"></div>
                <p class="text-[11px] text-leaf-muted">mist</p>
              </div>
              <div class="space-y-1.5">
                <div class="h-14 rounded-[var(--radius-field)] bg-leaf-muted"></div>
                <p class="text-[11px] text-leaf-muted">leaf-muted</p>
              </div>
              <div class="space-y-1.5">
                <div class="h-14 rounded-[var(--radius-field)] bg-error"></div>
                <p class="text-[11px] text-leaf-muted">error</p>
              </div>
            </div>
          </div>

          <!-- Tipografia -->
          <div class="space-y-4">
            <h3 class="text-sm font-semibold text-leaf-muted uppercase tracking-wide">Tipografia</h3>
            <SCard>
              <div class="space-y-4">
                <div>
                  <p class="text-xs text-leaf-muted mb-1">Display — Figtree 800</p>
                  <p class="font-display text-4xl font-extrabold tracking-[-0.04em] leading-[0.98]">El jardin nocturno</p>
                </div>
                <div class="border-t border-leaf-muted/10 pt-4">
                  <p class="text-xs text-leaf-muted mb-1">Body — Nunito Sans 500</p>
                  <p class="text-base">Componentes construidos sobre la calma de una paleta oscura y organica.</p>
                </div>
              </div>
            </SCard>
          </div>

          <!-- Radios y spacing -->
          <div class="space-y-4">
            <h3 class="text-sm font-semibold text-leaf-muted uppercase tracking-wide">Radios y spacing</h3>
            <SCard>
              <div class="flex gap-6 items-end">
                <div class="text-center space-y-2">
                  <div class="w-16 h-10 bg-rain-mint/20 border border-rain-mint/40 rounded-[var(--radius-field)]"></div>
                  <p class="text-[11px] text-leaf-muted">field · 14px</p>
                </div>
                <div class="text-center space-y-2">
                  <div class="w-20 h-14 bg-rain-mint/20 border border-rain-mint/40 rounded-[var(--radius-panel)]"></div>
                  <p class="text-[11px] text-leaf-muted">panel · 22px</p>
                </div>
              </div>
            </SCard>
          </div>
        </section>

        <!-- ═══ SECCION: Botones ═══ -->
        <section id="botones" class="space-y-10 scroll-mt-14">
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
        </section>

        <!-- ═══ SECCION: Cards ═══ -->
        <section id="cards" class="space-y-10 scroll-mt-14">
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
        </section>

      </div>
    </main>

  </div>
</template>
