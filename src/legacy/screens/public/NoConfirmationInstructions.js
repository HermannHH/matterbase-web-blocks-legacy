import React from 'react';
import PropTypes from 'prop-types';

import auth from 'screens/public/layouts/auth';

import CardForm from 'screens/public/NoConfirmationInstructions/CardForm';
import AuthActionButtons from 'screens/public/components/AuthActionButtons';

function NoConfirmationInstructions(props) {
  return (
    <div>
      <CardForm />
      <AuthActionButtons />
    </div>
  );
}

NoConfirmationInstructions.propTypes = {};

export default auth(NoConfirmationInstructions);
