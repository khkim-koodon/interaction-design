import { css, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video,
  input,
  button {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 18px;
    line-height:24px;
    vertical-align: baseline;
    box-sizing: border-box;
    
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  input{
    caret-color:#78A353;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-family: Spoqa Han Sans,sans-serif;
  }
  a{
    text-decoration:none;
  }

  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }



  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  button {
    cursor: pointer;
    outline: none;
  }

  html ,body {
    -webkit-tap-highlight-color:transparent;
    color:#363636;
    font-family: Spoqa Han Sans,sans-serif;
    -webkit-font-smoothing: antialiased;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
  }

  /* body.font-unloaded{
      letter-spacing: 0.82px;
      word-spacing: -1.2px;
  } */
  

  h1{
    font-weight: 700;
    font-size: 72px;
    line-height:107px;
  }
  h2{
    font-weight: 700;
    font-size: 27px;
    line-height:32px;
  }
  h3{
    font-weight: 700;
    font-size: 24px;
    line-height:36px;
  }
  h4{
    font-weight: 700;
    font-size: 21px;
    line-height:31px;
  }
  h5{
    font-weight: 400;
    font-size: 18px;
    line-height:27px;
  }
  h6{
    font-weight: 400;
    font-size: 16px;
    line-height:24px;
  }

  p{
    font-weight: 400;
    font-size: 18px;
    line-height:27px;
  }
  
  /* #__next-build-watcher{
    display:none;
  } */
`;

export default GlobalStyle;
