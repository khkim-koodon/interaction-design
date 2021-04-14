import { createGlobalStyle, DefaultTheme } from 'styled-components';
import 'styled-components';

const borderRadius = {
  R13: '13px',
};

export const lightTheme: DefaultTheme = {
    primary: "#78A353",
    primary80: "#93B575",
    primary40: "#C9DABA",
    purple: "#877de6",
    black: "#363636",
    gray4: "#5d5d5d",
    gray3: "#717171",
    gray2: "#999999",
    gray1: "#e5e5e5",
    white: "#ffffff",
    red: "#BD4343",

    // 새로 추가
    gray1__50: "#f2f2f2",

  // BorderRadius
  borderRadius,
};

// 색과 관련된 GlobalStyle
const GlobalColors = createGlobalStyle`
body {}
`;

export default GlobalColors;

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;
    primary80: string;
    primary40: string;
    purple: string;
    black: string;
    gray4: string;
    gray3: string;
    gray2: string;
    gray1:string;
    white: string;
    red: string;

    // 새로 추가
    gray1__50: string;

    // BorderRadius
    borderRadius: {
      R13: string;
    }
  }
}
