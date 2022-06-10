import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme, lightTheme } from '../themes';
import { EntriesProvider } from '../context/entries';
import { UIProvider } from '../context/ui';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EntriesProvider>
      <UIProvider>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </UIProvider>
    </EntriesProvider>
  )
}

export default MyApp;
