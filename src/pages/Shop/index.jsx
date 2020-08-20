import React, { useState } from 'react';

import SHOP_DATA from './shop-data';

import { Container } from './styles';

import PreviewCollection from '../../components/PreviewCollection/';

function Shop() {
  const [collections, setCollections] = useState(SHOP_DATA);

  return (
    <Container>
      <h1>Collections</h1>

      {collections.map(({ id, ...otherCollections }) => {
        return <PreviewCollection key={id} {...otherCollections} />;
      })}
    </Container>
  );
}

export default Shop;
