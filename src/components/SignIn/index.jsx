import React, { useState } from 'react';
import { auth, signInWithGoogle } from '../../firebase/firebase-utils';

import InputMaterialize from '../InputMaterialize/';
import Button from '../Button/';

import { Container, Form, Header, GridButton } from './styles';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const setDefault = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);

      setDefault();
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'email-signin') setEmail(value);
    if (name === 'password-signin') setPassword(value);
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
            nameInput="email-signin"
            valueInput={email}
            handleInput={handleChange}
            isAutoFocus={true}
          />

          <InputMaterialize
            labelInput="Password"
            typeInput="password"
            nameInput="password-signin"
            valueInput={password}
            handleInput={handleChange}
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
