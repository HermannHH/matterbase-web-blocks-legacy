import React from 'react';
import PropTypes from 'prop-types';

import { signUp } from 'api/users';

import auth from 'screens/public/layouts/auth';

import CardForm from 'screens/public/Register/CardForm';
import AuthActionButtons from 'screens/public/components/AuthActionButtons';

function Register() {


  async function handleSignUp({ email, password, passwordConfirmation }) {
    const data = await signUp({  email, password, passwordConfirmation });
    // const authToken = data.auth_token;
    console.log('sign in data', data);
  };

  return (
    <div>
      <CardForm handleSignUp={handleSignUp}/>
      <AuthActionButtons />
    </div>
  );
}

Register.propTypes = {};

export default auth(Register);
