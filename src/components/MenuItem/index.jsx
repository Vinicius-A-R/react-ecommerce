import React from 'react';

import { Container, Content } from './styles';

export default function MenuItem({ id, title, imageUrl, sizeImage, linkUrl }) {
  return (
    <>
      <Container className={sizeImage} image={imageUrl}>
        <Content>
          <span>{title.toUpperCase()}</span>
          <span>SHOP NOW</span>
        </Content>
      </Container>
    </>
  );
}
