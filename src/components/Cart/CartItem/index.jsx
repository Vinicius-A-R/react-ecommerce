import React from 'react';

import { Container, Details } from './styles';

function CartItem({ name, imageUrl, price, quantity }) {
  return (
    <Container>
      <img src={imageUrl} alt={name} />

      <Details>
        <h4>{name}</h4>
        <span>quantity: {quantity}</span>
        <span>
          {quantity} x $&nbsp;{price}
        </span>
      </Details>
    </Container>
  );
}

export default CartItem;
