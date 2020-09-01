import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 54px;

  img {
    width: 54px;
    height: 80px;
    margin-right: 12px;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column !important;
  text-align: left;
  width: 100%;

  h4 {
    width: 100%;
    margin-bottom: 8px;
  }

  span {
    display: flex;
    justify-content: space-between;
    width: 100%;

    &:last-child {
      font-size: 14px;
      align-self: flex-end;
    }
  }
`;
