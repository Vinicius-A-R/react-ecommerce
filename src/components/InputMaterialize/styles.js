import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;

  margin-bottom: 16px;

  input {
    width: 100%;
    padding: 4px 0;
    margin-bottom: 16px;

    font-size: 16px;
    border: 0;
    outline: 0;
    background: transparent;
    border-bottom: 2px solid #ccc;
    transition: border-color 0.8s;

    &:focus {
      border-bottom: 2px solid #222;

      & ~ label {
        position: absolute;
        display: block;

        top: -24px;
        font-size: 12px;

        color: #222;
        transition: top 0.3s ease-out;
      }
    }
  }

  label {
    display: block;
    position: absolute;

    top: 0;
    color: #acacac;
    transition: 0.2s;
  }
`;
