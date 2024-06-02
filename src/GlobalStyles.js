// src/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #f0f0f0;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
