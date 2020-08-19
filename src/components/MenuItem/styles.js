import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #222;
  margin: 0 7.5px 15px;
  overflow: hidden;

  height: 380px;
  min-width: 30%;
  overflow: hidden;

  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;

  &:hover {
    cursor: pointer;
  }

  &.large {
    height: 580px;
  }
`;

export const Content = styled.div.attrs()`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 168px;
  height: 144px;

  opacity: 0.7;
  background-color: #fff;

  & span {
    font-weight: 700;
  }

  & span:first-child {
    font-size: 32px;
    font-weight: 300;
  }

  &:hover {
    opacity: 1;
    transform: scale(1.2);
    transition: transform 2s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
`;
