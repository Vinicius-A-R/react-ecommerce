import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 48px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 32px;
    height: 32px;
  }
`;

export const Count = styled.span`
  position: absolute;

  font-size: 10px;
  font-weight: 700;
  bottom: 12px;
`;
