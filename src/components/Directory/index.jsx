import React, { useState } from 'react';

import MenuItem from '../MenuItem/';

import { Container, GridOrder } from './styles';

const sectionsInfo = [
  {
    title: 'hats',
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    id: 1,
    linkUrl: 'shop/hats',
  },
  {
    title: 'jackets',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    id: 2,
    linkUrl: 'shop/jackets',
  },
  {
    title: 'sneakers',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    id: 3,
    linkUrl: 'shop/sneakers',
  },
  {
    title: 'womens',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    size: 'large',
    id: 4,
    linkUrl: 'shop/womens',
  },
  {
    title: 'mens',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    size: 'large',
    id: 5,
    linkUrl: 'shop/mens',
  },
];

function Directory() {
  const [sections, setItems] = useState(sectionsInfo);

  return (
    <Container>
      {sections.map(({ id, title, imageUrl, size, linkUrl }) => (
        <GridOrder>
          <MenuItem
            key={id}
            className={`number${id}`}
            id={id}
            title={title}
            imageUrl={imageUrl}
            size={size}
            linkUrl={linkUrl}
            sizeImage={size}
          />
        </GridOrder>
      ))}
    </Container>
  );
}

export default Directory;