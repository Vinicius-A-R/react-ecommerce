import React from 'react';

import { Container } from './styles';

function InputMaterialize({
  labelInput,
  typeInput,
  nameInput,
  valueInput,
  handleInput,
  isRequired,
  isAutoFocus,
}) {
  return (
    <Container>
      <input
        id={nameInput}
        type={typeInput}
        name={nameInput}
        value={valueInput}
        onChange={handleInput}
        required={isRequired}
        autoFocus={isAutoFocus}
      />

      <label htmlFor={nameInput}>{labelInput}</label>
    </Container>
  );
}

export default InputMaterialize;
