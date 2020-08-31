import React, { useMemo } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../../assets/shopping-bag.svg';

import { toggleCartHidden } from '../../../redux/cart/cart-actions';
// import { selectCartItems } from '../../../redux/cart/cart-selectors';
// import { selectCartItemsCount } from '../../../redux/cart/cart-selectors';

import { Container, Count } from './styles.js';

export default function CartIcon() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const totalItemsCount = (cart) => {
    return cart.reduce((acc, currentValue) => acc + currentValue.quantity, 0);
  };

  const totalItems = useMemo(() => totalItemsCount(cartItems), [cartItems]);
  const dispatchCartHidden = () => dispatch(toggleCartHidden());

  return (
    <>
      <Container onClick={dispatchCartHidden}>
        <ShoppingIcon />
        <Count>{totalItems}</Count>
      </Container>
    </>
  );
}
