import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 7.5px;
  overflow: hidden;

  height: 380px;
  min-width: 30%;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.4s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
`;

export const Shop = styled.div.attrs()`
  position: absolute;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 168px;
  height: 120px;

  opacity: 0.7;
  background-color: #fff;
  border: 1px solid #222;

  & span {
    font-weight: 700;
  }

  & span:first-child {
    font-size: 32px;
    font-weight: 300;
  }

  &:hover {
    opacity: 1;
    transform: scale(1.15);
    transition: transform 0.4s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
`;
