import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  margin-top: 40px;
`;

export const GridButton = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
`;
