import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
 body {
    margin: 0;
    background: lightgrey;
    font-family: 'Roboto', 'Segoe UI', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

export const LayoutContainer = styled.div`
    padding: 20px;

    @media only screen and (min-width: 600px) {
      width: 600px;
      margin: 0px auto;
    }
`;