import React from 'react';

import { Container } from './styles';

function InputMaterialize({
  labelInput,
  typeInput,
  valueInput,
  handleInput,
  isRequired,
  isAutoFocus,
}) {
  return (
    <Container>
      <input
        id={typeInput}
        type={typeInput}
        name={typeInput}
        value={valueInput}
        onChange={handleInput}
        required={isRequired}
        autoFocus={isAutoFocus}
      />

      <label htmlFor={typeInput}>{labelInput}</label>
    </Container>
  );
}

export default InputMaterialize;
