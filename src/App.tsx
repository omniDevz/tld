import React from 'react';
import { ToastProvider } from 'react-toast-notifications';

import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from './hooks/usePersistedState';

import Routes from './pages/routes';

import dark from './assets/styles/themes/dark';
import DefaultStyles from './assets/styles/default';

function App() {
  const [theme] = usePersistedState<DefaultTheme>('theme', dark);

  return (
    <ThemeProvider theme={theme}>
      <DefaultStyles />
      <ToastProvider>
        <Routes />
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
