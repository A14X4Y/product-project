import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { i18n } from 'shared/config/i18n/i18ForTests';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { StateSchema, StoreProvider, createReduxStore } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
export interface RenderWithRouterOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
}

export function componentRender(component: ReactNode, options: RenderWithRouterOptions = {}) {
  const { route = '/', initialState } = options;
  const store = createReduxStore(initialState as StateSchema);
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18n}>{component}</I18nextProvider>
      </MemoryRouter>
    </Provider>,
  );
}
