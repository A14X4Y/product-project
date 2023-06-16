import { lazy } from 'react';

export const MainPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore: Error
      setTimeout(() => resolve(import('./MainPage')), 1500);
    }),
);
