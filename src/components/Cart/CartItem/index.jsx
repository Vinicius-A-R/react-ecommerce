import React from 'react';

import { Container, Details } from './styles';

function CartItem({ name, imageUrl, price, quantity }) {
  return (
    <Container>
      <img src={imageUrl} alt={name} />

      <Details>
        <h5>{name}</h5>
        <span>quantity: {quantity}</span>
        <span>
          {quantity} x $&nbsp;{price}
        </span>
      </Details>
    </Container>
  );
}

export default CartItem;
