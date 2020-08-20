import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html, body, #root {
  font-family: 'Open Sans Condensed', sans-serif;
  -webkit-font-smoothing: antialiased;
  /* -moz-osx-font-smoothing: grayscale; */
}

body{
  width: 100%;
}

button{
  cursor: pointer;
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 16px;
}
`;

export const Container = styled.div``;
