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
      url: 'https://www.figma.com/design/lwNVL3ceJV5Ih2l1QnODI1/AB-UI-Design-System?node-id=263-35&m=dev',
    }
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    value: "Hello",
    placeholder: "Type here...",
    mode: "text",
    onChange: () => {}, // prevent controlled warning
  },
};

export const WithValue: Story = {
  args: {
    value: "Some value",
    placeholder: "Enter value",
    mode: "text",
    onChange: () => {}, // prevent controlled warning
  },
};

export const MultilineMode: Story = {
  args: {
    value: "Multiline text",
    placeholder: "Type multiline...",
    mode: "multiline",
    rows: 3,
    onChange: () => {}, // prevent controlled warning
  },
};

export const NumberMode: Story = {
  args: {
    value: 42,
    placeholder: "Enter a number",
    mode: "number",
    onChange: () => {}, // prevent controlled warning
  },
};
