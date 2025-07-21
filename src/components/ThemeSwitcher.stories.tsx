import type { Meta, StoryObj } from '@storybook/react-vite';
import { ThemeSwitcher } from './ThemeSwitcher';

const meta: Meta<typeof ThemeSwitcher> = {
  title       : 'Components/ThemeSwitcher',
  component   : ThemeSwitcher,
  tags        : ['autodocs'],
  parameters  : {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof ThemeSwitcher>;

export const Default: Story = {
  render: (args) => <ThemeSwitcher {...args} />, 
};
