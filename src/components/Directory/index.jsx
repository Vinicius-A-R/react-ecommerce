import React from 'react';
import { useSelector } from 'react-redux';

import MenuItem from '../MenuItem/';

import { Container, GridOrder } from './styles';

function Directory() {
  const { sections } = useSelector((state) => state.directory);

  return (
    <Container>
      {sections.map(({ id, ...otherProps }) => (
        <GridOrder key={id}>
          <MenuItem key={id} {...otherProps} />
        </GridOrder>
      ))}
    </Container>
  );
}

export default Directory;
