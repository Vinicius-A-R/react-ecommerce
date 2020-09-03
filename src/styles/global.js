import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html, body, #root {
  width: 100%;
  min-height: 100%;
  
  font-family: 'Open Sans Condensed', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

button{
  cursor: pointer;
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 16px;
}

a{
  color: #222;
  text-decoration: none;
}
`;

export const Container = styled.div``;
