import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Elements/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    mode: {
      control: { type: 'select' },
      options: ['text', 'multiline', 'number'],
    },
    value: { control: 'text' },
    placeholder: { control: 'text' },
    rows: { control: 'number' },
  },
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/lwNVL3ceJV5Ih2l1QnODI1/AB-UI-Design-System?node-id=769-158&m=dev',
    }
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder : "Placeholder text...",
    mode        : "text"
  },
};

export const WithValue: Story = {
  args: {
    value: "Some value",
    mode: "text"
  },
};

export const MultilineMode: Story = {
  args: {
    value   : "Multiline text",
    mode    : "multiline",
    rows    : 3
  },
};

export const NumberMode: Story = {
  parameters: {
    design: {
      type  : 'figma',
      url   : 'https://www.figma.com/design/lwNVL3ceJV5Ih2l1QnODI1/AB-UI-Design-System?node-id=785-85&m=dev',
    }
  },
  args: {
    value     : "42",
    mode      : "number"
  },
};
