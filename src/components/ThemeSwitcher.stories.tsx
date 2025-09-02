import type { Meta, StoryObj } from '@storybook/react-vite';
import { ThemeSwitcher } from './ThemeSwitcher';

const meta: Meta<typeof ThemeSwitcher> = {
  title       : 'Components/Modules/ThemeSwitcher',
  component   : ThemeSwitcher,
  tags        : ['autodocs'],
  parameters  : {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/lwNVL3ceJV5Ih2l1QnODI1/AB-UI-Design-System?node-id=665-49&m=devhttps://www.figma.com/design/lwNVL3ceJV5Ih2l1QnODI1/AB-UI-Design-System?node-id=785-47&m=dev',
    }
  },
};

export default meta;

type Story = StoryObj<typeof ThemeSwitcher>;

export const Default: Story = {
  render: (args) => <ThemeSwitcher {...args} />, 
};
