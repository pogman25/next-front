import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
  }

  code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  ul,
  ol,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
  margin: 0;
  padding: 0;
  }

  ul {
  list-style: none;
  }

  a,
  a:visited {
  text-decoration: none;
  }

  button {
  background-color: unset;
  border: none;
  padding: 0;
  margin: 0;
  font-family: 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
  }

/* roboto-300 - latin_cyrillic */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  src: local('Roboto Light'), local('Roboto-Light'),
    url('./fonts/roboto-v20-latin_cyrillic-300.woff2') format('woff2'),
    url('./fonts/roboto-v20-latin_cyrillic-300.woff') format('woff');
}
/* roboto-regular - latin_cyrillic */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: local('Roboto'), local('Roboto-Regular'),
    url('./fonts/roboto-v20-latin_cyrillic-regular.woff2') format('woff2'),
    url('./fonts/roboto-v20-latin_cyrillic-regular.woff') format('woff');
}
/* roboto-700 - latin_cyrillic */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  src: local('Roboto Bold'), local('Roboto-Bold'),
    url('./fonts/roboto-v20-latin_cyrillic-700.woff2') format('woff2'),
    url('./fonts/roboto-v20-latin_cyrillic-700.woff') format('woff');
}

/* pt-sans-regular - cyrillic_latin */
@font-face {
  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 400;
  src: local('PT Sans'), local('PTSans-Regular'),
    url('./fonts/pt-sans-v11-cyrillic_latin-regular.woff2') format('woff2'),
    url('./fonts/pt-sans-v11-cyrillic_latin-regular.woff') format('woff');
}

`;

export default GlobalStyle;
