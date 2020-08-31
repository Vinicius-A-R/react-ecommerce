import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import CartIcon from './CartIcon/';
import CartDropdown from './CartDropdown/';

function Cart() {
  const { hidden } = useSelector((state) => state.cart);
  const { cartItems } = useSelector((state) => state.cart);

  const items = useMemo(() => cartItems, [cartItems]);

  return (
    <>
      <CartIcon />
      {hidden && <CartDropdown cartItems={items} />}
    </>
  );
}

export default Cart;
