import styled from 'styled-components';

export const ButtonStyle = styled.button`
  width: 100%;
  height: 40px;

  font-weight: 700;
  color: #fff;
  border: 0;
  background-color: ${(props) => props.color};

  &:hover {
    color: ${(props) => props.color};
    background-color: #fff;
    border: 3px solid ${(props) => props.color};
  }
`;
