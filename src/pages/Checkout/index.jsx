import React, { useMemo } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CheckoutItems from '../../components/CheckoutItems/';

import { Container } from './styles';

function Checkout() {
  const { cartItems } = useSelector((state) => state.cart);
  const cart = useMemo(() => cartItems, [cartItems]);

  const tableHead = ['Product', 'Description', 'Quantity', 'Price', 'Remove'];

  return (
    <>
      <Container>
        {cartItems.length ? (
          <CheckoutItems tableHead={tableHead} cartItems={cart} />
        ) : (
          <Redirect to="/shop" />
        )}
      </Container>
    </>
  );
}

export default Checkout;
