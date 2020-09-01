import styled from 'styled-components';

export const Container = styled.header`
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1260px;
  height: 64px;
  margin: 0 auto;
  padding: 0 16px;

  svg {
    &:hover {
      transform: scale(1.15);
    }
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 72px;
  height: 40px;
  padding: 0px 8px;

  cursor: pointer;

  &:hover {
    border: 1px solid #222;
  }
`;
