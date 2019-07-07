import React from 'react';
import PropTypes from 'prop-types';

import { navigate } from '@reach/router';

import routes from 'routes';

import { signIn } from 'api/sessions';

import auth from 'screens/public/layouts/auth';

import CardForm from 'screens/public/Login/CardForm';
import AuthActionButtons from 'screens/public/components/AuthActionButtons';

function Login({ appContext: { actions }}) {

  // console.log('i are sam', props)
  async function handleSignIn({ email, password }) {
    await signIn({  email, password  });
    actions.setLoading(true);
    actions.setIsAuthenticated(true);
    navigate(routes.private.home.path);
    actions.setLoading(false);

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
