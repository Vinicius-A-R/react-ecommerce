import React from 'react';

import CollectionItem from './CollectionItem/';

import { Container, Grid } from './styles';

function CollectionsOverview({ title, items }) {
  return (
    <>
      <Container>
        <h3>{title}</h3>
        <Grid>
          {items
            .filter((item, index) => index < 4)
            .map((item) => {
              return <CollectionItem key={item.id} item={item} />;
            })}
        </Grid>
      </Container>
    </>
  );
}

export default CollectionsOverview;
