import React from 'react';
import PropTypes from 'prop-types';

import { signIn } from 'api/sessions';

import auth from 'screens/public/layouts/auth';

import CardForm from 'screens/public/Login/CardForm';
import AuthActionButtons from 'screens/public/components/AuthActionButtons';

function Login() {


  async function handleSignIn({ email, password }) {
    const data = await signIn({  email, password  });
    const authToken = data.auth_token;
    console.log('sign in data', authToken)
  };

  return (
    <div>
      <CardForm handleSignIn={handleSignIn}/>
      <AuthActionButtons />
    </div>
  );
}

Login.propTypes = {};

export default auth(Login);
