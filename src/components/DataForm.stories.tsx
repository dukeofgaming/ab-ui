import type { Meta, StoryObj } from '@storybook/react-vite';
import { DataForm } from './DataForm';
import type { FieldDefinition } from './DataManager';

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

const meta: Meta<typeof DataForm<User>> = {
  title       : 'Components/Modules/Data/DataForm',
  component   : DataForm,
  tags        : ['autodocs'],
  parameters  : {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/lwNVL3ceJV5Ih2l1QnODI1/AB-UI-Design-System?node-id=769-50&m=dev',
    }
  },
};

export default meta;

type Story = StoryObj<typeof DataForm<User>>;

export const Default: Story = {
  args: {
    form: { name: '', email: '' },
    fields,
    editingId: null,
    error: '',
    onChange: () => {},
    onSubmit: (e) => { e.preventDefault(); alert('Submitted!'); },
    onCancel: () => { alert('Cancelled!'); },
  },
};

export const Editing: Story = {
  args: {
    ...Default.args,
    editingId: 1,
    form: { id: 1, name: 'Alice', email: 'alice@example.com' },
  },
};

export const ErrorState: Story = {
  args: {
    ...Default.args,
    error: 'Something went wrong',
  },
};
