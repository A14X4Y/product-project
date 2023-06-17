/* eslint-disable react/display-name */
import { Theme } from 'app/providers/ThemeProvider';
import { Story } from '@storybook/react';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) =>
  (
    <div className={`app ${theme}`}>S
      <StoryComponent />
    </div>
  );
