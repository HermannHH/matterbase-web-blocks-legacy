import React from 'react';
import PropTypes from 'prop-types';

import { navigate } from '@reach/router';

import routes from 'routes';

import { signUp } from 'api/users';

import auth from 'screens/public/layouts/auth';

import CardForm from 'screens/public/Register/CardForm';
import AuthActionButtons from 'screens/public/components/AuthActionButtons';

function Register({ appContext: { actions }}) {


  async function handleSignUp({ email, password, passwordConfirmation }) {
    await signUp({  email, password, passwordConfirmation });
    actions.setLoading(true);
    actions.setIsAuthenticated(true);
    await actions.handleGetCurrentUser();
    navigate(routes.private.home.path);
    setTimeout(() => {
      actions.setLoading(false);
    }, 1000);
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
