import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

const CssBaseline = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-size: 62.5%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  #root {
    height: 100vh;
  }
`;
export default CssBaseline;
