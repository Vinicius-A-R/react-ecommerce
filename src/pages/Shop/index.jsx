import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from './styles';

import PreviewCollection from '../../components/PreviewCollection/';

function Shop() {
  const { collections } = useSelector((state) => state.shop);

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
