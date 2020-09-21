import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

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
