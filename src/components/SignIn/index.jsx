import React, { useState, useEffect } from 'react';

import InputMaterialize from '../InputMaterialize/';
import Button from '../Button/';

import { Container, Form, GridButton } from './styles';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <Form onSubmit={handleSubmit}>
          <InputMaterialize
            labelInput="E-Mail"
            typeInput="email"
            valueInput={email}
            handleInput={handleEmail}
            isRequired={true}
            isAutoFocus={true}
          />

          <InputMaterialize
            labelInput="Password"
            typeInput="password"
            valueInput={password}
            handleInput={handlePassword}
            isRequired={true}
            isAutoFocus={false}
          />

          <GridButton>
            <Button
              typeButton="submit"
              labelButton="Sign in"
              colorButton={'#222'}
            />

            <Button
              typeButton="submit"
              labelButton="Sign in with Google"
              colorButton={'#14AFE5'}
            />
          </GridButton>
        </Form>
      </Container>
    </>
  );
}

export default SignIn;
