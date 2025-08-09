import type { Meta, StoryObj } from '@storybook/react-vite';
import { DataTable } from './DataTable';

interface User {
    [key: string]: unknown;
    id: number;
    name: string;
    email: string;
}

const meta: Meta<typeof DataTable<User>> = {
  title       : 'Components/Modules/Data/DataTable',
  component   : DataTable,
  tags        : ['autodocs'],
  parameters  : {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/lwNVL3ceJV5Ih2l1QnODI1/AB-UI-Design-System?node-id=769-156&m=dev',
    }
  },
};

export default meta;

type Story = StoryObj<typeof DataTable<User>>;

const sampleItems: User[] = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
];

export const Default: Story = {
  args: {
    items: sampleItems,
    loading: false,
    deletingIds: [],
    onEdit: (id) => { alert(`Edit user ${id}`); },
    onDelete: (id) => { alert(`Delete user ${id}`); },
    getRowId: (item: User) => item.id,
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    loading: true,
  },
};

export const Deleting: Story = {
  args: {
    ...Default.args,
    deletingIds: [1],
  },
};
