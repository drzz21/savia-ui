<script setup lang="ts">
import SCard from '../components/SCard.vue';

const baseUrl = import.meta.env.BASE_URL;

const icons = [
	{ id: 'leaf', label: 'leaf' },
	{ id: 'arrow-right', label: 'arrow-right' },
	{ id: 'arrow-left', label: 'arrow-left' },
	{ id: 'chevron-right', label: 'chevron-right' },
	{ id: 'chevron-left', label: 'chevron-left' },
	{ id: 'search', label: 'search' },
	{ id: 'mail', label: 'mail' },
	{ id: 'lock', label: 'lock' },
	{ id: 'user', label: 'user' },
	{ id: 'check', label: 'check' },
	{ id: 'x-circle', label: 'x-circle' },
];
</script>

<template>
	<div class="space-y-10">
		<div>
			<h2 class="font-display text-3xl font-extrabold tracking-tight text-mist">Icons</h2>
			<p class="text-sm text-leaf-muted mt-2">
				Savia UI uses an SVG sprite located at <code class="text-rain-mint/80 text-xs bg-rain-mint/10 px-1.5 py-0.5 rounded">public/icons.svg</code>.
				Pass the icon <code class="text-rain-mint/80 text-xs bg-rain-mint/10 px-1.5 py-0.5 rounded">id</code> to props like
				<code class="text-rain-mint/80 text-xs bg-rain-mint/10 px-1.5 py-0.5 rounded">iconLeft</code> or
				<code class="text-rain-mint/80 text-xs bg-rain-mint/10 px-1.5 py-0.5 rounded">iconRight</code> in
				<code class="text-rain-mint/80 text-xs bg-rain-mint/10 px-1.5 py-0.5 rounded">SButton</code> and
				<code class="text-rain-mint/80 text-xs bg-rain-mint/10 px-1.5 py-0.5 rounded">SInputText</code>.
			</p>
		</div>

		<SCard>
			<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
				<div
					v-for="icon in icons"
					:key="icon.id"
					class="flex flex-col items-center gap-3 p-4 rounded-[var(--radius-field)] border border-leaf-muted/15 hover:border-rain-mint/30 transition-colors"
				>
					<svg class="size-7 text-mist">
						<use :href="`${baseUrl}icons.svg#${icon.id}`" />
					</svg>
					<code class="text-xs text-leaf-muted font-mono">{{ icon.label }}</code>
				</div>
			</div>
		</SCard>

		<p class="text-sm text-leaf-muted/70 italic">New icons will be added in future releases. Stay tuned.</p>

		<div class="space-y-4">
			<h3 class="text-lg font-display font-extrabold text-mist">Usage</h3>
			<div class="text-sm text-leaf-muted space-y-3">
				<p>In <code class="text-rain-mint/80 text-xs bg-rain-mint/10 px-1.5 py-0.5 rounded">SButton</code>:</p>
				<pre class="bg-garden-night border border-leaf-muted/15 rounded-[var(--radius-field)] px-4 py-3 text-xs text-mist font-mono overflow-x-auto"><code>&lt;SButton label="Search" iconLeft="search" /&gt;
&lt;SButton label="Next" iconRight="arrow-right" /&gt;</code></pre>

				<p class="pt-2">In <code class="text-rain-mint/80 text-xs bg-rain-mint/10 px-1.5 py-0.5 rounded">SInputText</code>:</p>
				<pre class="bg-garden-night border border-leaf-muted/15 rounded-[var(--radius-field)] px-4 py-3 text-xs text-mist font-mono overflow-x-auto"><code>&lt;SInputText label="Email" iconLeft="mail" /&gt;
&lt;SInputText label="Password" iconRight="lock" /&gt;</code></pre>
			</div>
		</div>
	</div>
</template>
