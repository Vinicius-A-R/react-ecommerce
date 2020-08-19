import React from 'react';
import { withRouter } from 'react-router-dom';

import { Container, Content } from './styles';

function MenuItem({ id, title, imageUrl, size, linkUrl, history, match }) {
  console.log(match);

  return (
    <>
      <Container className={size} image={imageUrl}>
        <Content onClick={() => history.push(`${match.url}${linkUrl}`)}>
          <span>{title.toUpperCase()}</span>
          <span>SHOP NOW</span>
        </Content>
      </Container>
    </>
  );
}

export default withRouter(MenuItem);
