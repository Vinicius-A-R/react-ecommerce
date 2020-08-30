import styled from 'styled-components';

export const Container = styled.div`
  display: grid !important;
  grid-template-columns: 1fr;
  grid-template-rows: 90% 10%;

  position: absolute;
  width: 248px;
  height: 340px;
  margin-right: 24px;

  padding: 16px;
  border: 1px solid #222;
  background-color: #fff;

  top: 80px;
  right: 0;

  z-index: 999;
`;

export const Items = styled.div`
  display: grid !important;
  grid-template-columns: 1fr;
  grid-template-rows: max-content;
  grid-row-gap: 12px;

  max-height: 95%;
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
