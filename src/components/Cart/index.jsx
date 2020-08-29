import React from 'react';
import { useSelector } from 'react-redux';

import CartIcon from './CartIcon/';
import CartDropdown from './CartDropdown/';

function Cart() {
  const { hidden } = useSelector((state) => state.cart);

  return (
    <>
      <CartIcon />
      {hidden && <CartDropdown />}
    </>
  );
}

export default Cart;
