import styled from 'styled-components';

export const Container = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  justify-content: space-between; */

  display: grid;
  grid-template-columns: repeat(6, 1fr);

  width: 100%;
`;

export const GridOrder = styled.div`
  &:nth-child(1) {
    grid-column: 1 / span 2;
  }

  &:nth-child(2) {
    grid-column: 3 / span 2;
  }

  &:nth-child(3) {
    grid-column: 5 / span 2;
  }

  &:nth-child(4) {
    grid-row: 2;
    grid-column: 1 / span 3;
  }

  &:nth-child(5) {
    grid-row: 2;
    grid-column: 4 / span 3;
  }
`;
