import type { Meta, StoryObj } from '@storybook/react';

import MainPage from './MainPage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDrcorator';
import { Theme } from 'app/providers/ThemeProvider';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof MainPage> = {
  title: 'pages/MainPage',
  component: MainPage,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof MainPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Light: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
