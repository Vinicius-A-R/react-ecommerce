import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/CollectionsOverview/';
import CollectionPage from '../../components/CollectionPage/';

import { Container } from './styles';

function Shop({ match }) {
  return (
    <Container>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
    </Container>
  );
}

export default Shop;
