import React from 'react';
import PropTypes from 'prop-types';

import auth from 'screens/public/layouts/auth';

import CardForm from 'screens/public/Register/CardForm';
import AuthActionButtons from 'screens/public/components/AuthActionButtons';

function Register(props) {
  return (
    <div>
      <CardForm />
      <AuthActionButtons />
    </div>
  );
}

Register.propTypes = {};

export default auth(Register);
