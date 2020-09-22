import React from 'react';
import { useSelector } from 'react-redux';

import MenuItem from '../MenuItem';
import Spinner from '../Spinner';

import { Container, GridOrder } from './styles';

function Directory() {
  const { sections } = useSelector((state) => state.directory);

  return (
    <Container>
      {sections ? (
        <GridOrder>
          {sections.map(({ id, ...otherProps }) => (
            <MenuItem key={id} {...otherProps} />
          ))}
        </GridOrder>
      ) : (
        <Spinner />
      )}
    </Container>
  );
}

export default Directory;
