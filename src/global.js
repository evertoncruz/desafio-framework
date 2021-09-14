import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    min-height: 100vh;
    font-family: Soleil, Arial, Helvetica, sans-serif;
  }
  button, input, optgroup, select, textarea {
    font-family: inherit;
  }
  body {
    -webkit-font-smoothing: antialiased !important;
  }
  ol, ul {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: none;
  }
`;

export default GlobalStyles;