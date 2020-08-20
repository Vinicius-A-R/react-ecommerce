import React from 'react';

import CollectionItem from '../CollectionItem/';

import { Container, Grid } from './styles';

function PreviewCollection({ title, routeName, items }) {
  return (
    <>
      <Container>
        <h2>{title}</h2>
        <Grid>
          {items
            .filter((item, index) => index < 4)
            .map(({ id, ...otherProps }) => {
              return <CollectionItem key={id} {...otherProps} />;
            })}
        </Grid>
      </Container>
    </>
  );
}

export default PreviewCollection;
