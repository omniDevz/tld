import React from 'react';
import { ToastProvider } from 'react-toast-notifications';

import { ThemeProvider, DefaultTheme } from 'styled-components';

import usePersistedState from './hooks/usePersistedState';
import { AuthProvider } from './contexts/auth';
import Routes from './routes';

import dark from './assets/styles/themes/dark';
import DefaultStyles from './assets/styles/default';

function App() {
  const [theme] = usePersistedState<DefaultTheme>('@TLD:theme', dark);

  return (
    <ThemeProvider theme={theme}>
      <DefaultStyles />
      <ToastProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
