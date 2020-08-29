import React from 'react';
import { useDispatch } from 'react-redux';

import { Container, Image, Footer } from './styles';
import { addItem } from '../../redux/cart/cart-actions';

function CollectionItem({ item }) {
  const { id, name, price, imageUrl } = item;

  const dispatch = useDispatch();

  const dispatchItem = () => dispatch(addItem(item));

  return (
    <Container>
      <Image image={imageUrl}>
        <button onClick={dispatchItem}>ADD TO CART</button>
      </Image>
      <Footer>
        <span>{name}</span>
        <span>{`$ ${price}`}</span>
      </Footer>
    </Container>
  );
}

export default CollectionItem;
