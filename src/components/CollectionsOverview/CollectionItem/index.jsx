import React from 'react';
import { useDispatch } from 'react-redux';

import { Container, Image, Footer } from './styles';

function CollectionItem({ item }) {
  const { id, name, price, imageUrl } = item;

  const dispatch = useDispatch();

  const dispatchItem = () => dispatch({ type: 'ADD_ITEM', payload: item });

  return (
    <Container key={id}>
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
