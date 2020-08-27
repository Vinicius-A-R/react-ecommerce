import React, { useState, useEffect } from 'react';
import { signInWithGoogle } from '../../firebase/firebase-utils';

import InputMaterialize from '../InputMaterialize/';
import Button from '../Button/';

import { Container, Form, Header, GridButton } from './styles';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);

  const [labelInput, setLabelInput] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleEmail = (event) => {
    setLabelInput(true);
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Header>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
          </Header>

          <InputMaterialize
            labelInput="E-Mail"
            typeInput="email"
            valueInput={email}
            handleInput={handleEmail}
            isAutoFocus={true}
          />

          <InputMaterialize
            labelInput="Password"
            typeInput="password"
            valueInput={password}
            handleInput={handlePassword}
            isAutoFocus={false}
          />

          <GridButton>
            <Button
              typeButton="submit"
              labelButton="Sign in"
              colorButton={'#222'}
            />

            <Button
              typeButton="button"
              labelButton="Sign in with Google"
              colorButton={'#14AFE5'}
              signIn={signInWithGoogle}
              isGoogleSignIn
            />
          </GridButton>
        </Form>
      </Container>
    </>
  );
}

export default SignIn;
