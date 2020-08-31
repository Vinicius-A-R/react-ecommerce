import React, { useMemo } from 'react';

import { useSelector } from 'react-redux';
// import { addItem } from '../../../redux/cart/cart-actions';

import Button from '../../Button/';
import CartItem from '../CartItem/';

import { Container, Items } from './styles';

function CartDropdown({ cartItems }) {
  return (
    <>
      <Container>
        <Items>
          {cartItems.map(({ id, ...otherProps }) => {
            return <CartItem key={id} {...otherProps} />;
          })}
        </Items>

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
