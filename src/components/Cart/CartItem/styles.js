import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  border: 1px solid #222;

  -webkit-box-shadow: 0px 0px 6px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 6px -1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 6px -1px rgba(0, 0, 0, 0.75);

  img {
    width: 54px;
    height: 100%;
    margin-right: 12px;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column !important;
  width: 100%;
  height: 100%;

  h5 {
    width: 100%;
    margin-bottom: 8px;
    text-align: left;
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
