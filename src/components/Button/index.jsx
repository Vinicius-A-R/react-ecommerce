import React from 'react';

import { ButtonStyle } from './styles';

function Button({ labelButton, typeButton, colorButton }) {
  return (
    <ButtonStyle type={typeButton} color={colorButton}>
      {labelButton}
    </ButtonStyle>
  );
}

export default Button;
