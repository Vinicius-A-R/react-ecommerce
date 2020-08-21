import React from 'react';
import { withRouter } from 'react-router-dom';

import { Container, Content, Shop } from './styles';

function MenuItem({ id, title, imageUrl, size, linkUrl, history, match }) {
  return (
    <>
      <Container>
        <Content image={imageUrl} />
        <Shop onClick={() => history.push(`${match.url}${linkUrl}`)}>
          <span>{title.toUpperCase()}</span>
          <span>SHOP NOW</span>
        </Shop>
      </Container>
    </>
  );
}

export default withRouter(MenuItem);
