import React from 'react';
import PropTypes from 'prop-types';

import auth from 'screens/public/layouts/auth';

import CardForm from 'screens/public/ForgotPassword/CardForm';
import AuthActionButtons from 'screens/public/components/AuthActionButtons';

function ForgotPassword(props) {
  return (
    <div>
      <CardForm />
      <AuthActionButtons />
    </div>
  );
}

ForgotPassword.propTypes = {};

export default auth(ForgotPassword);
