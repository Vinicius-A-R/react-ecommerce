import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  h1 {
    text-align: center;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 320px;
  /* grid-gap: 12px; */

  margin-top: 32px;
`;

export const Box = styled.div`
  width: 100%;
  height: 300px;
  padding: 8px;

  img {
    width: 100%;
    height: 248px;
  }
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  button {
    align-self: flex-end;

    width: 80%;
    height: 48px;
    margin-bottom: 24px;
    font-weight: 400;
    border: 1px solid #000;
    background-color: #fff;

    opacity: 0.7;

    &:hover {
      opacity: 1;
      transform: scale(1.15);
      transition: transform 0.3s ease-in-out;
    }

    &:active {
      color: #fff;
      background-color: #222;
    }
  }
`;

export const Button = styled.button``;
