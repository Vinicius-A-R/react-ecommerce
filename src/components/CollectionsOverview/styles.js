import styled from 'styled-components';

export const Container = styled.div`
  h3 {
    font-size: 24px;
    font-weight: 400;
  }

  &:not(:first-child) {
    margin-top: 16px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-gap: 12px;
  grid-template-columns: repeat(4, 1fr);

  margin-top: 12px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(3, 1fr);

    & div:nth-child(4) {
      display: none;
    }
  }
`;
