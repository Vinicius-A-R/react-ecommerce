import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column !important;

  position: absolute;
  width: 300px;
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
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 300px;
  margin-bottom: 24px;

  overflow-y: scroll;
`;
