import React from 'react';

import { Container, Image, Footer } from './styles';

function CollectionItem({ id, name, price, imageUrl }) {
  return (
    <Container>
      <Image image={imageUrl}>
        <button>ADD TO CART</button>
      </Image>
      <Footer>
        <span>{name}</span>
        <span>{`$ ${price}`}</span>
      </Footer>
    </Container>
  );
}

export default CollectionItem;
