<script setup lang="ts">
import { computed, ref } from 'vue';

const { code, language = 'vue' } = defineProps<{
  /** The code string to display */
  code: string;
  /** Language label shown in the header */
  language?: string;
}>();

const lines = computed(() => code.split('\n'));

const copied = ref(false);

async function copyCode() {
  await navigator.clipboard.writeText(code);
  copied.value = true;
  setTimeout(() => { copied.value = false; }, 2000);
}
</script>

<template>
  <div class="rounded-[var(--radius-panel)] border border-leaf-muted/15 overflow-hidden bg-[#0a1a1c]">
    <!-- Editor header -->
    <div class="flex items-center justify-between px-4 py-2.5 bg-[#0d2022] border-b border-leaf-muted/10">
      <div class="flex items-center gap-1.5">
        <span class="w-2.5 h-2.5 rounded-full bg-bloom-coral/70"></span>
        <span class="w-2.5 h-2.5 rounded-full bg-[#f5d565]/70"></span>
        <span class="w-2.5 h-2.5 rounded-full bg-rain-mint/70"></span>
      </div>
      <div class="flex items-center gap-3">
        <span class="text-[10px] text-leaf-muted/60 font-mono uppercase tracking-wider">{{ language }}</span>
        <button
          class="text-[10px] text-leaf-muted/50 hover:text-rain-mint font-mono uppercase tracking-wider transition-colors cursor-pointer"
          @click="copyCode"
        >
          {{ copied ? 'Copied!' : 'Copy' }}
        </button>
      </div>
    </div>

    <!-- Code body -->
    <div class="overflow-x-auto p-4">
      <table class="border-collapse w-full">
        <tbody>
          <tr v-for="(line, i) in lines" :key="i" class="leading-relaxed">
            <td class="pr-4 text-right text-[11px] text-leaf-muted/30 font-mono select-none w-8 align-top">{{ i + 1 }}</td>
            <td class="text-xs text-leaf-muted/90 font-mono whitespace-pre">{{ line }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
