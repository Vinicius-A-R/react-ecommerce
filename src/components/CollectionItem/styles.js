import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 90% 10%;

  height: 350px;
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
    border: 0;
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

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  margin-top: 8px;
`;
