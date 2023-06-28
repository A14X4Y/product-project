import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDrcorator';
import { Theme } from 'app/providers/ThemeProvider';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    children: 'Text',
  },
};

export const Clear: Story = {
  args: {
    children: 'Text',
    theme: 'clear',
  },
};
export const ClearInverted: Story = {
  args: {
    children: 'Text',
    theme: 'clearInverted',
  },
};

export const Outline: Story = {
  args: {
    children: 'Text',
    theme: 'outline',
  },
};

export const OutlineDark: Story = {
  args: {
    children: 'Text',
    theme: 'outline',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const BackgroundTheme: Story = {
  args: {
    children: 'Text',
    theme: 'background',
  },
};
export const BackgroundInvertedTheme: Story = {
  args: {
    children: 'Text',
    theme: 'backgroundInverted',
  },
};
export const Square: Story = {
  args: {
    children: '>',
    theme: 'backgroundInverted',
    square: true,
    size: 'size_m',
  },
};
export const SquareSizeS: Story = {
  args: {
    children: '>',
    theme: 'backgroundInverted',
    square: true,
    size: 'size_s',
  },
};

export const SquareSizeL: Story = {
  args: {
    children: '>',
    theme: 'backgroundInverted',
    square: true,
    size: 'size_l',
  },
};
export const SquareSizeXL: Story = {
  args: {
    children: '>',
    theme: 'backgroundInverted',
    square: true,
    size: 'size_xl',
  },
};
