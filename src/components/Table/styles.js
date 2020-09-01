import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 16px;
`;

export const TableBox = styled.table`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.thead`
  width: 100%;
  padding: 12px 0;
  border-bottom: 1px solid #9c9c9c;

  tr {
    display: grid;
    grid-template-columns: repeat(5, 1fr);

    width: 100%;
    color: #9c9c9c;
  }
`;

export const Body = styled.tbody`
  width: 100%;
  height: 100%;

  tr {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: 120px;

    justify-items: center;
    align-items: center;

    border-bottom: 1px solid #9c9c9c;

    img {
      width: 80px;
      height: 96px;
    }

    span {
      width: 100%;
      height: 100%;
      font-size: 24px;
      border: 0;
      background-color: #fff;

      cursor: pointer;
    }
  }
`;

export const Footer = styled.tfoot`
  display: flex;
  justify-content: flex-end;

  width: 100%;
  height: 40px;
  margin-top: 16px;
  padding-right: 16px;

  font-size: 32px;
`;
