import React from 'react';

import Button from '../../Button/';

import { Container, Items } from './styles';

function CartDropdown() {
  return (
    <>
      <Container>
        <Items></Items>

        <Button
          labelButton="GO TO CHECKOUT"
          typeButton="button"
          colorButton="#222"
        />
      </Container>
    </>
  );
}

export default CartDropdown;
