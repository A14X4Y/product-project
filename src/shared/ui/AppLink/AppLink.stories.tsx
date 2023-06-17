import type { Meta, StoryObj } from '@storybook/react';

import { AppLink } from './AppLink';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDrcorator';
import { Theme } from 'app/providers/ThemeProvider';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    children: 'Текст',
    theme: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Текст',
    theme: 'secondary',
  },
  // decorators: [ThemeDecorator(Theme.DARK)],
};

export const Red: Story = {
  args: {
    children: 'Текст',
    theme: 'red',
  },
};
export const PrimaryDark: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    children: 'Текст',
    theme: 'primary',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const SecondaryDark: Story = {
  args: {
    children: 'Текст',
    theme: 'secondary',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const RedDark: Story = {
  args: {
    children: 'Текст',
    theme: 'red',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
