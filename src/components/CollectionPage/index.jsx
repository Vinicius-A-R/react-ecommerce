import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container, Grid, Box, Details, Image } from './styles';

function CollectionPage({ match }) {
  const dispatch = useDispatch();
  const { collections } = useSelector((state) => state.shop);

  const collection = useMemo(() => collections[match.params.categoryId], []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Container>
      {collection && (
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
      )}
    </Container>
  );
}

export default CollectionPage;
