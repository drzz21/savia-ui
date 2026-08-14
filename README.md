# Savia UI

A Vue 3 component library built on a dark, atmospheric color palette. Designed for interfaces where clarity matters more than decoration.

> **Full documentation:** [https://drzz21.github.io/savia-ui/](https://drzz21.github.io/savia-ui/theme)
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
| `SAccordion` | Collapsible content panels (single or multiple open) |
| `SBadge` | Inline label with variants, types, sizes, pill, and dot |
| `SBreadcrumbs` | Navigation breadcrumb trail with separator styles |
| `SButton` | Flexible button with variants, types, sizes, and icons |
| `SCard` | Surface container with ambient shadow |
| `SCheckbox` | Custom checkbox with indeterminate support |
| `SCode` | Code block with syntax highlighting and copy button |
| `SDivider` | Horizontal/vertical separator with optional label |
| `SFileUpload` | Drag-and-drop file upload with validation |
| `SInputText` | Text input with label, icons, clearable, and validation |
| `SLoader` | Animated loading spinner with size and color variants |
| `SMasonry` | CSS multi-column masonry layout |
| `SModal` | Dialog overlay with sizes and persistent mode |
| `SRadio` | Radio button with size options |
| `SSpace` | Spacing component using design tokens |
| `SStepper` | Step indicator (horizontal/vertical, clickable) |
| `STabs` | Tab navigation with default, pills, underline, and boxed variants |

> Full documentation with interactive examples at [drzz21.github.io/savia-ui](https://drzz21.github.io/savia-ui/)

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

### STabs

```vue
<script setup>
import { ref } from 'vue'
import { STabs, STabPanel } from 'savia-ui'

const active = ref('profile')
</script>

<template>
  <STabs v-model="active" variant="underline">
    <STabPanel id="profile" label="Profile">Profile content</STabPanel>
    <STabPanel id="settings" label="Settings">Settings content</STabPanel>
    <STabPanel id="billing" label="Billing" disabled>Billing content</STabPanel>
  </STabs>
</template>
```

### SRadio

```vue
<script setup>
import { ref } from 'vue'
import { SRadio, SSpace } from 'savia-ui'

const selected = ref('vue')
</script>

<template>
  <SSpace size="spacious">
    <SRadio v-model="selected" value="vue" label="Vue" name="framework" />
    <SRadio v-model="selected" value="react" label="React" name="framework" />
    <SRadio v-model="selected" value="svelte" label="Svelte" name="framework" />
  </SSpace>
</template>
```

## Requirements

- Vue 3.4+
- Tailwind CSS 4.x (peer dependency)

## License

MIT
