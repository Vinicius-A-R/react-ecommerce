import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Spinner from '../Spinner';

import { Container, Grid, Box, Details, Image } from './styles';

function CollectionPage({ match }) {
  const dispatch = useDispatch();
  const { collections } = useSelector((state) => state.shop);

  const [collection, setCollection] = useState(null);

  useEffect(() => {
    if (collections) {
      setCollection(collections[match.params.categoryId]);
    }

    return () => {
      setCollection(null);
    };
  }, [collections]);

  return (
    <Container>
      {collection ? (
        <>
          <h1>{collection.title}</h1>
          <Grid>
            {collection.items.map(({ id, name, imageUrl, price }) => {
              return (
                <Box key={id}>
                  <Image image={imageUrl}>
                    <button
                      onClick={() =>
                        dispatch({
                          type: 'ADD_ITEM',
                          payload: { id, name, imageUrl, price },
                        })
                      }
                    >
                      ADD TO CART
                    </button>
                  </Image>

                  <Details>
                    <span>{name}</span>
                    <span>$ {price}</span>
                  </Details>
                </Box>
              );
            })}
          </Grid>
        </>
      ) : (
        <Spinner />
      )}
    </Container>
  );
}

export default CollectionPage;
