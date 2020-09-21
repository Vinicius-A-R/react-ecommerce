import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

/* export const GridOrder = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);

  &:nth-child(1) {
    grid-column: 1 / span 2;
  }

  &:nth-child(2) {
    grid-column: 3 / span 2;
  }

  &:nth-child(3) {
    grid-column: 5 / span 2;
  }

 
`; */
export const GridOrder = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  width: 100%;
  height: 100%;

  div {
    &:nth-child(4) {
      flex-grow: 1;
    }

    &:nth-child(5) {
      flex-grow: 1;
    }
  }
`;
