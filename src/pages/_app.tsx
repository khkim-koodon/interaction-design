// import '../styles/globals.css';
import '../styles/font.css';
import GlobalColors, { lightTheme } from '../styles/theme';
import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
import GlobalStyle from '../styles/global-styles';
import TabBar from '../components/tab-bar';
import { useRouter } from 'next/dist/client/router';

function App({ Component, pageProps }: AppProps) {
  // TabBar 상태 관리
  const router = useRouter();
  const pathname = router.pathname;
  const isTabBar =
    pathname === '/' || pathname === '/consignment' || pathname === '/mypage';

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <GlobalColors />
      <Component {...pageProps} />
      {isTabBar && <TabBar pathname={pathname} />}
    </ThemeProvider>
  );
}

export default App;
