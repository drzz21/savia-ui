import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from 'storybook/test';
import Button from '@/components/Button.vue';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'danger', 'ghost'],
    },
    type: {
      control: 'select',
      options: ['default', 'outlined', 'text'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: { control: 'boolean' },
    loading:  { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    iconLeft:  { control: 'text' },
    iconRight: { control: 'text' },
  },
  args: {
    label: 'Button',
    variant: 'primary',
    type: 'default',
    size: 'medium',
    disabled: false,
    loading: false,
    fullWidth: false,
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// ── Variantes principales ─────────────────────────────────────────────────────

export const Primary: Story = {
  args: { variant: 'primary', label: 'Primary' },
};

export const Secondary: Story = {
  args: { variant: 'secondary', label: 'Secondary' },
};

export const Tertiary: Story = {
  args: { variant: 'tertiary', label: 'Tertiary' },
};

export const Danger: Story = {
  args: { variant: 'danger', label: 'Danger' },
};

export const Ghost: Story = {
  args: { variant: 'ghost', label: 'Ghost' },
};

// ── Tipos ─────────────────────────────────────────────────────────────────────

export const Outlined: Story = {
  args: { variant: 'primary', type: 'outlined', label: 'Outlined' },
};

export const TextOnly: Story = {
  name: 'Text',
  args: { variant: 'primary', type: 'text', label: 'Text' },
};

// ── Tamaños ───────────────────────────────────────────────────────────────────

export const Small: Story = {
  args: { size: 'small', label: 'Small' },
};

export const Medium: Story = {
  args: { size: 'medium', label: 'Medium' },
};

export const Large: Story = {
  args: { size: 'large', label: 'Large' },
};

// ── Estados ───────────────────────────────────────────────────────────────────

export const Disabled: Story = {
  args: { disabled: true, label: 'Disabled' },
};

export const Loading: Story = {
  args: { loading: true, label: 'Cargando...' },
};

export const LoadingDanger: Story = {
  name: 'Loading · Danger',
  args: { loading: true, variant: 'danger', label: 'Eliminando...' },
};

// ── Ancho completo ────────────────────────────────────────────────────────────

export const FullWidth: Story = {
  args: { fullWidth: true, label: 'Full Width Button' },
  decorators: [() => ({ template: '<div style="width:400px"><story /></div>' })],
};

// ── Combinaciones destacadas ──────────────────────────────────────────────────

export const DangerOutlined: Story = {
  name: 'Danger · Outlined',
  args: { variant: 'danger', type: 'outlined', label: 'Delete' },
};

export const GhostOutlined: Story = {
  name: 'Ghost · Outlined',
  args: { variant: 'ghost', type: 'outlined', label: 'Cancel' },
};

export const SecondaryText: Story = {
  name: 'Secondary · Text',
  args: { variant: 'secondary', type: 'text', label: 'Ver más' },
};
