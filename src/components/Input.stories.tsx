import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
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
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    value: "Hello",
    placeholder: "Type here...",
    mode: "text",
  },
};

export const WithValue: Story = {
  args: {
    value: "Some value",
    placeholder: "Enter value",
    mode: "text",
  },
};

export const MultilineMode: Story = {
  args: {
    value: "Multiline text",
    placeholder: "Type multiline...",
    mode: "multiline",
    rows: 3,
  },
};

export const NumberMode: Story = {
  args: {
    value: 42,
    placeholder: "Enter a number",
    mode: "number",
  },
};
