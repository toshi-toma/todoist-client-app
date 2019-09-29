import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  :after,
  :before {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.2rem;
    font-family: "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
    margin: 0;
  }

`;

export default GlobalStyle;
