<script setup lang="ts">
import SCode from '../components/SCode.vue';
</script>

<template>
  <div class="space-y-12">
    <h2 class="font-display text-3xl font-extrabold tracking-tight text-mist">Installation</h2>

    <div class="space-y-6">
      <p class="text-base text-leaf-muted leading-relaxed">
        Install <span class="text-mist font-semibold">Savia UI</span> in your Vue 3 project using your preferred package manager.
      </p>

      <!-- npm -->
      <div class="space-y-2">
        <h3 class="text-sm font-semibold text-leaf-muted uppercase tracking-wide">npm</h3>
        <SCode language="bash" code="npm install savia-ui" />
      </div>

      <!-- pnpm -->
      <div class="space-y-2">
        <h3 class="text-sm font-semibold text-leaf-muted uppercase tracking-wide">pnpm</h3>
        <SCode language="bash" code="pnpm add savia-ui" />
      </div>

      <!-- yarn -->
      <div class="space-y-2">
        <h3 class="text-sm font-semibold text-leaf-muted uppercase tracking-wide">yarn</h3>
        <SCode language="bash" code="yarn add savia-ui" />
      </div>
    </div>

    <!-- Usage -->
    <div class="space-y-6">
      <h3 class="font-display text-2xl font-bold tracking-tight text-mist">Usage</h3>

      <p class="text-base text-leaf-muted leading-relaxed">
        Import and use components in your Vue 3 application:
      </p>

      <SCode language="typescript" code="import { SButton, SCard, SCode } from 'savia-ui'" />

      <p class="text-base text-leaf-muted leading-relaxed">
        Then use them in your templates:
      </p>

      <SCode language="html" code='<template>
  <SButton variant="primary">Click me</SButton>
  <SCard padding="md">
    <p>Card content</p>
  </SCard>
</template>' />
    </div>

    <!-- Links -->
    <div class="space-y-4">
      <h3 class="font-display text-2xl font-bold tracking-tight text-mist">Links</h3>
      <ul class="space-y-2">
        <li>
          <a
            href="https://www.npmjs.com/package/savia-ui"
            target="_blank"
            rel="noopener noreferrer"
            class="text-rain-mint hover:text-rain-mint/80 transition-colors underline underline-offset-2"
          >
            npm package
          </a>
        </li>
        <li>
          <a
            href="https://github.com/drzz21/savia-ui"
            target="_blank"
            rel="noopener noreferrer"
            class="text-rain-mint hover:text-rain-mint/80 transition-colors underline underline-offset-2"
          >
            GitHub repository
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
