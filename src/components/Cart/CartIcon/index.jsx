import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../../assets/shopping-bag.svg';

import { toggleCartHidden } from '../../../redux/cart/cart-actions';

import { Container, Count } from './styles.js';

export default function CartIcon() {
  const dispatch = useDispatch();

  const dispatchCartHidden = () => dispatch(toggleCartHidden());

  return (
    <>
      <Container onClick={dispatchCartHidden}>
        <ShoppingIcon />
        <Count>0</Count>
      </Container>
    </>
  );
}
