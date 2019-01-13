import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
/* @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800'); */
html {
  font-size: 10px;
}
body {
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
section {
  height: 100vh;
  width: 100%;
  padding: 0 2rem;
  box-sizing: border-box;
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.primary};
  overflow: hidden;
  position: relative;
}

h1 {
  font-size: 4rem;
  font-weight: 800;
  margin: 0;
}
h2 {
  font-size: 2rem;
  font-weight: 600;
  margin: 0;
}
h3 {
  font-size: 2rem;
  font-weight: 800;
  margin: 0 0 1.5rem 0;
}
h4 {
  font-size: 1.2rem;
  font-weight: 800;
  margin: 0;
}
p {
  font-size: 1.6rem;
  font-weight: 300;
  margin: 0;
}
`;
