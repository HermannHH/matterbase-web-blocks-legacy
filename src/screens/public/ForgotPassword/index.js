import React from 'react';
import PropTypes from 'prop-types';

import { forgotPassword } from 'api/passwords';

import auth from 'screens/public/layouts/auth';

import CardForm from 'screens/public/ForgotPassword/CardForm';
import AuthActionButtons from 'screens/public/components/AuthActionButtons';

function ForgotPassword() {


  async function handleForgotPassword({ email }) {
    const data = await forgotPassword({  email  });
    console.log('sign in data', data)
  };

  return (
    <div>
      <CardForm handleForgotPassword={handleForgotPassword}/>
      <AuthActionButtons />
    </div>
  );
}

ForgotPassword.propTypes = {};

export default auth(ForgotPassword);
