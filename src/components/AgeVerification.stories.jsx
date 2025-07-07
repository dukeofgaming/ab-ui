import React from "react";
import AgeVerification from "./AgeVerification";
import { within, userEvent } from '@storybook/testing-library';
import { expect } from 'storybook/test';

export default {
  title: "Components/AgeVerification",
  component: AgeVerification,
  argTypes: {
    minAge: { control: 'number', defaultValue: 18 },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/lwNVL3ceJV5Ih2l1QnODI1/AB-UI-Design-System?node-id=65-30&t=nVFTBXrGcAbexbGa-4',
    }
  }
};

export const Default = {
  args: {},
};

export const MinAge18 = {
  args: { minAge: 18 },
  name: 'Minimum Age 18',
};

export const MinAge21 = {
  args: { minAge: 21 },
  name: 'Minimum Age 21',
};

export const UnderageInput = {
  args: { minAge: 18 },
  name: 'Underage Input Error',
  play: async ({ canvasElement, args }) => {
    // Arrange
    const canvas = within(canvasElement);
    const minAge = args.minAge || 18;
    const now = new Date();
    const underageDate = new Date(now.getFullYear() - minAge + 1, now.getMonth(), now.getDate());
    const yyyy = underageDate.getFullYear().toString();
    const mm = (underageDate.getMonth() + 1).toString();
    const dd = underageDate.getDate().toString();

    const monthInput = canvas.getByPlaceholderText('MM');
    const dayInput = canvas.getByPlaceholderText('DD');
    const yearInput = canvas.getByPlaceholderText('YYYY');

    // Act
    await userEvent.clear(monthInput);
    await userEvent.type(monthInput, mm);
    await userEvent.clear(dayInput);
    await userEvent.type(dayInput, dd);
    await userEvent.clear(yearInput);
    await userEvent.type(yearInput, yyyy);
    const submit = canvas.getByRole('button', { name: /verify age/i });
    await userEvent.click(submit);

    // Assert
    const errorRegex = new RegExp(`must be at least ${minAge}`, 'i');
    await expect(canvas.findByText(errorRegex)).resolves.toBeInTheDocument();
  },

};
