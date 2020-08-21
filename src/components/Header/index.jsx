import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { Container, Item } from './styles';

function Header() {
  return (
    <>
      <Container>
        <Link to="/">
          <Logo />
        </Link>
        <div>
          <Item>
            <Link to="/shop">SHOP</Link>
          </Item>
          <Item>
            <Link to="/contact">CONTACT</Link>
          </Item>
          <Item>
            <Link to="/signin">SIGN IN</Link>
          </Item>
        </div>
      </Container>
    </>
  );
}

export default Header;
