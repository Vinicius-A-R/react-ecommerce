import React, { useState } from 'react';

import { auth, createUserProfileDocument } from '../../firebase/firebase-utils';

import InputMaterialize from '../InputMaterialize/';
import Button from '../Button/';

import { Container, Form, Header, Error } from './styles';

function SignUp() {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError(true);
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      setDefault(); //reset all variables
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'name') setDisplayName(value);

    if (name === 'email-register') setEmail(value);

    if (name === 'password-register') setPassword(value);

    if (name === 'confirm-password-register') setConfirmPassword(value);
  };

  const setDefault = () => {
    setDisplayName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError(false);
  };

  return (
    <>
      <Container>
        {error && (
          <Error>
            <span>Password doesn't match!</span>
          </Error>
        )}

        <Form onSubmit={handleSubmit}>
          <Header>
            <h2>I do not have an account</h2>
            <span>Sign up with your e-mail and password</span>
          </Header>

          <InputMaterialize
            labelInput="Name :"
            typeInput="text"
            nameInput="name"
            valueInput={displayName}
            handleInput={handleChange}
            isRequired={true}
          />

          <InputMaterialize
            labelInput="E-Mail :"
            typeInput="email"
            nameInput="email-register"
            valueInput={email}
            handleInput={handleChange}
            isRequired={true}
          />

          <InputMaterialize
            labelInput="Password :"
            typeInput="password"
            nameInput="password-register"
            valueInput={password}
            handleInput={handleChange}
            isRequired={true}
          />

          <InputMaterialize
            labelInput="Confirm Password :"
            typeInput="password"
            nameInput="confirm-password-register"
            valueInput={confirmPassword}
            handleInput={handleChange}
            isRequired={true}
          />

          <Button
            typeButton="submit"
            labelButton="Sign up"
            colorButton={'#222'}
          />
        </Form>
      </Container>
    </>
  );
}

export default SignUp;
