# Savia UI

A Vue 3 component library built on a dark, atmospheric color palette. Designed for interfaces where clarity matters more than decoration.

## Install

```bash
npm install savia-ui
```

```bash
pnpm add savia-ui
```

## Setup

Import the library in your main entry file:

```ts
import 'savia-ui/style.css'
```

Then use components directly:

```vue
<script setup>
import { SButton, SCard } from 'savia-ui'
</script>

<template>
  <SCard>
    <SButton label="Get started" icon-right="arrow-right" />
  </SCard>
</template>
```

## Components

### SButton

A flexible button with five variants, three types, three sizes, icon support, and an optional colored shadow.

```vue
<SButton
  label="Submit"
  variant="primary"
  type="default"
  size="medium"
  icon-right="arrow-right"
  :shadow="true"
  :loading="false"
  :disabled="false"
  :full-width="false"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | Button text (required) |
| `variant` | `'primary' \| 'secondary' \| 'tertiary' \| 'danger' \| 'ghost'` | `'primary'` | Color variant |
| `type` | `'default' \| 'outlined' \| 'text'` | `'default'` | Visual style |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Size scale |
| `shadow` | `boolean` | `false` | Colored glow shadow matching the variant |
| `iconLeft` | `string` | — | SVG sprite symbol name for left icon |
| `iconRight` | `string` | — | SVG sprite symbol name for right icon |
| `loading` | `boolean` | `false` | Shows spinner, disables interaction |
| `disabled` | `boolean` | `false` | Disables the button |
| `fullWidth` | `boolean` | `false` | Stretches to container width |

### SCard

A surface container with ambient shadow and rounded corners.

```vue
<SCard padding="medium">
  <p>Your content here</p>
</SCard>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `padding` | `'none' \| 'small' \| 'medium' \| 'large'` | `'medium'` | Internal padding |

## Design Tokens

The library ships with CSS custom properties via Tailwind v4 `@theme`:

```css
--color-garden-night: #152B2C;   /* Card/panel surface */
--color-garden-deep:  #0C1D20;   /* Page background */
--color-rain-mint:    #B7E1CB;   /* Primary action */
--color-rain-blue:    #79B5D9;   /* Secondary action */
--color-bloom-coral:  #FF836C;   /* Danger/alert */
--color-mist:         #EAF4EE;   /* Primary text on dark */
--color-leaf-muted:   #91AAA0;   /* Secondary text, borders */
--color-error:        #FFB5A7;   /* Error messages */

--font-display: "Figtree", Arial, sans-serif;
--font-body:    "Nunito Sans", Arial, sans-serif;

--radius-field: 14px;
--radius-panel: 22px;
```

## Icons

SButton uses an SVG sprite at `/icons.svg`. The library includes these symbols:

- `leaf` — Savia brand mark
- `arrow-right` / `arrow-left` — Directional arrows
- `chevron-right` — Navigation indicator

Add your own symbols to the sprite and reference them via `icon-left` / `icon-right`.

## Requirements

- Vue 3.4+
- Tailwind CSS 4.x (peer)

## License

MIT
