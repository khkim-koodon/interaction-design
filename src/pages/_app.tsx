import '../styles/globals.css';
import '../styles/font.css';
import GlobalColors, { lightTheme } from '../styles/theme';
import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalColors />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
