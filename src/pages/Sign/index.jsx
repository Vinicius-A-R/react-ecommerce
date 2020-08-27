import React from 'react';

import SignIn from '../../components/SignIn/';
import SignUp from '../../components/SignUp/';

import { Container } from './styles';

function Sign() {
  return (
    <Container>
      <SignIn />
      <SignUp />
    </Container>
  );
}

export default Sign;
