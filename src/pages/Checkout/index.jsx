import React, { useState, useEffect, useMemo } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Table from '../../components/Table/';

import { Container } from './styles';

function Checkout() {
  const { cartItems } = useSelector((state) => state.cart);
  const cart = useMemo(() => cartItems, [cartItems]);

  const tableHead = ['Product', 'Description', 'Quantity', 'Price', 'Remove'];

  return (
    <>
      <Container>
        {cartItems.length ? (
          <Table tableHead={tableHead} cartItems={cart} />
        ) : (
          <Redirect to="/shop" />
        )}
      </Container>
    </>
  );
}

export default Checkout;
