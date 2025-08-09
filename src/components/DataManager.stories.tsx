import type { Meta, StoryObj } from '@storybook/react-vite';
import { DataManager } from './DataManager';
import React from 'react';
import type { FieldDefinition, DataManagerApi, DataManagerProps } from './DataManager';

interface User {
  [key: string]: unknown;
  id: number;
  name: string;
  email: string;
}

const fields: FieldDefinition<User>[] = [
  { name: 'name', label: 'Name', type: 'text', required: true },
  { name: 'email', label: 'Email', type: 'email', required: true },
];

const meta: Meta<DataManagerProps<User, React.Key>> = {
  title: 'Components/Modules/Data/DataManager',
  component: DataManager,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/lwNVL3ceJV5Ih2l1QnODI1/AB-UI-Design-System?node-id=769-29&m=dev',
    }
  },
};

export default meta;

type Story = StoryObj<DataManagerProps<User, number>>;

const sampleItems: User[] = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
];

const api: DataManagerApi<User, number> = {
  fetch: async () => sampleItems,
  create: async (item: Partial<User>) => ({
    id: typeof item.id === 'number' || typeof item.id === 'string' ? item.id : 3,
    name: typeof item.name === 'string' ? item.name : '',
    email: typeof item.email === 'string' ? item.email : '',
  }),
  update: async (id: number, item: Partial<User>) => ({
    id,
    name: typeof item.name === 'string' ? item.name : '',
    email: typeof item.email === 'string' ? item.email : '',
  }),
  delete: async (id: number) => {},
};

export const Default: Story = {
  args: {
    entityName: 'User',
    fields,
    api,
    getRowId: (item: User) => item.id,
    initialForm: () => ({ name: '', email: '' }),
  },
};
