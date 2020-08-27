import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 500px;
  padding: 16px;

  border: 1px solid #222;
`;

export const Header = styled.header`
  margin-bottom: 32px;
`;

export const GridButton = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
`;
