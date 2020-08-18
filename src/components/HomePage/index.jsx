import React from 'react';

import { Container, DirectoryMenu, MenuItem, Content } from './styles';

function HomePage() {
  return (
    <>
      <Container>
        <DirectoryMenu>
          <MenuItem>
            <Content>
              <h1>HATS</h1>
              <span>SHOP NOW</span>
            </Content>
          </MenuItem>
          <MenuItem>
            <Content>
              <h1>JACKETS</h1>
              <span>SHOP NOW</span>
            </Content>
          </MenuItem>
          <MenuItem>
            <Content>
              <h1>SNEAKERS</h1>
              <span>SHOP NOW</span>
            </Content>
          </MenuItem>
          <MenuItem>
            <Content>
              <h1>MENS</h1>
              <span>SHOP NOW</span>
            </Content>
          </MenuItem>
          <MenuItem>
            <Content>
              <h1>WOMENS</h1>
              <span>SHOP NOW</span>
            </Content>
          </MenuItem>
        </DirectoryMenu>
      </Container>
    </>
  );
}

export default HomePage;
