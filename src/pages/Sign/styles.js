import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;

  justify-items: center;

  width: 100%;
  max-width: 1260px;
  height: 100%;

  margin: 32px auto;
  padding: 0 16px;
`;
