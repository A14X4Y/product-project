import { type Preview } from '@storybook/react';
import { StyleDecorator } from '../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from './../src/shared/config/storybook/ThemeDecorator/ThemeDrcorator';
import { Theme } from "../src/app/providers/ThemeProvider"
import {RouterDecorator} from './../src/shared/config/storybook/RouterDecorator/RouterDecorator';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [ThemeDecorator(Theme.LIGHT), StyleDecorator, RouterDecorator],
};

export default preview;
