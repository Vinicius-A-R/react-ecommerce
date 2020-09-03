import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase-utils';

import { useSelector } from 'react-redux';

import Cart from '../Cart/';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { Container, Item } from './styles';

function Header() {
  const { currentUser } = useSelector((state) => state.user);

  const hasUser = useMemo(() => (currentUser ? true : false), [currentUser]);

  return (
    <>
      <Container>
        <Link to="/">
          <Logo />
        </Link>
        <div>
          <Item>
            <Link to="/">HOME</Link>
          </Item>
          <Item>
            <Link to="/shop">SHOP</Link>
          </Item>
          <Item>
            <Link to="/contact">CONTACT</Link>
          </Item>

          {hasUser ? (
            <Item onClick={() => auth.signOut()}>
              <Link to="/">SIGN OUT</Link>
            </Item>
          ) : (
            <Item>
              <Link to="/signin">SIGN IN</Link>
            </Item>
          )}

          <Cart />
        </div>
      </Container>
    </>
  );
}

export default Header;
