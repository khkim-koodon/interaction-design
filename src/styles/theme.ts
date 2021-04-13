import { createGlobalStyle } from 'styled-components';
import 'styled-components';

const borderRadius = {
  PrimaryBorderRadius: '13px',
};

export const lightTheme = {
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
  // BorderRadius
  borderRadius,
};

// 색과 관련된 GlobalStyle
const GlobalColors = createGlobalStyle`
body {

}
`;

export default GlobalColors;
