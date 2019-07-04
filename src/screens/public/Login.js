import React from 'react';
import PropTypes from 'prop-types';

import auth from 'screens/public/layouts/auth';

import CardForm from 'screens/public/Login/CardForm';
import AuthActionButtons from 'screens/public/components/AuthActionButtons';

function Login(props) {
  return (
    <div>
      <CardForm />
      <AuthActionButtons />
    </div>
  );
}

Login.propTypes = {};

export default auth(Login);
