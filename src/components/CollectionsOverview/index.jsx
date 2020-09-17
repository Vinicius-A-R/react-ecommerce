import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import CollectionItem from './CollectionItem/';

import { Container, Header, Grid } from './styles';

function CollectionsOverview() {
  const { collections } = useSelector((state) => state.shop);

  const collectionKeys = Object.keys(collections);

  console.log('KEYS', collectionKeys);

  return (
    <Container>
      <h1>Collections</h1>

      {collectionKeys.map((keys) => {
        const { items, title, routeName } = collections[keys];

        return (
          <div key={title}>
            <Header>
              <h3>{title}</h3>
              <Link to={`shop/${routeName}`}>view more &#10132; </Link>
            </Header>

            <Grid>
              {items
                .filter((_, index) => index < 4)
                .map((item) => {
                  return <CollectionItem key={item.name} item={item} />;
                })}
            </Grid>
          </div>
        );
      })}
    </Container>
  );
}

export default CollectionsOverview;
