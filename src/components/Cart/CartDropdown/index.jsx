import React from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Button from '../../Button/';
import CartItem from '../CartItem/';

import { Container, Items, Empty } from './styles';

function CartDropdown({ cartItems, history }) {
  const dispatch = useDispatch();

  const handleCheckout = () => {
    dispatch({ type: 'TOGGLE_CART_HIDDEN' });
    history.push('/checkout');
  };

  return (
    <>
      <Container>
        {cartItems.length ? (
          <Items>
            {cartItems.map(({ id, ...otherProps }) => {
              return <CartItem key={id} {...otherProps} />;
            })}
          </Items>
        ) : (
          <Empty>
            <span>EMPTY</span>
          </Empty>
        )}

        <Button
          clickEvent={handleCheckout}
          labelButton="GO TO CHECKOUT"
          typeButton="button"
          colorButton="#222"
        />
      </Container>
    </>
  );
}

export default withRouter(CartDropdown);
