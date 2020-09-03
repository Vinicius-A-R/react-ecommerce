import styled from 'styled-components';

export const Container = styled.div`
  display: grid !important;
  grid-template-columns: 1fr;
  grid-template-rows: 88% auto;

  position: absolute;
  width: 264px;
  height: 360px;
  margin-right: 24px;
  padding: 8px;

  border: 1px solid #222;
  background-color: #fff;

  top: 64px;
  right: 0;

  z-index: 999;
`;

export const Items = styled.div`
  display: grid !important;
  grid-template-columns: 1fr;
  grid-auto-rows: 80px;
  grid-row-gap: 12px;

  width: 100%;
  height: 95%;
  padding: 8px;
  overflow-y: scroll;

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 8px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #222;
  }
`;

export const Empty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  font-size: 32px;
  font-weight: 700;
`;
