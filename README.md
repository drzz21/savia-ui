# Savia UI

A Vue 3 component library built on a dark, atmospheric color palette. Designed for interfaces where clarity matters more than decoration.

> **Full documentation:** [https://placeholder-savia-ui-docs.dev](https://placeholder-savia-ui-docs.dev)
>
> Visit the official site for all patterns, variants, detailed props, and interactive examples.

## Installation

```bash
npm install savia-ui
```

```bash
pnpm add savia-ui
```

## Usage

Styles are included automatically when you import the components — no need to import any additional CSS file.

```vue
<script setup>
import { SButton, SCard, SCode } from 'savia-ui'
</script>

<template>
  <SCard>
    <SButton label="Get started" variant="primary" />
  </SCard>
</template>
```

## Available Components

| Component | Description |
|---|---|
| `SButton` | Flexible button with variants, types, sizes, and icons |
| `SCard` | Surface container with ambient shadow |
| `SCode` | Code block with syntax highlighting and copy button |

> More components will be added soon.

## Basic Examples

### SButton

```vue
<!-- Primary button -->
<SButton label="Save" variant="primary" />

<!-- Button with icon -->
<SButton label="Next" variant="secondary" icon-right="arrow-right" />

<!-- Outlined button -->
<SButton label="Cancel" variant="ghost" type="outlined" />

<!-- Listening to events -->
<SButton label="Submit" @click="(e) => alert('Clicked!')" />
```

### SCard

```vue
<SCard padding="medium">
  <h3>Title</h3>
  <p>Content inside the card.</p>
</SCard>
```

### SCode

```vue
<SCode code="const x = 42;" language="typescript" />
```

## Requirements

- Vue 3.4+
- Tailwind CSS 4.x (peer dependency)

## License

MIT
